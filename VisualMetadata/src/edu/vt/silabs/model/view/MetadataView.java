/*
 * @(#) ReceiverView.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.view;

import java.util.Dictionary;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.eclipse.core.commands.IHandler;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.action.IMenuListener;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.action.Separator;
import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TextCellEditor;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchActionConstants;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.part.ViewPart;
import org.eclipse.ui.texteditor.ITextEditor;
import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventConstants;
import org.osgi.service.event.EventHandler;
import org.eclipse.swt.events.MouseAdapter;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.RGB;

import edu.vt.silabs.contributions.ApplyAllContributionItem;
import edu.vt.silabs.contributions.RemoveContributionItem;
import edu.vt.silabs.contributions.UpdateContributionItem;
import edu.vt.silabs.handlers.MetadataApplyAllHandler;
import edu.vt.silabs.handlers.MetadataViewRemoveHandler;
import edu.vt.silabs.handlers.MetadataViewUpdateHandler;
import edu.vt.silabs.model.table.TableRow;
import edu.vt.silabs.model.table.TableRowGroup;
import ui.comm.Command;
import edu.vt.silabs.util.UtilMarker;

import ui.comm.MarkerManager;

/**
 * @author Myoungkyu Song
 * @date May 10, 2012
 * @since JDK1.6
 */
public class MetadataView extends ViewPart {
	private Text							message;
	private TableViewer					viewer;
	private boolean						isTable			= true;

	private Table							table;
	private final String					COL_SOURCE		= "Source File";
	private final String					COL_LINE			= "Line";
	private final String					COL_OFFSET		= "Offset";
	private final String					COL_METADATA	= "Metadata";
	private final String					COL_OBJ			= "Object Name";

	private String[]						columnNames		= new String[] { COL_SOURCE, COL_LINE, COL_OFFSET, COL_METADATA, COL_OBJ };
	private TableRowGroup				tableRowGroup	= null;
	private TableRow						tmpRow			= null;

	private IHandler						removeHandler, updateHandler, applyAllHandler;
	private RemoveContributionItem	removeContributionItem;
	private UpdateContributionItem	updateContributionItem;
	private ApplyAllContributionItem	applyAllContributionItem;

	public MetadataView() {}

	private Command	cmd	= new Command();

	@Override
	public void createPartControl(final Composite parent) {
		parent.setLayout(new FillLayout());
		createTable(parent);
		createTableViewer(parent);
		createContributions();
		createContextMenu();
		addEventListener(parent);
	}

	private void createContributions() {
		removeHandler = new MetadataViewRemoveHandler(viewer, tableRowGroup);
		removeContributionItem = new RemoveContributionItem(getViewSite(), removeHandler);
		updateHandler = new MetadataViewUpdateHandler(viewer, tableRowGroup);
		updateContributionItem = new UpdateContributionItem(getViewSite(), updateHandler);
		applyAllHandler = new MetadataApplyAllHandler(viewer, tableRowGroup);
		applyAllContributionItem = new ApplyAllContributionItem(getViewSite(), applyAllHandler);
	}

	void createContextMenu() {
		MenuManager menuMgr = new MenuManager("#PopupMenu");
		menuMgr.setRemoveAllWhenShown(true);
		menuMgr.addMenuListener(new IMenuListener() {
			public void menuAboutToShow(IMenuManager m) {
				MetadataView.this.fillContextMenu(m);
			}
		});
		Menu menu = menuMgr.createContextMenu(viewer.getControl());
		viewer.getControl().setMenu(menu);
		getSite().registerContextMenu(menuMgr, viewer);
	}

	private void fillContextMenu(IMenuManager menuMgr) {
		menuMgr.add(new Separator("edit"));
		menuMgr.add(removeContributionItem);
		menuMgr.add(updateContributionItem);
		menuMgr.add(applyAllContributionItem);
		menuMgr.add(new Separator(IWorkbenchActionConstants.MB_ADDITIONS));
	}

	// ----------------------

	void setFont() {
		Display display = Display.getCurrent();
		FontData fd = new FontData("Monospace", 10, SWT.NORMAL);
		Font font = new Font(display, fd);
		message.setForeground(new Color(display, new RGB(0, 0, 255)));
		message.setFont(font);
	}

	private void createTable(Composite parent) {
		int style = SWT.SINGLE | SWT.BORDER | SWT.H_SCROLL | SWT.V_SCROLL | SWT.FULL_SELECTION | SWT.HIDE_SELECTION;
		table = new Table(parent, style);

		GridData gridData = new GridData(GridData.FILL_BOTH);
		gridData.grabExcessVerticalSpace = true;
		gridData.horizontalSpan = 3;
		table.setLayoutData(gridData);

		table.setLinesVisible(true);
		table.setHeaderVisible(true);

		for (int i = 0; i < columnNames.length; i++) {
			TableColumn column = new TableColumn(table, SWT.LEFT, i);
			column.setText(columnNames[i]);
			if (i == 0)
				column.setWidth(70);
			else if (i == 1)
				column.setWidth(30);
			else if (i == 2)
				column.setWidth(30);
			else if (i == 3)
				column.setWidth(377);
			else if (i == 4)
				column.setWidth(37);
		}
		table.addListener(SWT.Selection, new Listener() {
			public void handleEvent(org.eclipse.swt.widgets.Event event) {
				TableRow tableRow = (TableRow) event.item.getData();
				tmpRow = tableRow;
				// String sp = tableRow.getOffset();
				// if (sp == null)
				// return;
				// int startPoint = Integer.valueOf(sp);
				// IEditorPart part = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage().getActiveEditor();
				// if (part instanceof ITextEditor) {
				// ITextEditor editor = (ITextEditor) part;
				// editor.setHighlightRange(startPoint, 1, true);
				// editor.setFocus();
				// }
			}
		});
		table.addMouseListener(new MouseAdapter() {
			public void mouseDoubleClick(MouseEvent e) {
				TableRow tableRow = tmpRow;
				String sp = tableRow.getOffset();
				if (sp == null)
					return;
				int startPoint = Integer.valueOf(sp);
				IEditorPart part = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage().getActiveEditor();
				if (part instanceof ITextEditor) {
					ITextEditor editor = (ITextEditor) part;
					editor.setHighlightRange(startPoint, 1, true);
					editor.setFocus();
				}
			}
		});
	}

	void createTableViewer(final Composite parent) {
		if (isTable)
			viewer = new TableViewer(table);
		else
			viewer = new TableViewer(parent);

		viewer.getTable().setHeaderVisible(true);
		viewer.getTable().setLinesVisible(true);

		if (isTable) {
			CellEditor[] editors = new CellEditor[columnNames.length];
			for (int i = 0; i < columnNames.length; i++) {
				TextCellEditor textEditor = new TextCellEditor(table);
				editors[i] = textEditor;
			}
			viewer.setCellEditors(editors);
			viewer.setLabelProvider(new TableLabelProvider());
			viewer.setContentProvider(new ContentProvider());
			initWorkgroup();
		}
		getSite().setSelectionProvider(viewer);
	}

	class DataBuf {
		public String	cur_data;
		public String	prv_data;
	}

	DataBuf	dataBuf	= new DataBuf();

	/** @METHOD */
	void addEventListener(final Composite parent) {
		BundleContext ctx = FrameworkUtil.getBundle(MetadataView.class).getBundleContext();
		EventHandler handler = new EventHandler() {
			public void handleEvent(final Event event) {
				if (parent.getDisplay().getThread() == Thread.currentThread()) {
					dataBuf.cur_data = event.getProperty("DATA").toString().trim();
					String data[] = dataBuf.cur_data.split("\\$");

					if (data[0].equals(cmd.ADD_ROW)) {
						dataBuf.prv_data = dataBuf.cur_data;
						command_add(data);
					}
					else if (data[0].equals(cmd.REMOVE_ROW)) {
						command_remove(data);
					}
					else if (data[0].equals(cmd.UPDATE_LATEST_ROW)) {
						command_update_latest(data);
					}
					else if (data[0].equals(cmd.UPDATE_ALL_ROW)) {
						try {
							command_update_allrows();
						} catch (Exception e) {}
					}
				}
				else {
					parent.getDisplay().syncExec(new Runnable() {
						public void run() {
							// viewer.add(event.getProperty("DATA"));
						}
					});
				}
			}
		};
		Dictionary<String, String> properties = new Hashtable<String, String>();
		properties.put(EventConstants.EVENT_TOPIC, "viewcommunication/*");
		ctx.registerService(EventHandler.class.getName(), handler, properties);
	}

	/** @METHOD */
	@SuppressWarnings("unused")
	void command_add(String data[]) {
		for (int i = 1; i < data.length && data.length >= columnNames.length; i += columnNames.length) {
			TableRow row = new TableRow(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
			add(row);
			break;
		}
	}

	/** @METHOD */
	private void command_remove(String data[]) {
		for (int i = 0; i < tableRowGroup.rowList.size(); i++) {
			TableRow row = tableRowGroup.rowList.get(i);
			if (row.getLine().equals(data[2]) && row.getOffset().equals(data[3])) {
				remove(row);
				break;
			}
		}
		this.viewer.refresh();
	}

	/** @METHOD */
	@SuppressWarnings("unused")
	void command_update_latest(String[] data) {
		String metadata = data[4];
		String prv_data[] = dataBuf.prv_data.split("\\$");
		for (int i = 1; i < prv_data.length && prv_data.length >= columnNames.length; i += columnNames.length) {
			TableRow row = new TableRow(prv_data[i], prv_data[i + 1], prv_data[i + 2], metadata, prv_data[i + 4]);
			update(row);
			String kiss[] = { row.getSource(), row.getLine(), row.getOffset() };
			IMarker marker = MarkerManager.getMarkerManager().get(UtilMarker.getKey_marker(kiss));
			try {
				marker.setAttribute(IMarker.MESSAGE, metadata);
			} catch (CoreException e) {
				e.printStackTrace();
			}
			break;
		}
	}

	/** @METHOD */
	void command_update_allrows() throws Exception {
		System.out.println("[DBG] UPDATE_ALL_ROW");
		List<TableRow> rowList = tableRowGroup.getRowList();
		for (int i = 0; i < rowList.size(); i++) {
			TableRow elem = rowList.get(i);
			elem = getUpdatedTableRow(elem);
			update(elem);
			// System.out.println(elem);
			// String src = elem.getSource();
			// Integer lineNum = Integer.valueOf(elem.getLine());
			// Integer offSet = Integer.valueOf(elem.getOffset());

		}
		// System.out.println("------------------------------------------");
	}

	/** @METHOD */
	TableRow getUpdatedTableRow(TableRow oldElem) {
		try {
			MarkerManager mngr = MarkerManager.getMarkerManager();
			HashMap<String, IMarker> markerMap = mngr.getMarkerMap();

			for (Map.Entry<String, IMarker> e : markerMap.entrySet()) {
				String[] oldInfo = e.getKey().split(":");
				String oldInfo_src = oldInfo[0].trim();
				String oldInfo_lineNum = oldInfo[1].trim();
				String oldInfo_offSet = oldInfo[2].trim();

				if (oldInfo_src.equals(oldElem.getSource()) && //
						oldInfo_lineNum.equals(oldElem.getLine()) && //
						oldInfo_offSet.equals(oldElem.getOffset())) {

					String newInfo_src = oldInfo_src;
					String newInfo_lineNum = String.valueOf(e.getValue().getAttribute(IMarker.LINE_NUMBER));
					String newInfo_offSet = String.valueOf(e.getValue().getAttribute(IMarker.CHAR_START));
					oldElem.setLine(newInfo_lineNum);
					oldElem.setOffset(newInfo_offSet);

					mngr.update(oldInfo_src, oldInfo_lineNum, oldInfo_offSet,//
							newInfo_src, newInfo_lineNum, newInfo_offSet);
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return oldElem;
	}

	/** @METHOD */
	@Override
	public void setFocus() {
		viewer.getTable().setFocus();
	}

	/** @METHOD */
	@SuppressWarnings("unused")
	private void showText(Object obj) {
		String text = (String) obj;
		if (text == null) {
			message.setText("");
			return;
		}
		if (text.isEmpty())
			return;
		message.setText(text);

	}

	/** @METHOD */
	private void initWorkgroup() {
		TableRowGroup w = new TableRowGroup();
		this.setWorkgroup(w);
	}

	/** @METHOD */
	private void add(TableRow row) {
		tableRowGroup.add(row);
		this.viewer.add(row);
		this.viewer.refresh();
	}

	/** @METHOD */
	@SuppressWarnings("unused")
	private void removeAll() {
		int sz = tableRowGroup.rowList.size();
		while (sz != 0) {
			TableRow row = tableRowGroup.rowList.get(sz - 1);
			remove(row);
			sz = tableRowGroup.rowList.size();
		}
		this.viewer.refresh();
	}

	/** @METHOD */
	private void remove(TableRow row) {
		tableRowGroup.remove(row);
		this.viewer.remove(row);
	}

	/** @METHOD */
	private void update(TableRow row) {
		tableRowGroup.update(row);
		this.viewer.refresh();
	}

	/** @METHOD */
	public void setWorkgroup(TableRowGroup workgroup) {
		this.tableRowGroup = workgroup;
		this.viewer.setInput(workgroup);
	}

	/** @METHOD */
	private class TableLabelProvider extends LabelProvider implements ITableLabelProvider {
		public Image getColumnImage(Object element, int columnIndex) {
			return null;
		}

		public String getColumnText(Object element, int columnIndex) {
			TableRow p = (TableRow) element;
			String result = "";
			switch (columnIndex) {
			case 0:
				result = p.getSource();
				break;
			case 1:
				result = p.getLine();
				break;
			case 2:
				result = p.getOffset();
				break;
			case 3:
				result = p.getMetadata();
				break;
			case 4:
				result = p.getObj();
				break;
			default:
				result = "";
			}
			return result;
		}
	}

	/** @METHOD */
	private static class ContentProvider implements IStructuredContentProvider {
		public Object[] getElements(Object inputElement) {
			TableRowGroup w = (TableRowGroup) inputElement;
			return w.getRowList().toArray();
		}

		public void dispose() {}

		public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {}
	}
}

// class ReceiverView extends ViewPart {
// private TableViewer viewer;
//
// @Override
// public void createPartControl(final Composite parent) {
// parent.setLayout(new FillLayout());
// viewer = new TableViewer(parent);
// viewer.getTable().setHeaderVisible(true);
// viewer.getTable().setLinesVisible(true);
// viewer.setLabelProvider(new ColumnLabelProvider() {
// public String getText(Object element) {
// return DateFormat.getDateTimeInstance().format(element);
// }
// });
//
// BundleContext ctx = FrameworkUtil.getBundle(ReceiverView.class).getBundleContext();
// EventHandler handler = new EventHandler() {
// public void handleEvent(final Event event) {
// if (parent.getDisplay().getThread() == Thread.currentThread()) {
// viewer.add(event.getProperty("DATA"));
// }
// else {
// parent.getDisplay().syncExec(new Runnable() {
// public void run() {
// viewer.add(event.getProperty("DATA"));
// }
// });
// }
// }
// };
//
// Dictionary<String, String> properties = new Hashtable<String, String>();
// properties.put(EventConstants.EVENT_TOPIC, "viewcommunication/*");
// ctx.registerService(EventHandler.class.getName(), handler, properties);
// }
//
// @Override
// public void setFocus() {
// viewer.getTable().setFocus();
// }
// }

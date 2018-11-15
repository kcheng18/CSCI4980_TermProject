/*
 * @(#) MetadataViewUpdateHandler.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.handlers;

import java.io.File;
import java.util.List;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.handlers.HandlerUtil;
import org.eclipse.ui.texteditor.ITextEditor;

import ui.comm.Command;
import ui.comm.MarkerManager;
import util.UtilEvent;
import util.UtilStr;

import edu.vt.silabs.comm.Property;
import edu.vt.silabs.event.EventManager;
import edu.vt.silabs.event.IEvent;
import edu.vt.silabs.model.editor.JSEditor_AddMetadata;
import edu.vt.silabs.model.editor.MarkerLocation;
import edu.vt.silabs.model.table.TableRow;
import edu.vt.silabs.model.table.TableRowGroup;
import edu.vt.silabs.model.view.MetadataView;
import edu.vt.silabs.util.UtilAST_JS;
import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.UtilMarker;
import edu.vt.silabs.util.jsast.ASTVisitor_JS;
import edu.vt.silabs.util.jsast.NodeMngr;
import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Jul 18, 2012
 * @since JDK1.6
 */
public class MetadataApplyAllHandler extends AbstractHandler implements IEvent {
	private final String			MARKER_ID	= "com.qualityeclipse.favorites.auditmarker";
	public static final String	KEY			= "key";
	public static final String	VIOLATION	= "violation";

	IEditorPart						editor;
	MetadataView					metadataView;
	TableViewer						viewer;
	TableRowGroup					tableRowGroup;
	TableRow							selectedRow;
	MarkerLocation					loc			= new MarkerLocation();

	public MetadataApplyAllHandler(TableViewer viewer, TableRowGroup tableRowGroup) {
		this.viewer = viewer;
		this.tableRowGroup = tableRowGroup;
		EventManager.getMngr().add(this);
	}

	public MetadataApplyAllHandler() {}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		editor = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage().getActiveEditor();
		ISelection selection = HandlerUtil.getCurrentSelection(event);

		if (selection instanceof IStructuredSelection) {
			selectedRow = ((TableRow) (((IStructuredSelection) selection).getFirstElement()));
			System.out.println("[DBG]" + selectedRow);

			String selectedText = null;
			ISelectionProvider selectionProvider = ((ITextEditor) editor).getSelectionProvider();
			ISelection text_selection = selectionProvider.getSelection();
			ITextSelection textSelection = (ITextSelection) text_selection;
			selectedText = textSelection.getText();

			System.out.println("------------------------------------------");
			System.out.println(selectedText);
			System.out.println("------------------------------------------");

			int selected_bgn_ch = textSelection.getOffset();
			int selected_end_ch = textSelection.getLength() + selected_bgn_ch + 1;
			getDeclaredVar(selectedText, selected_bgn_ch, selected_end_ch);
		}
		return null;
	}

	/** @METHOD */
	void getDeclaredVar(String selectedText, int selected_bgn_ch, int selected_end_ch) {
		String file_name = getFullPath();
		ASTVisitor_JS visitor = UtilAST_JS.getJSVisitor(file_name, UtilFile.fileRead(new File(file_name)));
		SrcNode srcNode = visitor.getSrcNode();
		NodeMngr.addSrcNode(srcNode);
		FuncNode funcNode = NodeMngr.getFunc(selected_bgn_ch, selected_end_ch);
		List<VarNode> varDeclared = NodeMngr.getVars(selected_bgn_ch, selected_end_ch);

		for (VarNode varNode : varDeclared) {
			getSelectedTextWithContextMenu(funcNode, varNode);
			addRowToTable();
		}
	}

	/** @METHOD */
	void getSelectedTextWithContextMenu(FuncNode funcNode, VarNode varNode) {
		String file_name = getFullPath();
		loc.file = ((IFileEditorInput) (editor.getEditorInput())).getFile();
		loc.selected = varNode.getName();
		loc.startLine = UtilFile.getLineNum(file_name, varNode.getLoc());
		loc.charStart = varNode.getLoc();
		loc.charEnd = varNode.getLoc() + varNode.getName().length();

		Property p = new Property();
		Property.set(p.sel_var_offset, String.valueOf(loc.charStart));
		Property.set(p.sel_var_line, String.valueOf(loc.startLine));
		Property.set(p.sel_var_name, loc.selected);
		Property.set(p.sel_fun_name, funcNode.getName());
		Property.set(p.sel_short_file, loc.file.getName());
		Property.set(p.sel_long_file, file_name);
	}

	/** @METHOD */
	void addRowToTable() {
		String dataToSend = getDataToSend();
		UtilEvent.sendEvent(JSEditor_AddMetadata.class, dataToSend);
		createMarker(dataToSend);
	}

	/** @METHOD */
	void createMarker(String dataToSend) {
		String[] buf = dataToSend.split("\\$");
		try {
			IMarker marker = loc.file.createMarker(MARKER_ID);
			marker.setAttribute(IMarker.MESSAGE, buf[4]);
			marker.setAttribute(IMarker.CHAR_START, loc.charStart);
			marker.setAttribute(IMarker.CHAR_END, loc.charEnd);
			marker.setAttribute(IMarker.LINE_NUMBER, loc.startLine);
			marker.setAttribute(IMarker.SEVERITY, IMarker.SEVERITY_INFO);
			marker.setAttribute(KEY, loc.selected);
			marker.setAttribute(VIOLATION, 1);
			MarkerManager.getMarkerManager().put(//
			UtilMarker.getKey_marker(loc), marker);
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
	}

	/** @METHOD */
	String getDataToSend() {
		Command cmd = new Command();
		StringBuilder buf = new StringBuilder();
		buf.append(cmd.ADD_ROW + "$");
		buf.append(loc.file.getName() + "$");
		buf.append(loc.startLine + "$");
		buf.append(loc.charStart + "$");
		buf.append(getMetadata() + "$");
		buf.append(loc.selected);
		return buf.toString();
	}

	public static void main(String[] args) {
		MetadataApplyAllHandler m = new MetadataApplyAllHandler();
		System.out.println("[DBG]" + m.getMetadata());
	}

	/** @METHOD */
	public String getMetadata() {
		String variable = loc.selected; // id
		String metadata = this.selectedRow.getMetadata(); // @Persist(key="key_failedCheck", value="failedCheck")
		String obj = this.selectedRow.getObj(); // failedCheck
		String result = getAnnotationType(metadata) + "(";

		String attrStr = UtilStr.getStrBetween2(metadata, "(", ")");
		String[] attrs = attrStr.split(",");
		for (String attr : attrs) {
			attr = attr.trim();
			attr = attr.replace("\"", "");

			String _key = attr.split("=")[0];
			String _val = attr.split("=")[1];

			String pattern = getPattern(obj, _val);
			result += (_key + " = \"" + pattern + "\", ");
		}
		result = result.trim().substring(0, result.length() - 2);
		result = result.replace("$variable$", variable);
		return result + ")";
	}

	/** @METHOD */
	String getPattern(String str1, String str2) {
		if (str2.endsWith(str1))
			return str2.replace(str1, "") + "$variable$";
		else if (str2.equals(str1))
			return "$variable$";
		return null;
	}

	/** @METHOD */
	String getAnnotationType(String metadata) {
		int idx = metadata.indexOf("(");
		return metadata.substring(0, idx).trim();
	}

	/** @METHOD */
	String getFullPath() {
		String p = getProjectPath();
		String f = getFilePathInProject();
		return p + f;
	}

	/** @METHOD */
	String getFilePathInProject() {
		return ((IFileEditorInput) (editor.getEditorInput())).getFile().getFullPath().toString();
	}

	/** @METHOD */
	String getProjectPath() {
		return ResourcesPlugin.getWorkspace().getRoot().getLocation().toFile().getAbsolutePath().toString();
	}

	@Override
	public void send(String key) {
		// TODO Auto-generated method stub
	}

	@Override
	public void receive(String key) {
		// TODO Auto-generated method stub
	}
}

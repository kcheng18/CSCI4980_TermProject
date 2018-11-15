/*
 * @(#) JSEditor_AddBlockMetadata.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.editor;

import java.io.File;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.ui.IEditorActionDelegate;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.actions.ActionDelegate;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.texteditor.ITextEditor;

import util.UtilEventSender;

import edu.vt.silabs.comm.Property;
import edu.vt.silabs.util.UtilAST_JS;
import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.jsast.ASTVisitor_JS;
import edu.vt.silabs.util.jsast.NodeMngr;
import edu.vt.silabs.util.jsast.node.SrcNode;

/**
 * @author Myoungkyu Song
 * @date Jul 27, 2012
 * @since JDK1.6
 */
public class JSEditor_SyncMetadata extends ActionDelegate implements IEditorActionDelegate {
	@SuppressWarnings("unused")
	private final String			MARKER_ID					= "com.qualityeclipse.favorites.auditmarker";
	public static final int		MISSING_KEY_VIOLATION	= 1;
	public static final int		UNUSED_KEY_VIOLATION		= 2;

	private IWorkbenchWindow	window;
	private IEditorPart			editor;

	private MarkerLocation		loc							= new MarkerLocation();
	public static final String	KEY							= "key";
	public static final String	VIOLATION					= "violation";

	/** @METHOD */
	public void run(IAction action) {
		System.out.println("[DBG] JSEditor_SyncMetadata");
		UtilEventSender eClient = new UtilEventSender();

		// loc.file = ((IFileEditorInput) (editor.getEditorInput())).getFile();
		// HashMap<String, IMarker> markerMap = MarkerManager.getMarkerManager().getMarkerMap();
		// for (Map.Entry<String, IMarker> e : markerMap.entrySet()) {
		// System.out.println(e.getKey() + ": " + e.getValue());
		// IMarker marker = e.getValue();
		// try {
		// } catch (Exception e1) {
		// e1.printStackTrace();
		// }
		// }
		eClient.send_view_allupdate();
		// getSelectedTextWithContextMenu();
		// parse();
		// openJavaEditor();
	}

	/** @METHOD */
	@Override
	public void setActiveEditor(IAction action, IEditorPart targetEditor) {
		window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
		editor = targetEditor;
	}

	/** @METHOD */
	void parse() {
		parse_javascript(get_js_file());
		display_file_contents(UtilFile.fileRead(new File(getProjectPath() + get_js_file())));
		displayAllAST();
	}

	void openJavaEditor() {
		if (window == null)
			return;
		IWorkbenchPage page = window.getActivePage();
		if (page == null)
			return;
		try {
			getSelectedTextWithContextMenu();
			// openJavaEditor(getSelectedTextWithContextMenu(), page);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/** @METHOD */
	String getSelectedTextWithContextMenu() {
		String selectedText = null;
		ISelectionProvider selectionProvider = ((ITextEditor) editor).getSelectionProvider();
		ISelection selection = selectionProvider.getSelection();
		if (selection instanceof ITextSelection) {
			ITextSelection textSelection = (ITextSelection) selection;
			selectedText = textSelection.getText();
			loc.file = ((IFileEditorInput) (editor.getEditorInput())).getFile();
			loc.selected = selectedText;
			loc.startLine = textSelection.getStartLine();
			loc.charStart = textSelection.getOffset();
			loc.charEnd = textSelection.getOffset() + textSelection.getLength();
			int bgn_ln_blk = 0, end_ln_blk = 0;
			String file_path = getProjectPath() + "/" + loc.file.getFullPath().toOSString();
			bgn_ln_blk = UtilFile.getLineNum(file_path, loc.charStart);
			end_ln_blk = UtilFile.getLineNum(file_path, loc.charEnd);
			System.out.println("[DBG] bgn line: " + bgn_ln_blk + ", end line: " + end_ln_blk);

		}
		return selectedText;
	}

	/** @METHOD */
	void openJavaEditor(String selectedText, IWorkbenchPage page) throws Exception {
		setSystemProporties();
		Property p = new Property();
		String fun_name = Property.get(p.sel_fun_name);
		String var_name = Property.get(p.sel_var_name);
		String dummy_code = "// functioin name: " + fun_name + " " + "\n" + //
				"{" + "\n" + //
				var_name + "\n" + //
				"}";
		String java_project = "JavaEditor";
		String java_file = "src/MetadataChecker.java";
		IProject project = ResourcesPlugin.getWorkspace().getRoot().getProject(java_project);
		IFile file_in_project = project.getFile(java_file);
		String full_path = project.getWorkspace().getRoot().getLocation().toFile().getAbsolutePath() + //
				file_in_project.getFullPath().toFile().getAbsolutePath();
		UtilFile.fileWrite(full_path, dummy_code);
		IDE.openEditor(page, file_in_project, true);
		file_in_project.refreshLocal(IResource.DEPTH_ZERO, null);
	}

	/** @METHOD */
	private void setSystemProporties() {
		Property p = new Property();
		Property.set(p.sel_var_offset, String.valueOf(loc.charStart));
		Property.set(p.sel_var_line, String.valueOf(loc.startLine));
		Property.set(p.sel_var_name, loc.selected);
		Property.set(p.sel_fun_name, ""); // NodeMngr.getFunc(loc.selected));
		Property.set(p.sel_short_file, loc.file.getName());
		Property.set(p.sel_long_file, loc.file.getFullPath().toFile().getAbsolutePath());
	}

	/** @METHOD */
	void parse_javascript(String js_file_name) {
		ASTVisitor_JS visitor = UtilAST_JS.getJSVisitor(js_file_name, //
				UtilFile.fileRead(new File(getProjectPath() + js_file_name)));
		SrcNode srcNode = visitor.getSrcNode();
		NodeMngr.addSrcNode(srcNode);
	}

	/** @METHOD */
	IProject get_js_project() {
		return ((IFileEditorInput) (editor.getEditorInput())).getFile().getProject();
	}

	/** @METHOD */
	String get_js_file() {
		return ((IFileEditorInput) (editor.getEditorInput())).getFile().getFullPath().toString();
	}

	/** @METHOD */
	String getProjectPath() {
		return ResourcesPlugin.getWorkspace().getRoot().getLocation().toFile().getAbsolutePath().toString();
	}

	/** @METHOD */
	void display_file_contents(String jsfile_contents) {
		System.out.println("==========================================");
		System.out.println(jsfile_contents);
		System.out.println("------------------------------------------");
	}

	/** @METHOD */
	void displayAllAST() {
		List<SrcNode> srcNodeList = NodeMngr.getSrcNodeList();
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode elem = srcNodeList.get(i);
			System.out.println(elem);
		}
	}
}

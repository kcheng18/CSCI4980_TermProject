/*
 * @(#) EditorAction1Delegate.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.editor;

import java.io.File;
import java.util.List;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
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
import edu.vt.silabs.comm.Property;
import ui.comm.Command;
import edu.vt.silabs.util.UtilEvent;
import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.UtilAST_JS;
import edu.vt.silabs.util.UtilMarker;
import edu.vt.silabs.util.jsast.ASTVisitor_JS;
import edu.vt.silabs.util.jsast.NodeMngr;
import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import ui.comm.MarkerManager;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 * https://speed.cs.vt.edu/svn/metadataAspect/trunk/code/visual_metadata
 */
public class JSEditor_AddMetadata extends ActionDelegate implements IEditorActionDelegate {

	private final String			MARKER_ID					= "com.qualityeclipse.favorites.auditmarker";
	public static final int		MISSING_KEY_VIOLATION	= 1;
	public static final int		UNUSED_KEY_VIOLATION		= 2;

	private IWorkbenchWindow	window;
	private IEditorPart			editor;
	private Integer				curCursor;

	private MarkerLocation		loc							= new MarkerLocation();
	public static final String	KEY							= "key";
	public static final String	VIOLATION					= "violation";

	/** @METHOD */
	public void run(IAction action) {
		getSelectedTextWithContextMenu();
		UtilEvent.sendEvent(JSEditor_AddMetadata.class, getDataToSend());
		createMarker();
		parse();
		getSelectedTextWithContextMenu();
		setSystemProporties();
		try {
			openJavaEditor();
		} catch (Exception e) {}
	}

	/** @METHOD */
	public void setActiveEditor(IAction action, IEditorPart targetEditor) {
		window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
		editor = targetEditor;
		deleteAuditMarkers(get_js_project());
	}

	/** @METHOD */
	String getDataToSend() {
		Command cmd = new Command();
		StringBuilder buf = new StringBuilder();
		buf.append(cmd.ADD_ROW + "$");
		buf.append(loc.file.getName() + "$");
		buf.append(loc.startLine + "$");
		buf.append(loc.charStart + "$");
		buf.append("" + "$"); // empty annotation.
		buf.append(loc.selected);
		return buf.toString();
	}

	/** @METHOD */
	void createMarker() {
		try {
			IMarker marker = loc.file.createMarker(MARKER_ID);
			marker.setAttribute(IMarker.MESSAGE, "Annotated: " + loc.selected);
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
	void parse() {
		parse_javascript(get_js_file());
		display_file_contents(UtilFile.fileRead(new File(getProjectPath() + get_js_file())));
		displayAllAST();
	}

	/** @METHOD */
	boolean deleteAuditMarkers(IProject project) {
		try {
			project.deleteMarkers(MARKER_ID, false, IResource.DEPTH_INFINITE);
			return true;
		} catch (Exception e) {
			System.out.println("[Exception] deleteAuditMarkers(IProject project)");
			return false;
		}
	}

	/** @METHOD */
	void parse_javascript(String js_file_name) {
		String path = getProjectPath(); // /home/mksong/workspace/runtime-VisualMetadata
		path = path + js_file_name; // /JavaScriptProject

		ASTVisitor_JS visitor = UtilAST_JS.getJSVisitor(path, //
				UtilFile.fileRead(new File(path)));
		SrcNode srcNode = visitor.getSrcNode();
		NodeMngr.addSrcNode(srcNode);
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
			loc.startLine = (textSelection.getStartLine() + 1);
			loc.charStart = textSelection.getOffset();
			loc.charEnd = textSelection.getOffset() + textSelection.getLength();
		}
		return selectedText;
	}

	/** @METHOD */
	void openJavaEditor() {
		final String java_project = "JavaEditor";
		final String java_file = "src/Annotator.java";

		IWorkbenchPage page = window.getActivePage();

		Property p = new Property();
		String fun_name = Property.get(p.sel_fun_name);
		String var_name = Property.get(p.sel_var_name);

		IProject project = ResourcesPlugin.getWorkspace().getRoot().getProject(java_project);
		IFile fileInProject = project.getFile(java_file);
		String fullPath = getFullPath(project, fileInProject);
		String javaCode = getCode4JavaEditor(fun_name, var_name);
		UtilFile.fileWrite(fullPath, javaCode); // dummy_code);
		try {
			IEditorPart ed = IDE.openEditor(page, fileInProject, true);
			fileInProject.refreshLocal(IResource.DEPTH_ZERO, null);
			((ITextEditor) ed).setHighlightRange(this.curCursor, 1, true);
		} catch (Exception e) {}
	}

	/** @METHOD */
	String getCode4JavaEditor(String fun_name, String var_name) {
		final String prefix_class = "f_";
		final String prefix_field = "v_";
		final String n = "\n";
		final String t = "   ";
		Integer idt = 100;

		StringBuilder buf = new StringBuilder();
		buf.append("class " + prefix_class + fun_name + " {}" + n);
		buf.append("class Annotator {" + n);

		for (int i = 0; i < idt; i++)
			buf.append(n);

		this.curCursor = buf.length();

		buf.append(t + "// Enter annotation for variable '" + var_name + "'" + n);
		buf.append(t + "// in function '" + fun_name + "'." + n);

		for (int i = 0; i < 100; i++)
			buf.append(n);

		buf.append(t + prefix_class + fun_name + " " + prefix_field + var_name + ";" + n);
		buf.append(t + "/** This Java declaration encodes JavaScript" + n);
		buf.append(t + " * code below: " + n);
		buf.append(t + " * <p><code><pre> " + n);
		buf.append(t + " * function " + fun_name + " {" + n);
		buf.append(t + " *    var " + var_name + ";" + n);
		buf.append(t + " * }" + n);
		buf.append(t + " * </pre></code>" + n);
		buf.append(t + " */" + n);
		buf.append("}");
		return buf.toString();
	}

	/** @METHOD */
	String getFullPath(IProject project, IFile file_in_project) {
		String full_path = project.getWorkspace().getRoot().getLocation().toFile().getAbsolutePath() + //
				file_in_project.getFullPath().toFile().getAbsolutePath();
		return full_path;
	}

	/** @METHOD */
	private void setSystemProporties() {
		Property p = new Property();
		Property.set(p.sel_var_offset, String.valueOf(loc.charStart));
		Property.set(p.sel_var_line, String.valueOf(loc.startLine));
		Property.set(p.sel_var_name, loc.selected);
		if (isFunction()) {
			Property.set(p.sel_fun_name, loc.selected);
		}
		else {
			Property.set(p.sel_fun_name, NodeMngr.getFunc(loc.selected));
		}
		Property.set(p.sel_short_file, loc.file.getName());
		Property.set(p.sel_long_file, loc.file.getFullPath().toFile().getAbsolutePath());
	}

	/** @METHOD */
	private boolean isFunction() {
		List<SrcNode> srcNodeList = NodeMngr.getSrcNodeList();
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode srcNode = srcNodeList.get(i);
			List<FuncNode> funcNodeList = srcNode.funcNodeList;
			for (int j = 0; j < funcNodeList.size(); j++) {
				FuncNode funcNode = funcNodeList.get(j);
				if (loc.selected.equals(funcNode.getName())) {
					return true;
				}
			}
		}
		return false;
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

	/** @METHOD */
	IProject get_js_project() {
		IProject iprj = null;
		try {
			iprj = ((IFileEditorInput) (editor.getEditorInput())).getFile().getProject();
		} catch (Exception e) {
			System.out.println("((IFileEditorInput) (editor.getEditorInput())).getFile().getProject()\n\n\n");
		}
		return iprj;
	}

	/** @METHOD */
	String get_js_file() {
		return ((IFileEditorInput) (editor.getEditorInput())).getFile().getFullPath().toString();
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

	// /** @METHOD */
	// private void openJavaEditor() {
	// if (window == null)
	// return;
	// IWorkbenchPage page = window.getActivePage();
	// if (page == null)
	// return;
	// try {
	// openJavaEditor(page);
	// } catch (Exception e) {
	// e.printStackTrace();
	// }
	// }
}

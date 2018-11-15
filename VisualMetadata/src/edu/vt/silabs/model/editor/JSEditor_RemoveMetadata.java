/*
 * @(#) JSEditor_RemoveMetadata.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.editor;

import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.ui.IEditorActionDelegate;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.actions.ActionDelegate;
import org.eclipse.ui.texteditor.ITextEditor;

import edu.vt.silabs.event.EventManager;
import edu.vt.silabs.event.IEvent;
import ui.comm.Command;
import edu.vt.silabs.util.UtilEvent;
import edu.vt.silabs.util.UtilMarker;

import ui.comm.MarkerManager;

/**
 * @author Myoungkyu Song
 * @date Jul 13, 2012
 * @since JDK1.6
 */
public class JSEditor_RemoveMetadata extends ActionDelegate implements IEditorActionDelegate, IEvent {
	private IEditorPart	editor;

	public JSEditor_RemoveMetadata() {
		EventManager.getMngr().add(this);
	}

	private MarkerLocation	loc	= new MarkerLocation();

	/** @METHOD */
	public void run(IAction action) {
		getSelectedTextWithContextMenu();
		UtilEvent.sendEvent(JSEditor_RemoveMetadata.class, getDataToSend());
		removeMarker();
	}

	/** @METHOD */
	public void setActiveEditor(IAction action, IEditorPart targetEditor) {
		editor = targetEditor;
	}

	/** @METHOD */
	void removeMarker() {
		IMarker check_marker = MarkerManager.getMarkerManager().get( //
		UtilMarker.getKey_marker(loc));
		if (check_marker != null) {
			try {
				check_marker.delete();
			} catch (CoreException e) {
				e.printStackTrace();
			}
		}
	}

	/** @METHOD */
	void removeMarker(IMarker check_marker) {
		if (check_marker != null) {
			try {
				check_marker.delete();
			} catch (CoreException e) {
				e.printStackTrace();
			}
		}
	}

	/** @METHOD */
	String getDataToSend() {
		Command cmd = new Command();
		StringBuilder buf = new StringBuilder();
		buf.append(cmd.REMOVE_ROW + "$");
		buf.append(loc.file.getName() + "$");
		buf.append(loc.startLine + "$");
		buf.append(loc.charStart + "$");
		buf.append("Tagged - " + loc.selected);
		return buf.toString();
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
		}
		return selectedText;
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

	@Override
	public void send(String key) {}

	@Override
	public void receive(String key) {
		IMarker check_marker = MarkerManager.getMarkerManager().get(key);
		removeMarker(check_marker);
	}
}

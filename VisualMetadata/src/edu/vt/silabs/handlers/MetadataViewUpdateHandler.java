/*
 * @(#) MetadataViewUpdateHandler.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.handlers;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.handlers.HandlerUtil;
import org.eclipse.ui.ide.IDE;

import edu.vt.silabs.event.EventManager;
import edu.vt.silabs.event.IEvent;
import edu.vt.silabs.model.table.TableRow;
import edu.vt.silabs.model.table.TableRowGroup;
import edu.vt.silabs.model.view.MetadataView;
import edu.vt.silabs.util.UtilFile;

/**
 * @author Myoungkyu Song
 * @date Jul 18, 2012
 * @since JDK1.6
 */
public class MetadataViewUpdateHandler extends AbstractHandler implements IEvent {
	MetadataView	metadataView;
	TableViewer		viewer;
	TableRowGroup	tableRowGroup;

	public MetadataViewUpdateHandler(TableViewer viewer, TableRowGroup tableRowGroup) {
		this.viewer = viewer;
		this.tableRowGroup = tableRowGroup;
		EventManager.getMngr().add(this);
	}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		ISelection selection = HandlerUtil.getCurrentSelection(event);
		if (selection instanceof IStructuredSelection) {
			TableRow row = ((TableRow) (((IStructuredSelection) selection).getFirstElement()));

			IWorkbenchPage page = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage();

			String DUMMY_CLASS = "class ___TEMPLATE_HELP_CLASS__ {}";
			String java_project = "JavaEditor";
			String java_file = "src/MetadataChecker.java";

			IProject project = ResourcesPlugin.getWorkspace().getRoot().getProject(java_project);
			IFile file_in_project = project.getFile(java_file);
			String full_path = project.getWorkspace().getRoot().getLocation().toFile().getAbsolutePath() + //
					file_in_project.getFullPath().toFile().getAbsolutePath();
			String format_str = "// Enter Your Metadata Annotation For '%s' On The Next Line.";
			String text_to_insert = String.format(format_str, row.getMetadata());
			StringBuilder buf = new StringBuilder();
			buf.append(text_to_insert + "\n");
			buf.append(row.getMetadata());
			for (int i = 0; i < 1114; i++)
				buf.append("\n");
			buf.append(DUMMY_CLASS);
			UtilFile.fileWrite(full_path, buf.toString());
			try {
				IDE.openEditor(page, file_in_project, true);
				file_in_project.refreshLocal(IResource.DEPTH_ZERO, null);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
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

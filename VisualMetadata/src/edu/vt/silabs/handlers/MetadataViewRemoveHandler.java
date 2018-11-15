/*
 * @(#) RemoveFavoritesHandler.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.handlers;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.ui.handlers.HandlerUtil;

import edu.vt.silabs.event.EventManager;
import edu.vt.silabs.event.IEvent;
import edu.vt.silabs.model.table.TableRow;
import edu.vt.silabs.model.table.TableRowGroup;
import edu.vt.silabs.model.view.MetadataView;

/**
 * @author Myoungkyu Song
 * @date Jul 13, 2012
 * @since JDK1.6
 */
public class MetadataViewRemoveHandler extends AbstractHandler implements IEvent {
	MetadataView	metadataView;
	TableViewer		viewer;
	TableRowGroup	tableRowGroup;

	public MetadataViewRemoveHandler(TableViewer viewer, TableRowGroup tableRowGroup) {
		this.viewer = viewer;
		this.tableRowGroup = tableRowGroup;
		EventManager.getMngr().add(this);
	}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		ISelection selection = HandlerUtil.getCurrentSelection(event);
		if (selection instanceof IStructuredSelection) {
			TableRow row = ((TableRow) (((IStructuredSelection) selection).getFirstElement()));
			this.viewer.remove(row);
			this.tableRowGroup.remove(row);
			send(getKey_marker(row));
		}
		return null;
	}

	@Override
	public void send(String key) {
		EventManager.getMngr().fired(this, key);
	}

	@Override
	public void receive(String key) {}

	String getKey_marker(TableRow r) {
		return r.getSource() + ":" + r.getLine() + ":" + r.getOffset();
	}
}

/*
 * @(#) UpdateContributionItem.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.contributions;

import java.util.Collections;

import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.commands.IHandler;
import org.eclipse.core.expressions.IEvaluationContext;
import org.eclipse.jface.action.ContributionItem;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.eclipse.ui.ISharedImages;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.handlers.IHandlerService;

/**
 * @author Myoungkyu Song
 * @date Jul 18, 2012
 * @since JDK1.6
 */
public class UpdateContributionItem extends ContributionItem {
	private final IViewSite	viewSite;
	private final IHandler	handler;
	boolean						enabled	= false;
	private MenuItem			menuItem;
	private ToolItem			toolItem;

	public UpdateContributionItem(IViewSite viewSite, IHandler handler) {
		this.handler = handler;
		this.viewSite = viewSite;
		viewSite.getSelectionProvider().addSelectionChangedListener(new ISelectionChangedListener() {
			public void selectionChanged(SelectionChangedEvent event) {
				enabled = !event.getSelection().isEmpty();
				updateEnablement();
			}
		});

	}

	public void fill(Menu menu, int index) {
		menuItem = new MenuItem(menu, SWT.NONE, index);
		menuItem.setText("Update Metadata");
		menuItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				run();
			}
		});
		updateEnablement();
	}

	public void fill(ToolBar parent, int index) {
		toolItem = new ToolItem(parent, SWT.NONE, index);
		toolItem.setToolTipText("Update metadata in the selected item");
		toolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				run();
			}
		});
		updateEnablement();
	}

	private void updateEnablement() {
		Image image = PlatformUI.getWorkbench().getSharedImages().getImage(enabled ? ISharedImages.IMG_TOOL_NEW_WIZARD : ISharedImages.IMG_TOOL_NEW_WIZARD);
		if (menuItem != null) {
			menuItem.setImage(image);
			menuItem.setEnabled(enabled);
		}
		if (toolItem != null) {
			toolItem.setImage(image);
			toolItem.setEnabled(enabled);
		}
	}

	public void run() {
		final IHandlerService handlerService = (IHandlerService) viewSite.getService(IHandlerService.class);
		IEvaluationContext evaluationContext = handlerService.createContextSnapshot(true);
		ExecutionEvent event = new ExecutionEvent(null, Collections.EMPTY_MAP, null, evaluationContext);

		try {
			handler.execute(event);
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}

}

/*
 * @(#) UtilEvent.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util;

import java.util.HashMap;
import java.util.Map;

import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;
import org.osgi.framework.ServiceReference;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventAdmin;

/**
 * @author Myoungkyu Song
 * @date May 15, 2012
 * @since JDK1.6
 */
@SuppressWarnings({ "rawtypes", "unchecked" })
public class UtilEvent {

	/** @METHOD */
	public static void sendEvent(Class<?> clazz, String displayResult) {
		BundleContext ctx = FrameworkUtil.getBundle(clazz).getBundleContext();
		ServiceReference ref = ctx.getServiceReference(EventAdmin.class.getName());
		EventAdmin eventAdmin = (EventAdmin) ctx.getService(ref);
		Map<String, String> properties = new HashMap<String, String>();
		properties.put("DATA", displayResult);
		Event event = new Event("viewcommunication/syncEvent", properties);
		eventAdmin.sendEvent(event);
		// event = new Event("viewcommunication/asyncEvent", properties);
		// eventAdmin.postEvent(event);
	}
}

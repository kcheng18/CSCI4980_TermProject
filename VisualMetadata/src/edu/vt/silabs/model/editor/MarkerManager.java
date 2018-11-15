/*
 * @(#) MarkerManager.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.editor;

import java.util.HashMap; 
import org.eclipse.core.resources.IMarker;


/**
 * @author Myoungkyu Song
 * @date Jul 13, 2012
 * @since JDK1.6
 */
public class MarkerManager {
	static HashMap<String, IMarker>	markerMap	= new HashMap<String, IMarker>();
	static MarkerManager					mngr4markerInstance;

	public static MarkerManager getMarkerManager() {
		if (mngr4markerInstance == null)
			mngr4markerInstance = new MarkerManager();
		
		return mngr4markerInstance;
	}

	public void put(String key, IMarker value) {
		markerMap.put(key, value);
	}

	public IMarker get(String key) {
		return markerMap.get(key);
	}
}

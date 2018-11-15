/*
 * @(#) UtilMarker.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util;

import edu.vt.silabs.model.editor.MarkerLocation;

/**
 * @author Myoungkyu Song
 * @date Jul 14, 2012
 * @since JDK1.6
 */
public class UtilMarker {
	public static String getKey_marker(MarkerLocation loc) {
		return loc.file.getName() + ":" + loc.startLine + ":" + loc.charStart;
	}

	public static String getKey_marker(String[] kiss) {
		return kiss[0] + ":" + kiss[1] + ":" + kiss[2];
	}
}

/*
 * @(#) Property.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.comm;

/**
 * @author Myoungkyu Song
 * @date Jul 21, 2012
 * @since JDK1.6
 */
public class Property {
	public String	sel_var_offset	= "SELECTED_VAR_OFFSET";
	public String	sel_var_line	= "SELECTED_VAR_LINE";
	public String	sel_var_name	= "SELECTED_VAR_NAME";
	public String	sel_fun_name	= "SELECTED_FUN_NAME";
	public String	sel_short_file	= "SELECTED_SHORT_FILE_NAME";
	public String	sel_long_file	= "SELECTED_LONG_FILE_NAME";

	public String	annot_persist	= "application.property.annotation.persist";

	/** @METHOD */
	public static void set(String key, String value) {
		System.setProperty(key, value);
	}

	/** @METHOD */
	public static String get(String key) {
		return System.getProperty(key);
	}
}

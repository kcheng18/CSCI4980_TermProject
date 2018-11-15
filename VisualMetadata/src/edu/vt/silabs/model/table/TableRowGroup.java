/*
 * @(#) TableRowGroup.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.table;

import java.util.ArrayList;

/**
 * @author Myoungkyu Song
 * @date Jul 13, 2012
 * @since JDK1.6
 */
public class TableRowGroup {
	public ArrayList<TableRow>	rowList	= new ArrayList<TableRow>();

	public ArrayList<TableRow> getRowList() {
		return rowList;
	}

	public void add(TableRow row) {
		rowList.add(row);
	}

	public void remove(TableRow row) {
		rowList.remove(row);
	}

	public void update(TableRow row) {
		int i = 0;
		for (; i < rowList.size(); i++) {
			TableRow irow = rowList.get(i);
			if (irow.compare(row)) {
				break;
			}
		}
		rowList.set(i, row);
	}

	public void clean() {
		rowList.clear();
	}
}

/*
 * @(#) TableRow.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.model.table;

/**
 * @author Myoungkyu Song
 * @date Jul 13, 2012
 * @since JDK1.6
 */
public class TableRow {
	String	source, line, offset, metadata, obj;

	public TableRow(String source, String line, String offset, String metadata, String obj) {
		this.source = source;
		this.line = line;
		this.offset = offset;
		this.metadata = metadata;
		this.obj = obj;
	}

	public String getSource() {
		return source;
	}

	public String getLine() {
		return line;
	}

	public String getOffset() {
		return offset;
	}

	public String getMetadata() {
		return metadata;
	}

	public String getObj() {
		return obj;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public void setOffset(String offset) {
		this.offset = offset;
	}

	public void setMetadata(String metadata) {
		this.metadata = metadata;
	}

	public void setObj(String obj) {
		this.obj = obj;
	}

	public boolean compare(TableRow other) {
		if (other.getSource().equals(this.getSource()) && //
				other.getLine().equals(this.getLine()) && //
				other.getOffset().equals(this.getOffset())) {
			return true;
		}
		return false;
	}

	public String toString() {
		return "=> " + source + ", " + line + ", " + offset + ", " + metadata + ", " + obj;
	}
}

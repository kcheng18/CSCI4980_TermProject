/*
 * @(#) SimpleNameNode.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast.node;

/**
 * @author Myoungkyu Song
 * @date Jul 31, 2012
 * @since JDK1.6
 */
public class SimpleNameNode {
	String	name;
	Integer	offset;
	Integer	linenum;

	public SimpleNameNode(String name, Integer offset, Integer linenum) {
		this.name = name;
		this.offset = offset;
		this.linenum = linenum;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getOffset() {
		return offset;
	}

	public void setOffset(Integer offset) {
		this.offset = offset;
	}

	public Integer getLinenum() {
		return linenum;
	}

	public void setLinenum(Integer linenum) {
		this.linenum = linenum;
	}

	public String toString() {
		return ("-> " + "[" + offset + "]" + "[" + linenum + "]" + name);
	}
}

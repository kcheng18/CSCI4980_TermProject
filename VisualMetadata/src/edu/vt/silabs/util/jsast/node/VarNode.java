/*
 * @(#) VarNode.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast.node;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class VarNode {
	String	decl;
	String	name;
	int		loc;

	public VarNode(String decl, String name, int loc) {
		this.decl = decl;
		this.name = name;
		this.loc = loc;
	}

	public String getName() {
		return this.name;
	}

	public boolean compareToName(String varNodeName) {
		if (this.name.equals(varNodeName))
			return true;
		return false;
	}

	public int getLoc() {
		return this.loc;
	}

	@Override
	public String toString() {
		return "[" + loc + "]" + name;
	}
}

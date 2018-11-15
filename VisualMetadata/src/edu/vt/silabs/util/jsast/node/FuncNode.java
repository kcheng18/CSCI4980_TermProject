/*
 * @(#) FuncNode.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast.node;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class FuncNode {
	String					name;
	int						loc;
	int						end;
	public List<VarNode>	varNodeList	= new ArrayList<VarNode>();

	public FuncNode(String name, int loc, int end) {
		this.name = name;
		this.loc = loc;
		this.end = end;
	}

	public String getName() {
		return this.name;
	}

	public int getLoc() {
		return this.loc;
	}

	public int getEnd() {
		return this.end;
	}

	public void addVarNode(VarNode varNode) {
		if (name != null && name.equals("r"))
			System.out.println("[DBG]");
		if (!varNodeList.contains(varNode))
			varNodeList.add(varNode);
	}

	@Override
	public String toString() {
		StringBuilder buf = new StringBuilder();
		buf.append("func [" + loc + "~" + end + "]" + ": " + name + "\n");
		for (int i = 0; i < varNodeList.size(); i++) {
			VarNode elem = varNodeList.get(i);
			buf.append(elem.toString() + "\n");
		}
		return buf.toString();
	}
}

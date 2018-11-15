/*
 * @(#) SrcNode.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast.node;

import java.util.ArrayList;
import java.util.List;

import edu.vt.silabs.util.jsast.node.FuncNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class SrcNode {
	String						name;
	public List<FuncNode>	funcNodeList	= new ArrayList<FuncNode>();

	public SrcNode(String fileName) {
		this.name = fileName;
	}

	public String getName() {
		return this.name;
	}
	
	public void addFuncNode(FuncNode funcNode) {
		funcNodeList.add(funcNode);
	}

	public String toString() {
		StringBuilder buf = new StringBuilder();
		buf.append("** file: " + name + "\n");
		for (int i = 0; i < funcNodeList.size(); i++) {
			FuncNode elem = funcNodeList.get(i);
			buf.append(elem.toString() + "\n");
		}
		return buf.toString();
	}
}

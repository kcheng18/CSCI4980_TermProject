/*
 * @(#) JSASTVisitor.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast;

import java.io.BufferedReader; 
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import org.eclipse.wst.jsdt.core.dom.*;

import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class ASTVisitor_JSG extends ASTVisitor {
	String				file_name;
	String				curFuncName;											// for anonymous function.
	Stack<FuncNode>	funcStack		= new Stack<FuncNode>();
	SrcNode				srcNode;
	List<String>		fileContents	= new ArrayList<String>();
	List<Integer>		offSetList		= new ArrayList<Integer>();

	/** @METHOD */
	public ASTVisitor_JSG(String fileName) {
		this.file_name = fileName;
		srcNode = new SrcNode(fileName);
	}

	/** @METHOD */
	public boolean visit(FunctionDeclaration node) {
		String funcName = null;
		SimpleName funcNameTmp = node.getName();

		if (this.curFuncName == null) { // inheritance
			int idx = node.getStartPosition();
			funcName = getLine(idx);
			funcName = handleFuncName(funcName);
		}
		else if (funcNameTmp == null) { // anonymous function.
			funcName = getCurFuncName();
		}
		else {
			funcName = node.getName().getFullyQualifiedName();
		}
		int loc = node.getStartPosition();
		int end = node.getStartPosition() + node.getLength();
		FuncNode funcNode = new FuncNode(funcName, loc, end);
		funcStack.push(funcNode);
		srcNode.addFuncNode(funcNode);
		return true;
	}

	/** @METHOD */
	public boolean visit(VariableDeclarationFragment node) {
		if (isAnnoFunc(node)) {
			this.curFuncName = node.getName().getFullyQualifiedName();
			return true;
		}
		String decl = node.toString().trim();
		String name = node.getName().toString();
		int loc = node.getStartPosition();
		VarNode varNode = new VarNode(decl, name, loc);
		FuncNode curFunc = funcStack.peek();
		curFunc.addVarNode(varNode);
		return true;
	}

	/** @METHOD */
	String getCurFuncName() {
		String tmp = this.curFuncName;
		this.curFuncName = null;
		return tmp;
	}

	/** @METHOD */
	boolean isAnnoFunc(VariableDeclarationFragment node) {
		return node.toString().split("\n")[0].contains("function");
	}

	/** @METHOD */
	String getName(String varName) {
		int idx1 = varName.indexOf('=');
		if (idx1 == -1)
			return varName;
		return varName.substring(0, idx1);
	}

	public SrcNode getSrcNode() {
		return srcNode;
	}

	/** @METHOD */
	String getLine(int _offset) {
		List<String> charList = new ArrayList<String>();
		File f = new File(this.file_name);
		int lastNewLine = 0, curOffSet = 0;
		try {
			Reader r = new BufferedReader(new InputStreamReader(new FileInputStream(f), "US-ASCII"));
			int ch = 0;
			while ((ch = r.read()) != -1) {
				char cha = (char) ch;
				charList.add("" + cha);
				if (cha == '\n')
					lastNewLine = curOffSet;
				if (curOffSet == _offset)
					break;
				curOffSet += 1;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		String buf = "";
		for (int i = lastNewLine + 1; i < curOffSet; i++) {
			String elem = charList.get(i);
			buf += elem;
		}
		return buf;
	}

	/** @METHOD */
	String handleFuncName(String buf) {
		buf = buf.replace(".", "_");

		int idx = buf.indexOf("=");
		if (idx != -1) {
			buf = buf.substring(0, idx).trim();
			return buf;
		}
		idx = buf.indexOf(":");
		if (idx != -1) {
			buf = buf.substring(0, idx).trim();
		}
		return buf;
	}
}

/*
 * @(#) JSASTVisitor.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast;

import java.util.Stack;
import org.eclipse.wst.jsdt.core.dom.*;

import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SimpleNameNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class ASTVisitor_JS extends ASTVisitor {
	Stack<FuncNode>	funcStack	= new Stack<FuncNode>();
	SrcNode				srcNode;

	public ASTVisitor_JS(String fileName) {
		srcNode = new SrcNode(fileName);
	}

	public boolean visit(VariableDeclarationFragment node) {
		if (isAnnoFunc(node)) {
			String funcName = node.getName().getFullyQualifiedName();
			int loc = node.getStartPosition();
			int end = node.getStartPosition() + node.getLength();
			FuncNode funcNode = new FuncNode(funcName, loc, end);
			funcStack.push(funcNode);
			return true;
		}
		else {
			String decl = node.toString().trim();
			String name = node.getName().toString();
			int loc = node.getStartPosition();
			VarNode varNode = new VarNode(decl, name, loc);
			FuncNode curFunc = funcStack.peek();
			curFunc.addVarNode(varNode);
		}
		return true;
	}

	public boolean visit(MemberRef node) {
		System.out.println("[DBG] MemberRef: " + node);
		return true;
	}

	public boolean visit(FunctionDeclaration node) {
		if (node.getName() == null)
			return true;
		String funcName = node.getName().getFullyQualifiedName();
		int loc = node.getStartPosition();
		int end = node.getStartPosition() + node.getLength();
		FuncNode funcNode = new FuncNode(funcName, loc, end);
		funcStack.push(funcNode);
		return true;
	}

	public void endVisit(VariableDeclarationFragment node) {
		if (isAnnoFunc(node)) {
			FuncNode funcNode = funcStack.pop();
			srcNode.addFuncNode(funcNode);
		}
	}

	public void endVisit(FunctionDeclaration node) {
		if (node.getName() == null)
			return;
		FuncNode funcNode = funcStack.pop();
		srcNode.addFuncNode(funcNode);
	}

	public boolean visit(SimpleName node) {
		String name = node.toString();
		int offset = node.getStartPosition();
		int linenum = UtilFile.getLineNum(this.srcNode.getName(), offset);
		SimpleNameNode n = new SimpleNameNode(name, offset, linenum);
		NodeMngr.addSimpleNameNode(n);
		return true;
	}

	public SrcNode getSrcNode() {
		return srcNode;
	}

	boolean isAnnoFunc(VariableDeclarationFragment node) {
		return node.toString().split("\n")[0].contains("function");
	}
}

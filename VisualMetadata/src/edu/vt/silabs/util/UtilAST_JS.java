/*
 * @(#) UtilJSAST.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util;

import org.eclipse.wst.jsdt.core.dom.AST;
import org.eclipse.wst.jsdt.core.dom.ASTParser;
import org.eclipse.wst.jsdt.core.dom.ASTVisitor;
import org.eclipse.wst.jsdt.core.dom.JavaScriptUnit;
import edu.vt.silabs.util.jsast.ASTVisitor_JS;
import edu.vt.silabs.util.jsast.node.SrcNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class UtilAST_JS {
	public static void main(String[] args) {
		String file_name = "abc.js";
		String file_text = UtilFile.fileRead("/home/mksong/workspace/VisualMetadata.JSAST/abc.js");
		ASTVisitor_JS visitor = getJSVisitor(file_name, file_text);
		SrcNode srcNode = visitor.getSrcNode();
		System.out.println("[DBG]" + srcNode);
	}

	/** @METHOD */
	public static ASTVisitor_JS getJSVisitor(String fileName, String jsfile_contents) {
		ASTParser parser = ASTParser.newParser(AST.JLS3);
		ASTVisitor_JS v = new ASTVisitor_JS(fileName);
		parser.setSource(jsfile_contents.toCharArray());
		JavaScriptUnit unit = (JavaScriptUnit) parser.createAST(null);
		unit.accept(v);
		return v;
	}

	public static ASTVisitor getJSVisitor(String fileName, String jsfile_contents, ASTVisitor v) {
		ASTParser parser = ASTParser.newParser(AST.JLS3);
		parser.setSource(jsfile_contents.toCharArray());
		JavaScriptUnit unit = (JavaScriptUnit) parser.createAST(null);
		unit.accept(v);
		return v;
	}
}

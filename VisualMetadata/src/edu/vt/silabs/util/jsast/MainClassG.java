/*
 * @(#) MainClassG.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.eclipse.wst.jsdt.core.dom.*;

import edu.vt.silabs.util.UtilAST_JS;
import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Aug 11, 2012
 * @since JDK1.6
 */
public class MainClassG {
	public static void main(String[] args) {
		MainClassG m = new MainClassG();
		m.doProc();
		m.close();
		System.out.println("[DBG] done.");
	}

	boolean				console				= false;
	String				java_file			= "/home/mksong/workspace/" + //
															"VisualMetadata/result/Annotator6.java";
	String				js_file				= "/home/mksong/workspace/" + //
															"VisualMetadata.JSTarget/src/yahoo_echart6.js";
	FileOutputStream	out					= null;
	PrintStream			ps						= null;
	Random				randomGenerator	= new Random();

	/** @METHOD */
	private void doProc() {
		String contents = UtilFile.fileRead(new File(getFileName()));
		ASTVisitor v = new ASTVisitor_JSG(getFileName());
		UtilAST_JS.getJSVisitor(getFileName(), contents, v);
		ASTVisitor_JSG v_jsg = (ASTVisitor_JSG) v;
		SrcNode srcNode = v_jsg.getSrcNode();
		List<FuncNode> funcNodeList = srcNode.funcNodeList;
		createJavaIdentifiers(funcNodeList);
	}

	void createJavaIdentifiers(List<FuncNode> funcNodeList) {
		for (int i = 0; i < funcNodeList.size(); i++) {
			FuncNode funcNode = funcNodeList.get(i);
			if (funcNode == null || funcNode.getName().isEmpty() || //
					funcNode.getName().contains(("return")) || //
					funcNode.getName().contains("(") || //
					funcNode.getName().contains("[") || //
					funcNode.getName().startsWith("}"))
				continue;
			createJavaIdentifiers(funcNode, i);
		}
	}

	/** @METHOD */
	void createJavaIdentifiers(FuncNode funcNode, int idx) {
		String annotatorFormat = "class Annotator$%d{";
		String clazzFormat = "class f_%s {}";
		String annotationFormat = "@Persist (key = \"key%d_%s\", value = \"%s\")";
		String memberFieldFormat = "f_%s v_%s;";

		List<String> tmpList1 = new ArrayList<String>();
		List<String> tmpList2 = new ArrayList<String>();
		List<VarNode> varNodeList = funcNode.varNodeList;
		for (int i = 0; i < varNodeList.size(); i++) {
			VarNode varNode = varNodeList.get(i);
			tmpList1.add(String.format(annotationFormat, getKey(), varNode.getName(), varNode.getName()));
			tmpList2.add(String.format(memberFieldFormat, funcNode.getName(), varNode.getName()));
		}
		if (varNodeList.isEmpty())
			return;

		println(String.format(annotatorFormat, idx));
		println("\t\t" + String.format(clazzFormat, funcNode.getName()));
		for (int i = 0; i < tmpList1.size(); i++) {
			println("\t\t" + tmpList1.get(i));
			println("\t\t" + tmpList2.get(i));
		}
		println("}");
	}

	private Integer getKey() {
		return randomGenerator.nextInt(1000);
	}

	void println(String text) {
		if (console) {
			System.out.println(text);
		}
		else {
			save(text);
		}
	}

	/** @METHOD */
	public void save(String text) {
		try {
			if (out == null) {
				out = new FileOutputStream(java_file);
				ps = new PrintStream(out);
			}
			ps.println(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/** @METHOD */
	public void close() {
		try {
			if (ps != null)
				ps.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/** @METHOD */
	private String getFileName() {
		return js_file;
		// return "/home/mksong/workspace/VisualMetadata.JSTarget/src/test.js";
	}
}

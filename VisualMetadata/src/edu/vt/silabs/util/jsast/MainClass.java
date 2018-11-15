/*
 * @(#) MainClass.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import edu.vt.silabs.util.UtilAST_JS;
import edu.vt.silabs.util.UtilFile;
import edu.vt.silabs.util.UtilPrint;
import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SimpleNameNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class MainClass {
	public static void main(String[] args) {
		MainClass m = new MainClass();
		String file_name = "/home/mksong/workspace/runtime-VisualMetadata/JavaScriptProject/sample_tran.js";
		int selected_bgn_ch = 170;
		int selected_end_ch = 465;
		m.doProc(file_name, selected_bgn_ch, selected_end_ch);
		// m.doStart();
		// m.display();
	}

	public MainClass() {}

	public void doProc(String file_name, int selected_bgn_ch, int selected_end_ch) {
		ASTVisitor_JS visitor = UtilAST_JS.getJSVisitor(file_name, //
				UtilFile.fileRead(new File(getProjectPath() + file_name)));
		SrcNode srcNode = visitor.getSrcNode();
		NodeMngr.addSrcNode(srcNode);
		FuncNode funcNode = NodeMngr.getFunc(selected_bgn_ch, selected_end_ch);
		int bgn_loc_func, end_loc_func, bgn_ln_func, end_ln_func, bgn_ln_blk, end_ln_blk;
		bgn_loc_func = funcNode.getLoc();
		end_loc_func = funcNode.getEnd();

		bgn_ln_func = UtilFile.getLineNum(file_name, bgn_loc_func);
		bgn_ln_blk = UtilFile.getLineNum(file_name, selected_bgn_ch);
		end_ln_blk = UtilFile.getLineNum(file_name, selected_end_ch);
		end_ln_func = UtilFile.getLineNum(file_name, end_loc_func);

		List<String> contents1, contents2, contents3;
		contents1 = UtilFile.getSubTextFromFile(file_name, bgn_ln_func - 1, bgn_ln_blk - 1);
		contents2 = UtilFile.getSubTextFromFile(file_name, bgn_ln_blk - 1, end_ln_blk - 1);
		contents3 = UtilFile.getSubTextFromFile(file_name, end_ln_blk - 1, end_ln_func - 1);

		List<VarNode> varDeclared = NodeMngr.getVars(selected_bgn_ch, selected_end_ch);
		List<SimpleNameNode> selSimpleNameNodeList = //
				NodeMngr.getSimpleNameNode(selected_end_ch + 1, end_loc_func);
		List<String> func_2nd = makeFunc_2nd(contents3, varDeclared, selSimpleNameNodeList);
		List<String> func_1st = makeFunc_1st(contents1, contents2, //
				func_2nd.get(0).replace("function", "").trim());

		List<String> generated = new ArrayList<String>();
		generated.addAll(func_1st);
		generated.add(getPointCut());
		generated.addAll(getTransAdvice());
		generated.add(getJointPoint());
		generated.addAll(func_2nd);

		System.out.println("==========================================");
		UtilPrint.printArrayList(generated);
		System.out.println("==========================================");
	}

	/** @METHOD */
	String getPointCut() {
		String result = "var pc = AspectScript.Pointcuts.exec(func1);";
		return result;
	}

	/** @METHOD */
	List<String> getTransAdvice() {
		List<String> contents = new ArrayList<String>();
		contents.add("var transAdvice = function(jp) {");
		contents.add(" " + "var tx = jp.args[0];");
		contents.add(" " + "var tocommit = gotoIBlock (tx);");
		contents.add(" " + "if (tocommit) tx.commit();");
		contents.add("}");
		return contents;
	}

	String getJointPoint() {
		String result = "AspectScript.before(pc, transAdvice);";
		return result;
	}

	/** @METHOD */
	List<String> makeFunc_1st(List<String> contents1, List<String> contents2, String call2ndFunc) {
		List<String> result = new ArrayList<String>();
		result.addAll(contents1);
		result.add(" " + "var tx = {");

		for (int i = 0; i < contents2.size(); i++) {
			String elem = contents2.get(i);
			result.add(" " + elem);
		}
		result.add(" " + "};");
		int idx = call2ndFunc.indexOf("(");
		String tmp = " " + call2ndFunc.substring(0, idx) + "(tx, " + call2ndFunc.substring(idx + 1);
		result.add(tmp + ";");
		result.add("}");
		return result;
	}

	/** @METHOD */
	List<String> makeFunc_2nd(List<String> body, List<VarNode> varDeclared, //
			List<SimpleNameNode> selSimpleNameNodeList) {
		String signature = getFuncSignature(body, varDeclared, selSimpleNameNodeList);
		List<String> contents = new ArrayList<String>();
		contents.add(signature);
		contents.add("{");
		contents.addAll(body);
		contents.add("}");
		return contents;
	}

	/** @METHOD */
	String getFuncSignature(List<String> body, List<VarNode> varDeclared, //
			List<SimpleNameNode> selSimpleNameNodeList) {
		String result = "function func1(";
		for (int i = 0; i < selSimpleNameNodeList.size(); i++) {
			SimpleNameNode simpleNameNodeElem = selSimpleNameNodeList.get(i);
			for (int j = 0; j < varDeclared.size(); j++) {
				VarNode varNodeElem = varDeclared.get(j);
				if (simpleNameNodeElem.getName().equals(varNodeElem.getName())) {
					result = result + varNodeElem.getName() + ", ";
				}
			}
		}
		int idx = result.lastIndexOf(",");
		result = result.substring(0, idx);
		return result + ")";
	}

	/** @METHOD */
	void display() {
		List<SrcNode> srcNodeList = NodeMngr.getSrcNodeList();
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode elem = srcNodeList.get(i);
			System.out.println(elem);
		}
	}

	/** @METHOD */
	public String fileRead(File f) {
		StringBuilder sb = new StringBuilder();
		String line = null;

		try {
			BufferedReader input = new BufferedReader(new FileReader(f));

			while ((line = input.readLine()) != null) {
				sb.append(line);
				sb.append(System.getProperty("line.separator"));
			}

			input.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return (sb.toString());
	}

	/** @METHOD */
	String getProjectPath() {
		// dummy
		return "";
	}
}

// public void doStart() {
// String js_file_name = "/home/mksong/workspace/runtime-VisualMetadata/JavaScriptProject/sample_tran.js";
// // System.out.println(UtilFile.fileRead(new File(getProjectPath() + js_file_name)));
// // System.out.println("------------------------------------------");
//
// ASTVisitor_JS visitor = UtilAST_JS.getJSVisitor(js_file_name, //
// UtilFile.fileRead(new File(getProjectPath() + js_file_name)));
//
// SrcNode srcNode = visitor.getSrcNode();
// NodeMngr.addSrcNode(srcNode);
//
// int selected_bgn_ch = 170;
// int selected_end_ch = 465;
//
// /*
// * TODO
// * $1 = Get 1st part + 2nd part
// * $3 = make_func ($1, $2);
// * -
// * $2 = Get 3rd part
// * $4 = make_func ($3);
// */
// FuncNode funcNode = NodeMngr.getFunc(selected_bgn_ch, selected_end_ch);
//
// int bgn_loc_func, end_loc_func, bgn_ln_func, end_ln_func, bgn_ln_blk, end_ln_blk;
// bgn_loc_func = funcNode.getLoc();
// end_loc_func = funcNode.getEnd();
//
// // String test_file = "/home/mksong/Desktop/a.txt";
// bgn_ln_func = UtilFile.getLineNum(js_file_name, bgn_loc_func);
// bgn_ln_blk = UtilFile.getLineNum(js_file_name, selected_bgn_ch);
// end_ln_blk = UtilFile.getLineNum(js_file_name, selected_end_ch);
// end_ln_func = UtilFile.getLineNum(js_file_name, end_loc_func);
//
// System.out.println("[DBG] func name: " + funcNode.getName());
// // System.out.println("[DBG]" + bgn_ln_func);
// // System.out.println("[DBG]" + bgn_ln_blk);
// // System.out.println("[DBG]" + end_ln_blk);
// // System.out.println("[DBG]" + end_ln_func);
//
// List<String> contents1, contents2, contents3;
// contents1 = UtilFile.getSubTextFromFile(js_file_name, bgn_ln_func - 1, bgn_ln_blk - 1);
// contents2 = UtilFile.getSubTextFromFile(js_file_name, bgn_ln_blk - 1, end_ln_blk - 1);
// contents3 = UtilFile.getSubTextFromFile(js_file_name, end_ln_blk - 1, end_ln_func - 1);
//
// System.out.println("-1-----------------------------------------");
// UtilPrint.printArrayList(contents1);
// System.out.println("-2-----------------------------------------");
// UtilPrint.printArrayList(contents2);
// System.out.println("-3-----------------------------------------");
// UtilPrint.printArrayList(contents3);
// System.out.println("-4-----------------------------------------");
// System.out.println("[DBG] Declared Variables Above:");
// List<VarNode> varDeclared = NodeMngr.getVars(selected_bgn_ch, selected_end_ch);
// for (int i = 0; i < varDeclared.size(); i++) {
// VarNode elem = varDeclared.get(i);
// System.out.println("  " + elem);
// }
// System.out.println("------------------------------------------");
// // UtilPrint.printArrayList(NodeMngr.getVars(selected_start_ch, selected_end_ch));
//
// List<SimpleNameNode> simpleNameNodeList = NodeMngr.getSimpleNameNodeList();
// for (int i = 0; i < simpleNameNodeList.size(); i++) {
// SimpleNameNode elem = simpleNameNodeList.get(i);
// System.out.println(elem);
// }
// System.out.println("------------------------------------------");
//
// List<SimpleNameNode> selSimpleNameNodeList = //
// NodeMngr.getSimpleNameNode(selected_end_ch + 1, end_loc_func);
//
// List<String> func_2nd = makeFunc_2nd(contents3, varDeclared, selSimpleNameNodeList);
// List<String> func_1st = makeFunc_1st(contents1, contents2, //
// func_2nd.get(0).replace("function", "").trim());
//
// System.out.println("==========================================");
// UtilPrint.printArrayList(func_1st);
// System.out.println(getPointCut());
// UtilPrint.printArrayList(getTransAdvice());
// System.out.println(getJointPoint());
// UtilPrint.printArrayList(func_2nd);
// System.out.println("==========================================");
// }

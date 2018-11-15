/*
 * @(#) NodeMngr.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package edu.vt.silabs.util.jsast;

import java.util.ArrayList;
import java.util.List;

import edu.vt.silabs.util.jsast.node.FuncNode;
import edu.vt.silabs.util.jsast.node.SimpleNameNode;
import edu.vt.silabs.util.jsast.node.SrcNode;
import edu.vt.silabs.util.jsast.node.VarNode;

/**
 * @author Myoungkyu Song
 * @date Jul 11, 2012
 * @since JDK1.6
 */
public class NodeMngr {
	static List<SrcNode>				srcNodeList				= new ArrayList<SrcNode>();
	static List<SimpleNameNode>	simpleNameNodeList	= new ArrayList<SimpleNameNode>();

	/** @METHOD */
	public static void addSrcNode(SrcNode node) {
		srcNodeList.add(node);
	}

	/** @METHOD */
	public static List<SrcNode> getSrcNodeList() {
		return srcNodeList;
	}

	/** @METHOD */
	public static void addSimpleNameNode(SimpleNameNode node) {
		simpleNameNodeList.add(node);
	}

	/** @METHOD */
	public static List<SimpleNameNode> getSimpleNameNodeList() {
		return simpleNameNodeList;
	}

	/** @METHOD */
	public static String getFunc(String _varNodeName) {
		// iterate sources.
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode srcNodeElem = srcNodeList.get(i);

			// iterate functions.
			List<FuncNode> funcNodeList = srcNodeElem.funcNodeList;
			for (int j = 0; j < funcNodeList.size(); j++) {
				FuncNode funcNodeElem = funcNodeList.get(j);

				// iterate variables.
				List<VarNode> varNodeList = funcNodeElem.varNodeList;
				for (int k = 0; k < varNodeList.size(); k++) {
					VarNode varNodeElem = varNodeList.get(k);

					if (varNodeElem.compareToName(_varNodeName))
						return funcNodeElem.getName();
				}
			}
		}
		return null;
	}

	/** @METHOD */
	public static FuncNode getFunc(int selected_start_ch, int selected_end_ch) {
		List<SrcNode> srcNodeList = getSrcNodeList();
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode srcNode = srcNodeList.get(i);
			for (int j = 0; j < srcNode.funcNodeList.size(); j++) {
				FuncNode funcNode = srcNode.funcNodeList.get(j);
				if ((funcNode.getLoc() < selected_start_ch) && //
						(selected_end_ch < funcNode.getEnd())) {
					return funcNode;
				}
			}
		}
		return null;
	}

	/** @METHOD */
	public static List<VarNode> getVars(int selected_bgn_ch, int selected_end_ch) {
		List<VarNode> total = null;
		List<SrcNode> srcNodeList = getSrcNodeList();
		for (int i = 0; i < srcNodeList.size(); i++) {
			SrcNode srcNode = srcNodeList.get(i);
			for (int j = 0; j < srcNode.funcNodeList.size(); j++) {
				FuncNode funcNode = srcNode.funcNodeList.get(j);
				if ((funcNode.getLoc() < selected_bgn_ch) && //
						(selected_end_ch < funcNode.getEnd())) {
					total = funcNode.varNodeList;
					break;
				}
			}
			if (total != null)
				break;
		}
		List<VarNode> result = new ArrayList<VarNode>();
		for (int i = 0; i < total.size(); i++) {
			VarNode elem = total.get(i);
			if (selected_bgn_ch < elem.getLoc() && //
					elem.getLoc() < selected_end_ch) {
				result.add(elem);
			}
		}
		return result;
	}

	/** @METHOD */
	public static List<SimpleNameNode> getSimpleNameNode(int selected_bgn_ch, int selected_end_ch) {
		List<SimpleNameNode> all_list = NodeMngr.getSimpleNameNodeList();
		List<SimpleNameNode> own_list = new ArrayList<SimpleNameNode>();
		for (int i = 0; i < all_list.size(); i++) {
			SimpleNameNode elem = all_list.get(i);
			if (selected_bgn_ch < elem.getOffset() && elem.getOffset() < selected_end_ch)
				own_list.add(elem);
		}
		return own_list;
	}
}

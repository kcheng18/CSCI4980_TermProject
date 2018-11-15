/*
 * @(#) MainClass.java
 * Copyright 2010 The Software Innovations Lab, Dept. of Computer Science,
 * Virginia Tech. All rights reserved.
 * 2202 Kraft Drive, Blacksburg, VA 24060
 */
package test1;

import java.util.List;

import edu.vt.silabs.util.UtilFile;

/**
 * @author Myoungkyu Song
 * @date Jul 30, 2012
 * @since JDK1.6
 */
@SuppressWarnings("unused")
public class MainClass {
	public static void main(String[] args) {
		int bgn_ln_blk = 0, end_ln_blk = 0;
		bgn_ln_blk = 9;// UtilFile.getLineNum(file_path, loc.charStart);
		end_ln_blk = 13;// UtilFile.getLineNum(file_path, loc.charEnd);
		System.out.println("[DBG] bgn line: " + bgn_ln_blk + ", end line: " + end_ln_blk);

		String js_file_name = "/home/mksong/workspace/runtime-VisualMetadata/JavaScriptProject/sample_tran.js";
		List<String> contents = UtilFile.fileRead2List(js_file_name);

	}

	public static int getLineNum(String file_name, int offset) {
		int curline = 1;
		int curoffset = 0;
		List<String> contents = UtilFile.fileRead2List(file_name);
		for (int i = 0; i < contents.size(); i++) {
			String line = contents.get(i);
			curoffset += (line.length() + 1);
			if (curoffset > offset)
				break;
			curline++;
		}
		return curline;
	}
}

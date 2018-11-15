var pcGetV0 = AspectScript.Pointcuts.get("L");
var pcSetV0 = AspectScript.Pointcuts.set("L");

var aspectGetV0 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV0, persistAdviceGetV0);
AspectScript.deployOn(aspectGetV0, substitute);

var aspectSetV0 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV0, persistAdviceSetV0);
AspectScript.deployOn(aspectSetV0, substitute);

var persistAdviceGetV0 = function(jp) {
  return storage.getItem("key41_L");
};

var persistAdviceSetV0 = function(jp) {
  storage.setItem("key41_L", jp.value);
};//------------------------------------------var pcGetV1 = AspectScript.Pointcuts.get("c");
var pcSetV1 = AspectScript.Pointcuts.set("c");

var aspectGetV1 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV1, persistAdviceGetV1);
AspectScript.deployOn(aspectGetV1, get);

var aspectSetV1 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV1, persistAdviceSetV1);
AspectScript.deployOn(aspectSetV1, get);

var persistAdviceGetV1 = function(jp) {
  return storage.getItem("key457_c");
};

var persistAdviceSetV1 = function(jp) {
  storage.setItem("key457_c", jp.value);
};//------------------------------------------var pcGetV2 = AspectScript.Pointcuts.get("Y");
var pcSetV2 = AspectScript.Pointcuts.set("Y");

var aspectGetV2 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV2, persistAdviceGetV2);
AspectScript.deployOn(aspectGetV2, getFirstChildBy);

var aspectSetV2 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV2, persistAdviceSetV2);
AspectScript.deployOn(aspectSetV2, getFirstChildBy);

var persistAdviceGetV2 = function(jp) {
  return storage.getItem("key988_Y");
};

var persistAdviceSetV2 = function(jp) {
  storage.setItem("key988_Y", jp.value);
};//------------------------------------------var pcGetV3 = AspectScript.Pointcuts.get("L");
var pcSetV3 = AspectScript.Pointcuts.set("L");

var aspectGetV3 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV3, persistAdviceGetV3);
AspectScript.deployOn(aspectGetV3, dump);

var aspectSetV3 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV3, persistAdviceSetV3);
AspectScript.deployOn(aspectSetV3, dump);

var persistAdviceGetV3 = function(jp) {
  return storage.getItem("key527_L");
};

var persistAdviceSetV3 = function(jp) {
  storage.setItem("key527_L", jp.value);
};//------------------------------------------var pcGetV4 = AspectScript.Pointcuts.get("I");
var pcSetV4 = AspectScript.Pointcuts.set("I");

var aspectGetV4 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV4, persistAdviceGetV4);
AspectScript.deployOn(aspectGetV4, _IEEnumFix);

var aspectSetV4 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV4, persistAdviceSetV4);
AspectScript.deployOn(aspectSetV4, _IEEnumFix);

var persistAdviceGetV4 = function(jp) {
  return storage.getItem("key448_I");
};

var persistAdviceSetV4 = function(jp) {
  storage.setItem("key448_I", jp.value);
};//------------------------------------------var pcGetV5 = AspectScript.Pointcuts.get("I");
var pcSetV5 = AspectScript.Pointcuts.set("I");

var aspectGetV5 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV5, persistAdviceGetV5);
AspectScript.deployOn(aspectGetV5, YAHOO_register);

var aspectSetV5 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV5, persistAdviceSetV5);
AspectScript.deployOn(aspectSetV5, YAHOO_register);

var persistAdviceGetV5 = function(jp) {
  return storage.getItem("key368_I");
};

var persistAdviceSetV5 = function(jp) {
  storage.setItem("key368_I", jp.value);
};//------------------------------------------var pcGetV6 = AspectScript.Pointcuts.get("entry");
var pcSetV6 = AspectScript.Pointcuts.set("entry");

var aspectGetV6 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV6, persistAdviceGetV6);
AspectScript.deployOn(aspectGetV6, YFC_extractValue);

var aspectSetV6 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV6, persistAdviceSetV6);
AspectScript.deployOn(aspectSetV6, YFC_extractValue);

var persistAdviceGetV6 = function(jp) {
  return storage.getItem("key600_entry");
};

var persistAdviceSetV6 = function(jp) {
  storage.setItem("key600_entry", jp.value);
};//------------------------------------------var pcGetV7 = AspectScript.Pointcuts.get("cstr");
var pcSetV7 = AspectScript.Pointcuts.set("cstr");

var aspectGetV7 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV7, persistAdviceGetV7);
AspectScript.deployOn(aspectGetV7, set);

var aspectSetV7 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV7, persistAdviceSetV7);
AspectScript.deployOn(aspectSetV7, set);

var persistAdviceGetV7 = function(jp) {
  return storage.getItem("key924_cstr");
};

var persistAdviceSetV7 = function(jp) {
  storage.setItem("key924_cstr", jp.value);
};//------------------------------------------var pcGetV8 = AspectScript.Pointcuts.get("Y");
var pcSetV8 = AspectScript.Pointcuts.set("Y");

var aspectGetV8 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV8, persistAdviceGetV8);
AspectScript.deployOn(aspectGetV8, get);

var aspectSetV8 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV8, persistAdviceSetV8);
AspectScript.deployOn(aspectSetV8, get);

var persistAdviceGetV8 = function(jp) {
  return storage.getItem("key48_Y");
};

var persistAdviceSetV8 = function(jp) {
  storage.setItem("key48_Y", jp.value);
};//------------------------------------------var pcGetV9 = AspectScript.Pointcuts.get("C");
var pcSetV9 = AspectScript.Pointcuts.set("C");

var aspectGetV9 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV9, persistAdviceGetV9);
AspectScript.deployOn(aspectGetV9, asual_util_Browser);

var aspectSetV9 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV9, persistAdviceSetV9);
AspectScript.deployOn(aspectSetV9, asual_util_Browser);

var persistAdviceGetV9 = function(jp) {
  return storage.getItem("key379_C");
};

var persistAdviceSetV9 = function(jp) {
  storage.setItem("key379_C", jp.value);
};//------------------------------------------var pcGetV10 = AspectScript.Pointcuts.get("Y");
var pcSetV10 = AspectScript.Pointcuts.set("Y");

var aspectGetV10 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV10, persistAdviceGetV10);
AspectScript.deployOn(aspectGetV10, _removeClass);

var aspectSetV10 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV10, persistAdviceSetV10);
AspectScript.deployOn(aspectSetV10, _removeClass);

var persistAdviceGetV10 = function(jp) {
  return storage.getItem("key836_Y");
};

var persistAdviceSetV10 = function(jp) {
  storage.setItem("key836_Y", jp.value);
};//------------------------------------------var pcGetV11 = AspectScript.Pointcuts.get("a");
var pcSetV11 = AspectScript.Pointcuts.set("a");

var aspectGetV11 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV11, persistAdviceGetV11);
AspectScript.deployOn(aspectGetV11, getObj);

var aspectSetV11 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV11, persistAdviceSetV11);
AspectScript.deployOn(aspectSetV11, getObj);

var persistAdviceGetV11 = function(jp) {
  return storage.getItem("key907_a");
};

var persistAdviceSetV11 = function(jp) {
  storage.setItem("key907_a", jp.value);
};//------------------------------------------var pcGetV12 = AspectScript.Pointcuts.get("G");
var pcSetV12 = AspectScript.Pointcuts.set("G");

var aspectGetV12 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV12, persistAdviceGetV12);
AspectScript.deployOn(aspectGetV12, getViewportWidth);

var aspectSetV12 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV12, persistAdviceSetV12);
AspectScript.deployOn(aspectSetV12, getViewportWidth);

var persistAdviceGetV12 = function(jp) {
  return storage.getItem("key87_G");
};

var persistAdviceSetV12 = function(jp) {
  storage.setItem("key87_G", jp.value);
};//------------------------------------------var pcGetV13 = AspectScript.Pointcuts.get("Y");
var pcSetV13 = AspectScript.Pointcuts.set("Y");

var aspectGetV13 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV13, persistAdviceGetV13);
AspectScript.deployOn(aspectGetV13, getDocumentWidth);

var aspectSetV13 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV13, persistAdviceSetV13);
AspectScript.deployOn(aspectSetV13, getDocumentWidth);

var persistAdviceGetV13 = function(jp) {
  return storage.getItem("key771_Y");
};

var persistAdviceSetV13 = function(jp) {
  storage.setItem("key771_Y", jp.value);
};//------------------------------------------var pcGetV14 = AspectScript.Pointcuts.get("d");
var pcSetV14 = AspectScript.Pointcuts.set("d");

var aspectGetV14 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV14, persistAdviceGetV14);
AspectScript.deployOn(aspectGetV14, set);

var aspectSetV14 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV14, persistAdviceSetV14);
AspectScript.deployOn(aspectSetV14, set);

var persistAdviceGetV14 = function(jp) {
  return storage.getItem("key467_d");
};

var persistAdviceSetV14 = function(jp) {
  storage.setItem("key467_d", jp.value);
};//------------------------------------------var pcGetV15 = AspectScript.Pointcuts.get("J");
var pcSetV15 = AspectScript.Pointcuts.set("J");

var aspectGetV15 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV15, persistAdviceGetV15);
AspectScript.deployOn(aspectGetV15, dump);

var aspectSetV15 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV15, persistAdviceSetV15);
AspectScript.deployOn(aspectSetV15, dump);

var persistAdviceGetV15 = function(jp) {
  return storage.getItem("key21_J");
};

var persistAdviceSetV15 = function(jp) {
  storage.setItem("key21_J", jp.value);
};//------------------------------------------var pcGetV16 = AspectScript.Pointcuts.get("AB");
var pcSetV16 = AspectScript.Pointcuts.set("AB");

var aspectGetV16 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV16, persistAdviceGetV16);
AspectScript.deployOn(aspectGetV16, _replaceClass);

var aspectSetV16 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV16, persistAdviceSetV16);
AspectScript.deployOn(aspectSetV16, _replaceClass);

var persistAdviceGetV16 = function(jp) {
  return storage.getItem("key440_AB");
};

var persistAdviceSetV16 = function(jp) {
  storage.setItem("key440_AB", jp.value);
};//------------------------------------------var pcGetV17 = AspectScript.Pointcuts.get("asual");
var pcSetV17 = AspectScript.Pointcuts.set("asual");

var aspectGetV17 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV17, persistAdviceGetV17);
AspectScript.deployOn(aspectGetV17, remove);

var aspectSetV17 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV17, persistAdviceSetV17);
AspectScript.deployOn(aspectSetV17, remove);

var persistAdviceGetV17 = function(jp) {
  return storage.getItem("key703_asual");
};

var persistAdviceSetV17 = function(jp) {
  storage.setItem("key703_asual", jp.value);
};//------------------------------------------var pcGetV18 = AspectScript.Pointcuts.get("Y");
var pcSetV18 = AspectScript.Pointcuts.set("Y");

var aspectGetV18 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV18, persistAdviceGetV18);
AspectScript.deployOn(aspectGetV18, getElementsByClassName);

var aspectSetV18 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV18, persistAdviceSetV18);
AspectScript.deployOn(aspectSetV18, getElementsByClassName);

var persistAdviceGetV18 = function(jp) {
  return storage.getItem("key996_Y");
};

var persistAdviceSetV18 = function(jp) {
  storage.setItem("key996_Y", jp.value);
};//------------------------------------------var pcGetV19 = AspectScript.Pointcuts.get("v");
var pcSetV19 = AspectScript.Pointcuts.set("v");

var aspectGetV19 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV19, persistAdviceGetV19);
AspectScript.deployOn(aspectGetV19, set);

var aspectSetV19 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV19, persistAdviceSetV19);
AspectScript.deployOn(aspectSetV19, set);

var persistAdviceGetV19 = function(jp) {
  return storage.getItem("key270_v");
};

var persistAdviceSetV19 = function(jp) {
  storage.setItem("key270_v", jp.value);
};//------------------------------------------var pcGetV20 = AspectScript.Pointcuts.get("Y");
var pcSetV20 = AspectScript.Pointcuts.set("Y");

var aspectGetV20 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV20, persistAdviceGetV20);
AspectScript.deployOn(aspectGetV20, getLastChildBy);

var aspectSetV20 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV20, persistAdviceSetV20);
AspectScript.deployOn(aspectSetV20, getLastChildBy);

var persistAdviceGetV20 = function(jp) {
  return storage.getItem("key887_Y");
};

var persistAdviceSetV20 = function(jp) {
  storage.setItem("key887_Y", jp.value);
};//------------------------------------------var pcGetV21 = AspectScript.Pointcuts.get("I");
var pcSetV21 = AspectScript.Pointcuts.set("I");

var aspectGetV21 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV21, persistAdviceGetV21);
AspectScript.deployOn(aspectGetV21, J);

var aspectSetV21 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV21, persistAdviceSetV21);
AspectScript.deployOn(aspectSetV21, J);

var persistAdviceGetV21 = function(jp) {
  return storage.getItem("key464_I");
};

var persistAdviceSetV21 = function(jp) {
  storage.setItem("key464_I", jp.value);
};//------------------------------------------var pcGetV22 = AspectScript.Pointcuts.get("T");
var pcSetV22 = AspectScript.Pointcuts.set("T");

var aspectGetV22 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV22, persistAdviceGetV22);
AspectScript.deployOn(aspectGetV22, substitute);

var aspectSetV22 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV22, persistAdviceSetV22);
AspectScript.deployOn(aspectSetV22, substitute);

var persistAdviceGetV22 = function(jp) {
  return storage.getItem("key322_T");
};

var persistAdviceSetV22 = function(jp) {
  storage.setItem("key322_T", jp.value);
};//------------------------------------------var pcGetV23 = AspectScript.Pointcuts.get("AB");
var pcSetV23 = AspectScript.Pointcuts.set("AB");

var aspectGetV23 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV23, persistAdviceGetV23);
AspectScript.deployOn(aspectGetV23, _setXY);

var aspectSetV23 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV23, persistAdviceSetV23);
AspectScript.deployOn(aspectSetV23, _setXY);

var persistAdviceGetV23 = function(jp) {
  return storage.getItem("key642_AB");
};

var persistAdviceSetV23 = function(jp) {
  storage.setItem("key642_AB", jp.value);
};//------------------------------------------var pcGetV24 = AspectScript.Pointcuts.get("aa");
var pcSetV24 = AspectScript.Pointcuts.set("aa");

var aspectGetV24 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV24, persistAdviceGetV24);
AspectScript.deployOn(aspectGetV24, getObj);

var aspectSetV24 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV24, persistAdviceSetV24);
AspectScript.deployOn(aspectSetV24, getObj);

var persistAdviceGetV24 = function(jp) {
  return storage.getItem("key734_aa");
};

var persistAdviceSetV24 = function(jp) {
  storage.setItem("key734_aa", jp.value);
};//------------------------------------------var pcGetV25 = AspectScript.Pointcuts.get("W");
var pcSetV25 = AspectScript.Pointcuts.set("W");

var aspectGetV25 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV25, persistAdviceGetV25);
AspectScript.deployOn(aspectGetV25, substitute);

var aspectSetV25 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV25, persistAdviceSetV25);
AspectScript.deployOn(aspectSetV25, substitute);

var persistAdviceGetV25 = function(jp) {
  return storage.getItem("key198_W");
};

var persistAdviceSetV25 = function(jp) {
  storage.setItem("key198_W", jp.value);
};//------------------------------------------var pcGetV26 = AspectScript.Pointcuts.get("t");
var pcSetV26 = AspectScript.Pointcuts.set("t");

var aspectGetV26 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV26, persistAdviceGetV26);
AspectScript.deployOn(aspectGetV26, getObj);

var aspectSetV26 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV26, persistAdviceSetV26);
AspectScript.deployOn(aspectSetV26, getObj);

var persistAdviceGetV26 = function(jp) {
  return storage.getItem("key546_t");
};

var persistAdviceSetV26 = function(jp) {
  storage.setItem("key546_t", jp.value);
};//------------------------------------------var pcGetV27 = AspectScript.Pointcuts.get("G");
var pcSetV27 = AspectScript.Pointcuts.set("G");

var aspectGetV27 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV27, persistAdviceGetV27);
AspectScript.deployOn(aspectGetV27, _removeClass);

var aspectSetV27 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV27, persistAdviceSetV27);
AspectScript.deployOn(aspectSetV27, _removeClass);

var persistAdviceGetV27 = function(jp) {
  return storage.getItem("key405_G");
};

var persistAdviceSetV27 = function(jp) {
  storage.setItem("key405_G", jp.value);
};//------------------------------------------var pcGetV28 = AspectScript.Pointcuts.get("x");
var pcSetV28 = AspectScript.Pointcuts.set("x");

var aspectGetV28 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV28, persistAdviceGetV28);
AspectScript.deployOn(aspectGetV28, _setXY);

var aspectSetV28 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV28, persistAdviceSetV28);
AspectScript.deployOn(aspectSetV28, _setXY);

var persistAdviceGetV28 = function(jp) {
  return storage.getItem("key13_x");
};

var persistAdviceSetV28 = function(jp) {
  storage.setItem("key13_x", jp.value);
};//------------------------------------------var pcGetV29 = AspectScript.Pointcuts.get("I");
var pcSetV29 = AspectScript.Pointcuts.set("I");

var aspectGetV29 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV29, persistAdviceGetV29);
AspectScript.deployOn(aspectGetV29, later);

var aspectSetV29 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV29, persistAdviceSetV29);
AspectScript.deployOn(aspectSetV29, later);

var persistAdviceGetV29 = function(jp) {
  return storage.getItem("key858_I");
};

var persistAdviceSetV29 = function(jp) {
  storage.setItem("key858_I", jp.value);
};//------------------------------------------var pcGetV30 = AspectScript.Pointcuts.get("Y");
var pcSetV30 = AspectScript.Pointcuts.set("Y");

var aspectGetV30 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV30, persistAdviceGetV30);
AspectScript.deployOn(aspectGetV30, _calcBorders);

var aspectSetV30 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV30, persistAdviceSetV30);
AspectScript.deployOn(aspectSetV30, _calcBorders);

var persistAdviceGetV30 = function(jp) {
  return storage.getItem("key340_Y");
};

var persistAdviceSetV30 = function(jp) {
  storage.setItem("key340_Y", jp.value);
};//------------------------------------------var pcGetV31 = AspectScript.Pointcuts.get("l");
var pcSetV31 = AspectScript.Pointcuts.set("l");

var aspectGetV31 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV31, persistAdviceGetV31);
AspectScript.deployOn(aspectGetV31, checkChartPrefs);

var aspectSetV31 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV31, persistAdviceSetV31);
AspectScript.deployOn(aspectSetV31, checkChartPrefs);

var persistAdviceGetV31 = function(jp) {
  return storage.getItem("key206_l");
};

var persistAdviceSetV31 = function(jp) {
  storage.setItem("key206_l", jp.value);
};//------------------------------------------var pcGetV32 = AspectScript.Pointcuts.get("I");
var pcSetV32 = AspectScript.Pointcuts.set("I");

var aspectGetV32 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV32, persistAdviceGetV32);
AspectScript.deployOn(aspectGetV32, augmentObject);

var aspectSetV32 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV32, persistAdviceSetV32);
AspectScript.deployOn(aspectSetV32, augmentObject);

var persistAdviceGetV32 = function(jp) {
  return storage.getItem("key389_I");
};

var persistAdviceSetV32 = function(jp) {
  storage.setItem("key389_I", jp.value);
};//------------------------------------------var pcGetV33 = AspectScript.Pointcuts.get("G");
var pcSetV33 = AspectScript.Pointcuts.set("G");

var aspectGetV33 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV33, persistAdviceGetV33);
AspectScript.deployOn(aspectGetV33, getViewportHeight);

var aspectSetV33 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV33, persistAdviceSetV33);
AspectScript.deployOn(aspectSetV33, getViewportHeight);

var persistAdviceGetV33 = function(jp) {
  return storage.getItem("key473_G");
};

var persistAdviceSetV33 = function(jp) {
  storage.setItem("key473_G", jp.value);
};//------------------------------------------var pcGetV34 = AspectScript.Pointcuts.get("Y");
var pcSetV34 = AspectScript.Pointcuts.set("Y");

var aspectGetV34 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV34, persistAdviceGetV34);
AspectScript.deployOn(aspectGetV34, _replaceClass);

var aspectSetV34 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV34, persistAdviceSetV34);
AspectScript.deployOn(aspectSetV34, _replaceClass);

var persistAdviceGetV34 = function(jp) {
  return storage.getItem("key781_Y");
};

var persistAdviceSetV34 = function(jp) {
  storage.setItem("key781_Y", jp.value);
};//------------------------------------------var pcGetV35 = AspectScript.Pointcuts.get("K");
var pcSetV35 = AspectScript.Pointcuts.set("K");

var aspectGetV35 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV35, persistAdviceGetV35);
AspectScript.deployOn(aspectGetV35, later);

var aspectSetV35 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV35, persistAdviceSetV35);
AspectScript.deployOn(aspectSetV35, later);

var persistAdviceGetV35 = function(jp) {
  return storage.getItem("key668_K");
};

var persistAdviceSetV35 = function(jp) {
  storage.setItem("key668_K", jp.value);
};//------------------------------------------var pcGetV36 = AspectScript.Pointcuts.get("P");
var pcSetV36 = AspectScript.Pointcuts.set("P");

var aspectGetV36 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV36, persistAdviceGetV36);
AspectScript.deployOn(aspectGetV36, dump);

var aspectSetV36 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV36, persistAdviceSetV36);
AspectScript.deployOn(aspectSetV36, dump);

var persistAdviceGetV36 = function(jp) {
  return storage.getItem("key340_P");
};

var persistAdviceSetV36 = function(jp) {
  storage.setItem("key340_P", jp.value);
};//------------------------------------------var pcGetV37 = AspectScript.Pointcuts.get("I");
var pcSetV37 = AspectScript.Pointcuts.set("I");

var aspectGetV37 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV37, persistAdviceGetV37);
AspectScript.deployOn(aspectGetV37, merge);

var aspectSetV37 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV37, persistAdviceSetV37);
AspectScript.deployOn(aspectSetV37, merge);

var persistAdviceGetV37 = function(jp) {
  return storage.getItem("key730_I");
};

var persistAdviceSetV37 = function(jp) {
  storage.setItem("key730_I", jp.value);
};//------------------------------------------var pcGetV38 = AspectScript.Pointcuts.get("y");
var pcSetV38 = AspectScript.Pointcuts.set("y");

var aspectGetV38 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV38, persistAdviceGetV38);
AspectScript.deployOn(aspectGetV38, _setAttribute);

var aspectSetV38 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV38, persistAdviceSetV38);
AspectScript.deployOn(aspectSetV38, _setAttribute);

var persistAdviceGetV38 = function(jp) {
  return storage.getItem("key536_y");
};

var persistAdviceSetV38 = function(jp) {
  storage.setItem("key536_y", jp.value);
};//------------------------------------------var pcGetV39 = AspectScript.Pointcuts.get("s");
var pcSetV39 = AspectScript.Pointcuts.set("s");

var aspectGetV39 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV39, persistAdviceGetV39);
AspectScript.deployOn(aspectGetV39, getObj);

var aspectSetV39 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV39, persistAdviceSetV39);
AspectScript.deployOn(aspectSetV39, getObj);

var persistAdviceGetV39 = function(jp) {
  return storage.getItem("key298_s");
};

var persistAdviceSetV39 = function(jp) {
  storage.setItem("key298_s", jp.value);
};//------------------------------------------var pcGetV40 = AspectScript.Pointcuts.get("S");
var pcSetV40 = AspectScript.Pointcuts.set("S");

var aspectGetV40 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV40, persistAdviceGetV40);
AspectScript.deployOn(aspectGetV40, substitute);

var aspectSetV40 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV40, persistAdviceSetV40);
AspectScript.deployOn(aspectSetV40, substitute);

var persistAdviceGetV40 = function(jp) {
  return storage.getItem("key545_S");
};

var persistAdviceSetV40 = function(jp) {
  storage.setItem("key545_S", jp.value);
};//------------------------------------------var pcGetV41 = AspectScript.Pointcuts.get("G");
var pcSetV41 = AspectScript.Pointcuts.set("G");

var aspectGetV41 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV41, persistAdviceGetV41);
AspectScript.deployOn(aspectGetV41, _inDoc);

var aspectSetV41 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV41, persistAdviceSetV41);
AspectScript.deployOn(aspectSetV41, _inDoc);

var persistAdviceGetV41 = function(jp) {
  return storage.getItem("key417_G");
};

var persistAdviceSetV41 = function(jp) {
  storage.setItem("key417_G", jp.value);
};//------------------------------------------var pcGetV42 = AspectScript.Pointcuts.get("z");
var pcSetV42 = AspectScript.Pointcuts.set("z");

var aspectGetV42 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV42, persistAdviceGetV42);
AspectScript.deployOn(aspectGetV42, _removeClass);

var aspectSetV42 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV42, persistAdviceSetV42);
AspectScript.deployOn(aspectSetV42, _removeClass);

var persistAdviceGetV42 = function(jp) {
  return storage.getItem("key734_z");
};

var persistAdviceSetV42 = function(jp) {
  storage.setItem("key734_z", jp.value);
};//------------------------------------------var pcGetV43 = AspectScript.Pointcuts.get("J");
var pcSetV43 = AspectScript.Pointcuts.set("J");

var aspectGetV43 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV43, persistAdviceGetV43);
AspectScript.deployOn(aspectGetV43, augmentObject);

var aspectSetV43 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV43, persistAdviceSetV43);
AspectScript.deployOn(aspectSetV43, augmentObject);

var persistAdviceGetV43 = function(jp) {
  return storage.getItem("key513_J");
};

var persistAdviceSetV43 = function(jp) {
  storage.setItem("key513_J", jp.value);
};//------------------------------------------var pcGetV44 = AspectScript.Pointcuts.get("V");
var pcSetV44 = AspectScript.Pointcuts.set("V");

var aspectGetV44 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV44, persistAdviceGetV44);
AspectScript.deployOn(aspectGetV44, substitute);

var aspectSetV44 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV44, persistAdviceSetV44);
AspectScript.deployOn(aspectSetV44, substitute);

var persistAdviceGetV44 = function(jp) {
  return storage.getItem("key924_V");
};

var persistAdviceSetV44 = function(jp) {
  storage.setItem("key924_V", jp.value);
};//------------------------------------------var pcGetV45 = AspectScript.Pointcuts.get("z");
var pcSetV45 = AspectScript.Pointcuts.set("z");

var aspectGetV45 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV45, persistAdviceGetV45);
AspectScript.deployOn(aspectGetV45, Y);

var aspectSetV45 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV45, persistAdviceSetV45);
AspectScript.deployOn(aspectSetV45, Y);

var persistAdviceGetV45 = function(jp) {
  return storage.getItem("key941_z");
};

var persistAdviceSetV45 = function(jp) {
  storage.setItem("key941_z", jp.value);
};//------------------------------------------var pcGetV46 = AspectScript.Pointcuts.get("y");
var pcSetV46 = AspectScript.Pointcuts.set("y");

var aspectGetV46 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV46, persistAdviceGetV46);
AspectScript.deployOn(aspectGetV46, getClientRegion);

var aspectSetV46 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV46, persistAdviceSetV46);
AspectScript.deployOn(aspectSetV46, getClientRegion);

var persistAdviceGetV46 = function(jp) {
  return storage.getItem("key170_y");
};

var persistAdviceSetV46 = function(jp) {
  storage.setItem("key170_y", jp.value);
};//------------------------------------------var pcGetV47 = AspectScript.Pointcuts.get("A");
var pcSetV47 = AspectScript.Pointcuts.set("A");

var aspectGetV47 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV47, persistAdviceGetV47);
AspectScript.deployOn(aspectGetV47, YAHOO_namespace);

var aspectSetV47 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV47, persistAdviceSetV47);
AspectScript.deployOn(aspectSetV47, YAHOO_namespace);

var persistAdviceGetV47 = function(jp) {
  return storage.getItem("key388_A");
};

var persistAdviceSetV47 = function(jp) {
  storage.setItem("key388_A", jp.value);
};//------------------------------------------var pcGetV48 = AspectScript.Pointcuts.get("G");
var pcSetV48 = AspectScript.Pointcuts.set("G");

var aspectGetV48 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV48, persistAdviceGetV48);
AspectScript.deployOn(aspectGetV48, _hasClass);

var aspectSetV48 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV48, persistAdviceSetV48);
AspectScript.deployOn(aspectSetV48, _hasClass);

var persistAdviceGetV48 = function(jp) {
  return storage.getItem("key219_G");
};

var persistAdviceSetV48 = function(jp) {
  storage.setItem("key219_G", jp.value);
};//------------------------------------------var pcGetV49 = AspectScript.Pointcuts.get("t");
var pcSetV49 = AspectScript.Pointcuts.set("t");

var aspectGetV49 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV49, persistAdviceGetV49);
AspectScript.deployOn(aspectGetV49, getObj);

var aspectSetV49 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV49, persistAdviceSetV49);
AspectScript.deployOn(aspectSetV49, getObj);

var persistAdviceGetV49 = function(jp) {
  return storage.getItem("key799_t");
};

var persistAdviceSetV49 = function(jp) {
  storage.setItem("key799_t", jp.value);
};//------------------------------------------var pcGetV50 = AspectScript.Pointcuts.get("z");
var pcSetV50 = AspectScript.Pointcuts.set("z");

var aspectGetV50 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV50, persistAdviceGetV50);
AspectScript.deployOn(aspectGetV50, getElementsBy);

var aspectSetV50 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV50, persistAdviceSetV50);
AspectScript.deployOn(aspectSetV50, getElementsBy);

var persistAdviceGetV50 = function(jp) {
  return storage.getItem("key784_z");
};

var persistAdviceSetV50 = function(jp) {
  storage.setItem("key784_z", jp.value);
};//------------------------------------------var pcGetV51 = AspectScript.Pointcuts.get("AA");
var pcSetV51 = AspectScript.Pointcuts.set("AA");

var aspectGetV51 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV51, persistAdviceGetV51);
AspectScript.deployOn(aspectGetV51, getElementsBy);

var aspectSetV51 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV51, persistAdviceSetV51);
AspectScript.deployOn(aspectSetV51, getElementsBy);

var persistAdviceGetV51 = function(jp) {
  return storage.getItem("key435_AA");
};

var persistAdviceSetV51 = function(jp) {
  storage.setItem("key435_AA", jp.value);
};//------------------------------------------var pcGetV52 = AspectScript.Pointcuts.get("K");
var pcSetV52 = AspectScript.Pointcuts.set("K");

var aspectGetV52 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV52, persistAdviceGetV52);
AspectScript.deployOn(aspectGetV52, dump);

var aspectSetV52 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV52, persistAdviceSetV52);
AspectScript.deployOn(aspectSetV52, dump);

var persistAdviceGetV52 = function(jp) {
  return storage.getItem("key231_K");
};

var persistAdviceSetV52 = function(jp) {
  storage.setItem("key231_K", jp.value);
};//------------------------------------------var pcGetV53 = AspectScript.Pointcuts.get("x");
var pcSetV53 = AspectScript.Pointcuts.set("x");

var aspectGetV53 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV53, persistAdviceGetV53);
AspectScript.deployOn(aspectGetV53, _getAttribute);

var aspectSetV53 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV53, persistAdviceSetV53);
AspectScript.deployOn(aspectSetV53, _getAttribute);

var persistAdviceGetV53 = function(jp) {
  return storage.getItem("key968_x");
};

var persistAdviceSetV53 = function(jp) {
  storage.setItem("key968_x", jp.value);
};//------------------------------------------var pcGetV54 = AspectScript.Pointcuts.get("K");
var pcSetV54 = AspectScript.Pointcuts.set("K");

var aspectGetV54 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV54, persistAdviceGetV54);
AspectScript.deployOn(aspectGetV54, augmentObject);

var aspectSetV54 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV54, persistAdviceSetV54);
AspectScript.deployOn(aspectSetV54, augmentObject);

var persistAdviceGetV54 = function(jp) {
  return storage.getItem("key744_K");
};

var persistAdviceSetV54 = function(jp) {
  storage.setItem("key744_K", jp.value);
};//------------------------------------------var pcGetV55 = AspectScript.Pointcuts.get("G");
var pcSetV55 = AspectScript.Pointcuts.set("G");

var aspectGetV55 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV55, persistAdviceGetV55);
AspectScript.deployOn(aspectGetV55, getElementsBy);

var aspectSetV55 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV55, persistAdviceSetV55);
AspectScript.deployOn(aspectSetV55, getElementsBy);

var persistAdviceGetV55 = function(jp) {
  return storage.getItem("key24_G");
};

var persistAdviceSetV55 = function(jp) {
  storage.setItem("key24_G", jp.value);
};//------------------------------------------var pcGetV56 = AspectScript.Pointcuts.get("target");
var pcSetV56 = AspectScript.Pointcuts.set("target");

var aspectGetV56 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV56, persistAdviceGetV56);
AspectScript.deployOn(aspectGetV56, YAHOO_Finance_Charts_ULT_beaconInnerLinks);

var aspectSetV56 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV56, persistAdviceSetV56);
AspectScript.deployOn(aspectSetV56, YAHOO_Finance_Charts_ULT_beaconInnerLinks);

var persistAdviceGetV56 = function(jp) {
  return storage.getItem("key301_target");
};

var persistAdviceSetV56 = function(jp) {
  storage.setItem("key301_target", jp.value);
};//------------------------------------------var pcGetV57 = AspectScript.Pointcuts.get("x");
var pcSetV57 = AspectScript.Pointcuts.set("x");

var aspectGetV57 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV57, persistAdviceGetV57);
AspectScript.deployOn(aspectGetV57, getClientRegion);

var aspectSetV57 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV57, persistAdviceSetV57);
AspectScript.deployOn(aspectSetV57, getClientRegion);

var persistAdviceGetV57 = function(jp) {
  return storage.getItem("key976_x");
};

var persistAdviceSetV57 = function(jp) {
  storage.setItem("key976_x", jp.value);
};//------------------------------------------var pcGetV58 = AspectScript.Pointcuts.get("x");
var pcSetV58 = AspectScript.Pointcuts.set("x");

var aspectGetV58 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV58, persistAdviceGetV58);
AspectScript.deployOn(aspectGetV58, getChildrenBy);

var aspectSetV58 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV58, persistAdviceSetV58);
AspectScript.deployOn(aspectSetV58, getChildrenBy);

var persistAdviceGetV58 = function(jp) {
  return storage.getItem("key825_x");
};

var persistAdviceSetV58 = function(jp) {
  storage.setItem("key825_x", jp.value);
};//------------------------------------------var pcGetV59 = AspectScript.Pointcuts.get("Q");
var pcSetV59 = AspectScript.Pointcuts.set("Q");

var aspectGetV59 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV59, persistAdviceGetV59);
AspectScript.deployOn(aspectGetV59, dump);

var aspectSetV59 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV59, persistAdviceSetV59);
AspectScript.deployOn(aspectSetV59, dump);

var persistAdviceGetV59 = function(jp) {
  return storage.getItem("key632_Q");
};

var persistAdviceSetV59 = function(jp) {
  storage.setItem("key632_Q", jp.value);
};//------------------------------------------var pcGetV60 = AspectScript.Pointcuts.get("d");
var pcSetV60 = AspectScript.Pointcuts.set("d");

var aspectGetV60 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV60, persistAdviceGetV60);
AspectScript.deployOn(aspectGetV60, set);

var aspectSetV60 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV60, persistAdviceSetV60);
AspectScript.deployOn(aspectSetV60, set);

var persistAdviceGetV60 = function(jp) {
  return storage.getItem("key949_d");
};

var persistAdviceSetV60 = function(jp) {
  storage.setItem("key949_d", jp.value);
};//------------------------------------------var pcGetV61 = AspectScript.Pointcuts.get("s");
var pcSetV61 = AspectScript.Pointcuts.set("s");

var aspectGetV61 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV61, persistAdviceGetV61);
AspectScript.deployOn(aspectGetV61, getObj);

var aspectSetV61 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV61, persistAdviceSetV61);
AspectScript.deployOn(aspectSetV61, getObj);

var persistAdviceGetV61 = function(jp) {
  return storage.getItem("key204_s");
};

var persistAdviceSetV61 = function(jp) {
  storage.setItem("key204_s", jp.value);
};//------------------------------------------var pcGetV62 = AspectScript.Pointcuts.get("L");
var pcSetV62 = AspectScript.Pointcuts.set("L");

var aspectGetV62 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV62, persistAdviceGetV62);
AspectScript.deployOn(aspectGetV62, merge);

var aspectSetV62 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV62, persistAdviceSetV62);
AspectScript.deployOn(aspectSetV62, merge);

var persistAdviceGetV62 = function(jp) {
  return storage.getItem("key909_L");
};

var persistAdviceSetV62 = function(jp) {
  storage.setItem("key909_L", jp.value);
};//------------------------------------------var pcGetV63 = AspectScript.Pointcuts.get("U");
var pcSetV63 = AspectScript.Pointcuts.set("U");

var aspectGetV63 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV63, persistAdviceGetV63);
AspectScript.deployOn(aspectGetV63, substitute);

var aspectSetV63 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV63, persistAdviceSetV63);
AspectScript.deployOn(aspectSetV63, substitute);

var persistAdviceGetV63 = function(jp) {
  return storage.getItem("key310_U");
};

var persistAdviceSetV63 = function(jp) {
  storage.setItem("key310_U", jp.value);
};//------------------------------------------var pcGetV64 = AspectScript.Pointcuts.get("A");
var pcSetV64 = AspectScript.Pointcuts.set("A");

var aspectGetV64 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV64, persistAdviceGetV64);
AspectScript.deployOn(aspectGetV64, asual_util_Browser);

var aspectSetV64 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV64, persistAdviceSetV64);
AspectScript.deployOn(aspectSetV64, asual_util_Browser);

var persistAdviceGetV64 = function(jp) {
  return storage.getItem("key782_A");
};

var persistAdviceSetV64 = function(jp) {
  storage.setItem("key782_A", jp.value);
};//------------------------------------------var pcGetV65 = AspectScript.Pointcuts.get("AD");
var pcSetV65 = AspectScript.Pointcuts.set("AD");

var aspectGetV65 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV65, persistAdviceGetV65);
AspectScript.deployOn(aspectGetV65, _setXY);

var aspectSetV65 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV65, persistAdviceSetV65);
AspectScript.deployOn(aspectSetV65, _setXY);

var persistAdviceGetV65 = function(jp) {
  return storage.getItem("key384_AD");
};

var persistAdviceSetV65 = function(jp) {
  storage.setItem("key384_AD", jp.value);
};//------------------------------------------var pcGetV66 = AspectScript.Pointcuts.get("y");
var pcSetV66 = AspectScript.Pointcuts.set("y");

var aspectGetV66 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV66, persistAdviceGetV66);
AspectScript.deployOn(aspectGetV66, Y);

var aspectSetV66 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV66, persistAdviceSetV66);
AspectScript.deployOn(aspectSetV66, Y);

var persistAdviceGetV66 = function(jp) {
  return storage.getItem("key612_y");
};

var persistAdviceSetV66 = function(jp) {
  storage.setItem("key612_y", jp.value);
};//------------------------------------------var pcGetV67 = AspectScript.Pointcuts.get("s");
var pcSetV67 = AspectScript.Pointcuts.set("s");

var aspectGetV67 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV67, persistAdviceGetV67);
AspectScript.deployOn(aspectGetV67, get);

var aspectSetV67 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV67, persistAdviceSetV67);
AspectScript.deployOn(aspectSetV67, get);

var persistAdviceGetV67 = function(jp) {
  return storage.getItem("key428_s");
};

var persistAdviceSetV67 = function(jp) {
  storage.setItem("key428_s", jp.value);
};//------------------------------------------var pcGetV68 = AspectScript.Pointcuts.get("i");
var pcSetV68 = AspectScript.Pointcuts.set("i");

var aspectGetV68 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV68, persistAdviceGetV68);
AspectScript.deployOn(aspectGetV68, set);

var aspectSetV68 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV68, persistAdviceSetV68);
AspectScript.deployOn(aspectSetV68, set);

var persistAdviceGetV68 = function(jp) {
  return storage.getItem("key152_i");
};

var persistAdviceSetV68 = function(jp) {
  storage.setItem("key152_i", jp.value);
};//------------------------------------------var pcGetV69 = AspectScript.Pointcuts.get("y");
var pcSetV69 = AspectScript.Pointcuts.set("y");

var aspectGetV69 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV69, persistAdviceGetV69);
AspectScript.deployOn(aspectGetV69, batch);

var aspectSetV69 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV69, persistAdviceSetV69);
AspectScript.deployOn(aspectSetV69, batch);

var persistAdviceGetV69 = function(jp) {
  return storage.getItem("key582_y");
};

var persistAdviceSetV69 = function(jp) {
  storage.setItem("key582_y", jp.value);
};//------------------------------------------var pcGetV70 = AspectScript.Pointcuts.get("sym");
var pcSetV70 = AspectScript.Pointcuts.set("sym");

var aspectGetV70 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV70, persistAdviceGetV70);
AspectScript.deployOn(aspectGetV70, checkChartPrefs);

var aspectSetV70 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV70, persistAdviceSetV70);
AspectScript.deployOn(aspectSetV70, checkChartPrefs);

var persistAdviceGetV70 = function(jp) {
  return storage.getItem("key413_sym");
};

var persistAdviceSetV70 = function(jp) {
  storage.setItem("key413_sym", jp.value);
};//------------------------------------------var pcGetV71 = AspectScript.Pointcuts.get("prop");
var pcSetV71 = AspectScript.Pointcuts.set("prop");

var aspectGetV71 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV71, persistAdviceGetV71);
AspectScript.deployOn(aspectGetV71, YFC_emailChart);

var aspectSetV71 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV71, persistAdviceSetV71);
AspectScript.deployOn(aspectSetV71, YFC_emailChart);

var persistAdviceGetV71 = function(jp) {
  return storage.getItem("key411_prop");
};

var persistAdviceSetV71 = function(jp) {
  storage.setItem("key411_prop", jp.value);
};//------------------------------------------var pcGetV72 = AspectScript.Pointcuts.get("D");
var pcSetV72 = AspectScript.Pointcuts.set("D");

var aspectGetV72 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV72, persistAdviceGetV72);
AspectScript.deployOn(aspectGetV72, YAHOO_namespace);

var aspectSetV72 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV72, persistAdviceSetV72);
AspectScript.deployOn(aspectSetV72, YAHOO_namespace);

var persistAdviceGetV72 = function(jp) {
  return storage.getItem("key867_D");
};

var persistAdviceSetV72 = function(jp) {
  storage.setItem("key867_D", jp.value);
};//------------------------------------------var pcGetV73 = AspectScript.Pointcuts.get("G");
var pcSetV73 = AspectScript.Pointcuts.set("G");

var aspectGetV73 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV73, persistAdviceGetV73);
AspectScript.deployOn(aspectGetV73, getChildrenBy);

var aspectSetV73 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV73, persistAdviceSetV73);
AspectScript.deployOn(aspectSetV73, getChildrenBy);

var persistAdviceGetV73 = function(jp) {
  return storage.getItem("key328_G");
};

var persistAdviceSetV73 = function(jp) {
  storage.setItem("key328_G", jp.value);
};//------------------------------------------var pcGetV74 = AspectScript.Pointcuts.get("title");
var pcSetV74 = AspectScript.Pointcuts.set("title");

var aspectGetV74 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV74, persistAdviceGetV74);
AspectScript.deployOn(aspectGetV74, YFC_emailChart);

var aspectSetV74 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV74, persistAdviceSetV74);
AspectScript.deployOn(aspectSetV74, YFC_emailChart);

var persistAdviceGetV74 = function(jp) {
  return storage.getItem("key165_title");
};

var persistAdviceSetV74 = function(jp) {
  storage.setItem("key165_title", jp.value);
};//------------------------------------------var pcGetV75 = AspectScript.Pointcuts.get("Y");
var pcSetV75 = AspectScript.Pointcuts.set("Y");

var aspectGetV75 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV75, persistAdviceGetV75);
AspectScript.deployOn(aspectGetV75, getDocumentHeight);

var aspectSetV75 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV75, persistAdviceSetV75);
AspectScript.deployOn(aspectSetV75, getDocumentHeight);

var persistAdviceGetV75 = function(jp) {
  return storage.getItem("key419_Y");
};

var persistAdviceSetV75 = function(jp) {
  storage.setItem("key419_Y", jp.value);
};//------------------------------------------var pcGetV76 = AspectScript.Pointcuts.get("M");
var pcSetV76 = AspectScript.Pointcuts.set("M");

var aspectGetV76 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV76, persistAdviceGetV76);
AspectScript.deployOn(aspectGetV76, _IEEnumFix);

var aspectSetV76 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV76, persistAdviceSetV76);
AspectScript.deployOn(aspectSetV76, _IEEnumFix);

var persistAdviceGetV76 = function(jp) {
  return storage.getItem("key957_M");
};

var persistAdviceSetV76 = function(jp) {
  storage.setItem("key957_M", jp.value);
};//------------------------------------------var pcGetV77 = AspectScript.Pointcuts.get("y");
var pcSetV77 = AspectScript.Pointcuts.set("y");

var aspectGetV77 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV77, persistAdviceGetV77);
AspectScript.deployOn(aspectGetV77, get);

var aspectSetV77 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV77, persistAdviceSetV77);
AspectScript.deployOn(aspectSetV77, get);

var persistAdviceGetV77 = function(jp) {
  return storage.getItem("key808_y");
};

var persistAdviceSetV77 = function(jp) {
  storage.setItem("key808_y", jp.value);
};//------------------------------------------var pcGetV78 = AspectScript.Pointcuts.get("AA");
var pcSetV78 = AspectScript.Pointcuts.set("AA");

var aspectGetV78 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV78, persistAdviceGetV78);
AspectScript.deployOn(aspectGetV78, getElementsByClassName);

var aspectSetV78 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV78, persistAdviceSetV78);
AspectScript.deployOn(aspectSetV78, getElementsByClassName);

var persistAdviceGetV78 = function(jp) {
  return storage.getItem("key621_AA");
};

var persistAdviceSetV78 = function(jp) {
  storage.setItem("key621_AA", jp.value);
};//------------------------------------------var pcGetV79 = AspectScript.Pointcuts.get("B");
var pcSetV79 = AspectScript.Pointcuts.set("B");

var aspectGetV79 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV79, persistAdviceGetV79);
AspectScript.deployOn(aspectGetV79, YAHOO_log);

var aspectSetV79 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV79, persistAdviceSetV79);
AspectScript.deployOn(aspectSetV79, YAHOO_log);

var persistAdviceGetV79 = function(jp) {
  return storage.getItem("key195_B");
};

var persistAdviceSetV79 = function(jp) {
  storage.setItem("key195_B", jp.value);
};//------------------------------------------var pcGetV80 = AspectScript.Pointcuts.get("M");
var pcSetV80 = AspectScript.Pointcuts.set("M");

var aspectGetV80 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV80, persistAdviceGetV80);
AspectScript.deployOn(aspectGetV80, dump);

var aspectSetV80 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV80, persistAdviceSetV80);
AspectScript.deployOn(aspectSetV80, dump);

var persistAdviceGetV80 = function(jp) {
  return storage.getItem("key482_M");
};

var persistAdviceSetV80 = function(jp) {
  storage.setItem("key482_M", jp.value);
};//------------------------------------------var pcGetV81 = AspectScript.Pointcuts.get("G");
var pcSetV81 = AspectScript.Pointcuts.set("G");

var aspectGetV81 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV81, persistAdviceGetV81);
AspectScript.deployOn(aspectGetV81, _replaceClass);

var aspectSetV81 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV81, persistAdviceSetV81);
AspectScript.deployOn(aspectSetV81, _replaceClass);

var persistAdviceGetV81 = function(jp) {
  return storage.getItem("key361_G");
};

var persistAdviceSetV81 = function(jp) {
  storage.setItem("key361_G", jp.value);
};//------------------------------------------var pcGetV82 = AspectScript.Pointcuts.get("O");
var pcSetV82 = AspectScript.Pointcuts.set("O");

var aspectGetV82 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV82, persistAdviceGetV82);
AspectScript.deployOn(aspectGetV82, dump);

var aspectSetV82 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV82, persistAdviceSetV82);
AspectScript.deployOn(aspectSetV82, dump);

var persistAdviceGetV82 = function(jp) {
  return storage.getItem("key668_O");
};

var persistAdviceSetV82 = function(jp) {
  storage.setItem("key668_O", jp.value);
};//------------------------------------------var pcGetV83 = AspectScript.Pointcuts.get("O");
var pcSetV83 = AspectScript.Pointcuts.set("O");

var aspectGetV83 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV83, persistAdviceGetV83);
AspectScript.deployOn(aspectGetV83, later);

var aspectSetV83 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV83, persistAdviceSetV83);
AspectScript.deployOn(aspectSetV83, later);

var persistAdviceGetV83 = function(jp) {
  return storage.getItem("key880_O");
};

var persistAdviceSetV83 = function(jp) {
  storage.setItem("key880_O", jp.value);
};//------------------------------------------var pcGetV84 = AspectScript.Pointcuts.get("N");
var pcSetV84 = AspectScript.Pointcuts.set("N");

var aspectGetV84 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV84, persistAdviceGetV84);
AspectScript.deployOn(aspectGetV84, substitute);

var aspectSetV84 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV84, persistAdviceSetV84);
AspectScript.deployOn(aspectSetV84, substitute);

var persistAdviceGetV84 = function(jp) {
  return storage.getItem("key163_N");
};

var persistAdviceSetV84 = function(jp) {
  storage.setItem("key163_N", jp.value);
};//------------------------------------------var pcGetV85 = AspectScript.Pointcuts.get("G");
var pcSetV85 = AspectScript.Pointcuts.set("G");

var aspectGetV85 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV85, persistAdviceGetV85);
AspectScript.deployOn(aspectGetV85, isAncestor);

var aspectSetV85 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV85, persistAdviceSetV85);
AspectScript.deployOn(aspectSetV85, isAncestor);

var persistAdviceGetV85 = function(jp) {
  return storage.getItem("key671_G");
};

var persistAdviceSetV85 = function(jp) {
  storage.setItem("key671_G", jp.value);
};//------------------------------------------var pcGetV86 = AspectScript.Pointcuts.get("AA");
var pcSetV86 = AspectScript.Pointcuts.set("AA");

var aspectGetV86 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV86, persistAdviceGetV86);
AspectScript.deployOn(aspectGetV86, _setXY);

var aspectSetV86 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV86, persistAdviceSetV86);
AspectScript.deployOn(aspectSetV86, _setXY);

var persistAdviceGetV86 = function(jp) {
  return storage.getItem("key971_AA");
};

var persistAdviceSetV86 = function(jp) {
  storage.setItem("key971_AA", jp.value);
};//------------------------------------------var pcGetV87 = AspectScript.Pointcuts.get("G");
var pcSetV87 = AspectScript.Pointcuts.set("G");

var aspectGetV87 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV87, persistAdviceGetV87);
AspectScript.deployOn(aspectGetV87, batch);

var aspectSetV87 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV87, persistAdviceSetV87);
AspectScript.deployOn(aspectSetV87, batch);

var persistAdviceGetV87 = function(jp) {
  return storage.getItem("key495_G");
};

var persistAdviceSetV87 = function(jp) {
  storage.setItem("key495_G", jp.value);
};//------------------------------------------var pcGetV88 = AspectScript.Pointcuts.get("y");
var pcSetV88 = AspectScript.Pointcuts.set("y");

var aspectGetV88 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV88, persistAdviceGetV88);
AspectScript.deployOn(aspectGetV88, _setXY);

var aspectSetV88 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV88, persistAdviceSetV88);
AspectScript.deployOn(aspectSetV88, _setXY);

var persistAdviceGetV88 = function(jp) {
  return storage.getItem("key580_y");
};

var persistAdviceSetV88 = function(jp) {
  storage.setItem("key580_y", jp.value);
};//------------------------------------------var pcGetV89 = AspectScript.Pointcuts.get("Q");
var pcSetV89 = AspectScript.Pointcuts.set("Q");

var aspectGetV89 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV89, persistAdviceGetV89);
AspectScript.deployOn(aspectGetV89, substitute);

var aspectSetV89 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV89, persistAdviceSetV89);
AspectScript.deployOn(aspectSetV89, substitute);

var persistAdviceGetV89 = function(jp) {
  return storage.getItem("key304_Q");
};

var persistAdviceSetV89 = function(jp) {
  storage.setItem("key304_Q", jp.value);
};//------------------------------------------var pcGetV90 = AspectScript.Pointcuts.get("F");
var pcSetV90 = AspectScript.Pointcuts.set("F");

var aspectGetV90 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV90, persistAdviceGetV90);
AspectScript.deployOn(aspectGetV90, YAHOO_register);

var aspectSetV90 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV90, persistAdviceSetV90);
AspectScript.deployOn(aspectSetV90, YAHOO_register);

var persistAdviceGetV90 = function(jp) {
  return storage.getItem("key666_F");
};

var persistAdviceSetV90 = function(jp) {
  storage.setItem("key666_F", jp.value);
};//------------------------------------------var pcGetV91 = AspectScript.Pointcuts.get("i");
var pcSetV91 = AspectScript.Pointcuts.set("i");

var aspectGetV91 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV91, persistAdviceGetV91);
AspectScript.deployOn(aspectGetV91, getObj);

var aspectSetV91 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV91, persistAdviceSetV91);
AspectScript.deployOn(aspectSetV91, getObj);

var persistAdviceGetV91 = function(jp) {
  return storage.getItem("key240_i");
};

var persistAdviceSetV91 = function(jp) {
  storage.setItem("key240_i", jp.value);
};//------------------------------------------var pcGetV92 = AspectScript.Pointcuts.get("K");
var pcSetV92 = AspectScript.Pointcuts.set("K");

var aspectGetV92 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV92, persistAdviceGetV92);
AspectScript.deployOn(aspectGetV92, substitute);

var aspectSetV92 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV92, persistAdviceSetV92);
AspectScript.deployOn(aspectSetV92, substitute);

var persistAdviceGetV92 = function(jp) {
  return storage.getItem("key633_K");
};

var persistAdviceSetV92 = function(jp) {
  storage.setItem("key633_K", jp.value);
};//------------------------------------------var pcGetV93 = AspectScript.Pointcuts.get("G");
var pcSetV93 = AspectScript.Pointcuts.set("G");

var aspectGetV93 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV93, persistAdviceGetV93);
AspectScript.deployOn(aspectGetV93, _addClass);

var aspectSetV93 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV93, persistAdviceSetV93);
AspectScript.deployOn(aspectSetV93, _addClass);

var persistAdviceGetV93 = function(jp) {
  return storage.getItem("key722_G");
};

var persistAdviceSetV93 = function(jp) {
  storage.setItem("key722_G", jp.value);
};//------------------------------------------var pcGetV94 = AspectScript.Pointcuts.get("c");
var pcSetV94 = AspectScript.Pointcuts.set("c");

var aspectGetV94 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV94, persistAdviceGetV94);
AspectScript.deployOn(aspectGetV94, get);

var aspectSetV94 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV94, persistAdviceSetV94);
AspectScript.deployOn(aspectSetV94, get);

var persistAdviceGetV94 = function(jp) {
  return storage.getItem("key210_c");
};

var persistAdviceSetV94 = function(jp) {
  storage.setItem("key210_c", jp.value);
};//------------------------------------------var pcGetV95 = AspectScript.Pointcuts.get("K");
var pcSetV95 = AspectScript.Pointcuts.set("K");

var aspectGetV95 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV95, persistAdviceGetV95);
AspectScript.deployOn(aspectGetV95, merge);

var aspectSetV95 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV95, persistAdviceSetV95);
AspectScript.deployOn(aspectSetV95, merge);

var persistAdviceGetV95 = function(jp) {
  return storage.getItem("key425_K");
};

var persistAdviceSetV95 = function(jp) {
  storage.setItem("key425_K", jp.value);
};//------------------------------------------var pcGetV96 = AspectScript.Pointcuts.get("i");
var pcSetV96 = AspectScript.Pointcuts.set("i");

var aspectGetV96 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV96, persistAdviceGetV96);
AspectScript.deployOn(aspectGetV96, getObj);

var aspectSetV96 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV96, persistAdviceSetV96);
AspectScript.deployOn(aspectSetV96, getObj);

var persistAdviceGetV96 = function(jp) {
  return storage.getItem("key495_i");
};

var persistAdviceSetV96 = function(jp) {
  storage.setItem("key495_i", jp.value);
};//------------------------------------------var pcGetV97 = AspectScript.Pointcuts.get("E");
var pcSetV97 = AspectScript.Pointcuts.set("E");

var aspectGetV97 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV97, persistAdviceGetV97);
AspectScript.deployOn(aspectGetV97, YAHOO_namespace);

var aspectSetV97 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV97, persistAdviceSetV97);
AspectScript.deployOn(aspectSetV97, YAHOO_namespace);

var persistAdviceGetV97 = function(jp) {
  return storage.getItem("key282_E");
};

var persistAdviceSetV97 = function(jp) {
  storage.setItem("key282_E", jp.value);
};//------------------------------------------var pcGetV98 = AspectScript.Pointcuts.get("nav");
var pcSetV98 = AspectScript.Pointcuts.set("nav");

var aspectGetV98 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV98, persistAdviceGetV98);
AspectScript.deployOn(aspectGetV98, YAHOO_Finance_resetNav);

var aspectSetV98 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV98, persistAdviceSetV98);
AspectScript.deployOn(aspectSetV98, YAHOO_Finance_resetNav);

var persistAdviceGetV98 = function(jp) {
  return storage.getItem("key296_nav");
};

var persistAdviceSetV98 = function(jp) {
  storage.setItem("key296_nav", jp.value);
};//------------------------------------------var pcGetV99 = AspectScript.Pointcuts.get("value");
var pcSetV99 = AspectScript.Pointcuts.set("value");

var aspectGetV99 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV99, persistAdviceGetV99);
AspectScript.deployOn(aspectGetV99, get);

var aspectSetV99 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV99, persistAdviceSetV99);
AspectScript.deployOn(aspectSetV99, get);

var persistAdviceGetV99 = function(jp) {
  return storage.getItem("key555_value");
};

var persistAdviceSetV99 = function(jp) {
  storage.setItem("key555_value", jp.value);
};//------------------------------------------var pcGetV100 = AspectScript.Pointcuts.get("a");
var pcSetV100 = AspectScript.Pointcuts.set("a");

var aspectGetV100 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV100, persistAdviceGetV100);
AspectScript.deployOn(aspectGetV100, getObj);

var aspectSetV100 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV100, persistAdviceSetV100);
AspectScript.deployOn(aspectSetV100, getObj);

var persistAdviceGetV100 = function(jp) {
  return storage.getItem("key914_a");
};

var persistAdviceSetV100 = function(jp) {
  storage.setItem("key914_a", jp.value);
};//------------------------------------------var pcGetV101 = AspectScript.Pointcuts.get("O");
var pcSetV101 = AspectScript.Pointcuts.set("O");

var aspectGetV101 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV101, persistAdviceGetV101);
AspectScript.deployOn(aspectGetV101, substitute);

var aspectSetV101 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV101, persistAdviceSetV101);
AspectScript.deployOn(aspectSetV101, substitute);

var persistAdviceGetV101 = function(jp) {
  return storage.getItem("key352_O");
};

var persistAdviceSetV101 = function(jp) {
  storage.setItem("key352_O", jp.value);
};//------------------------------------------var pcGetV102 = AspectScript.Pointcuts.get("F");
var pcSetV102 = AspectScript.Pointcuts.set("F");

var aspectGetV102 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV102, persistAdviceGetV102);
AspectScript.deployOn(aspectGetV102, asual_util_Browser);

var aspectSetV102 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV102, persistAdviceSetV102);
AspectScript.deployOn(aspectSetV102, asual_util_Browser);

var persistAdviceGetV102 = function(jp) {
  return storage.getItem("key366_F");
};

var persistAdviceSetV102 = function(jp) {
  storage.setItem("key366_F", jp.value);
};//------------------------------------------var pcGetV103 = AspectScript.Pointcuts.get("charturl");
var pcSetV103 = AspectScript.Pointcuts.set("charturl");

var aspectGetV103 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV103, persistAdviceGetV103);
AspectScript.deployOn(aspectGetV103, YFC_emailChart);

var aspectSetV103 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV103, persistAdviceSetV103);
AspectScript.deployOn(aspectSetV103, YFC_emailChart);

var persistAdviceGetV103 = function(jp) {
  return storage.getItem("key831_charturl");
};

var persistAdviceSetV103 = function(jp) {
  storage.setItem("key831_charturl", jp.value);
};//------------------------------------------var pcGetV104 = AspectScript.Pointcuts.get("G");
var pcSetV104 = AspectScript.Pointcuts.set("G");

var aspectGetV104 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV104, persistAdviceGetV104);
AspectScript.deployOn(aspectGetV104, getElementsByClassName);

var aspectSetV104 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV104, persistAdviceSetV104);
AspectScript.deployOn(aspectSetV104, getElementsByClassName);

var persistAdviceGetV104 = function(jp) {
  return storage.getItem("key879_G");
};

var persistAdviceSetV104 = function(jp) {
  storage.setItem("key879_G", jp.value);
};//------------------------------------------var pcGetV105 = AspectScript.Pointcuts.get("L");
var pcSetV105 = AspectScript.Pointcuts.set("L");

var aspectGetV105 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV105, persistAdviceGetV105);
AspectScript.deployOn(aspectGetV105, _IEEnumFix);

var aspectSetV105 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV105, persistAdviceSetV105);
AspectScript.deployOn(aspectSetV105, _IEEnumFix);

var persistAdviceGetV105 = function(jp) {
  return storage.getItem("key552_L");
};

var persistAdviceSetV105 = function(jp) {
  storage.setItem("key552_L", jp.value);
};//------------------------------------------var pcGetV106 = AspectScript.Pointcuts.get("B");
var pcSetV106 = AspectScript.Pointcuts.set("B");

var aspectGetV106 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV106, persistAdviceGetV106);
AspectScript.deployOn(aspectGetV106, YAHOO_namespace);

var aspectSetV106 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV106, persistAdviceSetV106);
AspectScript.deployOn(aspectSetV106, YAHOO_namespace);

var persistAdviceGetV106 = function(jp) {
  return storage.getItem("key748_B");
};

var persistAdviceSetV106 = function(jp) {
  storage.setItem("key748_B", jp.value);
};//------------------------------------------var pcGetV107 = AspectScript.Pointcuts.get("escapedcharturl");
var pcSetV107 = AspectScript.Pointcuts.set("escapedcharturl");

var aspectGetV107 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV107, persistAdviceGetV107);
AspectScript.deployOn(aspectGetV107, YFC_emailChart);

var aspectSetV107 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV107, persistAdviceSetV107);
AspectScript.deployOn(aspectSetV107, YFC_emailChart);

var persistAdviceGetV107 = function(jp) {
  return storage.getItem("key429_escapedcharturl");
};

var persistAdviceSetV107 = function(jp) {
  storage.setItem("key429_escapedcharturl", jp.value);
};//------------------------------------------var pcGetV108 = AspectScript.Pointcuts.get("AA");
var pcSetV108 = AspectScript.Pointcuts.set("AA");

var aspectGetV108 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV108, persistAdviceGetV108);
AspectScript.deployOn(aspectGetV108, _replaceClass);

var aspectSetV108 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV108, persistAdviceSetV108);
AspectScript.deployOn(aspectSetV108, _replaceClass);

var persistAdviceGetV108 = function(jp) {
  return storage.getItem("key662_AA");
};

var persistAdviceSetV108 = function(jp) {
  storage.setItem("key662_AA", jp.value);
};//------------------------------------------var pcGetV109 = AspectScript.Pointcuts.get("N");
var pcSetV109 = AspectScript.Pointcuts.set("N");

var aspectGetV109 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV109, persistAdviceGetV109);
AspectScript.deployOn(aspectGetV109, later);

var aspectSetV109 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV109, persistAdviceSetV109);
AspectScript.deployOn(aspectSetV109, later);

var persistAdviceGetV109 = function(jp) {
  return storage.getItem("key691_N");
};

var persistAdviceSetV109 = function(jp) {
  storage.setItem("key691_N", jp.value);
};//------------------------------------------var pcGetV110 = AspectScript.Pointcuts.get("arr");
var pcSetV110 = AspectScript.Pointcuts.set("arr");

var aspectGetV110 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV110, persistAdviceGetV110);
AspectScript.deployOn(aspectGetV110, YFC_extractValue);

var aspectSetV110 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV110, persistAdviceSetV110);
AspectScript.deployOn(aspectSetV110, YFC_extractValue);

var persistAdviceGetV110 = function(jp) {
  return storage.getItem("key2_arr");
};

var persistAdviceSetV110 = function(jp) {
  storage.setItem("key2_arr", jp.value);
};//------------------------------------------var pcGetV111 = AspectScript.Pointcuts.get("X");
var pcSetV111 = AspectScript.Pointcuts.set("X");

var aspectGetV111 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV111, persistAdviceGetV111);
AspectScript.deployOn(aspectGetV111, substitute);

var aspectSetV111 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV111, persistAdviceSetV111);
AspectScript.deployOn(aspectSetV111, substitute);

var persistAdviceGetV111 = function(jp) {
  return storage.getItem("key276_X");
};

var persistAdviceSetV111 = function(jp) {
  storage.setItem("key276_X", jp.value);
};//------------------------------------------var pcGetV112 = AspectScript.Pointcuts.get("x");
var pcSetV112 = AspectScript.Pointcuts.set("x");

var aspectGetV112 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV112, persistAdviceGetV112);
AspectScript.deployOn(aspectGetV112, _toCamel);

var aspectSetV112 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV112, persistAdviceSetV112);
AspectScript.deployOn(aspectSetV112, _toCamel);

var persistAdviceGetV112 = function(jp) {
  return storage.getItem("key596_x");
};

var persistAdviceSetV112 = function(jp) {
  storage.setItem("key596_x", jp.value);
};//------------------------------------------var pcGetV113 = AspectScript.Pointcuts.get("cstr");
var pcSetV113 = AspectScript.Pointcuts.set("cstr");

var aspectGetV113 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV113, persistAdviceGetV113);
AspectScript.deployOn(aspectGetV113, set);

var aspectSetV113 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV113, persistAdviceSetV113);
AspectScript.deployOn(aspectSetV113, set);

var persistAdviceGetV113 = function(jp) {
  return storage.getItem("key615_cstr");
};

var persistAdviceSetV113 = function(jp) {
  storage.setItem("key615_cstr", jp.value);
};//------------------------------------------var pcGetV114 = AspectScript.Pointcuts.get("content");
var pcSetV114 = AspectScript.Pointcuts.set("content");

var aspectGetV114 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV114, persistAdviceGetV114);
AspectScript.deployOn(aspectGetV114, YAHOO_Finance_resetNav);

var aspectSetV114 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV114, persistAdviceSetV114);
AspectScript.deployOn(aspectSetV114, YAHOO_Finance_resetNav);

var persistAdviceGetV114 = function(jp) {
  return storage.getItem("key728_content");
};

var persistAdviceSetV114 = function(jp) {
  storage.setItem("key728_content", jp.value);
};//------------------------------------------var pcGetV115 = AspectScript.Pointcuts.get("I");
var pcSetV115 = AspectScript.Pointcuts.set("I");

var aspectGetV115 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV115, persistAdviceGetV115);
AspectScript.deployOn(aspectGetV115, augmentProto);

var aspectSetV115 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV115, persistAdviceSetV115);
AspectScript.deployOn(aspectSetV115, augmentProto);

var persistAdviceGetV115 = function(jp) {
  return storage.getItem("key205_I");
};

var persistAdviceSetV115 = function(jp) {
  storage.setItem("key205_I", jp.value);
};//------------------------------------------var pcGetV116 = AspectScript.Pointcuts.get("D");
var pcSetV116 = AspectScript.Pointcuts.set("D");

var aspectGetV116 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV116, persistAdviceGetV116);
AspectScript.deployOn(aspectGetV116, asual_util_Browser);

var aspectSetV116 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV116, persistAdviceSetV116);
AspectScript.deployOn(aspectSetV116, asual_util_Browser);

var persistAdviceGetV116 = function(jp) {
  return storage.getItem("key704_D");
};

var persistAdviceSetV116 = function(jp) {
  storage.setItem("key704_D", jp.value);
};//------------------------------------------var pcGetV117 = AspectScript.Pointcuts.get("G");
var pcSetV117 = AspectScript.Pointcuts.set("G");

var aspectGetV117 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV117, persistAdviceGetV117);
AspectScript.deployOn(aspectGetV117, getDocumentWidth);

var aspectSetV117 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV117, persistAdviceSetV117);
AspectScript.deployOn(aspectSetV117, getDocumentWidth);

var persistAdviceGetV117 = function(jp) {
  return storage.getItem("key16_G");
};

var persistAdviceSetV117 = function(jp) {
  storage.setItem("key16_G", jp.value);
};//------------------------------------------var pcGetV118 = AspectScript.Pointcuts.get("I");
var pcSetV118 = AspectScript.Pointcuts.set("I");

var aspectGetV118 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV118, persistAdviceGetV118);
AspectScript.deployOn(aspectGetV118, substitute);

var aspectSetV118 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV118, persistAdviceSetV118);
AspectScript.deployOn(aspectSetV118, substitute);

var persistAdviceGetV118 = function(jp) {
  return storage.getItem("key713_I");
};

var persistAdviceSetV118 = function(jp) {
  storage.setItem("key713_I", jp.value);
};//------------------------------------------var pcGetV119 = AspectScript.Pointcuts.get("AC");
var pcSetV119 = AspectScript.Pointcuts.set("AC");

var aspectGetV119 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV119, persistAdviceGetV119);
AspectScript.deployOn(aspectGetV119, _setXY);

var aspectSetV119 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV119, persistAdviceSetV119);
AspectScript.deployOn(aspectSetV119, _setXY);

var persistAdviceGetV119 = function(jp) {
  return storage.getItem("key217_AC");
};

var persistAdviceSetV119 = function(jp) {
  storage.setItem("key217_AC", jp.value);
};//------------------------------------------var pcGetV120 = AspectScript.Pointcuts.get("G");
var pcSetV120 = AspectScript.Pointcuts.set("G");

var aspectGetV120 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV120, persistAdviceGetV120);
AspectScript.deployOn(aspectGetV120, _calcBorders);

var aspectSetV120 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV120, persistAdviceSetV120);
AspectScript.deployOn(aspectSetV120, _calcBorders);

var persistAdviceGetV120 = function(jp) {
  return storage.getItem("key59_G");
};

var persistAdviceSetV120 = function(jp) {
  storage.setItem("key59_G", jp.value);
};//------------------------------------------var pcGetV121 = AspectScript.Pointcuts.get("financeCookie");
var pcSetV121 = AspectScript.Pointcuts.set("financeCookie");

var aspectGetV121 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV121, persistAdviceGetV121);
AspectScript.deployOn(aspectGetV121, checkChartPrefs);

var aspectSetV121 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV121, persistAdviceSetV121);
AspectScript.deployOn(aspectSetV121, checkChartPrefs);

var persistAdviceGetV121 = function(jp) {
  return storage.getItem("key740_financeCookie");
};

var persistAdviceSetV121 = function(jp) {
  storage.setItem("key740_financeCookie", jp.value);
};//------------------------------------------var pcGetV122 = AspectScript.Pointcuts.get("G");
var pcSetV122 = AspectScript.Pointcuts.set("G");

var aspectGetV122 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV122, persistAdviceGetV122);
AspectScript.deployOn(aspectGetV122, YAHOO_register);

var aspectSetV122 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV122, persistAdviceSetV122);
AspectScript.deployOn(aspectSetV122, YAHOO_register);

var persistAdviceGetV122 = function(jp) {
  return storage.getItem("key57_G");
};

var persistAdviceSetV122 = function(jp) {
  storage.setItem("key57_G", jp.value);
};//------------------------------------------var pcGetV123 = AspectScript.Pointcuts.get("j");
var pcSetV123 = AspectScript.Pointcuts.set("j");

var aspectGetV123 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV123, persistAdviceGetV123);
AspectScript.deployOn(aspectGetV123, getObj);

var aspectSetV123 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV123, persistAdviceSetV123);
AspectScript.deployOn(aspectSetV123, getObj);

var persistAdviceGetV123 = function(jp) {
  return storage.getItem("key496_j");
};

var persistAdviceSetV123 = function(jp) {
  storage.setItem("key496_j", jp.value);
};//------------------------------------------var pcGetV124 = AspectScript.Pointcuts.get("Y");
var pcSetV124 = AspectScript.Pointcuts.set("Y");

var aspectGetV124 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV124, persistAdviceGetV124);
AspectScript.deployOn(aspectGetV124, batch);

var aspectSetV124 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV124, persistAdviceSetV124);
AspectScript.deployOn(aspectSetV124, batch);

var persistAdviceGetV124 = function(jp) {
  return storage.getItem("key270_Y");
};

var persistAdviceSetV124 = function(jp) {
  storage.setItem("key270_Y", jp.value);
};//------------------------------------------var pcGetV125 = AspectScript.Pointcuts.get("Y");
var pcSetV125 = AspectScript.Pointcuts.set("Y");

var aspectGetV125 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV125, persistAdviceGetV125);
AspectScript.deployOn(aspectGetV125, getViewportWidth);

var aspectSetV125 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV125, persistAdviceSetV125);
AspectScript.deployOn(aspectSetV125, getViewportWidth);

var persistAdviceGetV125 = function(jp) {
  return storage.getItem("key818_Y");
};

var persistAdviceSetV125 = function(jp) {
  storage.setItem("key818_Y", jp.value);
};//------------------------------------------var pcGetV126 = AspectScript.Pointcuts.get("Y");
var pcSetV126 = AspectScript.Pointcuts.set("Y");

var aspectGetV126 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV126, persistAdviceGetV126);
AspectScript.deployOn(aspectGetV126, _setXY);

var aspectSetV126 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV126, persistAdviceSetV126);
AspectScript.deployOn(aspectSetV126, _setXY);

var persistAdviceGetV126 = function(jp) {
  return storage.getItem("key611_Y");
};

var persistAdviceSetV126 = function(jp) {
  storage.setItem("key611_Y", jp.value);
};//------------------------------------------var pcGetV127 = AspectScript.Pointcuts.get("y");
var pcSetV127 = AspectScript.Pointcuts.set("y");

var aspectGetV127 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV127, persistAdviceGetV127);
AspectScript.deployOn(aspectGetV127, _addClass);

var aspectSetV127 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV127, persistAdviceSetV127);
AspectScript.deployOn(aspectSetV127, _addClass);

var persistAdviceGetV127 = function(jp) {
  return storage.getItem("key57_y");
};

var persistAdviceSetV127 = function(jp) {
  storage.setItem("key57_y", jp.value);
};//------------------------------------------var pcGetV128 = AspectScript.Pointcuts.get("G");
var pcSetV128 = AspectScript.Pointcuts.set("G");

var aspectGetV128 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV128, persistAdviceGetV128);
AspectScript.deployOn(aspectGetV128, _getClassRegex);

var aspectSetV128 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV128, persistAdviceSetV128);
AspectScript.deployOn(aspectSetV128, _getClassRegex);

var persistAdviceGetV128 = function(jp) {
  return storage.getItem("key894_G");
};

var persistAdviceSetV128 = function(jp) {
  storage.setItem("key894_G", jp.value);
};//------------------------------------------var pcGetV129 = AspectScript.Pointcuts.get("G");
var pcSetV129 = AspectScript.Pointcuts.set("G");

var aspectGetV129 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV129, persistAdviceGetV129);
AspectScript.deployOn(aspectGetV129, get);

var aspectSetV129 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV129, persistAdviceSetV129);
AspectScript.deployOn(aspectSetV129, get);

var persistAdviceGetV129 = function(jp) {
  return storage.getItem("key442_G");
};

var persistAdviceSetV129 = function(jp) {
  storage.setItem("key442_G", jp.value);
};//------------------------------------------var pcGetV130 = AspectScript.Pointcuts.get("AA");
var pcSetV130 = AspectScript.Pointcuts.set("AA");

var aspectGetV130 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV130, persistAdviceGetV130);
AspectScript.deployOn(aspectGetV130, _removeClass);

var aspectSetV130 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV130, persistAdviceSetV130);
AspectScript.deployOn(aspectSetV130, _removeClass);

var persistAdviceGetV130 = function(jp) {
  return storage.getItem("key306_AA");
};

var persistAdviceSetV130 = function(jp) {
  storage.setItem("key306_AA", jp.value);
};//------------------------------------------var pcGetV131 = AspectScript.Pointcuts.get("I");
var pcSetV131 = AspectScript.Pointcuts.set("I");

var aspectGetV131 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV131, persistAdviceGetV131);
AspectScript.deployOn(aspectGetV131, D);

var aspectSetV131 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV131, persistAdviceSetV131);
AspectScript.deployOn(aspectSetV131, D);

var persistAdviceGetV131 = function(jp) {
  return storage.getItem("key600_I");
};

var persistAdviceSetV131 = function(jp) {
  storage.setItem("key600_I", jp.value);
};//------------------------------------------var pcGetV132 = AspectScript.Pointcuts.get("j");
var pcSetV132 = AspectScript.Pointcuts.set("j");

var aspectGetV132 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV132, persistAdviceGetV132);
AspectScript.deployOn(aspectGetV132, getObj);

var aspectSetV132 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV132, persistAdviceSetV132);
AspectScript.deployOn(aspectSetV132, getObj);

var persistAdviceGetV132 = function(jp) {
  return storage.getItem("key466_j");
};

var persistAdviceSetV132 = function(jp) {
  storage.setItem("key466_j", jp.value);
};//------------------------------------------var pcGetV133 = AspectScript.Pointcuts.get("i");
var pcSetV133 = AspectScript.Pointcuts.set("i");

var aspectGetV133 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV133, persistAdviceGetV133);
AspectScript.deployOn(aspectGetV133, set);

var aspectSetV133 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV133, persistAdviceSetV133);
AspectScript.deployOn(aspectSetV133, set);

var persistAdviceGetV133 = function(jp) {
  return storage.getItem("key894_i");
};

var persistAdviceSetV133 = function(jp) {
  storage.setItem("key894_i", jp.value);
};//------------------------------------------var pcGetV134 = AspectScript.Pointcuts.get("z");
var pcSetV134 = AspectScript.Pointcuts.set("z");

var aspectGetV134 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV134, persistAdviceGetV134);
AspectScript.deployOn(aspectGetV134, _replaceClass);

var aspectSetV134 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV134, persistAdviceSetV134);
AspectScript.deployOn(aspectSetV134, _replaceClass);

var persistAdviceGetV134 = function(jp) {
  return storage.getItem("key114_z");
};

var persistAdviceSetV134 = function(jp) {
  storage.setItem("key114_z", jp.value);
};//------------------------------------------var pcGetV135 = AspectScript.Pointcuts.get("completeurl");
var pcSetV135 = AspectScript.Pointcuts.set("completeurl");

var aspectGetV135 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV135, persistAdviceGetV135);
AspectScript.deployOn(aspectGetV135, YFC_emailChart);

var aspectSetV135 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV135, persistAdviceSetV135);
AspectScript.deployOn(aspectSetV135, YFC_emailChart);

var persistAdviceGetV135 = function(jp) {
  return storage.getItem("key319_completeurl");
};

var persistAdviceSetV135 = function(jp) {
  storage.setItem("key319_completeurl", jp.value);
};//------------------------------------------var pcGetV136 = AspectScript.Pointcuts.get("G");
var pcSetV136 = AspectScript.Pointcuts.set("G");

var aspectGetV136 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV136, persistAdviceGetV136);
AspectScript.deployOn(aspectGetV136, getDocumentHeight);

var aspectSetV136 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV136, persistAdviceSetV136);
AspectScript.deployOn(aspectSetV136, getDocumentHeight);

var persistAdviceGetV136 = function(jp) {
  return storage.getItem("key962_G");
};

var persistAdviceSetV136 = function(jp) {
  storage.setItem("key962_G", jp.value);
};//------------------------------------------var pcGetV137 = AspectScript.Pointcuts.get("y");
var pcSetV137 = AspectScript.Pointcuts.set("y");

var aspectGetV137 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV137, persistAdviceGetV137);
AspectScript.deployOn(aspectGetV137, _hasClass);

var aspectSetV137 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV137, persistAdviceSetV137);
AspectScript.deployOn(aspectSetV137, _hasClass);

var persistAdviceGetV137 = function(jp) {
  return storage.getItem("key740_y");
};

var persistAdviceSetV137 = function(jp) {
  storage.setItem("key740_y", jp.value);
};//------------------------------------------var pcGetV138 = AspectScript.Pointcuts.get("z");
var pcSetV138 = AspectScript.Pointcuts.set("z");

var aspectGetV138 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV138, persistAdviceGetV138);
AspectScript.deployOn(aspectGetV138, getElementsByClassName);

var aspectSetV138 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV138, persistAdviceSetV138);
AspectScript.deployOn(aspectSetV138, getElementsByClassName);

var persistAdviceGetV138 = function(jp) {
  return storage.getItem("key311_z");
};

var persistAdviceSetV138 = function(jp) {
  storage.setItem("key311_z", jp.value);
};//------------------------------------------var pcGetV139 = AspectScript.Pointcuts.get("x");
var pcSetV139 = AspectScript.Pointcuts.set("x");

var aspectGetV139 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV139, persistAdviceGetV139);
AspectScript.deployOn(aspectGetV139, get);

var aspectSetV139 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV139, persistAdviceSetV139);
AspectScript.deployOn(aspectSetV139, get);

var persistAdviceGetV139 = function(jp) {
  return storage.getItem("key81_x");
};

var persistAdviceSetV139 = function(jp) {
  storage.setItem("key81_x", jp.value);
};//------------------------------------------var pcGetV140 = AspectScript.Pointcuts.get("J");
var pcSetV140 = AspectScript.Pointcuts.set("J");

var aspectGetV140 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV140, persistAdviceGetV140);
AspectScript.deployOn(aspectGetV140, augmentProto);

var aspectSetV140 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV140, persistAdviceSetV140);
AspectScript.deployOn(aspectSetV140, augmentProto);

var persistAdviceGetV140 = function(jp) {
  return storage.getItem("key205_J");
};

var persistAdviceSetV140 = function(jp) {
  storage.setItem("key205_J", jp.value);
};//------------------------------------------var pcGetV141 = AspectScript.Pointcuts.get("value");
var pcSetV141 = AspectScript.Pointcuts.set("value");

var aspectGetV141 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV141, persistAdviceGetV141);
AspectScript.deployOn(aspectGetV141, get);

var aspectSetV141 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV141, persistAdviceSetV141);
AspectScript.deployOn(aspectSetV141, get);

var persistAdviceGetV141 = function(jp) {
  return storage.getItem("key785_value");
};

var persistAdviceSetV141 = function(jp) {
  storage.setItem("key785_value", jp.value);
};//------------------------------------------var pcGetV142 = AspectScript.Pointcuts.get("P");
var pcSetV142 = AspectScript.Pointcuts.set("P");

var aspectGetV142 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV142, persistAdviceGetV142);
AspectScript.deployOn(aspectGetV142, substitute);

var aspectSetV142 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV142, persistAdviceSetV142);
AspectScript.deployOn(aspectSetV142, substitute);

var persistAdviceGetV142 = function(jp) {
  return storage.getItem("key598_P");
};

var persistAdviceSetV142 = function(jp) {
  storage.setItem("key598_P", jp.value);
};//------------------------------------------var pcGetV143 = AspectScript.Pointcuts.get("C");
var pcSetV143 = AspectScript.Pointcuts.set("C");

var aspectGetV143 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV143, persistAdviceGetV143);
AspectScript.deployOn(aspectGetV143, YAHOO_namespace);

var aspectSetV143 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV143, persistAdviceSetV143);
AspectScript.deployOn(aspectSetV143, YAHOO_namespace);

var persistAdviceGetV143 = function(jp) {
  return storage.getItem("key941_C");
};

var persistAdviceSetV143 = function(jp) {
  storage.setItem("key941_C", jp.value);
};//------------------------------------------var pcGetV144 = AspectScript.Pointcuts.get("x");
var pcSetV144 = AspectScript.Pointcuts.set("x");

var aspectGetV144 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV144, persistAdviceGetV144);
AspectScript.deployOn(aspectGetV144, getElementsBy);

var aspectSetV144 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV144, persistAdviceSetV144);
AspectScript.deployOn(aspectSetV144, getElementsBy);

var persistAdviceGetV144 = function(jp) {
  return storage.getItem("key369_x");
};

var persistAdviceSetV144 = function(jp) {
  storage.setItem("key369_x", jp.value);
};//------------------------------------------var pcGetV145 = AspectScript.Pointcuts.get("H");
var pcSetV145 = AspectScript.Pointcuts.set("H");

var aspectGetV145 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV145, persistAdviceGetV145);
AspectScript.deployOn(aspectGetV145, YAHOO_register);

var aspectSetV145 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV145, persistAdviceSetV145);
AspectScript.deployOn(aspectSetV145, YAHOO_register);

var persistAdviceGetV145 = function(jp) {
  return storage.getItem("key573_H");
};

var persistAdviceSetV145 = function(jp) {
  storage.setItem("key573_H", jp.value);
};//------------------------------------------var pcGetV146 = AspectScript.Pointcuts.get("AB");
var pcSetV146 = AspectScript.Pointcuts.set("AB");

var aspectGetV146 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV146, persistAdviceGetV146);
AspectScript.deployOn(aspectGetV146, get);

var aspectSetV146 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV146, persistAdviceSetV146);
AspectScript.deployOn(aspectSetV146, get);

var persistAdviceGetV146 = function(jp) {
  return storage.getItem("key507_AB");
};

var persistAdviceSetV146 = function(jp) {
  storage.setItem("key507_AB", jp.value);
};//------------------------------------------var pcGetV147 = AspectScript.Pointcuts.get("s");
var pcSetV147 = AspectScript.Pointcuts.set("s");

var aspectGetV147 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV147, persistAdviceGetV147);
AspectScript.deployOn(aspectGetV147, get);

var aspectSetV147 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV147, persistAdviceSetV147);
AspectScript.deployOn(aspectSetV147, get);

var persistAdviceGetV147 = function(jp) {
  return storage.getItem("key734_s");
};

var persistAdviceSetV147 = function(jp) {
  storage.setItem("key734_s", jp.value);
};//------------------------------------------var pcGetV148 = AspectScript.Pointcuts.get("aa");
var pcSetV148 = AspectScript.Pointcuts.set("aa");

var aspectGetV148 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV148, persistAdviceGetV148);
AspectScript.deployOn(aspectGetV148, getObj);

var aspectSetV148 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV148, persistAdviceSetV148);
AspectScript.deployOn(aspectSetV148, getObj);

var persistAdviceGetV148 = function(jp) {
  return storage.getItem("key155_aa");
};

var persistAdviceSetV148 = function(jp) {
  storage.setItem("key155_aa", jp.value);
};//------------------------------------------var pcGetV149 = AspectScript.Pointcuts.get("Y");
var pcSetV149 = AspectScript.Pointcuts.set("Y");

var aspectGetV149 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV149, persistAdviceGetV149);
AspectScript.deployOn(aspectGetV149, getViewportHeight);

var aspectSetV149 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV149, persistAdviceSetV149);
AspectScript.deployOn(aspectSetV149, getViewportHeight);

var persistAdviceGetV149 = function(jp) {
  return storage.getItem("key609_Y");
};

var persistAdviceSetV149 = function(jp) {
  storage.setItem("key609_Y", jp.value);
};//------------------------------------------var pcGetV150 = AspectScript.Pointcuts.get("C");
var pcSetV150 = AspectScript.Pointcuts.set("C");

var aspectGetV150 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV150, persistAdviceGetV150);
AspectScript.deployOn(aspectGetV150, YAHOO_register);

var aspectSetV150 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV150, persistAdviceSetV150);
AspectScript.deployOn(aspectSetV150, YAHOO_register);

var persistAdviceGetV150 = function(jp) {
  return storage.getItem("key353_C");
};

var persistAdviceSetV150 = function(jp) {
  storage.setItem("key353_C", jp.value);
};//------------------------------------------var pcGetV151 = AspectScript.Pointcuts.get("J");
var pcSetV151 = AspectScript.Pointcuts.set("J");

var aspectGetV151 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV151, persistAdviceGetV151);
AspectScript.deployOn(aspectGetV151, merge);

var aspectSetV151 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV151, persistAdviceSetV151);
AspectScript.deployOn(aspectSetV151, merge);

var persistAdviceGetV151 = function(jp) {
  return storage.getItem("key972_J");
};

var persistAdviceSetV151 = function(jp) {
  storage.setItem("key972_J", jp.value);
};//------------------------------------------var pcGetV152 = AspectScript.Pointcuts.get("N");
var pcSetV152 = AspectScript.Pointcuts.set("N");

var aspectGetV152 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV152, persistAdviceGetV152);
AspectScript.deployOn(aspectGetV152, augmentObject);

var aspectSetV152 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV152, persistAdviceSetV152);
AspectScript.deployOn(aspectSetV152, augmentObject);

var persistAdviceGetV152 = function(jp) {
  return storage.getItem("key31_N");
};

var persistAdviceSetV152 = function(jp) {
  storage.setItem("key31_N", jp.value);
};//------------------------------------------var pcGetV153 = AspectScript.Pointcuts.get("B");
var pcSetV153 = AspectScript.Pointcuts.set("B");

var aspectGetV153 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV153, persistAdviceGetV153);
AspectScript.deployOn(aspectGetV153, YAHOO_register);

var aspectSetV153 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV153, persistAdviceSetV153);
AspectScript.deployOn(aspectSetV153, YAHOO_register);

var persistAdviceGetV153 = function(jp) {
  return storage.getItem("key773_B");
};

var persistAdviceSetV153 = function(jp) {
  storage.setItem("key773_B", jp.value);
};//------------------------------------------var pcGetV154 = AspectScript.Pointcuts.get("AA");
var pcSetV154 = AspectScript.Pointcuts.set("AA");

var aspectGetV154 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV154, persistAdviceGetV154);
AspectScript.deployOn(aspectGetV154, get);

var aspectSetV154 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV154, persistAdviceSetV154);
AspectScript.deployOn(aspectSetV154, get);

var persistAdviceGetV154 = function(jp) {
  return storage.getItem("key56_AA");
};

var persistAdviceSetV154 = function(jp) {
  storage.setItem("key56_AA", jp.value);
};//------------------------------------------var pcGetV155 = AspectScript.Pointcuts.get("G");
var pcSetV155 = AspectScript.Pointcuts.set("G");

var aspectGetV155 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV155, persistAdviceGetV155);
AspectScript.deployOn(aspectGetV155, getClientRegion);

var aspectSetV155 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV155, persistAdviceSetV155);
AspectScript.deployOn(aspectSetV155, getClientRegion);

var persistAdviceGetV155 = function(jp) {
  return storage.getItem("key721_G");
};

var persistAdviceSetV155 = function(jp) {
  storage.setItem("key721_G", jp.value);
};//------------------------------------------var pcGetV156 = AspectScript.Pointcuts.get("M");
var pcSetV156 = AspectScript.Pointcuts.set("M");

var aspectGetV156 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV156, persistAdviceGetV156);
AspectScript.deployOn(aspectGetV156, substitute);

var aspectSetV156 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV156, persistAdviceSetV156);
AspectScript.deployOn(aspectSetV156, substitute);

var persistAdviceGetV156 = function(jp) {
  return storage.getItem("key686_M");
};

var persistAdviceSetV156 = function(jp) {
  storage.setItem("key686_M", jp.value);
};//------------------------------------------var pcGetV157 = AspectScript.Pointcuts.get("i");
var pcSetV157 = AspectScript.Pointcuts.set("i");

var aspectGetV157 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV157, persistAdviceGetV157);
AspectScript.deployOn(aspectGetV157, YFC_extractValue);

var aspectSetV157 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV157, persistAdviceSetV157);
AspectScript.deployOn(aspectSetV157, YFC_extractValue);

var persistAdviceGetV157 = function(jp) {
  return storage.getItem("key814_i");
};

var persistAdviceSetV157 = function(jp) {
  storage.setItem("key814_i", jp.value);
};//------------------------------------------var pcGetV158 = AspectScript.Pointcuts.get("G");
var pcSetV158 = AspectScript.Pointcuts.set("G");

var aspectGetV158 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV158, persistAdviceGetV158);
AspectScript.deployOn(aspectGetV158, _setAttribute);

var aspectSetV158 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV158, persistAdviceSetV158);
AspectScript.deployOn(aspectSetV158, _setAttribute);

var persistAdviceGetV158 = function(jp) {
  return storage.getItem("key203_G");
};

var persistAdviceSetV158 = function(jp) {
  storage.setItem("key203_G", jp.value);
};//------------------------------------------var pcGetV159 = AspectScript.Pointcuts.get("v");
var pcSetV159 = AspectScript.Pointcuts.set("v");

var aspectGetV159 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV159, persistAdviceGetV159);
AspectScript.deployOn(aspectGetV159, set);

var aspectSetV159 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV159, persistAdviceSetV159);
AspectScript.deployOn(aspectSetV159, set);

var persistAdviceGetV159 = function(jp) {
  return storage.getItem("key907_v");
};

var persistAdviceSetV159 = function(jp) {
  storage.setItem("key907_v", jp.value);
};//------------------------------------------var pcGetV160 = AspectScript.Pointcuts.get("B");
var pcSetV160 = AspectScript.Pointcuts.set("B");

var aspectGetV160 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV160, persistAdviceGetV160);
AspectScript.deployOn(aspectGetV160, asual_util_Browser);

var aspectSetV160 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV160, persistAdviceSetV160);
AspectScript.deployOn(aspectSetV160, asual_util_Browser);

var persistAdviceGetV160 = function(jp) {
  return storage.getItem("key572_B");
};

var persistAdviceSetV160 = function(jp) {
  storage.setItem("key572_B", jp.value);
};//------------------------------------------var pcGetV161 = AspectScript.Pointcuts.get("spaceid");
var pcSetV161 = AspectScript.Pointcuts.set("spaceid");

var aspectGetV161 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV161, persistAdviceGetV161);
AspectScript.deployOn(aspectGetV161, YAHOO_Finance_Charts_ULT_beacon);

var aspectSetV161 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV161, persistAdviceSetV161);
AspectScript.deployOn(aspectSetV161, YAHOO_Finance_Charts_ULT_beacon);

var persistAdviceGetV161 = function(jp) {
  return storage.getItem("key662_spaceid");
};

var persistAdviceSetV161 = function(jp) {
  storage.setItem("key662_spaceid", jp.value);
};//------------------------------------------var pcGetV162 = AspectScript.Pointcuts.get("E");
var pcSetV162 = AspectScript.Pointcuts.set("E");

var aspectGetV162 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV162, persistAdviceGetV162);
AspectScript.deployOn(aspectGetV162, asual_util_Browser);

var aspectSetV162 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV162, persistAdviceSetV162);
AspectScript.deployOn(aspectSetV162, asual_util_Browser);

var persistAdviceGetV162 = function(jp) {
  return storage.getItem("key55_E");
};

var persistAdviceSetV162 = function(jp) {
  storage.setItem("key55_E", jp.value);
};//------------------------------------------var pcGetV163 = AspectScript.Pointcuts.get("y");
var pcSetV163 = AspectScript.Pointcuts.set("y");

var aspectGetV163 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV163, persistAdviceGetV163);
AspectScript.deployOn(aspectGetV163, getElementsByClassName);

var aspectSetV163 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV163, persistAdviceSetV163);
AspectScript.deployOn(aspectSetV163, getElementsByClassName);

var persistAdviceGetV163 = function(jp) {
  return storage.getItem("key968_y");
};

var persistAdviceSetV163 = function(jp) {
  storage.setItem("key968_y", jp.value);
};//------------------------------------------var pcGetV164 = AspectScript.Pointcuts.get("locale");
var pcSetV164 = AspectScript.Pointcuts.set("locale");

var aspectGetV164 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV164, persistAdviceGetV164);
AspectScript.deployOn(aspectGetV164, YFC_emailChart);

var aspectSetV164 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV164, persistAdviceSetV164);
AspectScript.deployOn(aspectSetV164, YFC_emailChart);

var persistAdviceGetV164 = function(jp) {
  return storage.getItem("key595_locale");
};

var persistAdviceSetV164 = function(jp) {
  storage.setItem("key595_locale", jp.value);
};//------------------------------------------var pcGetV165 = AspectScript.Pointcuts.get("Y");
var pcSetV165 = AspectScript.Pointcuts.set("Y");

var aspectGetV165 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV165, persistAdviceGetV165);
AspectScript.deployOn(aspectGetV165, getClientRegion);

var aspectSetV165 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV165, persistAdviceSetV165);
AspectScript.deployOn(aspectSetV165, getClientRegion);

var persistAdviceGetV165 = function(jp) {
  return storage.getItem("key527_Y");
};

var persistAdviceSetV165 = function(jp) {
  storage.setItem("key527_Y", jp.value);
};//------------------------------------------var pcGetV166 = AspectScript.Pointcuts.get("asual");
var pcSetV166 = AspectScript.Pointcuts.set("asual");

var aspectGetV166 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV166, persistAdviceGetV166);
AspectScript.deployOn(aspectGetV166, remove);

var aspectSetV166 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV166, persistAdviceSetV166);
AspectScript.deployOn(aspectSetV166, remove);

var persistAdviceGetV166 = function(jp) {
  return storage.getItem("key772_asual");
};

var persistAdviceSetV166 = function(jp) {
  storage.setItem("key772_asual", jp.value);
};//------------------------------------------var pcGetV167 = AspectScript.Pointcuts.get("S");
var pcSetV167 = AspectScript.Pointcuts.set("S");

var aspectGetV167 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV167, persistAdviceGetV167);
AspectScript.deployOn(aspectGetV167, _calcBorders);

var aspectSetV167 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV167, persistAdviceSetV167);
AspectScript.deployOn(aspectSetV167, _calcBorders);

var persistAdviceGetV167 = function(jp) {
  return storage.getItem("key43_S");
};

var persistAdviceSetV167 = function(jp) {
  storage.setItem("key43_S", jp.value);
};//------------------------------------------
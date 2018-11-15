var pcTranV0 = AspectScript.Pointcuts.exec();

var adviceTranV0 = function(jp) {
  var tx = jp.args[0];
  if((tx))
    tx.commit();
};

AspectScript.after(pcTranV0, adviceTranV0);
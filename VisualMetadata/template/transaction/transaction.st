var pcTranV$itr$ = AspectScript.Pointcuts.exec($function$);

var adviceTranV$itr$ = function(jp) {
  var tx = jp.args[0];
  if($inspect$(tx))
    tx.commit();
};

AspectScript.after(pcTranV$itr$, adviceTranV$itr$);

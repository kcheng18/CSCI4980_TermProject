var pcDecryptV$itr$ = AspectScript.Pointcuts.set("$variable$");

var adviceDecryptV$itr$ = function(jp) {
  return decrypt(jp.value);
};

var aspectDecryptV$itr$ = AspectScript.aspect(
    AspectScript.AROUND, pcDecryptV$itr$, adviceDecryptV$itr$);
AspectScript.deployOn(aspectDecryptV$itr$, $function$);

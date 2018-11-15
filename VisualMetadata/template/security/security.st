var pcEncryptV$itr$ = AspectScript.Pointcuts.get("$variable$");

var adviceEncryptV$itr$ = function(jp) {
  return encrypt(jp.value);
};

var aspectEncryptV$itr$ = AspectScript.aspect(
    AspectScript.AROUND, pcEncryptV$itr$, adviceEncryptV$itr$);
AspectScript.deployOn(aspectEncryptV$itr$, $function$);


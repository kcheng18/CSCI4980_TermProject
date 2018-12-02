var pcEncryptV$itr$ = AspectScript.Pointcuts.get("$variable$");
var pcDecryptV$itr$ = AspectScript.Pointcuts.set("$variable$");

var adviceEncryptV$itr$ = function(jp) {
  return encrypt(jp.value);
};

var adviceDecryptV$itr$ = function(jp) {
  return decrypt(jp.value);
};

var aspectEncryptV$itr$ = AspectScript.aspect(
    AspectScript.AROUND, pcEncryptV$itr$, adviceEncryptV$itr$);
AspectScript.deployOn(aspectEncryptV$itr$, $function$);

var aspectDecryptV$itr$ = AspectScript.aspect(
    AspectScript.AROUND, pcDecryptV$itr$, adviceDecryptV$itr$);
AspectScript.deployOn(aspectDecryptV$itr$, $function$);

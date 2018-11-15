var pcDecryptV0 = AspectScript.Pointcuts.set("pd");

var adviceDecryptV0 = function(jp) {
  return decrypt(jp.value);
};

var aspectDecryptV0 = AspectScript.aspect(
    AspectScript.AROUND, pcDecryptV0, adviceDecryptV0);
AspectScript.deployOn(aspectDecryptV0, checkCredentials);
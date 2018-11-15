var pcEncryptV0 = AspectScript.Pointcuts.get("pd");

var adviceEncryptV0 = function(jp) {
  return encrypt(jp.value);
};

var aspectEncryptV0 = AspectScript.aspect(
    AspectScript.AROUND, pcEncryptV0, adviceEncryptV0);
AspectScript.deployOn(aspectEncryptV0, checkCredentials);
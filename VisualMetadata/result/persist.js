var pcGetV0 = AspectScript.Pointcuts.get("");
var pcSetV0 = AspectScript.Pointcuts.set("");

var aspectGetV0 = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV0, persistAdviceGetV0);
AspectScript.deployOn(aspectGetV0, );

var aspectSetV0 = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV0, persistAdviceSetV0);
AspectScript.deployOn(aspectSetV0, );

var persistAdviceGetV0 = function(jp) {
  return storage.getItem("731_");
};

var persistAdviceSetV0 = function(jp) {
  storage.setItem("731_", jp.value);
};
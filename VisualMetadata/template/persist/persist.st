var pcGetV$itr$ = AspectScript.Pointcuts.get("$variable$");
var pcSetV$itr$ = AspectScript.Pointcuts.set("$variable$");

var aspectGetV$itr$ = 
		AspectScript.aspect(AspectScript.AROUND, 
                        pcGetV$itr$, persistAdviceGetV$itr$);
AspectScript.deployOn(aspectGetV$itr$, $function$);

var aspectSetV$itr$ = 
    AspectScript.aspect(AspectScript.AFTER, 
                        pcSetV$itr$, persistAdviceSetV$itr$);
AspectScript.deployOn(aspectSetV$itr$, $function$);

var persistAdviceGetV$itr$ = function(jp) {
  return storage.getItem("$key$_$variable$");
};

var persistAdviceSetV$itr$ = function(jp) {
  storage.setItem("$key$_$variable$", jp.value);
};
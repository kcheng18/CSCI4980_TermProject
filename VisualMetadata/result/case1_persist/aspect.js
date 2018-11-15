### ASPECT-SCRIPT ###
var pc = AspectScript.Pointcuts.exec(sample);
var persistAdvice = function(jp) {         
	var elem = jp.args[0];                 
	localStorage.setItem("", elem.plaintext);
	localStorage.setItem("b", elem.customerAddress);
	localStorage.setItem("a", elem.customerAddress);
	localStorage.setItem("k", elem.plaintext);
};
AspectScript.after(pc, persistAdvice);
### ASPECT-SCRIPT ###
var pc = AspectScript.Pointcuts.exec(showEncryptMsg);
var persistAdvice = function(jp) {         
	var elem = jp.args[0];                 
	localStorage.setItem("A", elem.plaintext);
};
AspectScript.after(pc, persistAdvice);

var pcLoggingV$itr$ = AspectScript.Pointcuts.exec($function$);

var adviceLogging$itr$ = function(jp){
	var log = log4javascript.getLogger();
	var functionName = "FUNCTION: " + $function$;
	var parm = "PARAMETER: ";
	jp.args.forEach(function(element){	
		parm += element + " ";
	});
	var logging.LevelV$itr$ = "$severity$";
	switch(logging.Level){	
		case "debug":
		case "trace":
			if(logging.Level == "debug")
				log.debug(functionName + ", " + parm);
			else
				log.trace(functionName + ", " + parm);
			break;
		case "error":
		case "fatal":
			var ajaxAppender = new log4javascript.AjaxAppender(logging.URL);
			log.addAppender(ajaxAppender);
			if(logging.Level == "error")
				log.error(functionName + ", " + parm);
			else
				log.fatal(functionName + ", " + parm);
			break;
		default;		
	}
};

AspectScript.after(pcLogging$itr$, adviceLoggingV$itr$);
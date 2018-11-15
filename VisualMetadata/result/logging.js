var pcLoggingV0 = AspectScript.Pointcuts.exec(checkCredentials);

var adviceLogging0 = function(jp){
	var log = log4javascript.getLogger();
	var functionName = "FUNCTION: " + checkCredentials;
	var parm = "PARAMETER: ";
	jp.args.forEach(function(element){	
		parm += element + " ";
	});
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
			var ajaxAppender = new log4javascript.AjaxAppender(loggging.URL);
		log.addAppender(ajaxAppender);
		if(logging.Level == "error")
			log.error(functionName + ", " + parm);
		else
			log.fatal(functionName + ", " + parm);
		break;		
	}
};

AspectScript.after(pcLogging0, adviceLoggingV0);
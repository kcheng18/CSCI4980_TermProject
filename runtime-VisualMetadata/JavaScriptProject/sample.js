function checkCredentials() {
	var failedCheck = 0;
	
	while (failedCheck < 3) {
		enterLoginInfo();

		var id = document.getElementByID('id');
		var pd = document.getElementByID('password');

		if (!serverCheck(id, pd)) {
			break;
		}
		++failedCheck;
	}	
}
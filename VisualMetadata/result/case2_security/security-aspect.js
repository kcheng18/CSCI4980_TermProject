// example : encrypt a message
var doEncrypt = function(obj) {
	console.log("doEncrypt");
	var v = form.get();
	var plaintext = v.plaintext;

	v.plaintext = '';
	form.set(v);
	form.ciphertext.el.select();
};

var pc = AspectScript.Pointcuts.exec(showEncryptMsg);

var securityAdvice = function(jp) {
	console.log("securityAdvice");
	var elem = jp.args[0];
	var v = elem.getForm();
	
	if (v.plaintext === '' && v.ciphertext.length) {
		return;
	}
	if (v.key.length == 0 && v.password.length == 0) {
		error("need a password or key!!");
		return;
	}
	var p = {
		adata : v.adata,
		iter : v.iter,
		mode : v.mode,
		ts : parseInt(v.tag),
		ks : parseInt(v.keysize)
	};
	if (!v.freshiv || !usedIvs[v.iv]) {
		p.iv = v.iv;
	}
	if (!v.freshsalt || !usedSalts[v.salt]) {
		p.salt = v.salt;
	}
	var rp = {};
	var ct = sjcl.encrypt(v.password || v.key, v.plaintext, p, rp).replace(/,/g, ",\n");
	v.iv = rp.iv;
	usedIvs[rp.iv] = 1;
	if (rp.salt) {
		v.salt = rp.salt;
		usedSalts[rp.salt] = 1;
	}
	v.key = rp.key;
	if (v.json) {
		v.ciphertext = ct;
		v.adata = '';
	} else {
		v.ciphertext = ct.match(/"ct":"([^"]*)"/)[1]; // "
	}
	form.set(v);
};

AspectScript.before(pc, securityAdvice);


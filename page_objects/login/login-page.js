"use strict";

class Login {
	// Reusable selector getters that will help us to avoid selector duplicates
	get UsernameTxt() {return $('[name="username"]');}
	get PasswordTxt() {return $('[name="password"]');}
	get LoginLnk() {return $('div=Log In');}

	// Helper method to avoid code duplication
	login(username, password){
        this.UsernameTxt.setValue(username);
        this.PasswordTxt.setValue(password);
        this.LoginLnk.click();
	}
}
module.exports = Login;
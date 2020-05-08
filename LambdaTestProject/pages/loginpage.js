class LoginPage {

 
    get username(){
        return $("#username");
    }
   
    get password(){
        return $ ("#password");
    }

    get loginbutton(){
        return $("button")
    }

    enterusername(text){

        this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterpassword(text){

        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickOnLoginbtn(){
        this.loginbutton.waitForDisplayed();
        this.loginbutton.click();
    }
}

module.exports = new LoginPage();
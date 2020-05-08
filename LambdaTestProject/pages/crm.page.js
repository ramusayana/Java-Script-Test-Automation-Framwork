class crmPage{



    get forgotpassword(){

        return $("=Forgot Password?")
    }

    movetoelement(element){
       element.waitForDisplayed();
       element.moveTo();

    }




}
module.exports = new crmPage();


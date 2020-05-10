const alertPage = require("../pages/alert.page");


describe("Handle alert pops", function(){

    it("Accept Alert", function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");

        alertPage.clickonAlertButton(1);
       const alerttext = browser.getAlertText()
       console.log(alerttext);
    // assert.equals("I am a JS Alert", alerttext)
       browser.acceptAlert();
       console.log(alertPage.getResultText);
    //  asseert.equal("You successfuly clicked an alert",alertPage.getResultText);
        browser.pause(3000);
    })

    it("Dismiss  Alert", function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");

        alertPage.clickonAlertButton(2);
       browser.dismissAlert();
       console.log(alertPage.getResultText);
    //  asseert.equal("You successfuly clicked an alert",alertPage.getResultText);
        browser.pause(3000);
    })

    it("Enter text on Alert", function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");

        alertPage.clickonAlertButton(3);
       browser.sendAlertText('this is ram alert');
       browser.acceptAlert();
       console.log(alertPage.getResultText);
    //  asseert.equal("You entered: this is ram alert",alertPage.getResultText);
        browser.pause(3000);
    })

    it("Alert accept on rediff", function(){

        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        $("input[name='proceed']").waitForDisplayed();
        $("input[name='proceed']").click();
       const alerttext  =browser.getAlertText();
       console.log(alerttext);
    //    assert.equal("please enter a valid user name",text );
       browser.acceptAlert();
       browser.pause(3000);
        

    
        browser.pause(3000);
    })
})
const loginPage  = require("../pages/loginpage");


describe("Application handling", function(){

it("EnterUsername", function (){
    browser.url("https://the-internet.herokuapp.com/login");
    loginPage.enterusername("tomsmith");
    // assert.equal('tomsmith',loginPage.username.getValue());
});

it("EnterPassword", function (){
    loginPage.enterpassword("SuperSecretPassword!");
    // assert.equal('SuperSecretPassword!',loginPage.password.getValue());
});

it("Clicklogin", function (){
    
    loginPage.clickOnLoginbtn();
 
});

// it("clear", function (){
//     // use this function only if you uncomment the Clicklogin function
//     loginPage.username.click();
//     loginPage.username.clearValue();
//     // assert.equal('',loginPage.username.getValue());
// });
})
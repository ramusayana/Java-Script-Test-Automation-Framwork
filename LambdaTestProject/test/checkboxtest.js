const Internetpage= require("../pages/internetpage");


describe("handling checkboxes", function(){



it("should click the checkbox", function(){
 
    browser.url("https://the-internet.herokuapp.com/");

    Internetpage.clickonlink(6);
    Internetpage.h3header.waitForDisplayed();
    Internetpage.clickcheckbox(1);
    
    // Need to import Chai module then the following assertion will work
    // expect(Internetpage.getcheckboxelement(1).isSelected()).equals(true);



    browser.pause(5000);
});

// it("check the page URL using chai", function(){
//     browser.url("https://the-internet.herokuapp.com/checkboxes");
//     expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/checkboxes");

// })

it("check checkbox header", function(){
    browser.url("https://the-internet.herokuapp.com/checkboxes");
    // Internetpage.clickonlink(6);
    // Internetpage.h3header.waitForDisplayed();
    // const text =Internetpage.h3header.getText();
    
   
    // expect(text).equals("https://the-internet.herokuapp.com/checkboxes");

})



})
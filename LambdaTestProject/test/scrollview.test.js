const scrollview = require("../pages/crm.page");


describe("scroll view", function(){

 it.skip("scroll to forgot password link", function(){
  
    browser.url("http://crmpro.com/");
     
   console.log("In view port", scrollview.forgotpassword.isDispalyedInViewport);

//    scrollview.forgotpassword.click();
   scrollview.forgotpassword.scrollIntoView();

   console.log("In view port", scrollview.forgotpassword.isDispalyedInViewport);

//    scrollview.movetoelement(scrollview.forgotpassword);
   scrollview.forgotpassword.click();

})

it("scroll to forgot password and then click    ", function(){
  
    browser.url("http://crmpro.com/");
     
 

//    scrollview.forgotpassword.click();
   scrollview.forgotpassword.scrollIntoView();
    scrollview.movetoelement(scrollview.forgotpassword);
   scrollview.forgotpassword.click();

})



})
const blazePage  = require("../pages/blazemeter")

describe("blaze page elements  handle", function(){
  it("get text of child links", function(){
    browser.url("https://www.blazemeter.com/")

    // blazePage.getTextForli

   console.log('The thrd link is : ' , blazePage.specificelement(3).getText());

    blazePage.specificchildlinkelementText(1);
 })


 it("Main heading displayed", function(){
  
  console.log(blazePage.mainHeader.isDisplayed());
  

 })

 it("Main heading enabled", function(){
  
    console.log(blazePage.mainHeader.isEnabled());
    })

   it("Main heading exist", function(){
  
    console.log(blazePage.mainHeader.isExisting());
    })

   it("Main heading isDisplayed in ViewPort", function(){
  
    console.log(blazePage.mainHeader.isDisplayedInViewport());
    })

   it("Jmeter  isDisplayed in ViewPort", function(){
  
    console.log(blazePage.JmeterLink.isDisplayedInViewport());
    })

   it("click on product link if Displayed", function(){
  
    blazePage.clickonProductlink();
    browser.pause(5000);
  })

});
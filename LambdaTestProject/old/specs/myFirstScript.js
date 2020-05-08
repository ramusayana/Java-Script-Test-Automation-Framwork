const assert = require("assert");
 
describe("Amazon website", function() {
    it("search for Mac Book", function() {
        browser.url("https://www.amazon.com/");
        const   search = $("#twotabsearchtextbox");
        search.setValue("Apple Mac Book");
        browser.pause(2000);
       
    });

    it("get the text from label header", function() {
    
       const label = $("span.a-size-base.a-color-base");
        let text  =label.getText();
        console.log(text);
        browser.pause(3000);


    });
    

    it("clicking on the search icon", function() {
    
        const icon = $("div.nav-search-submit.nav-sprite");
        icon.click();
        browser.pause(2000);
 
 
     });
     
}); 
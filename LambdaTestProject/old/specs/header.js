const assert = require("assert");
 
describe("Get header value", function() {
    it("header label print ", function() {

        browser.url("https://www.freshworks.com/");
        const headerlabel = $("div h1");
        let text = headerlabel.getText();
        console.log(text);
        browser.pause(2000);
       
    }); 
    
});

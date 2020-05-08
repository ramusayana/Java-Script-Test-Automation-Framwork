const homepage = require("../pages/homepage")

describe ("home page elements handle" , function(){
it ("verify home page elements", function(){
   browser.url("https://www.freshworks.com/");
   let text =homepage.pageHeader.getText();
   console.log(text);
   let subtext  =homepage.subHeader.getText();
   console.log(subtext);
   homepage.supportLink.click();
   browser.pause(5000);

})


});
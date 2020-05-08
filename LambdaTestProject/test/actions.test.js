const spiceJetPage = require("../pages/actions.page");

describe("page actions Features", function(){

    it("move to element", function(){
      
        browser.url("https://www.spicejet.com/");
        spiceJetPage.moveToElement(spiceJetPage.LoginsignupLink);
        browser.pause(3000);
        spiceJetPage.moveToElement(spiceJetPage.spiceclubmembers);
        browser.pause(3000);
        spiceJetPage.clickElement(spiceJetPage.memberLogin);
        browser.pause(3000);
})

    it("keys action perform TAB", function(){

       browser.url("https://the-internet.herokuapp.com/key_presses?")
       spiceJetPage.entersearch("Tab");
       const text =spiceJetPage.getresultlabeltext();
       console.log(text);
    //    assert.equal("You entered: TAB", text);
       browser.pause(3000);


    })

    it("keys action perform Shift", function(){

        browser.url("https://the-internet.herokuapp.com/key_presses?")
        spiceJetPage.entersearch("Shift");
        const text =spiceJetPage.getresultlabeltext();
        console.log(text);
     //    assert.equal("You entered: SHIFT", text);
        browser.pause(3000);
 
 
     })


    it("keys action perform F1", function(){

        browser.url("https://the-internet.herokuapp.com/key_presses?")
        spiceJetPage.entersearch("F1");
        const text =spiceJetPage.getresultlabeltext();
        console.log(text);
     //    assert.equal("You entered: F1", text);
        browser.pause(3000);
 
 
     })

})
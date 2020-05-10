

describe("wait for enabled case", function(){

it.skip("SHOULD wait for button to be enables", function(){
     browser.url("http://crmpro.com/register/");
     const checkbox =$("input[name='agreeTerms']")
      const submitbtn  = $("div #submitButton")

    //   checkbox.waitForDispalyed();
      checkbox.click();
      browser.pause(4000)
      submitbtn.waitForEnabled(4000);
    //   assert.equal('true', submitbtn.isEnabled());
})

it("SHOULD wait for button to be disabled", function(){
    browser.url("http://crmpro.com/register/");

    // somewhere its failng this function
    const checkbox =$("input[name='agreeTerms']")
     const submitbtn  = $("div #submitButton")

     checkbox.click();
    //  browser.pause(4000)
     submitbtn.waitForEnabled(4000);
   //   assert.equal('true', submitbtn.isEnabled());
   checkbox.click();
   submitbtn.waitForEnabled(4000, true);
   //   assert.equal('false', submitbtn.isEnabled());

 
})




})
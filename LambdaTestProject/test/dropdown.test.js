describe("drop down handle", function(){

//     it("select drop down value by text", function(){

//      browser.url("https://en-gb.facebook.com/")
//      $("#day").selectByVisibleText('10');
//      $("#month").selectByVisibleText('Apr');
//      $("#year").selectByVisibleText('1990');
//      browser.pause(3000);
// })


// it("select drop down value by text", function(){

//     browser.url("https://en-gb.facebook.com/")
//     $("#day").selectByIndex('7');
//     $("#month").selectByIndex('3');
//     $("#year").selectByIndex('18');
//     browser.pause(3000);
// })

// it("select drop down value by text", function(){

//     browser.url("https://en-gb.facebook.com/")
//     $("#day").selectByAttribute('value','25');
//     $("#month").selectByAttribute('value','3');
//     $("#year").selectByAttribute('value','2015');
//     browser.pause(3000);
// })
    
  it("get all the values in the dropdown", function(){
    browser.url("https://en-gb.facebook.com/")

   let list = $$("#day option");
    console.log("lenght is : ", list.length);


    for(let i=0;i<list.length;i++){
       const element =list[i];
      console.log( element.getText());

      if(element.getText()==='Mar'){
          element.click();
          break;

          browser.pause(3000);
      }
    }




  })
})
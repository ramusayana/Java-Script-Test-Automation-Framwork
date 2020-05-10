describe("wait for delete button   wait for exists", function(){

it("should wait for delete button ", function(){
 browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
 const addElement =$("button[onclick]")
 const deleteElement = $('button[class]');

addElement.waitForDisplayed();
addElement.click();


deleteElement.waitForExist(4000);
// assert.equal(true, deleteElement.isExisting());
deleteElement.click();
// assert.equal(false, deleteElement.isExisting());
browser.pause(3000);



})

})

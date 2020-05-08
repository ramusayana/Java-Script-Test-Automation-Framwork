

describe("drag and drop feature", function(){

    it("do drag drop", function(){

     browser.url("https://jqueryui.com/resources/demos/droppable/default.html");

     const sourceElement = $ ("div#draggable");

     const targetElement = $ ("div#droppable");

     sourceElement.dragAndDrop(targetElement,10);

     browser.pause(3000);





    })
})
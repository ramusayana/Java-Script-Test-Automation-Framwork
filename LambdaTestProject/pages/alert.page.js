class alertPage{

 get result(){
     $("#result")
 }

 getResultText(){

    return this.result.getText()
 }


 getAlertbutton(index){

   return $(`ul>li:nth-child(${index}) button`);
  
    // $(`ul>li:nth-child(2)>button`);
    // $(`ul>li:nth-child(3)>button`);
 }   

  clickonAlertButton(index){

    this.getAlertbutton(index).waitForDisplayed();
    this.getAlertbutton(index).click();

  }






}

module.exports = new alertPage();
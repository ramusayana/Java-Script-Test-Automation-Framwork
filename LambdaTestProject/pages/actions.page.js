class spiceJet{

   get LoginsignupLink(){
       return $("#ctl00_HyperLinkLogin");
     }

    get spiceclubmembers(){
       return $("=SpiceClub Members")  

    } 

    get memberLogin(){
        return $("=Member Login")  
 
     } 

     get searchField(){
 
        return $ ("#target")
     }
     
     get resultlabel(){

        return $ ("#result")
     }
     
     getresultlabeltext(){
        this.resultlabel.waitForDisplayed();
        return  this.resultlabel.getText();
     }

     entersearch(text){
         this.searchField.waitForDisplayed();
         return this.searchField.setValue(text);
     }

     moveToElement(element){
         element.waitForDisplayed();
         element.moveTo();
     }

     clickElement(element){
        element.waitForDisplayed();
        element.click();
     }

}
module.exports = new spiceJet();
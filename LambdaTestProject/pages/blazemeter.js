class BlazePage {

    get mainHeader(){
       return $("h2.home_title")

    }

    get JmeterLink(){
        return $("//a[text()='JMeter']")
    }

    get productLink(){

        return $("ul.list-nav-links>li:nth-child(1) a ")
    }

    clickonProductlink(){
        if(this.productLink.isDisplayed()=== true){
            this.productLink.click();
        }
    }

     get Parent(){ return $("ul.list-nav-links")}

     get childelements(){ return this.Parent.$$("li")}

     get getTextForli(){ return this.childelements.filter(element =>{
         console.log(element.getText());
         });
         }
     specificelement(index){
    
          return this.Parent.$(`li:nth-child(${index})`)
   
       }

    specificchildlinkelementText(index){
          console.log( this.specificelement(index).getText());
      } 
}

module.exports = new BlazePage();
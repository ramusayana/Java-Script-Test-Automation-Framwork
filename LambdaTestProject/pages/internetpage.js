class InternetPage {

get h3header(){
    return $("h3");
}

getlinkelements(index){
    return $(`ul>li:nth-child(${index}) a`);
}
clickonlink(index){
      this.getlinkelements(index).waitForDisplayed();
      this.getlinkelements(index).click();
    }
getcheckboxelement(index){
    return $(`form#checkboxes>input:nth-child(${index})`)
}
clickcheckbox(index){
    this.getcheckboxelement(index).waitForDisplayed();
    this.getcheckboxelement(index).click();

}

}

module.exports= new InternetPage();
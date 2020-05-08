class HomePage{
    get pageHeader (){ return  $("div h1")}
    get subHeader() { return $("div.banner-text-content>p.sub-text")}
    get supportLink (){ return $("//span[text()='Support']")  }
      
}
module.exports = new HomePage();
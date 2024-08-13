var productContainer= document.getElementById("products")
var sarch=document.getElementById("search")
var productList= productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUppercase()

    for(count=0;count<productList.length;count=count+1)
    {
        var productName = productList[count].querySelector("p").textcontent

        if(productName.toUppercase().indexof(enteredValue)<0)
     {
        productList[count].style.display="none"
     }
     else{
        productList[count].style.display="block"
     }

    }

})
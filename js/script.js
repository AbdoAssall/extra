var allProducts = document.querySelectorAll(".products .card button")
// console.log(allProducts)
var addCart = document.querySelector("#addcart")
// console.log(addCart)
var show = document.getElementById("btn-show")
// console.log(show)
var num = document.getElementById("num")
// console.log(num)
var price = document.querySelectorAll(".card-price")
//console.log(price.getAttribute("price"))
var priceTotal = document.querySelector(".card-footer")

var cartSummary = document.getElementById("cart-summary")

var cart = document.getElementById("cart")

let btnClose = document.querySelector(".btn-close")
// console.log(btnClose)

var count = 0

var totalPrice = 0

allProducts.forEach(function(item){
    item.onclick = function(){

        count += 1
        num.innerHTML = count;

       let cardTitle = this.closest('.card').querySelector('.card-title');
       let cardPrice = this.closest('.card').querySelector('.card-price');
       
       addCart.innerHTML += '<div class="d-flex justify-content-between">' + '<div>' + cardTitle.textContent + '</div>' + '<div>' + cardPrice.textContent + '</div>' + '</div>';
       
       totalPrice += +(cardPrice.getAttribute("price"));
       
    //    if(addCart.innerHTML != ""){
    //     cartSummary.style.display= "block"
    //    }
  
}
})

show.onclick = function(){
    priceTotal.textContent = "Subtotal: " + totalPrice + " EGP" + " "
    
      console.log(totalPrice)
  }

  cart.onclick = function(){
    
    if (cartSummary.style.display === "block"){
        cartSummary.style.display = "none"
    } else {
      cartSummary.style.display = "block";
  }
  }
btnClose.onclick = function(){
    cartSummary.style.display = "none"
}








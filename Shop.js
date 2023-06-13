let cartIcon =document.querySelector("#cartIcon");
let cart = document.querySelector(".cart");
let closeCart=document.querySelector("#closeCart");
let closeBtn =document.querySelector(".buyNow");

cartIcon.onclick = () => {
cart.classList.add("active");

};

closeCart.onclick= () => {
cart.classList.remove("active");

};
closeBtn.onclick= () => {
    cart.classList.remove("active");
    
    };


if (document.readystate == 'loading'){
document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
var removeCartButtons = document.getElementsByClassName('cartRemove');
console.log(removeCartButtons);
for ( var i = 0; i < removeCartButtons.length; i++){
var button= removeCartButtons[i];
button.addEventListener('click' , removeCartItem)
}
var quantityInputs = document.getElementsByClassName('cartQunatity');
for (var i=0; i < quantityInputs.length; i++){ 
    var input= quantityInputs[i];
    input.addEventListener('change', quantityChanged);  
}
var addCart= document.getElementsByClassName('add-cart');
for (var i =0 ; i < addCart.length; i++){
var button = addCart[i];
button.addEventListener('click', addCartClicked);


}


}



function removeCartItem(event){
var buttonClicked = event.target;
buttonClicked.parentElement.remove();
updateTotal();
}

function quantityChanged(event){
var input =event.target;
if (isNaN(input.value)|| input.value <=0 ){
    input.value=1;
}
updateTotal();

}
function addCartClicked(event){
var button= event.target;
var shopProducts = button.parentElement;
var title = shopProducts.getElementsByClassName('productTitle')[0].innerText;
var price = shopProducts.getElementsByClassName('productPrice')[0].innerText;
var Image = shopProducts.getElementsByClassName('productImage')[0].src;

addProductToCart(title, price, Image);

updateTotal();


}


function addProductToCart(title, price, Image){
var cartShopBox = document.createElement('div');
cartShopBox.classList.add('cartBox');
var cartItems= document.getElementsByClassName('cartContent')[0];
var cartItemsNames= cartItems.getElementsByClassName('cartpTitle');
for (var i=0 ; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
alert ("لقد أضفت هذا االعنصر مسبقا");
return;

}

}

var cartBoxContent= `
<img src="${Image}" alt="" class="cartImage">
          <div class="detailsBox">
            <div class="cartpTitle">${title}</div>
            <div class="cartpPrice">${price}</div>
            <input type="number" value="1" class="cartQuantity" >

          </div>

          <i class='bx bxs-trash-alt cartRemove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName('cartRemove') [0]
.addEventListener('click', removeCartItem);
cartShopBox
.getElementsByClassName('cartQuantity')[0]
.addEventListener('change', quantityChanged);    }     
//update Cart

function updateTotal(){
var cartContent = document.getElementsByClassName('cartContent')[0];
var cartBoxes = cartContent.getElementsByClassName('cartBox');
var total=0;
for ( var i=0 ; i< cartBoxes.length; i++){
var cartBox= cartBoxes[i];
var priceElement= cartBox.getElementsByClassName('cartpPrice')[0];
var quantityElement= cartBox.getElementsByClassName('cartQuantity')[0];
var price = parseFloat(priceElement.innerText.replace('ريال' , ''));
var quantity= quantityElement.value;
total= total+(price * quantity);}

document.getElementsByClassName("totalPrice")[0].innerText=' ريال ' +total.toLocaleString();




}

// paymentPopUP
let buyBtn =document.querySelector(".buyNow");
let payment = document.querySelector(".container");
let backflip = document.querySelector(".backflip");
let closePayment =document.querySelector(".button");
buyBtn.addEventListener("click", ()=>{
payment.style.display = "block";

});

    closePayment.addEventListener("click", ()=>{
        payment.style.display = "none";
        });

        backflip.addEventListener("click", ()=>{
          payment.style.display = "none";
          });
        
        
    let payBtn =document.querySelector(".button");
    let popupOrder = document.querySelector(".popupOrder");

    let popupBtn=document.querySelector("#popupBtn");
    payBtn.addEventListener("click", ()=>{
        popupOrder.style.display = "inline";
    });

        popupBtn.addEventListener("click", ()=>{
            popupOrder.style.display = "none";
            });     

// end

 // sideBar starts
        let menuBtn =document.querySelector(".menu-btn");
        let sideBar = document.querySelector(".sideBar");
        let closeBar = document.querySelector("#closeBar");

        menuBtn.onclick = () => {
        sideBar.classList.add("active");
     
        };
        
        closeBar.onclick= () => {
            sideBar.classList.remove("active");
            
        };
       
// end


// searchBar 
function search() {
    let searchInput = document.querySelector('#searchInput').value.toUpperCase();
    let shopContent = document.querySelector('.shopContent');
    let product = document.querySelectorAll('.productBox');
    let pName = document.getElementsByClassName('productTitle');
    
    for (var i = 0; i < pName.length; i++){
  
   
    if(pName[i].innerHTML.toUpperCase().indexOf(searchInput)>=0 ){
      product[i].style.display="";
    }
    else{
      product[i].style.display="none";
    }
    
    }
    }
    // end

    // filter products
    let popupContainer = document.querySelector('.shopContent');
    let popupBox = popupContainer.querySelectorAll('.productBox');
    
    document.querySelectorAll('.bt').forEach(bt =>{
      bt.onclick =()=>{
        popupContainer.style.display="grid";
    let target = bt.getAttribute('data-target');
    popupBox.forEach(productBox => {
    let name = productBox.getAttribute('data-name');
    if( target == name){
      productBox.style.display="none";
    
    }
    
    });
    };
    });




    // end

    fadeout();
window.addEventListener("load", setup);
    

function conLoader(){
document.querySelector('.conLoader').classList.add('active');

}
function fadeout(){

  setTimeout(conLoader, 3000);
}

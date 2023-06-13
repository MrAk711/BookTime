


    var swiper = new Swiper(".featuredSlider", {
        spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnIteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
        breakpoints: {
          0: {
            slidesPerView: 2,
           
          },
          768: {
            slidesPerView: 3,
           
          },
          1024: {
            slidesPerView: 5,
            
          },
        },
      });

      
    var swiper = new Swiper(".arrivals-slider", {
      spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
      delay:119500,
      disableOnIteraction:false,
  },
      breakpoints: {
        0: {
          slidesPerView: 1,
         
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
    });

    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

   
let popupContainer = document.querySelector('.popUP');
let popupBox = popupContainer.querySelectorAll('.popupCard');

document.querySelectorAll('.eyeBtn').forEach(eyeBtn =>{
  eyeBtn.onclick =()=>{
    popupContainer.style.display='flex';
let name = eyeBtn.getAttribute('data-name');
popupBox.forEach(popupCard => {
let target = popupCard.getAttribute('data-target');
if(name == target){
  popupCard.classList.add('active');

}
});
};
});



popupBox.forEach(close=>{
close.querySelector('.close-btn').onclick = () =>{
close.classList.remove('active');
popupContainer.style.display='none';

};
});

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
      //  end


// searchBar 
 function search() {
  let searchInput = document.querySelector('#searchInput').value.toUpperCase();
  let productsList = document.querySelector('.searchBox');
  let product = document.querySelectorAll('.searchProducts');
  let pName = document.getElementsByTagName('h6')
  
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
  



//  SearchBAR Interaction
let searchInput =document.querySelector("#searchInput");
let cont = document.querySelector(".searchBox");
let closeSBar = document.querySelector("#searchIcon");

searchInput.addEventListener("click", ()=>{
  cont.style.display = "inline";
});

closeSBar.addEventListener("click", ()=>{
  cont.style.display = "none";
        });     
// end

//  wishList Interaction
let wishIcon =document.querySelector("#wishIcon");
let wishList = document.querySelector(".wishSlide");
let closeList = document.querySelector("#closeList");

wishIcon.addEventListener("click", ()=>{
  wishList.style.display = "inline";
});

closeList.addEventListener("click", ()=>{
  wishList.style.display = "none";
        });     
// end

// Audio start
  var rules =new Audio();
  rules.src="Files/rules.mp3";

  var startup =new Audio();
  startup.src="Files/the 100$.mp3";

var lessons =new Audio();
lessons.src="Files/21.mp3";

var everything =new Audio();
everything.src="Files/everything.mp3";

var love =new Audio();
love.src="Files/love.mp3";

var vibes =new Audio();
vibes.src="Files/vibes.mp3";

var steve =new Audio();
steve.src="Files/steve.mp3";

var big =new Audio();
big.src="Files/big.mp3";

var habits =new Audio();
habits.src="Files/habits.mp3";


var zero =new Audio();
zero.src="Files/zero.mp3";

var subtle =new Audio();
subtle.src="Files/subtle.mp3";

// end




fadeout();
window.addEventListener("load", setup);
    

function conLoader(){
document.querySelector('.conLoader').classList.add('active');

}
function fadeout(){

  setTimeout(conLoader, 3000);
}

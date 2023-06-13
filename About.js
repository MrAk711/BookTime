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



let btn= document.getElementById('btn');
let output=document.getElementById('output');

let quotes= ["Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
"أعتقد أنّ الجنة زمان وليست مكانًا، هي زمان القرب من الله تعالى، هذا هو جوهر الجنة","More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.","If Oppurtunity doesnt knock build a door.",
"” إن أفضل ما يمكن أن يحدث للإنسان في حياته أن يجد شخصاً يذكره دائماً بأحلامه وقوته ويذكره بتفاصيل عن نفسه ينساها عادة عند أقرب حفرة حزن. ” "
, "All our dreams can come true, if we have the courage to pursue them."];

btn.addEventListener('click', function(){
    var randomQuote= quotes [Math.floor(Math.random()*quotes.length)];
    output.innerHTML= randomQuote;
})





let target =document.querySelector("#target");
let tarCon = document.querySelector(".tarCon");

let backw =document.querySelector(".backw");
target.addEventListener("click", ()=>{
  tarCon.style.display = "flex";
});

backw.addEventListener("click", ()=>{
  tarCon.style.display = "none";
        });

        let service =document.querySelector("#service");
        let serBox = document.querySelector(".serBox");
        
        let back =document.querySelector(".back");
        service.addEventListener("click", ()=>{
          serBox.style.display = "flex";
        });
        
        back.addEventListener("click", ()=>{
          serBox.style.display = "none";
                });
                let locate =document.querySelector(".locate");
                let locBox = document.querySelector(".locBox");
                
                let backwa =document.querySelector(".backwa");
                locate.addEventListener("click", ()=>{
                  locBox.style.display = "flex";
                });
                
                backwa.addEventListener("click", ()=>{
                  locBox.style.display = "none";
                        });
                        let info =document.querySelector("#info");
                        let cardContainer = document.querySelector(".cardContainer");
                        
                        let backe =document.querySelector(".backe");
                        info.addEventListener("click", ()=>{
                          cardContainer.style.display = "flex";
                        });
                        
                        backe.addEventListener("click", ()=>{
                          cardContainer.style.display = "none";
                                });                        

                                fadeout();
                                window.addEventListener("load", setup);
                                    
                                
                                function conLoader(){
                                document.querySelector('.conLoader').classList.add('active');
                                
                                }
                                function fadeout(){
                                
                                  setTimeout(conLoader, 3000);
                                }
                                
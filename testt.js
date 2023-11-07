let menu=document.querySelector(".menu")
let menubtn=document.querySelector(".header_icon")
let menubtnIcon=document.querySelector(".header_icon i")


menubtn.addEventListener("click",function(){
   if(menubtnIcon.classList.contains("fa-bars")){
    menu.style.left="0"
    menubtnIcon.classList="fa fa-times"
   }
   else
   {
    menu.style.left="-292px"
    menubtnIcon.classList="fa fa-bars"
   }
   


  
})

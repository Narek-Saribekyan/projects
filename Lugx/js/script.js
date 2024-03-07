const navBar=document.querySelector("header")
function f1() {
   if(scrollY>200){
      navBar.style.position="fixed"
      navBar.style.top=0;
      navBar.classList.add("fixed-header")
   }
   else{
      navBar.style.position="absolute"
      navBar.style.top="40px"
      navBar.classList.remove("fixed-header")
   }
}


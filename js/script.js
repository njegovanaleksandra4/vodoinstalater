const menuBtn=document.getElementById("menuBtn");
const nav=document.querySelector("nav");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("nav a");
/*aktiviranje menija*/
menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    if(nav.classList.contains("active")){
        menuBtn.innerHTML="✕";
        document.body.style.overflow = 'hidden';
    }else{
        menuBtn.innerHTML="☰";
        document.body.style.overflow = '';
    }

});
/*Gasenje menija kad se klikne sa strane */
overlay.addEventListener("click",()=>{

    nav.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.innerHTML="☰";
    document.body.style.overflow = '';

});
/*Gasenje menija kad se klikne na link */
links.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.innerHTML="☰";
        document.body.style.overflow = '';

    });
   
});

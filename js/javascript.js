/*ScrollReveal Animation*/

const leftAnimation= {
    distance:"10rem",
    origin:"left",
    duration:1000,
    easing:"ease-in",
   
}

ScrollReveal().reveal('.ani-left',leftAnimation);


const rightAnimation= {
    distance:"10rem",
    origin:"right",
    duration:1000,
    easing:"ease-in",
   
}

ScrollReveal().reveal('.ani-right',rightAnimation);


const bottomAnimation= {
    distance:"10rem",
    origin:"bottom",
    duration:1000,
    easing:"ease-in",
   
}

ScrollReveal().reveal('.ani-bottom',bottomAnimation);


const aniDelay= {
   delay:200,
   opacity:0,
   duration:2000,
}

ScrollReveal().reveal('.ani-delay',aniDelay);

const aniDelay2= {
    delay:700,
    opacity:0,
    duration:3000,
 }
 
 ScrollReveal().reveal('.ani-delay-2',aniDelay2);

 const aniDelay3= {
    delay:1000,
    opacity:0,
    duration:3000,
 }
 
 ScrollReveal().reveal('.ani-delay-3',aniDelay3);

 /*ScrollReveal Animation End*/



 /*Responsive Menu*/


 const navMenu = () =>{
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navList = document.querySelector(".nav-list");

    navbarToggle.addEventListener("click" , ()=>{
        navList.classList.toggle("nav-active");
        navbarToggle.classList.toggle("toggle");
    });
};

navMenu();

/*Menüden Bir Linke Tıkladığımda Menü Kapanacak*/ 
const navClose= () =>{
    const navList = document.querySelector(".nav-list");
    const navLink = document.querySelector(".nav-list");
    const navbarToggle = document.querySelector(".navbar-toggle");

    navLink.addEventListener("click", ()=>{
        navList.classList.remove("nav-active");
        navbarToggle.classList.remove("toggle")
    })
}
navClose();

 /*Responsive Menu END*/

 /*Services Slider */

const silder = ()=>{
    let firstChild,lastChild;
    const arrowLeft = document.querySelector("#arrow-left");
    const arrowRight = document.querySelector("#arrow-right");
    const servicesAll = document.querySelector("#services-slider");

    document.addEventListener("click" , ()=>{
        if(event.target === arrowLeft){
            lastChild = servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement("afterbegin",lastChild);
        }
        else if(event.target === arrowRight){
            firstChild = servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement("beforeend" , firstChild);
        }
    })
}

silder();
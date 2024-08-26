// loading

const loadingPage = document.querySelector(".loading");

window.addEventListener("load", () =>{
    loadingPage.style.opacity = 0;

    setTimeout(() => {
        loadingPage.style.display = "none";
    }, 200);
})


const links = document.querySelector(".navigation .container nav .links ul");
const toggleButton = document.querySelector("nav .button");

toggleButton.addEventListener("click", show);

function show () {
    links.classList.toggle("active");
    toggleButton.classList.toggle("active")
}

// carousel

const container = document.querySelector(".hero .backgrounds .carousel");
const photoWidth = document.querySelector(".hero .backgrounds .carousel .banner1").offsetWidth;
const leftButton = document.querySelector(".hero .backgrounds .controls .left");
const rightButton = document.querySelector(".hero .backgrounds .controls .right");
const images = document.querySelectorAll(".hero .backgrounds .carousel div");

let counter = 0

if(counter === 0){
    leftButton.disabled = true;
}

if(counter === 2){
    rightButton.disabled = true
}

leftButton.addEventListener("click", () => {
    container.scrollLeft -= photoWidth + 1;
    images[counter].classList.remove("active");
    counter -= 1;
    if(counter === 0){
        leftButton.disabled = true;
    } else{
        leftButton.disabled = false;
    }
    
    if(counter === 2){
        rightButton.disabled = true;
    }else{
        rightButton.disabled = false;
    }
    images[counter].classList.add("active");
    dots.forEach(el => {
        el.classList.remove("active")
    })
    dots[counter].classList.add("active")
    
})

rightButton.addEventListener("click", () => {
    container.scrollLeft += photoWidth + 1;
    images[counter].classList.remove("active");
    counter++;
    if(counter === 0){
        leftButton.disabled = true;
    } else{
        leftButton.disabled = false;
    }
    
    if(counter === 2){
        rightButton.disabled = true;
    }else{
        rightButton.disabled = false;
    } 
    images[counter].classList.add("active");
    dots.forEach(el => {
        el.classList.remove("active")
    })
    dots[counter].classList.add("active")

})

// indicators

const dots = document.querySelectorAll(".hero .backgrounds .indicators span");

// function activation() {
    
//     dots.forEach(dot => {
//         dot.classList.remove("active");
//         this.classList.add("active")

        
//     })


// }

// dots.forEach(element => {
//     element.addEventListener("click", activation)
// });

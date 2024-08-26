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
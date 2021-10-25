const Burger =document.querySelector(".burger")
const navlinks =document.querySelector(".navlinks")

Burger.addEventListener("click", () => {
     navlinks.classList.toggle("change")
     Burger.classList.toggle("active")
})
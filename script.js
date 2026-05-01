// Hamburger
const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function(){
  nav.classList.toggle("turun");
});

// List apala
const list = document.getElementsByClassName("label");

for (var i = 0; i < list.length; i++ ){
  list[i].addEventListener("click", function(){
    this.classList.toggle("buka");
  })
}

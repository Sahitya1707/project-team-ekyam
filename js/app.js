const bar = document.getElementById("hamburger");
const close = document.getElementById("close-hamburger");
let rightNav = document.querySelector(".rightNav");
const body = document.querySelector("body");
const dark = document.querySelectorAll(".dark");
const light = document.querySelectorAll(".white");
let logo = document.querySelector(".logo-img");
console.log(logo.src);

console.log(dark, light);
bar.addEventListener("click", openRightNav);
close.addEventListener("click", closeRightNav);
function openRightNav() {
  bar.classList.add("hidden");
  rightNav.classList.add("right-width");
  close.classList.remove("hidden");
}
function closeRightNav() {
  bar.classList.remove("hidden");
  rightNav.classList.remove("right-width");
  rightNav.style.cssText = " transition:var(--transition-off);";
  close.classList.add("hidden");
}

dark.forEach(function (e, i) {
  e.addEventListener("click", function () {
    body.classList.add("dark-mode");
    //   body.style.cssText = "transition:all 0.6s ease 0s;";
    light[i].classList.remove("hidden");
    dark[i].classList.add("hidden");
    logo.src = "./Images/whitelogo.png";
  });
});

light.forEach(function (e, i) {
  e.addEventListener("click", function () {
    body.classList.remove("dark-mode");
    light[i].classList.add("hidden");
    dark[i].classList.remove("hidden");
    //   body.style.cssText = "transition:all 0.6s ease 0s;";
    logo.src = "./Images/blacklogo.png";
  });
});

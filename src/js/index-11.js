// create dropdown

const dropBtn = document.querySelectorAll(".drop__link");
// const dropItem = document.querySelector()
dropBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const targetEl = el.closest(".drop__item");
    targetEl.classList.toggle("show-drop");
  });
});
/*
// show playlis and settings
const allplaylist = document.querySelector(".dropdown__item--1");

allplaylist.addEventListener("click", function () {
  showDark();
});

const newPlaylistBtn = document.querySelector(".dropdown__item--2");
// console.log(newPlaylistBtn);
newPlaylistBtn.addEventListener("click", () => {
  showDark();
  // console.log(e.target);
});

function showDark() {
  const body = document.querySelector("body");
  body.classList.add("dark");
  body.style.background = "#cecece";
  // body.classList.add("overlay");
  // console.log(e.target);
}
*/
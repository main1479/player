let slider = document.getElementById("slider");
let fill = document.querySelector(".bar .fill");
function fillw() {
  fill.style.width = slider.value + "%";
}
slider.addEventListener("input", fillw);

// create dropdown

const dropBtn = document.querySelectorAll(".drop__link");
// const dropItem = document.querySelector()
dropBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const targetEl = el.closest(".drop__item");
    targetEl.classList.toggle("show-drop");
  });
});

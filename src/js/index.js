let slider = document.getElementById("slider");
let fill = document.querySelector(".bar .fill");
function fillw() {
  fill.style.width = slider.value + "%";
}
slider.addEventListener("input", fillw);

// =========================================
// sliders

$(".homepage-slider1").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
    },
  },
});

$(".homepage-slider2").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
    },
  },
});


$(".homepage-slider3").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 0,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
    },
  },
});

// const dropBtn = document.querySelectorAll(".drop__link");
// dropBtn.forEach((el) => {
//   el.addEventListener("click", (e) => {
// //     const drop = document.querySelector(".drop__item");
// //   drop.classList.toggle("show-drop");
// console.log(e.target);
// 	// e.classlist.toggle('show-drop')
// 	const dr = e.closest('.dropdown')
// 	console.log(dr);
//   });
// });

// const closeDropdown = () => {
// 	const dropdown = document.querySelector(".dropdown");
// 	dropdown.style.display = "flex";
// };

// const closeDropdown = () => {
// 	const dropdown = document.querySelector(".dropdown");
// 	dropdown.style.display = "flex";
// };

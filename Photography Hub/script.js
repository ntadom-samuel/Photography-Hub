"use strict";
// infoTab();
// function infoTab(){
//   const headerContainer = document.querySelector(".head-container");
//   const notificationDiv = document.createElement("div");
//   notificationDiv.classList.add("head-notification", "flex");
//   notificationDiv.innerHTML = `<p>NEW DEAL: Pay <strong>250$</strong> to enroll in lilly academy per quater.</p> <button class= "btn btn-full notification-close">close</ion-icon></button>`;
//   headerContainer.append(notificationDiv);
//   const closeNotificationButton = document.querySelector(".notification-close");
//   closeNotificationButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     notificationDiv.remove();
//   });
// };
const navLinksContainer = document.querySelector(".navigation");
const navigationBar = document.querySelector(".head-container");
const navBarHeight = navigationBar.getBoundingClientRect().height;
const heroSection = document.querySelector(".section-hero");

//SMOOTH SCROLLING TO SECTIONS
navLinksContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//IMPLEMENTION STICKYNOTES: intersection observer API
function stickCallback(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navigationBar.classList.add("sticky");
  else navigationBar.classList.remove("sticky");
}
const stickOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navBarHeight}px`,
};
const heroObserver = new IntersectionObserver(stickCallback, stickOptions);
heroObserver.observe(heroSection);

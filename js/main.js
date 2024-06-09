let navClick = document.getElementById("navClick");
let navClose = document.getElementById("navClose");
let dropdown = document.querySelector(".dropdown-content");

navClick.addEventListener("click", function(event) {
  navClose.classList.remove("hidden");
  dropdown.classList.remove("hidden");
  navClick.classList.add("hidden");
});

navClose.addEventListener("click", function(event) {
  navClick.classList.remove("hidden");
  navClose.classList.add("hidden");
  dropdown.classList.add("hidden");
});

var icons = document.querySelectorAll(".bi");

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    var message = "";

    if (icon.classList.contains("bi-hand-thumbs-up-fill")) {
      message = "Movie liked +1";
    } else if (icon.classList.contains("bi-hand-thumbs-down-fill")) {
      message = "Movie disliked";
    } else if (icon.classList.contains("bi-plus-circle-fill")) {
      message = "Movie added +1";
    } else if (icon.classList.contains("bi-download")) {
      message = "Movie downloading...";
    }

    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message");

    icon.parentNode.appendChild(messageDiv);

    setTimeout(function () {
      messageDiv.remove();
    }, 2000);
  });
});

// dark mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".hero-container, .music-wrapper-heading, .Users-wrapper-heading, .swipper-user-content, .info-project, .profile-text,.bi-caret-down-fill .slick-prev::before, .slick-next::before, .slick-next, .navbar, .sidebar, .movie-list-title, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select,.featured-items button, #foreign, #films, #comedy, #fear, #home, .movie-item-bottom-info, .movie-item,.menu-list-item,.sidebar, .replic-6-item-wrapper, .replic-text q,.replic_movie_name"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});

var typed = new Typed(".typing", {
  strings: [
    "Top filmlerden sizler için seçdigimiz en iyi replikler",
    "The best replics we have chosen for you from the top movies",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  smartBackspace: true,
});

// burger icon
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const menuList = document.querySelector(".menu-list");

  burgerMenu.addEventListener("click", function () {
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "block";
    }
  });
});

// loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

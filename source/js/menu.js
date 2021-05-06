(function () {
  const HEADER = document.querySelector(".header");
  const BUTTON_TOGGLE = document.querySelector(".toggle");
  const PAGE = document.querySelector(".page");

  if (HEADER && BUTTON_TOGGLE && PAGE) {
    PAGE.classList.remove("page--nojs");
    HEADER.classList.remove("header--active");

    const toggleMenu = (event) => {
      if (
        (event.target.closest(".toggle") && event.type === "click") ||
        event.key === "Escape"
      ) {
        HEADER.classList.toggle("header--active");
        PAGE.classList.toggle("page--block");
      }

      if (HEADER.classList.contains("header--active")) {
        document.addEventListener("keydown", toggleMenu);
      } else {
        document.removeEventListener("keydown", toggleMenu);
      }
    };

    BUTTON_TOGGLE.addEventListener("click", toggleMenu);
    HEADER.addEventListener("click", (event) => {
      if (!event.target.classList.contains("nav__link")) return;
      HEADER.classList.remove("header--active");
      PAGE.classList.remove("page--block");
    });
  }
})();

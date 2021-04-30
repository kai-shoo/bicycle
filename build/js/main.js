"use strict";

(function () {
  const HEADER = document.querySelector(".header");
  const BUTTON_TOGGLE = document.querySelector(".toggle");
  const PAGE = document.querySelector(".page");

  if (HEADER && BUTTON_TOGGLE && PAGE) {
    PAGE.classList.remove("page--nojs");
    HEADER.classList.remove("header--active");

    const toggleMenu = (event) => {
      if (event.target.closest(".toggle") || event.key === "Escape") {
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
;
(function () {
  const PHONE_INPUT = document.querySelector('input[type="tel"]');
  const FORM = document.querySelector(".form");

  if (PHONE_INPUT && FORM) {
    const PHONE_MASK = IMask(PHONE_INPUT, {
      mask: "+{7}(000)000-00-00",
    });

    FORM.addEventListener("submit", (e) => {
      const FORM_DATA = new FormData(FORM);

      fetch("https://echo.htmlacademy.ru/", {
        method: "post",
        body: FORM_DATA,
      });
    });
  }
})()
;

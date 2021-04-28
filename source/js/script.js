"use strict";

(function () {
  const header = document.querySelector(".header");
  const buttonToggle = document.querySelector(".toggle");
  const page = document.querySelector(".page");

  if (header && buttonToggle && page) {
    header.classList.remove("header--nojs");
    header.classList.remove("header--active");

    const toggleMenu = (event) => {
      if (event.target.closest(".toggle") || event.key === "Escape") {
        header.classList.toggle("header--active");
        page.classList.toggle("page--block");
      }

      if (header.classList.contains("header--active")) {
        document.addEventListener("keydown", toggleMenu);
      } else {
        document.removeEventListener("keydown", toggleMenu);
      }
    };

    buttonToggle.addEventListener("click", toggleMenu);
  }

  const phoneInput = document.querySelector('input[type="tel"');
  const form = document.querySelector(".form");

  if (phoneInput && form) {
    const phoneMask = IMask(phoneInput, {
      mask: "+{7}(000)000-00-00",
    });

    form.addEventListener("submit", (e) => {
      const formData = new FormData(form);

      fetch("https://echo.htmlacademy.ru/", {
        method: "post",
        body: formData,
      });
    });
  }
})();

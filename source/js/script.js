"use strict";

const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle");
const page = document.querySelector(".page");

if (header && toggle && page) {
  header.classList.remove("header--nojs");
  header.classList.remove("header--active");

  toggle.addEventListener("click", () => {
    header.classList.toggle("header--active");
    page.classList.toggle("page--block");
  });
}

const phoneInput = document.querySelector('input[type="tel"');

if (phoneInput) {
  const phoneMask = IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });

  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    // e.preventDefault();
  });
}

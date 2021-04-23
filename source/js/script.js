"use strict";

const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle");

header.classList.remove("header--nojs");
header.classList.remove("header--active");

toggle.addEventListener("click", () => {
  header.classList.toggle("header--active");
});

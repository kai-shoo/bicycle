(function () {
  const PHONE_INPUT = document.querySelector('input[type="tel"]');
  const FORM = document.querySelector(".form__container");

  if (PHONE_INPUT && FORM) {
    const PHONE_MASK = IMask(PHONE_INPUT, {
      mask: "+{7}(000)000-00-00",
    });

    FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      const FORM_DATA = new FormData(FORM);

      fetch("https://echo.htmlacademy.ru/", {
        method: "post",
        body: FORM_DATA,
      });
    });
  }
})();

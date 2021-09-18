(function () {
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const burgers = document.querySelectorAll('.navbar-burger');
    burgers.length

    burgers.forEach((burger) => {
      burger.addEventListener('click', () => {
        const target = document.getElementById(burger.dataset.target);
        burger.classList.toggle('is-active');
        target.classList.toggle('is-active');
      })
    })
  });
})();

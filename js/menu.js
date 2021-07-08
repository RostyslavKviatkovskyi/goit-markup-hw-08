// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector(".menu-open"),
//     closeMenuBtn: document.querySelector(".menu-close"),
//     modal: document.querySelector(".mobile-nav"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector(".menu-open"),
    closeModalBtn: document.querySelector(".menu-close"),
    modal: document.querySelector(".mobile-nav"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

"use strict";

function switchProducts() {
  const switchProd = document.querySelectorAll("#switch");
  const prodWrapper = document.querySelectorAll(".product-wrapper");

  switchProd.forEach((element) => {
    const attr = element.getAttribute("data-disp");

    element.addEventListener("click", () => {
      let item = document.querySelector("." + attr);

      switchProd.forEach((element) => {
        element.classList.remove("_active");
      });
      element.classList.add("_active");

      prodWrapper.forEach((element) => {
        element.classList.add("hide");
        item.classList.remove("hide");
      });
    });
  });
}

switchProducts();

function dropDown() {
  const btnDrop = document.querySelector(".btn-drop");

  if (btnDrop) {
    const expandMore = btnDrop.querySelector(".expand");
    const answers = btnDrop.querySelector(".answers");
    btnDrop.addEventListener("click", () => {
      answers.classList.toggle("active");
      expandMore.classList.toggle("active");
    });
  }
}

dropDown();

function openModal() {
  const openModal = document.querySelector(".open-modal");
  const modalWrapper = document.querySelector(".modal-wrapper");

  if (openModal && modalWrapper) {
    const quitModal = document.querySelectorAll(".close-modal");
    openModal.addEventListener("click", () => {
      modalWrapper.style.opacity = 0;
      setTimeout(() => {
        modalWrapper.style.opacity = 1;
      }, 100);
      modalWrapper.classList.remove("hide");
      document.body.classList.add("_lock");
    });

    quitModal.forEach((element) => {
      element.addEventListener("click", closeModal);
    });

    window.addEventListener("click", function (event) {
      if (event.target == modalWrapper) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (modalWrapper) {
      modalWrapper.style.opacity = 0;
      setTimeout(() => {
        modalWrapper.classList.add("hide");
      }, 500);
      document.body.classList.remove("_lock");
    }
  }
}

openModal();

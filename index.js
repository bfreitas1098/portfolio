/* Footer year */
const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;

/* Form submission */
const form = document.querySelector("form");
const dialog = document.querySelector(".form-dialog");
const closeBtn = document.querySelector(".close-icon");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   dialog.showModal();
// });

// closeBtn.addEventListener("click", () => {
//   dialog.close();
//   nameInput.value = "";
//   emailInput.value = "";
//   messageInput.value = "";
// });

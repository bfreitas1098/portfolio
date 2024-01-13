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

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Thank you for your submission"))
    .catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);

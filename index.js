/* Footer year */
const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;

/* FormSubmit API setup */
// fetch("https://formsubmit.co/api/get-apikey/bfreitas1098@hotmail.com", {
//   method: "GET",
// });

const apiKey =
  "a7e537ec0e118c186c7a974c1be5e9093d7120d00b9cfb83230eb11144488757";

fetch(`https://formsubmit.co/api/get-submissions/${apiKey}`, {
  method: "GET",
});

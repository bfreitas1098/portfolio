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

/* Smooth scrolling */
const aboutLink = document.querySelector(".nav-link--about");
const testimonialsLink = document.querySelector(".nav-link--testimonials");
const projectsLink = document.querySelector(".nav-link--projects");
const contactLink = document.querySelector(".nav-link--contact");
const aboutSection = document.getElementById("about-section");
const testimonialsSection = document.getElementById("testimonials-section");
const projectsSection = document.getElementById("projects-section");
const contactSection = document.getElementById("contact-section");

const scroll = function (section) {
  section.scrollIntoView({ behavior: "smooth" });
};

aboutLink.addEventListener("click", scroll.bind(this, aboutSection));
testimonialsLink.addEventListener(
  "click",
  scroll.bind(this, testimonialsSection)
);
projectsLink.addEventListener("click", scroll.bind(this, projectsSection));
contactLink.addEventListener("click", scroll.bind(this, contactSection));

/* Lazy loading images */
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace data-src with src
  entry.target.src = entry.target.dataset.src;

  // Remove blur on images
  entry.target.addEventListener("load", () =>
    entry.target.classList.remove("lazy-img")
  );

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px", // <- we do this so 200px before we see the images we will already have commenced the loading process
});

imgTargets.forEach((img) => imgObserver.observe(img));

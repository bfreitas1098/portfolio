/* Footer year */
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

/* FormSubmit API setup */

// fetch("https://formsubmit.co/api/get-apikey/bfreitas1098@hotmail.com", {
//   method: "GET",
// });

// fetch(`https://formsubmit.co/api/get-submissions/${apiKey}`, {
//   method: "GET",
// });

/* Smooth scrolling */
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const sections = {
  about: document.getElementById("about-section"),
  projects: document.getElementById("projects-section"),
  testimonials: document.getElementById("testimonials-section"),
  contact: document.getElementById("contact-section"),
};

const scrollToSection = (section) => {
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth" });
};

/* Previous smooth scrolling logic */

// if (header.getBoundingClientRect().width <= 600) {
//   aboutLink = document.querySelector(".responsive-link--about");
//   testimonialsLink = document.querySelector(".responsive-link--testimonials");
//   projectsLink = document.querySelector(".responsive-link--projects");
//   contactLink = document.querySelector(".responsive-link--contact");
// }

// if (header.getBoundingClientRect().width > 600) {
//   aboutLink = document.querySelector(".nav-link--about");
//   testimonialsLink = document.querySelector(".nav-link--testimonials");
//   projectsLink = document.querySelector(".nav-link--projects");
//   contactLink = document.querySelector(".nav-link--contact");
// }

// const scroll = function (section) {
//   section.scrollIntoView({ behavior: "smooth" });
// };

// aboutLink.addEventListener("click", scroll.bind(this, aboutSection));
// testimonialsLink.addEventListener(
//   "click",
//   scroll.bind(this, testimonialsSection),
// );
// projectsLink.addEventListener("click", scroll.bind(this, projectsSection));
// contactLink.addEventListener("click", scroll.bind(this, contactSection));
// headerLink.addEventListener("click", scroll.bind(this, header));

/* Lazy loading images */
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace data-src with src
  entry.target.src = entry.target.dataset.src;

  // Remove blur on images
  entry.target.addEventListener("load", () =>
    entry.target.classList.remove("lazy-img"),
  );

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

/* Responsive navigation */
const responsiveNav = document.querySelector(".responsive-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

const openMenu = () => {
  responsiveNav.classList.remove("hidden");
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
};

const closeMenu = () => {
  responsiveNav.classList.add("hidden");
  closeBtn.classList.add("hidden");
  menuBtn.classList.remove("hidden");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

const responsiveLinks = [
  aboutLink,
  testimonialsLink,
  projectsLink,
  contactLink,
];

for (let i = 0; i < responsiveLinks.length; i++) {
  responsiveLinks[i].addEventListener("click", closeMenu);
}

/* Sticky nav */
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener("DOMContentLoaded", () => {
  const stickyNav = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      responsiveNav.classList.add("bg");
    }
    if (entry.isIntersecting) {
      nav.classList.remove("sticky");
      responsiveNav.classList.remove("bg");
    }
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);
});

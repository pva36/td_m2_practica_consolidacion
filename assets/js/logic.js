// Highlight for "gates" ------------------------------------------------------

let gateElem = []; // contains ".gate" elements

// append .gate element to gateElem
const about = document.getElementById("about");
gateElem.push(about);

const projects = document.getElementById("projects");
gateElem.push(projects);

const contact = document.getElementById("contact");
gateElem.push(contact);

const github = document.getElementById("github");
gateElem.push(github);

// Add event listeners (highligh - unHighlight) for each .gate element
for (let elem of gateElem) {
  elem.addEventListener("mouseover", function () {
    this.classList.add("highlighted");
  });
}

for (let elem of gateElem) {
  elem.addEventListener("mouseleave", function () {
    this.classList.remove("highlighted");
  });
}

// Window system -------------------------------------------------------------

// relevant objects

const main = document.getElementById("main");
const minMainButton = document.getElementById("min-button");
const maxMainButton = document.getElementById("max-button");
const nav = document.getElementById("nav");

// hide main when x button is clicked
minMainButton.addEventListener("click", function () {
  main.classList.remove("grid-min-show");
  main.classList.remove("grid-max-show");
  nav.classList.remove("grid-left");
  nav.classList.remove("grid-top");
  about.classList.remove("grid-left");
  about.classList.remove("grid-top");
  projects.classList.remove("grid-left");
  projects.classList.remove("grid-top");
  contact.classList.remove("grid-left");
  contact.classList.remove("grid-top");
  github.classList.remove("grid-left");
  github.classList.remove("grid-top");
});

// Maximize main when max button is clicked
maxMainButton.addEventListener("click", function () {
  main.classList.remove("grid-min-show");
  main.classList.add("grid-max-show");
  nav.classList.add("grid-top");
  nav.classList.remove("grid-left");
  about.classList.add("grid-top");
  about.classList.remove("grid-left");
  projects.classList.add("grid-top");
  projects.classList.remove("grid-left");
  contact.classList.add("grid-top");
  contact.classList.remove("grid-left");
  github.classList.add("grid-top");
  github.classList.remove("grid-left");
});

// Open main window when clicking on pertinent buttons
for (let i = gateElem.length - 2; i >= 0; i--) {
  gateElem[i].addEventListener("click", () => {
    for (element of nav.classList) {
      // if "grid-top" is a current class of nav, then main is already on screen
      if ("grid-top" === element) {
        return;
      }
    }
    main.classList.add("grid-min-show");
    nav.classList.add("grid-left");
    about.classList.add("grid-left");
    projects.classList.add("grid-left");
    contact.classList.add("grid-left");
    github.classList.add("grid-left");
  });
}

// TODO: show pertinent element when specific buttons of nav are pressed.
let mainElements = [];

const contactForm = document.getElementById("contact-form");
mainElements.push(contactForm);

const aboutContainer = document.getElementById("about-container");
mainElements.push(aboutContainer);

const projectsContainer = document.getElementById("projects-container");
mainElements.push(projectsContainer);

// open contact in main
contact.addEventListener("click", function () {
  for (element of mainElements) {
    element.classList.remove("show");
  }
  contactForm.classList.add("show");
});

projects.addEventListener("click", function () {
  for (element of mainElements) {
    element.classList.remove("show");
  }
  projectsContainer.classList.add("show");
});

// open about
about.addEventListener("click", function () {
  for (element of mainElements) {
    element.classList.remove("show");
  }
  aboutContainer.classList.add("show");
});

// Form -----------------------------------------------------------------------

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let userName = contactForm.elements.namedItem("form-name").value;
  alert("I'll contact you, " + userName + "!");
});

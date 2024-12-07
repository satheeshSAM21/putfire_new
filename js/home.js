const about = document.getElementById("about");
const services = document.getElementById("services");
const products = document.getElementById("products");
const careers = document.getElementById("careers");
const conduct = document.getElementById("contact");
const moduleContainer = document.getElementById("main-container");
import AboutModule from "./About/about.js";
import ServicesModuleModule from "./Services/services.js";
import ProductModule from "./Product/product.js";
import CareersModule from "./Careers/careers.js";
import ConductModule from "./Conduct/conduct.js";
// Function to update module content
function changeModule(content) {
  moduleContainer.innerHTML = content;
}

const module_names = ["about", "services", "products"];
console.log(about);

// Add event listeners to buttons
about.addEventListener("click", function () {
  console.log("safsdfs", about);
  changeModule(AboutModule());
  about.style.color = "#7b2587";
  services.style.color = "#000000";
  products.style.color = "#000000";
  careers.style.color = "#000000";
  conduct.style.color = "#000000";

  moduleContainer.style.background = "#fff";
});

services.addEventListener("click", function () {
  changeModule(ServicesModuleModule());
  services.style.color = "#7b2587";
  about.style.color = "#000000";
  products.style.color = "#000000";
  careers.style.color = "#000000";
  conduct.style.color = "#000000";

  moduleContainer.style.background = "#fff";
});

products.addEventListener("click", function () {
  changeModule(ProductModule());
  products.style.color = "#7b2587";
  about.style.color = "#000000";
  services.style.color = "#000000";
  careers.style.color = "#000000";
  conduct.style.color = "#000000";

  moduleContainer.style.background = "#fff";
});

careers.addEventListener("click", function () {
  changeModule(CareersModule());
  careers.style.color = "#7b2587";
  about.style.color = "#000000";
  services.style.color = "#000000";
  products.style.color = "#000000";
  conduct.style.color = "#000000";
  moduleContainer.style.background = "#fff";
});

conduct.addEventListener("click", function () {
  changeModule(ConductModule());
  conduct.style.color = "#7b2587";
  careers.style.color = "#000000";
  about.style.color = "#000000";
  services.style.color = "#000000";
  products.style.color = "#000000";

  moduleContainer.style.background = "#fff";
});

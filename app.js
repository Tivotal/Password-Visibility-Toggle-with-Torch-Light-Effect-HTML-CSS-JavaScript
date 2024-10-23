/* Created by Tivotal */

let toggleBtn = document.querySelector(".toggle-btn");
let body = document.querySelector("body");
let passInput = document.querySelector(".pass");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("show");

  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});

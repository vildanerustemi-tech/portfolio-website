document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("helloBtn");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "Hello! Thanks for visiting my website 😊";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // shumë e rëndësishme

    if (nameInput.value === "" || emailInput.value === "") {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";

      // reset form
      nameInput.value = "";
      emailInput.value = "";
    }
  });
});

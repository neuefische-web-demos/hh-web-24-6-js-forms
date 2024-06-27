// console.log("sanity check!!!");

// add an event listenter
// click?
// submit event

const form = document.querySelector('[data-js="form"]');
// console.log("form:", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("event", event);
  // console.log("form submitted!");

  const formElements = event.target.elements;
  // const firstName = formElements.firstName.value;
  // console.log("firstName: ", firstName);

  // FormData // 2 step process. get FormData,
  const formData = new FormData(event.target);
  // convert formData into an object
  const data = Object.fromEntries(formData);

  console.log("data: ", data);
  console.log("age: ", Number(data.age) + 12);

  // we can reset the form
  event.target.reset();

  // we can refocus a specific element
  formElements.firstName.focus();
});
// BREAK TIME! Meet back at 10:00

const charactersLeftSpan = document.querySelector(
  '[data-js="remaining-characters"]'
);
const messageInput = document.querySelector('[data-js="personal-message"]');

// console.log("messageInput: ", messageInput);
messageInput.addEventListener("input", (event) => {
  console.log("input happening!");
  console.log(event.target);
  console.log(event.target.value);
  // we want to work out how many characters there are in the textarea....
  const lengthOfInput = event.target.value.length;
  console.log("lengthOfInput", lengthOfInput);
  charactersLeftSpan.textContent = 150 - lengthOfInput;
});

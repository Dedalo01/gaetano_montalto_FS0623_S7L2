// esercizio 1
const form = document.querySelector("form");
const userName = document.querySelector("#userName");
const spanName = document.querySelector("#previousName");
const resetBtn = document.querySelector("#resetBtn");

if (localStorage.getItem("userName")) {
  spanName.classList.remove("hide");
  spanName.innerText =
    "Nome precedentemente inserito: " + localStorage.getItem("userName");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("userName", userName.value);
  let showName = localStorage.getItem("userName");

  spanName.classList.remove("hide");
  spanName.innerText = "Nome precedentemente inserito: " + showName;
  userName.value = "";
});

resetBtn.addEventListener("click", () => {
  if (localStorage.getItem("userName")) {
    localStorage.removeItem("userName");
  }

  userName.value = "";
  spanName.classList.add("hide");
  spanName.innerText = "";
});

// esercizio 2
const counterP = document.querySelector("#counter");

setInterval(() => {
  if (!sessionStorage.getItem("userCounter")) {
    sessionStorage.setItem("userCounter", 0);
  }
  let counter = sessionStorage.getItem("userCounter");
  counter++;
  counterP.innerText = counter;
  sessionStorage.setItem("userCounter", counter);
}, 1000);

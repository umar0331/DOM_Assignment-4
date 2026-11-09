//Task 1
let btn = document.getElementById("btn");
let pra = document.getElementById("pra");
btn.addEventListener("click", function () {
  pra.classList.add("class", "highlight");
});

//Task 2
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  pra.removeAttribute("class");
});

//Task 3
let pra2 = document.getElementById("pra2");
let togglee = document.getElementById("toggle");

togglee.addEventListener("click", function () {
  pra2.classList.toggle("highlight2");
});

//Task 4
let usecon = document.querySelector(".usecontint");
let useContint_btn = document.getElementById("useco");

useContint_btn.addEventListener("click", function () {
  if (usecon.classList.contains("usecont")) {
    alert("class exists");
  } else {
    alert("class not exists");
  }
});

//Task 5
let app = document.getElementById("app");
let appbtn = document.getElementById("last");

appbtn.addEventListener("click", function () {
  app.classList.toggle("ht");
});

//Task 6
let dark = document.getElementById("dark");
let all_b = document.body;
dark.addEventListener("click", function () {
  all_b.classList.toggle("all_body");
  if (all_b.classList.contains("all_body")) {
    dark.innerText = "Go to lightmood ";
  } else {
    dark.innerText = "Go to Darkmood";
  }
});

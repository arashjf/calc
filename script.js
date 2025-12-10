const display = document.getElementById("display");
const divbtn = document.getElementById("buttons");
const validList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "DEL",
  "C",
  "%",
  "/",
  "*",
  "-",
  "+",
  ".",
  "=",
];
const oprator = [
  "%",
  "/",
  "*",
  "-",
  "+",
  ".",
  "="
]

function valid(innerContent) {
  if (validList.includes(innerContent)) calc(innerContent);
}

function calc(item) {
  if (display.innerText === "" & oprator.includes(item)) return; 
  
  if (item === "C") {
    display.innerText = "";
    return;
  }

  if (item === "=") {
    display.innerText = eval(display.innerText);
    return;
  }

  if (item === "DEL") {
    display.innerText = display.innerText.slice(0, -1);
    return;
  }

  if (item === "%") {
    display.innerText /= 100;
    return;
  }
  
  display.innerText += item;
}

divbtn.addEventListener("click", e => valid(e.target.innerText));


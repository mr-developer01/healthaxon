const lines = document.querySelector("#lines");
const icon = document.querySelectorAll(".line");
const lineClose = document.querySelector("#lineClose");
const lineC = document.querySelectorAll(".lineC");
const links = document.querySelector("#links");
const url1 = document.querySelector("#url1");
const url2 = document.querySelector("#url2");
const url3 = document.querySelector("#url3");
const url4 = document.querySelector("#url4");
const url5 = document.querySelector("#url5");
const url6 = document.querySelector("#url6");
const circle = document.querySelector(".circle");
const a = document.querySelectorAll(".a");

var imagePaths = [
  "images/img6.jpg",
  "images/img5.jpg",
  "images/img4.jpg",
  "images/img3.jpg",
  "images/img2.jpg",
  "images/img1.jpg",
];

lines.addEventListener("click", function () {
  magic4();
  magic();
  rotate();
  magic3();
  links.style.opacity = 1;
});

lineClose.addEventListener("click", function () {
  magic5();
  lineC.forEach((data) => {
    data.style.width = "0";
  });
  magic2();
  links.style.opacity = 0;
});

url1.addEventListener("mouseenter", () => {
  circle.src = `${imagePaths[0]}`;
});

url2.addEventListener("mouseenter", () => {
    circle.src = `${imagePaths[1]}`;
});

url3.addEventListener("mouseenter", () => {
    circle.src = `${imagePaths[2]}`;
});

url4.addEventListener("mouseenter", () => {
    circle.src = `${imagePaths[3]}`;
});

url5.addEventListener("mouseenter", () => {
    circle.src = `${imagePaths[4]}`;
});

url6.addEventListener("mouseenter", () => {
    circle.src = `${imagePaths[5]}`;
});

function magic() {
  icon.forEach((data) => {
    data.style.width = "0";
  });
}

function magic2() {
  icon.forEach((data) => {
    data.style.width = "40px";
  });
}

function magic3() {
  lineC.forEach((data) => {
    data.style.width = "40px";
  });
}

function magic4() {
  a.forEach((data) => {
    data.style.transform = "translateY(0%)";
  });
}

function magic5() {
  a.forEach((data) => {
    data.style.transform = "translateY(40px)";
  });
}

function rotate() {
  for (var i = 0; i < lineC.length; i++) {
    if (i === 0) {
      lineC[i].style.width = "40px";
    } else {
      lineC[i].style.width = "40px";
    }
  }
}

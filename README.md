<<<<<<< HEAD
/*
let BackgroundInterval;

let landingPage = document.querySelector(".landing-img");
let imgsArray = ["001.webp", "002.webp", "003.webp", "004.webp", "005.webp", "007.webp", "009.webp", "010.webp"];

// Function To Randomize Image
function randomizeImg() {
    BackgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage =
        'url("./imgs/landing_img/' + imgsArray[randomNumber] + '")';
    }, 5000);
}
randomizeImg();

// ------------------ arrow To Scroll To Page Up ----------------------------
let arrow = document.querySelector(".toTop i")
arrow.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
);
document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) { // يظهر السهم بعد التمرير لأكثر من 100px
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
})



// --------------------------- Footer----------------------------------------
document.getElementById("current-year").textContent = new Date().getFullYear();

*/
=======
# smarttest
>>>>>>> d6413feb6a3d8c0ca612a31280610ae22ccb1576

const image1 = document.getElementById("barbieOriginal1");
const image2 = document.getElementById("barbieOriginal2");
const image3 = document.getElementById("barbieOriginal3");
const image4 = document.getElementById("barbieOriginal4");

const text1 = document.getElementById("imageText1");
const text2 = document.getElementById("imageText2");
const text3 = document.getElementById("imageText3");
const text4 = document.getElementById("imageText4");


image1.addEventListener("click", function() {
    if (text1.style.display === "none") {
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";

    } else {
        text1.style.display = "none";
    }
});

image2.addEventListener("click", function() {
    if (text2.style.display === "none") {
        text2.style.display = "block";
        text1.style.display = "none";
        text3.style.display = "none";

    } else {
        text2.style.display = "none";
    }
});

image3.addEventListener("click", function() {
    if (text3.style.display === "none") {
        text3.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";

    } else {
        text3.style.display = "none";
    }
});

image4.addEventListener("click", function() {
    if (text4.style.display === "none") {
        text4.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";

    } else {
        text4.style.display = "none";
    }
});

// document.getElementById('veranderKnop').addEventListener('click', function() {
//     // Verander de bron van de afbeelding
//     document.getElementById('mijnAfbeelding').src = 'nieuweAfbeelding.jpg';
// });


// script.js
document.getElementById("openButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Verwijs naar de hoofdpagina
  });
  

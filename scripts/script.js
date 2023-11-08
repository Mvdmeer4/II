// Ik had de naam "image1" 2, 3, etc gegeven. Je klikt echter op de button, dus ik wilde de naam veranderen zodat dit duidelijker was. Echter toen ik deze ging aanpassen werkte het niet meer dus ik heb ervoor gekozen om deze naam te laten staan. Maar het is dus de bedoeling dat je op de button klikt en dan krijg je de tekst te zien. Niet op de afbeelding.

const barbieButton1 = document.getElementById("barbieOriginal1");
const barbieButton2 = document.getElementById("barbieOriginal2");
const barbieButton3 = document.getElementById("barbieOriginal3");
const barbieButton4 = document.getElementById("barbieOriginal4");
const barbieButton5 = document.getElementById("barbieOriginal5");

const text1 = document.getElementById("imageText1");
const text2 = document.getElementById("imageText2");
const text3 = document.getElementById("imageText3");
const text4 = document.getElementById("imageText4");
const text5 = document.getElementById("imageText5");

var audio = document.querySelector("audio");


// Ik heb nu een display block, die zorgt ervoor dat als ik op een button klik, ik niet van elke button de tekst te zien krijg, deze heb ik aanstaan.
// Classes gemaakt om de juiste button aan te spreken.


barbieButton1.addEventListener("click", function () {
    text1.classList.add("show");
    text2.classList.remove("show");
    text3.classList.remove("show");
    text4.classList.remove("show");
    text5.classList.remove("show");

    document.getElementById("barbieGroot").src = "./images/Tekengebied 2.png";

    audio.play();
    console.log("hoi")
});

barbieButton2.addEventListener("click", function () {
    text2.classList.add("show");
    text1.classList.remove("show");
    text3.classList.remove("show");
    text4.classList.remove("show");
    text5.classList.remove("show");

    document.getElementById("barbieGroot").src = "./images/Tekengebied 3.png";
});

barbieButton3.addEventListener("click", function () {
    text3.classList.add("show");
    text1.classList.remove("show");
    text2.classList.remove("show");
    text4.classList.remove("show");
    text5.classList.remove("show");

    document.getElementById("barbieGroot").src = "./images/Tekengebied 4.png";
});

barbieButton4.addEventListener("click", function () {
    text4.classList.add("show");
    text1.classList.remove("show");
    text2.classList.remove("show");
    text3.classList.remove("show");
    text5.classList.remove("show");

    document.getElementById("barbieGroot").src = "./images/Tekengebied 5.png";
});

barbieButton5.addEventListener("click", function () {
    text5.classList.add("show");
    text1.classList.remove("show");
    text2.classList.remove("show");
    text3.classList.remove("show");
    text4.classList.remove("show");

    document.getElementById("barbieGroot").src = "./images/Tekengebied 6.png";
});



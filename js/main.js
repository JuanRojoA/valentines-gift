const titleObj = document.getElementById("title");
const quoteObj = document.getElementById("quote");
const dateTextObj = document.getElementById("date");

const chackAnswerSpotifyBtn = document.getElementById("check-button-spo");
const closeSpotifyModalBtn = document.getElementById("cancel-button-spo");
const inputSpotifyQuestion = document.getElementById("husband-question");
const openSpotifyModalBtn = document.getElementById("spotify-btn");
const spotifyModalContainer = document.getElementById(
  "spotify-modal-container"
);

const checkAnswerTextBtn = document.getElementById("check-button-text");
const closeTextModalBtn = document.getElementById("cancel-button-text");
const inputTextQuestion = document.getElementById("date-question");
const openTextModalBtn = document.getElementById("text-btn");
const textModalContainer = document.getElementById("text-modal-container");

const dayQuote = new Date().getDate();
const hours = new Date().getHours();

const amswerSpotify = "Husband";
const answerText = "2022-01-12";

const terms = [
  "cuore mio",
  "my baby",
  "my sweetheart",
  "buddy",
  "honey",
  "mon amour",
  "my love",
  "cariño",
  "mon trésor",
  "my dear",
  "my darling",
  "kitten",
  "angel",
  "my sunshine",
  "romeo",
];

const quotes = {
  1: "I revoke my curse let it be no more.",
  2: "Furry. Hope you get better soon.",
  3: "White boys' hoe",
  4: "Hello beastie.",
  5: "You make me so happy.",
  6: "Who's a cute boy?",
  7: "Seek help.",
  8: "Eres mi varón",
  9: "I want some goodnight kisses.",
  10: "Oh, look, the little beast is about to fall off a cliff.",
  11: "And you love me like that.",
  12: "You're a strange sad little man.",
  13: "I shall bestbow a gift on the child.",
  14: "Ay es que eres tan lindo, maldita sea.",
  15: "Come and kiss me.",
  16: "KISS KISS and plenty of hugs.",
  17: "Te amo.",
  18: "Crybaby.",
  19: "Tengo una serpiente en mi bota",
  20: "Let's make a life together!!!",
  21: "Let's no be like an anime and go on forever.",
  22: "Mi varón.",
  23: "Someone likes to be called lil kitten, huh???",
  24: "Come and fuck me, baby.",
  25: "I like you begging. Do it again.",
  26: "Me gustas mucho, me encantas.",
  27: "Goodnight, my love.",
  28: "ILLEGAL.",
  29: "Re lindo ufff.",
  30: "Didn't mean to kiss the screen like that, my bad.",
  31: "I just love seeing you.",
};

const randomGreeting = Math.floor(Math.random() * (terms.length - 1));

if (hours >= 0 && hours < 6) {
  titleObj.innerHTML = `Good Evening, ${terms[randomGreeting]}`;
} else if (hours >= 6 && hours < 12) {
  titleObj.innerHTML = `Good Morning, ${terms[randomGreeting]}`;
} else if (hours >= 12 && hours < 18) {
  titleObj.innerHTML = `Good Afternoon, ${terms[randomGreeting]}`;
} else if (hours >= 18 && hours <= 23) {
  titleObj.innerHTML = `Good Night, ${terms[randomGreeting]}`;
}

let day = new Date().getDate();
let year = new Date().getFullYear();
let month = new Date().getMonth();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

dateTextObj.innerText = day + "/" + month + "/" + year;

quoteObj.innerHTML = `"${quotes[dayQuote]}"`;

openSpotifyModalBtn.addEventListener("click", () => {
  spotifyModalContainer.classList.remove("hidden");
});

closeSpotifyModalBtn.addEventListener("click", () => {
  alert("Giving up is for losers, but okay. Just so you know, I am crying.");
  spotifyModalContainer.classList.add("hidden");
});

chackAnswerSpotifyBtn.addEventListener("click", () => {
  if (inputSpotifyQuestion.value !== "") {
    let result = checkAnswer(amswerSpotify, inputSpotifyQuestion.value);
    let link =
      "https://open.spotify.com/playlist/4VUEIeSTL9Y3WJA1iRXFKU?si=ee5f7b759b224680";
    showAlerts(result, link);
  } else {
    alert("You gotta fill the input, you know :|");
  }
});

openTextModalBtn.addEventListener("click", () => {
  textModalContainer.classList.remove("hidden");
});

closeTextModalBtn.addEventListener("click", () => {
  alert("Louis will be so dissappointed :,(");
  textModalContainer.classList.add("hidden");
});

checkAnswerTextBtn.addEventListener("click", () => {
  console.log(inputTextQuestion.value);
  if (inputTextQuestion.value !== "") {
    let result = checkAnswer(answerText, inputTextQuestion.value);
    let link =
      "https://docs.google.com/document/d/1aSdd7XOv_OhV0dyyUbYA9Sfxf6bvn3uQcellSK2H118/edit?usp=sharing";
    showAlerts(result, link);
  } else {
    alert("You gotta fill the input, you know :|");
  }
});

function checkAnswer(answer, inputValue) {
  return answer === inputValue ? true : false;
}

function showAlerts(booleanValue, link) {
  if (booleanValue) {
    if (
      window.confirm("WOWSER, congratulations, you have guessed it #ProudDaddy")
    ) {
      window.open(link, "_blank");
    } else {
      alert("You gotta press okay, don't play dumb");
    }
  } else {
    alert("Wrong answer, how sad for you :(");
  }
}

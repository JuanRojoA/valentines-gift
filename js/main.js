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
  1: "I pledge allegiance to Max and the power for which she stands...",
  2: "World's gayest most wholesome best gay couple",
  3: "I like you so much, I can't describe it",
  4: "Never shut up.",
  5: "I'm glad I met you too, fuck you too!",
  6: "I am deeply, truly, maddly in love with you.",
  7: "Show me some patas.",
  8: "Today, You are as beautiful as ever.",
  9: "I am not letting you win.",
  10: "Do you wanna make a snowman?",
  11: "You got a friend in me.",
  12: "Has anyone ever told you how pretty you are?",
  13: "What if i just want to be with you?",
  14: "Let me go back to No Boys Year then ¬‿¬",
  15: "Everything is connected",
  16: "What if everything that came from the past was influenced by the future.",
  17: "We all face the same end. Those above have long forgotten us. They do not judge us. In death I am all alone, and my only judge… is me.",
  18: "What we know is a drop. What we don’t know is an ocean",
  19: "The end is the beginning, and the beginning is the end",
  20: "Yesterday, today and tomorrow are not consecutive, they are connected in a never-ending circle. Everything is connected.",
  21: "Two days ago I kissed my aunt!!!",
  22: "Tick Tack. Tick Tack.",
  23: "Would you marry me?",
  24: "WOWSER",
  25: "Everything is a picture waiting to be taken...",
  26: "I wish I could stay in this moment forever. (...) But then it wouldn't be a moment.",
  27: "This action will have consequences",
  28: "With great power comes great bullshit.",
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

var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
dateTextObj.innerText = utc;

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

// Set the date we're counting down to
let countDownDate = new Date("Feb 14, 2022 17:30:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("countdown-container").style.display = "none";
  }
}, 1000);

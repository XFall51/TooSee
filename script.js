const unlockDate = new Date("2026-07-02T00:00:00");
const startDate = new Date("2026-06-02T00:00:00");

function checkUnlock(){

    const now = new Date();

    if(now >= unlockDate){

        document.getElementById("giftMessage").innerHTML =
        "🎁 Your gift is ready! Click the box to open it ❤️";

        document.getElementById("countdown").innerHTML =
        "Ready to Open ✨";

        return;
    }

    const diff = unlockDate - now;

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s ❤️`;
}

function openGift(){

    const now = new Date();

    if(now < unlockDate){

        alert("❤️ Not yet Adiee! The gift opens on July 2 ❤️");
        return;
    }

    document.getElementById("giftBox").classList.add("open");

    createHearts();

    setTimeout(() => {

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

    }, 1500);
}

function updateDays(){

    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("daysTogether").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

function openLetter(){
    document.getElementById("letter").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeLetter(){
    document.getElementById("letter").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function playMusic(){
    document.getElementById("music").play();
}

const messages = [
    "You're my favorite person ❤️",
    "I fall for you every day 💕",
    "Thank you for choosing me 🌹",
    "You make life beautiful ✨",
    "I love you endlessly ❤️",
    "You are my safe place 🥰",
    "Forever starts with us 💍"
];

function showSurprise(){

    const random =
    messages[Math.floor(Math.random()*messages.length)];

    document.getElementById("surpriseText").innerHTML = random;

    createHearts();
}

function secretMessage(){

    alert(
        "❤️ Secret Message ❤️\n\nNo matter how many months pass, I'll always choose you."
    );
}

function createHearts(){

    for(let i=0;i<25;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left = Math.random()*100+"vw";
        heart.style.bottom = "0";
        heart.style.fontSize = Math.random()*30+20+"px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },5000);
    }
}

checkUnlock();
setInterval(checkUnlock,1000);

updateDays();
setInterval(updateDays,1000);

document.querySelectorAll(".photo-card").forEach(card => {

    const photo = card.querySelector(".memory-photo");
    const gif = card.querySelector(".gif-overlay");

    photo.addEventListener("click", () => {

        gif.classList.add("show");

        createHearts();

        setTimeout(() => {
            gif.classList.remove("show");
        }, 3000);

    });

});
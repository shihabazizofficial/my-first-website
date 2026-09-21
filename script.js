 function showSurprise() {
    document.getElementById("surprise").style.display = "flex";

    // Create confetti
    for (let i = 0; i < 80; i++) {
        createConfetti();
    }

    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function closeSurprise() {
    document.getElementById("surprise").style.display = "none";
}

function createConfetti() {
    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";
    confetti.style.fontSize = Math.random() * 15 + 15 + "px";
    confetti.style.zIndex = "10000";
    confetti.style.animation = "fall " + (Math.random() * 3 + 2) + "s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.zIndex = "10000";
    heart.style.animation = "heartRise 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

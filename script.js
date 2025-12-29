let giftStage = 1;
let musicPlaying = false;
let openedGifts = 0;
const totalGifts = 3;

/* Typing Effect */
const message = "Today is your day — enjoy every surprise ❤️";
let i = 0;

function typeEffect() {
  if (i < message.length) {
    document.getElementById("typeText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

/* Start */
function start() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("gifts").classList.remove("hidden");
  startConfetti();
}

/* Music */
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  musicPlaying ? music.pause() : music.play();
  musicPlaying = !musicPlaying;
}

/* Close Modal */
function closeModal() {
  document.getElementById("modal_container").classList.add("closer");
}

/* Gifts */
function openGift(num) {
  if (num !== giftStage) return;

  const content = document.getElementById("giftContent");

  if (num === 1) {
    content.innerHTML = `
      <h2>📸 A Memory</h2>
      <div class="slideshow">
        <img id="slide" src="images/pic1.jpg">
      </div>
      <p>Growing up with you has been a blessing ❤️</p>
    `;
    startSlideshow();
  }

  if (num === 2) {
    content.innerHTML = `
      <h2>💌 A Message</h2>
      <p>You are strong, kind, and truly amazing in every way.
      I’m so proud to call you my brother, and I feel incredibly lucky to have you in my life. Your heart, your courage, and the love you give to others inspire me every day. May this birthday bring you joy, laughter, and all the happiness you deserve as you continue to grow into the wonderful person you are. 🎂✨</p>
      <b style="font-size: 20px; color: red">Happy Birthday Paul!</b>
      <p>With all my love,</p>
      <p>James </p>
    `;
  }

  if (num === 3) {
    content.innerHTML = `
      <h2>🎉 Surprise!</h2>
      <p>Coupon unlocked 🎟️<br>
      I promise to celebrate your wins and stand by you in hard times… 😎</p>
    `;
  }

  document.getElementById("modal_container").classList.remove("closer");
   document.getElementById("modal").classList.add("show");
  unlockNext();
}

/* Unlock gifts */
function unlockNext() {
  const gifts = document.querySelectorAll(".gift");
  if (giftStage === 3) {
        showThankYou();
    }
  if (giftStage < gifts.length) {
      gifts[giftStage - 1].classList.add("opened");
      gifts[giftStage].classList.remove("locked");
      gifts[giftStage].innerHTML = "🎁";
      giftStage++;
      openedGifts++;    
  }
}

function showThankYou() {
    document.getElementById("gifts").classList.add("hidden");
    document.getElementById("thankYouSection").classList.remove("hidden");
}

function goBackToGifts() {
    document.getElementById("thankYouSection").classList.add("hidden");
    document.getElementById("gifts").classList.remove("hidden");
}



/* Slideshow */
let slideIndex = 1;
function startSlideshow() {
  const slides = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    document.getElementById("slide").src = "images/" + slides[slideIndex];
  }, 2000);
}

/* Confetti 
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 1000 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 5
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(27, 0, 234, 0.8)";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.d;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}*/

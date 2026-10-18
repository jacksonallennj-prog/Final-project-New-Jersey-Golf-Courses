// Data for Public Courses
const publicCoursesData = [
  { name: "1. Ballyowen Golf Club", location: "Hamburg, NJ", architect: "Roger Rulewich", style: "Celtic Links", desc: "Consistently rated NJ's #1 public course. Set on a 250-acre plateau with open meadows and countryside views.", url: "https://www.crystalgolfresort.com/golf/courses/ballyowen", c1: "#0f766e", c2: "#10b981" },
  { name: "2. Neshanic Valley Golf Course", location: "Neshanic Station, NJ", architect: "Michael Hurdzan", style: "Championship Municipal", desc: "The flagship 27-hole facility of Somerset County offering pristine conditioning carved through farmland.", url: "https://www.neshanicvalleygolf.com/", c1: "#065f46", c2: "#34d399" },
  { name: "3. Seaview Golf Club (Bay Course)", location: "Galloway, NJ", architect: "Donald Ross", style: "Historic Ocean Links", desc: "Historic 1914 seaside layout situated right on Reed's Bay. Host venue for the LPGA ShopRite Classic.", url: "https://www.seaviewgolf.com/", c1: "#0284c7", c2: "#059669" },
  { name: "4. Twisted Dune Golf Club", location: "Egg Harbor Township, NJ", architect: "Archie Struthers", style: "Inland Scottish Links", desc: "Built by sculpting over 2 million cubic yards of earth into 70-foot dunes, deep ravines, and waste bunkers.", url: "https://www.twisteddune.com/", c1: "#b45309", c2: "#10b981" },
  { name: "5. Atlantic City Country Club", location: "Northfield, NJ", architect: "John Reid", style: "Historic Tidal Links", desc: "Known as the 'Birthplace of the Birdie.' Founded in 1897 featuring tidal marsh views and AC skyline vistas.", url: "https://account.ablegolf.com/book/ac-country-club/", c1: "#0369a1", c2: "#047857" },
  { name: "6. The Architects Golf Club", location: "Lopatcong, NJ", architect: "Stephen Kay", style: "Historical Homage", desc: "A unique layout where every hole pays tribute to a famous golf architect spanning 70 years of history.", url: "https://www.thearchitectsgolfclub.com/", c1: "#065f46", c2: "#10b981" },
  { name: "7. Heron Glen Golf Course", location: "Ringoes, NJ", architect: "Daniel Schlegel", style: "Country Parkland", desc: "A premier Hunterdon County facility offering bentgrass fairways and smooth green complexes.", url: "https://www.heronglen.com/", c1: "#047857", c2: "#34d399" },
  { name: "8. Berkshire Valley Golf Course", location: "Oak Ridge, NJ", architect: "Robert McNeil", style: "Mountain Course", desc: "Set high in the Green Pond Mountain ridge with dramatic elevation changes and wilderness terrain.", url: "https://www.morriscountyparks.net/golf/berkshire-valley/", c1: "#1e3a8a", c2: "#059669" },
  { name: "9. Hominy Hill Golf Course", location: "Colts Neck, NJ", architect: "Robert Trent Jones Sr.", style: "Classic Parkland", desc: "The crown jewel of Monmouth County's park system. Has hosted two U.S. Amateur Public Links Championships.", url: "https://www.monmouthcountyparks.com/page.aspx?iD=2528", c1: "#0f766e", c2: "#10b981" },
  { name: "10. McCullough's Emerald Golf Links", location: "Egg Harbor Township, NJ", architect: "Stephen Kay", style: "Replicated British Links", desc: "Tribute layout featuring hole designs inspired by famous Scottish and Irish holes.", url: "https://www.mcculloughsgolf.com/", c1: "#047857", c2: "#059669" }
];

// Data for Private Courses
const privateCoursesData = [
  { name: "1. Pine Valley Golf Club", location: "Pine Valley, NJ", architect: "George Crump / H.S. Colt", rank: "#1 in World", desc: "Consistently ranked the #1 golf course on planet Earth. Surrounded by scrub waste and pine forests.", url: "https://www.top100golfcourses.com/golf-course/pine-valley", c1: "#14532d", c2: "#10b981" },
  { name: "2. Baltusrol Golf Club (Lower)", location: "Springfield, NJ", architect: "A.W. Tillinghast", rank: "PGA Major Host", desc: "A National Historic Landmark layout that has hosted 17 Major Championships.", url: "https://www.baltusrol.org/", c1: "#065f46", c2: "#34d399" },
  { name: "3. Somerset Hills Country Club", location: "Bernardsville, NJ", architect: "A.W. Tillinghast", rank: "Top 50 Worldwide", desc: "Divided into an open front nine and a dramatic wooded back nine featuring natural water hazards.", url: "https://www.top100golfcourses.com/golf-course/somerset-hills", c1: "#0f766e", c2: "#059669" },
  { name: "4. Plainfield Country Club", location: "Edison, NJ", architect: "Donald Ross", rank: "PGA Tour Host", desc: "A masterclass in Donald Ross green complex design. Frequently hosts PGA Tour FedExCup playoff events.", url: "https://www.plainfieldcc.com/", c1: "#047857", c2: "#10b981" },
  { name: "5. Ridgewood Country Club", location: "Paramus, NJ", architect: "A.W. Tillinghast", rank: "27-Hole Classic", desc: "Features three nine-hole loops anchored by an iconic French Normandy-style clubhouse built in 1929.", url: "https://www.ridgewoodcc.org/", c1: "#064e3b", c2: "#34d399" },
  { name: "6. Baltusrol Golf Club (Upper)", location: "Springfield, NJ", architect: "A.W. Tillinghast", rank: "Major Host", desc: "Built along the side of Baltusrol Mountain offering steeper elevation shifts than the Lower Course.", url: "https://www.baltusrol.org/", c1: "#14532d", c2: "#059669" },
  { name: "7. Hollywood Golf Club", location: "Deal, NJ", architect: "Walter Travis", rank: "Jersey Shore Classic", desc: "Renowned for its expansive bunker complexes and subtle green slopes located blocks from the ocean.", url: "https://www.hollywoodgolfclub.org/", c1: "#0284c7", c2: "#10b981" },
  { name: "8. Bayonne Golf Club", location: "Bayonne, NJ", architect: "Eric Bergstol", rank: "Harbor Links", desc: "A staggering engineering marvel built on New York Harbor with 90-foot dunes and NYC skyline views.", url: "http://www.bayonnegolfclub.com/", c1: "#0369a1", c2: "#34d399" },
  { name: "9. Galloway National Golf Club", location: "Galloway, NJ", architect: "Tom Fazio", rank: "Bayside Jewel", desc: "A heavily wooded, pristine layout crafted along Reeds Bay with views of Atlantic City.", url: "https://www.gallowaynationalgolfclub.org/", c1: "#0f766e", c2: "#059669" },
  { name: "10. Liberty National Golf Club", location: "Jersey City, NJ", architect: "Tom Kite / Bob Cupp", rank: "Presidents Cup Host", desc: "An iconic waterfront club located right across from Lady Liberty and Manhattan.", url: "https://www.libertynationalgc.com/", c1: "#0284c7", c2: "#10b981" }
];

// Render Vector Cards
function renderCourseCards(data, containerId, isPublic) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data.map(item => `
    <div class="card">
      <div class="course-header-art">
        <svg viewBox="0 0 500 180" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad-${item.name.replace(/[^a-zA-Z]/g, '')}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${item.c1}"/>
              <stop offset="100%" stop-color="${item.c2}"/>
            </linearGradient>
          </defs>
          <rect width="500" height="180" fill="url(#grad-${item.name.replace(/[^a-zA-Z]/g, '')})"/>
          <circle cx="430" cy="40" r="22" fill="#fef08a" opacity="0.8"/>
          <path d="M0,135 Q150,95 300,125 T500,110 L500,180 L0,180 Z" fill="#047857" opacity="0.9"/>
          <path d="M0,150 Q200,130 350,155 T500,140 L500,180 L0,180 Z" fill="#10b981"/>
          <path d="M120,150 L120,125 L132,130 Z" fill="#ef4444"/>
          <line x1="120" y1="125" x2="120" y2="155" stroke="#ffffff" stroke-width="2"/>
        </svg>
        <div class="image-tag">📍 ${item.location}</div>
      </div>
      <h2>${item.name}</h2>
      <p><strong>Architect:</strong> ${item.architect} | <strong>Style/Rank:</strong> ${item.style || item.rank}</p>
      <p>${item.desc}</p>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="action-btn ${isPublic ? 'glow-btn' : 'outline-btn'}">
        ${isPublic ? 'Book Tee Time at ' + item.name.split('.')[1] + ' ↗' : 'Visit Official Club Website ↗'}
      </a>
    </div>
  `).join('');
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
}

// Confetti Effect
function fireConfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
}

// Poll #1 Logic
let poll1Yes = 192, poll1No = 34;
function votePoll1(agreed) {
  if (agreed) poll1Yes++; else poll1No++;
  const total = poll1Yes + poll1No;
  const pct = Math.round((poll1Yes / total) * 100);
  const resBox = document.getElementById("poll1-result");
  if (resBox) {
    resBox.style.display = "block";
    resBox.innerHTML = `✅ Thank you for voting! <br> <strong>Results:</strong> ${pct}% Agree (${poll1Yes} votes) vs ${100 - pct}% Disagree (${poll1No} votes).`;
  }
  fireConfetti();
}

// Poll #2 Logic
function submitFavoriteCourse() {
  const input = document.getElementById("fav-course-input");
  const resBox = document.getElementById("poll2-result");
  if (!input || !resBox) return;
  const val = input.value.trim();
  if (!val) {
    resBox.style.display = "block";
    resBox.innerText = "⚠️ Please type a course name!";
    return;
  }
  resBox.style.display = "block";
  resBox.innerHTML = `🌟 Submission received! <strong>"${val}"</strong> added to community list.`;
  fireConfetti();
  input.value = "";
}

// Smart Caddie Calculations
function calculateClub() {
  const input = document.getElementById("user-input");
  const display = document.getElementById("display-text");
  if (!input || !display) return;
  const yards = parseInt(input.value.trim());

  if (isNaN(yards) || yards <= 0) {
    display.innerText = "⚠️ Please enter a valid distance in yards!";
  } else if (yards > 230) {
    display.innerText = `🏌️ ${yards} Yards: Pull out the DRIVER off the tee for max power!`;
    fireConfetti();
  } else if (yards >= 170) {
    display.innerText = `🪵 ${yards} Yards: Hit a smooth 3-Wood or 19-degree Hybrid!`;
  } else if (yards >= 120) {
    display.innerText = `🎯 ${yards} Yards: Mid-Iron distance (7i or 8i). Aim straight for the flag!`;
  } else {
    display.innerText = `⛳ ${yards} Yards: Take a Wedge (PW/SW) for a soft landing on the green!`;
  }
  input.value = "";
}

// Canvas Game 1: Launch Simulator
let canvas1, ctx1;
let ballX = 35, ballY = 230, ballVX = 0, ballVY = 0;
let isShotActive = false, gameScore = 0;

function drawDrivingRange() {
  canvas1 = document.getElementById("golf-canvas");
  if (!canvas1) return;
  ctx1 = canvas1.getContext("2d");

  ctx1.fillStyle = "#0284c7";
  ctx1.fillRect(0, 0, canvas1.width, 170);

  ctx1.fillStyle = "#15803d";
  ctx1.fillRect(0, 170, canvas1.width, 110);

  ctx1.fillStyle = "#047857";
  ctx1.fillRect(20, 232, 30, 8);

  drawTargetFlag(180, 195, "150Y");
  drawTargetFlag(320, 195, "250Y");
  drawTargetFlag(440, 195, "350Y");

  ctx1.fillStyle = "#ffffff";
  ctx1.beginPath();
  ctx1.arc(ballX, ballY, 5, 0, Math.PI * 2);
  ctx1.fill();
}

function drawTargetFlag(x, y, label) {
  ctx1.fillStyle = "#34d399";
  ctx1.beginPath();
  ctx1.ellipse(x, y, 22, 10, 0, 0, Math.PI * 2);
  ctx1.fill();

  ctx1.strokeStyle = "#ffffff";
  ctx1.lineWidth = 2;
  ctx1.beginPath();
  ctx1.moveTo(x, y);
  ctx1.lineTo(x, y - 20);
  ctx1.stroke();

  ctx1.fillStyle = "#ef4444";
  ctx1.beginPath();
  ctx1.moveTo(x, y - 20);
  ctx1.lineTo(x + 10, y - 15);
  ctx1.lineTo(x, y - 10);
  ctx1.closePath();
  ctx1.fill();

  ctx1.fillStyle = "#ffffff";
  ctx1.font = "bold 10px sans-serif";
  ctx1.textAlign = "center";
  ctx1.fillText(label, x, y + 18);
}

function swingClub() {
  if (isShotActive) return;
  ballX = 35; ballY = 230;
  ballVX = Math.random() * 5 + 6;
  ballVY = -(Math.random() * 4 + 7);
  isShotActive = true;
  animateShot();
}

function animateShot() {
  if (!isShotActive) return;
  ballVY += 0.28;
  ballX += ballVX;
  ballY += ballVY;

  drawDrivingRange();

  if (ballY >= 230) {
    ballY = 230;
    isShotActive = false;
    const yards = Math.floor((ballX / canvas1.width) * 400);
    const driveDistEl = document.getElementById("drive-dist");
    const gameScoreEl = document.getElementById("game-score");
    if (driveDistEl) driveDistEl.innerText = yards + " YDS";
    gameScore += yards >= 300 ? 100 : yards >= 150 ? 50 : 20;
    if (gameScoreEl) gameScoreEl.innerText = gameScore;
    if (yards >= 300) fireConfetti();
  } else {
    requestAnimationFrame(animateShot);
  }
}

// Canvas Game 2: Putting Challenge
let canvas2, ctx2;
let putterX = 250, putterY = 110, putterScore = 0;
let targetPin = { x: 100, y: 70 };

function initPuttingGame() {
  canvas2 = document.getElementById("putting-canvas");
  if (!canvas2) return;
  ctx2 = canvas2.getContext("2d");

  canvas2.addEventListener("mousemove", (e) => {
    const rect = canvas2.getBoundingClientRect();
    putterX = e.clientX - rect.left;
    putterY = e.clientY - rect.top;
    checkPinCollection();
  });

  spawnNewPin();
  drawPuttingGreen();
}

function spawnNewPin() {
  targetPin.x = Math.floor(Math.random() * (canvas2.width - 60)) + 30;
  targetPin.y = Math.floor(Math.random() * (canvas2.height - 60)) + 30;
}

function drawPuttingGreen() {
  if (!ctx2) return;
  ctx2.fillStyle = "#15803d";
  ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

  ctx2.fillStyle = "#22c55e";
  ctx2.beginPath();
  ctx2.arc(targetPin.x, targetPin.y, 14, 0, Math.PI * 2);
  ctx2.fill();

  ctx2.strokeStyle = "#ffffff";
  ctx2.lineWidth = 2;
  ctx2.beginPath();
  ctx2.moveTo(targetPin.x, targetPin.y);
  ctx2.lineTo(targetPin.x, targetPin.y - 18);
  ctx2.stroke();

  ctx2.fillStyle = "#ef4444";
  ctx2.beginPath();
  ctx2.moveTo(targetPin.x, targetPin.y - 18);
  ctx2.lineTo(targetPin.x + 8, targetPin.y - 14);
  ctx2.lineTo(targetPin.x, targetPin.y - 10);
  ctx2.closePath();
  ctx2.fill();

  ctx2.fillStyle = "#ffffff";
  ctx2.beginPath();
  ctx2.arc(putterX, putterY, 7, 0, Math.PI * 2);
  ctx2.fill();

  requestAnimationFrame(drawPuttingGreen);
}

function checkPinCollection() {
  const dx = putterX - targetPin.x;
  const dy = putterY - targetPin.y;
  if (Math.sqrt(dx * dx + dy * dy) < 18) {
    putterScore++;
    const putterScoreEl = document.getElementById("putter-score");
    if (putterScoreEl) putterScoreEl.innerText = putterScore;
    fireConfetti();
    spawnNewPin();
  }
}

// DOM Init
document.addEventListener("DOMContentLoaded", () => {
  renderCourseCards(publicCoursesData, "public-courses-list", true);
  renderCourseCards(privateCoursesData, "private-courses-list", false);
  drawDrivingRange();
  initPuttingGame();
});

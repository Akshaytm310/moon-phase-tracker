// Simple moon phase calculation
function getMoonPhase(date) {
  const synodicMonth = 29.5305882; // lunar cycle in days
  const newMoon = new Date("2000-01-06T18:14:00Z"); // reference new moon

  const diff = (date - newMoon) / (1000 * 60 * 60 * 24);
  const phase = diff % synodicMonth;

  if (phase < 1.84566) return {label: "New Moon", img: "images/newmoon.png"};
  else if (phase < 5.53699) return {label: "Waxing Crescent", img: "images/waxingcrescent.png"};
  else if (phase < 9.22831) return {label: "First Quarter", img: "images/firstquarter.png"};
  else if (phase < 12.91963) return {label: "Waxing Gibbous", img: "images/waxinggibbous.png"};
  else if (phase < 16.61096) return {label: "Full Moon", img: "images/fullmoon.png"};
  else if (phase < 20.30228) return {label: "Waning Gibbous", img: "images/waninggibbous.png"};
  else if (phase < 23.99361) return {label: "Last Quarter", img: "images/lastquarter.png"};
  else if (phase < 27.68493) return {label: "Waning Crescent", img: "images/waningcrescent.png"};
  else return {label: "New Moon", img: "images/newmoon.png"};
}

// Show today’s moon phase
function showToday() {
  const today = new Date();
  const phase = getMoonPhase(today);

  document.getElementById("today-img").src = phase.img;
  document.getElementById("today-label").textContent = phase.label + " (" + today.toDateString() + ")";
}

// Show next 7 days
function showNext7() {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = ""; // clear old content

  for (let i = 1; i <= 7; i++) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + i);

    const phase = getMoonPhase(futureDate);

    const dayDiv = document.createElement("div");
    dayDiv.innerHTML = `
      <p>${futureDate.toDateString()}</p>
      <img src="${phase.img}" alt="${phase.label}">
      <p>${phase.label}</p>
    `;
    forecastDiv.appendChild(dayDiv);
  }
}

// Run when page loads
showToday();

// Button event
document.getElementById("next7").addEventListener("click", showNext7);

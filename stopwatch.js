let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;

function updateStopwatch() {
  const seconds = Math.floor(elapsedTime % 60);
  const minutes = Math.floor((elapsedTime / 60) % 60);
  const hours = Math.floor(elapsedTime / 3600);

  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("stopwatch-display").textContent = formattedTime;
  document.title = `⏱️ ${formattedTime} - Stopwatch`; 
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatchInterval = setInterval(() => {
      elapsedTime++;
      updateStopwatch();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  isRunning = false;
  updateStopwatch();
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem("selectedTheme");
  if (storedTheme) {
    document.body.classList.remove("dark-theme", "neon-theme");
  }
  if (storedTheme !== "default") {
    document.body.classList.add(storedTheme);
  }
}

if (performance.navigation.type === 1) {
  window.location.href = "index.html";
}


applyStoredTheme();


updateStopwatch();

function applyStoredTheme() {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
      document.body.classList.remove("dark-theme", "neon-theme");
      if (storedTheme !== "default") {
        document.body.classList.add(storedTheme);
      }
    }
  }
  
  applyStoredTheme();
  
  let timerInterval;
  let totalTime = 0;
  let isTimerRunning = false;
  
  function updateTimerDisplay() {
    const seconds = Math.floor(totalTime % 60);
    const minutes = Math.floor((totalTime / 60) % 60);
    const hours = Math.floor(totalTime / 3600);
  
    const formattedTime =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");
  
    document.getElementById("timer-display").textContent = formattedTime;
    document.title = `⏳ ${formattedTime} - Timer`;
  }
  
  function startTimer() {
    if (!isTimerRunning) {
      const hours = parseInt(document.getElementById("hours-input").value) || 0;
      const minutes = parseInt(document.getElementById("minutes-input").value) || 0;
      const seconds = parseInt(document.getElementById("seconds-input").value) || 0;
  
      if (hours === 0 && minutes === 0 && seconds === 0 && totalTime === 0) {
        alert("Please set a valid timer duration.");
        return;
      }
  
      if (totalTime === 0) {
        totalTime = hours * 3600 + minutes * 60 + seconds;
      }
  
      isTimerRunning = true;
      timerInterval = setInterval(() => {
        if (totalTime > 0) {
          totalTime--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          isTimerRunning = false;
          alert("Time's up!");
        }
      }, 1000);
    }
  }
  
  function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 0;
    isTimerRunning = false;
    updateTimerDisplay();
  }

  if (performance.navigation.type === 1) {
    window.location.href = "index.html";
  }
  
  updateTimerDisplay();
  
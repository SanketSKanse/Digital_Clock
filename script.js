function updateClock() {
  const timeZoneSelect = document.getElementById("timezone-select");
  
  let timeZone = timeZoneSelect.value || "Asia/Kolkata";

  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  document.getElementById("hours").textContent = timeString;
  document.title = `🕒 ${timeString} - Digital Clock`;

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timeZone,
  };
  document.querySelector(".date").textContent = now.toLocaleDateString(
    "en-US",
    dateOptions
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timezone-select").value = "Asia/Kolkata";
  updateClock();
});

function changeTheme(theme) {
  document.body.classList.remove("dark-theme", "neon-theme");
  if (theme !== "default") {
    document.body.classList.add(theme);
  }
  localStorage.setItem("selectedTheme", theme);
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem("selectedTheme");
  if (storedTheme) {
    changeTheme(storedTheme);
  }
}

applyStoredTheme();
setInterval(updateClock, 1000);
updateClock();

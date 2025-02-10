function updateClock() {
  const now = new Date();
  const timezone = document.getElementById("timezone").value;

  let options = {
    timeZone: timezone === "local" ? undefined : timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
  document.getElementById("hours").textContent = formattedTime;

  document.title = `🕒 ${formattedTime} - Digital Clock`;

  const dateOptions = {
    timeZone: timezone === "local" ? undefined : timezone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  document.querySelector(".date").textContent = new Intl.DateTimeFormat("en-US", dateOptions).format(now);
}

function changeTheme(theme) {
  document.body.classList.remove("dark-theme", "neon-theme");
  if (theme !== "default") {
    document.body.classList.add(theme);
  }
  localStorage.setItem("selectedTheme", theme);
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem("selectedTheme") || "default";
  changeTheme(storedTheme);
}

applyStoredTheme();
setInterval(updateClock, 1000);
updateClock();
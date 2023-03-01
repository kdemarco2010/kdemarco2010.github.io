function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `
        <span class="time">${days}<span class="label">Days</span></span> 
        <span class="time">${hours}<span class="label">Hours</span></span>  
        <span class="time">${minutes}<span class="label">Minutes</span></span> 
        <span class="time">${seconds}<span class="label">Seconds</span></span>`;
  }

  // Start writing code here 

  let deadline = new Date("July 28, 2023 17:30:00");

  let countdown = document.getElementById("countdown");
  countdown.innerHTML = "";

  function setCountdown() {
    let now = new Date();

    let timeLeft = deadline.getTime() - now.getTime();

    let daysLeft = convertToDaysLeft(timeLeft);
    let hoursLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    countdown.innerHTML = 
        formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  }

  setInterval(setCountdown, 1000);


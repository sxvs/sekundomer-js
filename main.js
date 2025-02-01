// let seconds = 0;
// let timer;
// const timerDisplay = document.getElementById("timerDisplay");

// function startTimer() {
//   if (timer) return;

//   timer = setInterval(() => {
//     seconds++;
//     timerDisplay.textContent = formatTime(seconds);
//   }, 1000);
// }

// function stopTimer() {
//   clearInterval(timer);
//   timer = null;
// }

// function resetTimer() {
//   clearInterval(timer);
//   timer = null;
//   seconds = 0;
//   timerDisplay.textContent = formatTime(seconds);
// }

// function formatTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//     .toString()
//     .padStart(2, "0")}`;
// }

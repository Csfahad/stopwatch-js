const clock = document.querySelector(".clock");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;

const startStopwatch = () => {
  intervalId = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      sec = 0;
      min++;
    }

    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

const stopStopwatch = () => {
  clearInterval(intervalId);
};

startBtn.onclick = () => {
  startStopwatch();
  startBtn.disabled = true;
};

stopBtn.onclick = () => {
  stopStopwatch();
  startBtn.disabled = false;
};

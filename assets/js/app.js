    let countdown;
    let totalTime = 0;
    let timeLeft = 0;

    function startTimer() {
      clearInterval(countdown);

      const minutes = parseInt(document.getElementById('minutesInput').value);
      if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid number of minutes.');
        return;
      }

      totalTime = minutes * 60;
      timeLeft = totalTime;
      updateDisplay();

      countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(countdown);
          timeLeft = 0;
          alert("Time's up!");
        }
        updateDisplay();
      }, 1000);
    }

    function resetTimer() {
      clearInterval(countdown);
      timeLeft = 0;
      totalTime = 0;
      updateDisplay();
    }

    function updateDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById('timer').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;
      const bar = document.getElementById('progressBar');
      bar.style.width = `${progress}%`;
      bar.setAttribute('aria-valuenow', progress.toFixed(0));
    }
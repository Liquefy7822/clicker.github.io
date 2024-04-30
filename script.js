let counter = 0;

const clickArea = document.getElementById('clickArea');
const counterDisplay = document.getElementById('counter');

clickArea.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

// Optional: Implement automatic increase in counter (idle game feature)
setInterval(() => {
     counter++;
     counterDisplay.textContent = counter;
 }, 1000); // Increase counter every second

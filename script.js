// script.js

// Function to display the current time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Set an interval to update the time every second
setInterval(updateTime, 1000);

// Variables to store the alarm time
let alarmTime = null;
let alarmTimeout = null;

// Function to set the alarm
function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
        alarmTime = alarmInput;
        document.getElementById('alarmStatus').textContent = `Alarm set for ${alarmTime}`;
        
        // Clear any existing alarm timeout
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }

        const alarmDate = new Date();
        const [alarmHours, alarmMinutes] = alarmInput.split(':');
        alarmDate.setHours(alarmHours, alarmMinutes, 0, 0);

        const timeToAlarm = alarmDate.getTime() - new Date().getTime();

        if (timeToAlarm >= 0) {
            alarmTimeout = setTimeout(triggerAlarm, timeToAlarm);
        } else {
            document.getElementById('alarmStatus').textContent = 'Please set a valid future time!';
        }
    } else {
        document.getElementById('alarmStatus').textContent = 'Please set a time for the alarm!';
    }
}

// Function to trigger the alarm
function triggerAlarm() {
    alert('Alarm ringing!');
    document.getElementById('alarmStatus').textContent = '';
    alarmTime = null;
}

// Event listener for the "Set Alarm" button
document.getElementById('setAlarmButton').addEventListener('click', setAlarm);

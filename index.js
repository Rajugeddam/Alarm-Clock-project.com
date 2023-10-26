document.addEventListener("DOMContentLoaded", function() {
    // Update the clock
    function updateClock() {
      const currentTime = new Date();
      const hour = currentTime.getHours();
      const minute = currentTime.getMinutes();
      const second = currentTime.getSeconds();
      const currampm= getCurrentAmPm();
      document.getElementById("hour").innerHTML = hour;
      document.getElementById("minute").textContent = minute;
      document.getElementById("second").textContent = second;
      document.getElementById("currampm").textContent=currampm;
  
      // Check if any alarms match the current time
      checkAlarms(hour, minute, second,currampm);
    }

    function getCurrentAmPm() {
        const now = new Date();
        return now.getHours() >= 12 ? "PM" : "AM";
      }
  
    // function padZero(num) {
    //   return num < 10 ? "0" + num : num;
    // }
  
    function checkAlarms(currentHour, currentMinute, currentSecond) {
      const alarmItems = document.querySelectorAll("li");
      alarmItems.forEach(function(alarmItem) {
        const alarmTimeParts = alarmItem.textContent.split(" ")[0].split(":");
        const alarmHour = parseInt(alarmTimeParts[0]);
        const alarmMinute = parseInt(alarmTimeParts[1]);
        const alarmSecond = parseInt(alarmTimeParts[2]);
        const amPm = alarmItem.textContent.split(" ")[1];
  
        if (
          currentHour === alarmHour &&
          currentMinute === alarmMinute &&
          currentSecond === alarmSecond 
          //&&
          //amPm === getCurrentAmPm()
        ) {
          // Alarm time matches current time, trigger the alert
          alert("Keep working for your goals!!!  Alarm is going off!");
          // Remove the alarm item
          alarmItem.remove();
        }
      });
    }
  
    
  
    // Set Alarm
    document.getElementById("set-alarm").addEventListener("click", function() {
      const hour = document.getElementById("alarm-hour").value;
      const minute = document.getElementById("alarm-minute").value;
      const second = document.getElementById("alarm-second").value;
      const amPm = document.getElementById("am-pm").value;
  
      // Create alarm item
      const alarmItem = document.createElement("li");
      alarmItem.textContent = `${hour}:${minute}:${second} ${amPm}`;
      document.getElementById("alarms").appendChild(alarmItem);
  
      // Add delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", function() {
        alarmItem.remove();
      });
      alarmItem.appendChild(deleteButton);
    });
  
    // Update the clock every second
    updateClock();
    setInterval(updateClock, 1000);
  });
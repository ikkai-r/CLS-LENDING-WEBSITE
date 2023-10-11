function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDate;
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display date and time
  updateDateTime();
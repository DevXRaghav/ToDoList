<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Date and Time</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    #datetime {
      font-size: 1.5em;
      margin-top: 20px;
      color: #333;
    }
    button {
      padding: 10px 15px;
      font-size: 1em;
      margin-top: 20px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <h1>Current Date and Time</h1>
  
  <!-- Display current date and time -->
  <div id="datetime"></div>
  
  <!-- Button to refresh the date and time -->
  <button onclick="refreshDateTime()">Refresh Date and Time</button>

  <script>
    // Function to update the date and time
    function refreshDateTime() {
      try {
        var dt = new Date();
        var dateString = dt.toLocaleDateString('en-US', {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        });
        var timeString = dt.toLocaleTimeString('en-US', {
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit', 
          hour12: true
        });
        // Display date and time in the #datetime element
        document.getElementById("datetime").innerHTML = dateString + " - " + timeString;
      } catch (error) {
        console.error("Error updating date and time: ", error);
        document.getElementById("datetime").innerHTML = "Error loading date and time.";
      }
    }

    // Initial call to display the date and time when the page loads
    window.onload = function() {
      refreshDateTime();
    }
  </script>

</body>
</html>

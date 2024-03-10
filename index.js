const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to EventHorizon! Our open-source event management platform simplifies the planning and execution of conferences, meetups, and workshops. It features attendee registration, schedule management, and interactive venue maps.');
});

// Define route for the attendee registration page
app.get('/registration', (req, res) => {
  res.send('Our attendee registration feature allows you to create custom registration forms and collect attendee information, making it easy to manage your event and keep track of attendees.');
});

// Define route for the schedule management page
app.get('/schedule', (req, res) => {
  res.send('Our schedule management feature allows you to create and manage event schedules, including sessions, speakers, and locations, making it easy to keep attendees informed and on track.');
});

// Define route for the interactive venue maps page
app.get('/maps', (req, res) => {
  res.send('Our interactive venue maps feature allows you to create custom maps of your event venue, including session locations, exhibitor booths, and other points of interest, making it easy for attendees to navigate and find what they need.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
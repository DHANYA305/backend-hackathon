// force push test
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const file = './data.json';

// Get all events
app.get('/events', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  res.json(data.events);
});

// Add a new event
app.post('/events', (req, res) => {
  const newEvent = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.events.push({ ...newEvent, status: "pending" });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Event submitted!' });
});

// Approve event
app.post('/approve/:title', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const event = data.events.find(e => e.title === req.params.title);
  if (event) event.status = "approved";
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Approved!' });
});

// Reject event
app.post('/reject/:title', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const event = data.events.find(e => e.title === req.params.title);
  if (event) event.status = "rejected";
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Rejected!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend is working 🎉");
});


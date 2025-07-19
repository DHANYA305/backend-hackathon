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
  res.json(data);
});

// Add a new event
app.post('/events', (req, res) => {
  const newEvent = req.body;
  const data = JSON.parse(fs.readFileSync(file));
  data.push({ ...newEvent, approved: false });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Event submitted!' });
});

// Approve event
app.post('/approve/:name', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const event = data.find(e => e.name === req.params.name);
  if (event) event.approved = true;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Approved!' });
});

// Reject event
app.post('/reject/:name', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const event = data.find(e => e.name === req.params.name);
  if (event) event.approved = false;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ message: 'Rejected!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend is working 🎉");
});

require('dotenv').config();
const Vonage = require("@vonage/server-sdk");
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const fs = require('fs');
const https = require('https');
const port = process.env.PORT;
const url = process.env.URL;
const Vonage_API_KEY = process.env.API_KEY;
const Vonage_API_SECRET = process.env.API_SECRET;
const Vonage_APPLICATION_ID = process.env.APPLICATION_ID;
const Vonage_PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONNECT_NUMBER = process.env.CONNECT_NUMBER;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const vonage = new Vonage({
  apiKey: Vonage_API_KEY,
  applicationId: Vonage_APPLICATION_ID,
  privateKey: Vonage_PRIVATE_KEY
}, {debug: true});


const ncco_connect = [
  {
    "action": 'talk',
    "text":"<speak><p>We are now connecting you. Please wait.</p></speak>"
  },
  {
    "action": "connect",
    "timeout": "45",
    "from": "639191700548",
	"ringbackTone": "https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3",
    "endpoint": [
      {
        "type": "phone",
        "number": CONNECT_NUMBER,
        "dtmfAnswer": "2p02p"
      }
    ]
  }
];

app.get('/', (req, res) => {
  res.json(200);
});

app.get('/webhooks/inbound-call', (req, res) => {
  res.json(ncco_connect);
});

app.get('/webhooks/events', (req, res) => {
  res.json("events");
});

app.listen(port, () => {
  console.log(`Connect with ringbackTone Demo app listening on port ${port}`)
  console.log(``)
})

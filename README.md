# vonage-connect-ringback-sample

This is a sample to show how to add ringback tones while connecting two number

## Prerequisites
1. Copy .env-sample to .env, this is your config file: ```cp .env-sample .env```
2. Populate ```.env``` with your Vonage details

```
API_KEY=<YOUR_VONAGE_API_KEY>
API_SECRET=<YOUR_VONAGE_SECRET_KEY>
VONAGE_NUMBER=<VONAGE_LINKED_NUMBER>
CONNECT_NUMBER=<NUMBER_WHERE_THIS_CALL_WILL_CONNECT_TO>
APPLICATION_ID=<VONAGE_APPLICATION_ID>
PRIVATE_KEY='./private.key'
PORT=3000
``` 

3. Install Packages: ```npm install```
4. Run Application: ```node app.js```
5. Configure Vonage application webhook url to point this app's addresses

```
Answer_URL = GET <URL>/webhooks/inbound-call
Event_URL = GET webhooks/events
```

6. Call your linked number. It will then connect to the CONNECT_NUMBER and will play a ringbackTone on loop until answered

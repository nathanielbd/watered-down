# Watered Down

Watered Down helps households meter their water usage. [According to the EPA](http://www.epa.gov/owow/nps/nps-conserve.html), the act of metering alone can reduce consumption by 20-40%.

Our web-app allows users to easily print stickers to put on their water-consuming facilities like toilets, faucets, showers, and dishwashers. These stickers have a QR code which interfaces with our API to track the user's water usage whenever they are scanned. The web-app also comes with a dashboard to monitor the user's water usage visually.

A Minnehack 2021 project with @chan-w, @etredal, @lynhtran, and @nathanielbd

# Running locally

```
cd backend
python3 -m venv env
cd ..
./setup.sh # on terminal tab
cd app
npm start # another terminal tab
```
# mqtt-demo on localhost

## Requirements

- node.js
  https://nodejs.org/en/download/
- Mosquitto
  http://www.steves-internet-guide.com/install-mosquitto-broker/

1. In command line; go to the installation folder of mosquitto eg "c:/Program Files/Mosquitto" and type

    mosquitto - v

2. Go tothe project directory and clone the repository

    git clone https://github.com/erkanina/mqtt-demo.git

3. Install mqtt package

    npm install mqtt

4. You will need two console windows, one for publisher and one for subscriber. Run both scripts as below;

   Node publisher.js

   Node subscriber.js
   
   ![Screenshot](screenshot.jpg)

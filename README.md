# mqtt-demo on localhost

## Requirements

- [Node](https://nodejs.org/en/download/) JavaScript Runtime Environment
- [Mosquitto](http://www.steves-internet-guide.com/install-mosquitto-broker/) MQTT Broker

1. In command line go to the installation directory of mosquitto and run mosquitto in verbose mode so that you can see console messages.By default the broker will start listening on port 1883.

```
  mosquitto -v
```

2. Go to the project directory and clone the repository

```
  git clone https://github.com/erkanina/mqtt-demo.git
```

3. Install mqtt package

```
  npm install mqtt
```

4. You will need two console windows, one for **publisher** and one for **subscriber**. Run both scripts as below;

```
  Node publisher.js

  Node subscriber.js
```

![Screenshot](screenshot.jpg)

## publisher

```JavaScript
const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://localhost');

var counter = 0;

function publishData() {
    client.publish(
        "mqtt/myCounter",
        JSON.stringify(`Timer:${counter}`)
      );

      console.log("Published : " + counter);

      counter++;
}

setInterval(publishData, 3000);
```

## subscriber

```JavaScript
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost')

client.on('connect', () => {
  console.log('Connected to broker');

  client.subscribe('mqtt/myCounter');
  console.log('Subscribed to \"mqtt/myCounter\"');
});

client.on('message', (topic, payload) => {
    switch(topic){
        case 'mqtt/myCounter':
            console.log('Rx message : ' + payload.toString());
        break;
    }
});
```

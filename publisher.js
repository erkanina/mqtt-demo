
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
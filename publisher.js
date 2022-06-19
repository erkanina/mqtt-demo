
const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://localhost');

var counter = 0;

client.on('connect', () => {
    console.log('Publisher - Connected to broker');   
    
    client.subscribe('mqtt/SetCounter');
  
    console.log('Publisher - Subscribed'); 
  });

client.on('message', (topic, payload) => {
    switch(topic){
        case 'mqtt/SetCounter':                        
            counter = 0;
            console.log('Publisher - Rx Set Counter : ');
        break;
    }
});

function publishData() {
    client.publish(
        "mqtt/Counter",
        JSON.stringify(`Timer:${counter}`)
      );

      console.log("Publisher - Published : " + counter);

      counter++;
}
  
setInterval(publishData, 3000);
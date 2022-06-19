const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost')

client.on('connect', () => {
  console.log('Subscriber - Connected to broker');
  
  client.subscribe('mqtt/Counter');
  client.subscribe('mqtt/SetCounter');

  console.log('Subscriber - Subscribed'); 
});

client.on('message', (topic, payload) => {
    switch(topic){
        case 'mqtt/Counter':
            // 1. Direkt yaz
            console.log('Subscriber - Rx message : ' + payload.toString());

            //.. JSON'a çevirip yaz
            if(payload) {
                let payloadString = payload.toString();
                try {
                    let payloadJson =  JSON.parse(payloadString);
                    console.log(payloadJson);
                } catch (error) {
                    console.log("Invalid json data");
                }
            }           

        break;       
    }    
});

function SetCounter() {
    client.publish(
        "mqtt/SetCounter",
        JSON.stringify(`Timer:${0}`)
      );

      console.log('Subscriber - Set Counter  0');
}

setInterval(SetCounter, 15000);
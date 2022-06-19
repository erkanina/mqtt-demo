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
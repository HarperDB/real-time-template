import * as mqtt from "mqtt";
const client = mqtt.connect("mqtt://localhost:1883/");

let connected = false;
let i = 1;
client.on("connect", () => {
	console.log('connected');
	client.subscribe("Topic/#", {
		qos: 1
	}, (err) => {
		console.log('subscribed');
		if (!err) {
			setInterval(async () => {
				await fetch('http://localhost:9926/Topic/' + ((++i) % 4), {
					method: 'PUT',
					body: JSON.stringify({
						name: 'A new message!',
						category: 'relevant',
						timestamp: Date.now()
					}),
					headers: {'Content-Type': 'application/json'}
				});
			}, 1000);
		} else {
			console.log(err);
		}
	});
	client.on("message", function (topic, message) {
		console.log('message', topic, message.toString());
	});
});
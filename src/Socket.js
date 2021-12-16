import {io} from 'socket.io-client';
// let socket = io("http://localhost:5000");
// var socket = io.connect('https://kahhotbackendapp.herokuapp.com', {reconnect: true});
var connectionOptions = {
	"force new connection" : true,
	"reconnect":true,
	"reconnectionAttempts": "Infinity",
	"timeout" : 10000,				
	"transports" : ["websocket"]
};
let socket = io.connect('https://kahootbackendapp.herokuapp.com/',connectionOptions);

console.log("socket",socket);
export default socket;

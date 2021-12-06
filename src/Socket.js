import {io} from 'socket.io-client';
// let socket = io("http://localhost:5000");
// var socket = io.connect('localhost:8080', {reconnect: true});
var connectionOptions = {
	"force new connection" : true,
	"reconnect":true,
	"reconnectionAttempts": "Infinity",
	"timeout" : 10000,				
	"transports" : ["websocket"]
};
let socket = io.connect('http://localhost:5000',connectionOptions);

console.log("socket",socket);
export default socket;
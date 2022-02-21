import {io} from 'socket.io-client';
// let socket = io("http://localhost:5000");
// var socket = io.connect('https://kahhotbackendapp.herokuapp.com', {reconnect: true});
var connectionOptions = {
	"force new connection" : true,
	"reconnect":true,
	"reconnectionAttempts": "Infinity",
	"timeout" : 10000,				
	"transports" : ["polling"]
};
let socket = io.connect('https://my-kahoot-backend.herokuapp.com/',connectionOptions);

console.log("socket",socket);
export default socket;

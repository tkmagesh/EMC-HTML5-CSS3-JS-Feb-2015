var nodejsServer = require("nodejs-websocket");
var server = nodejsServer.createServer(function(con){
	con.on("text", function(msg){
		for(var i=0;i<server.connections.length;i++){
			var connection = server.connections[i];
			if (!connection.socket.destroyed )
				connection.sendText(msg);
		}
	});
});
server.listen(9090);
console.log("Chat server is running on port 9090");
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message',function (msg,rinfo) {
	console.log('接收到消息：'+msg);
	console.log(rinfo);
});

server.on('listening',function () {
	console.log('服务器开始监听');
});

server.bind(8080);
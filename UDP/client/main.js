const dgram = require('dgram');

const client = dgram.createSocket('udp4');

var msg = new Buffer(' 你好，我是客户端','utf8');

client.send(msg,0,msg.length,8080,'127.0.0.1',function () {
	console.log('发送成功');
})
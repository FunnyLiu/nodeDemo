const http = require('http');
const server = http.createServer((req, res) => {
    // record current work process's pid and it's father's ppid
    res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid); 
});

let worker;
process.on('message', function (message, sendHandle) {
	if (message === 'server') {
		worker = sendHandle;
		worker.on('connection', function(socket) {
			server.emit('connection', socket);
		});
	}
});
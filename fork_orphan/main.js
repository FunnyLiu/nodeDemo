const fork = require('child_process').fork;
const server = require('net').createServer();
server.listen(3000);
const worker = fork('worker.js');

worker.send('server', server);
console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
process.exit(0); 
// After the child process is created, the main process exits, and the worker process created at this time becomes an orphan process.
//The orphan process will be hosted by the system's init process with a ppid of 1
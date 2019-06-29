const fork = require('child_process').fork;
const cpus = require('os').cpus();
const server = require('net').createServer();
server.listen(3000);
process.title = 'node-master'

for (let i=0; i<cpus.length; i++) {
    const worker = fork('worker_true.js');
    //use Handle to handle this problem
    //After the IPC channel is established between the parent and child processes, 
    //the message is sent through the send method of the child process object.
    worker.send('server', server);
    console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
}

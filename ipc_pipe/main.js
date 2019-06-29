const spawn = require('child_process').spawn;
const child = spawn('node', ['worker.js'])
//use worker's pipe to communicate
child.stdout.pipe(process.stdout);
console.log(process.pid, child.pid);

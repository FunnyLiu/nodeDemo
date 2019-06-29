// index.js
const spawn = require('child_process').spawn;

function startDaemon() {
    const daemon = spawn('node', ['daemon.js'], {
        cwd: '',
        detached : true,
        stdio: 'ignore',
    });

    console.log('daemon is started, parents pid: %s, daemon pid: %s', process.pid, daemon.pid);
    //required so the parent can exit
    daemon.unref();
}

startDaemon()
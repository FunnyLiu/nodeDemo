Some pure Node demo

# crawler

Use crawler to get network content.

# daemon

A simple daemon process

1. Create a child process
2. Create a new session in the child process (call system function setsid)
3. Change the subprocess working directory (eg: "/" or "/usr/, etc.)
4. Parent process termination

Using spawn to create a child process completes the first step above. 

Setting options.detached to true causes the child process to continue running after the parent process exits, which is the second step. 

Options.cwd specifies the current child process working directory. 

If you do not set the default to inherit the current working directory, this is the third step.

 Run daemon.unref() to exit the parent process, refer to options.stdio, which is the fourth step.

``` bash
$ npm run demo:daemon
```

log will be write into ./daemon/stdout.log

# fork_multiProcess_samePort

Start multiple processes on the same port

``` bash
$ npm run demo:fork_multiProcess_samePort
```
only one process started, and other cpu's lengths process is error:

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190629154641.png"/>

Use handle such as TCP socket, UDP and so on to solve this problem.

``` bash
$ npm run demo:fork_multiProcess_samePort:true
```

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190629155658.png"/>


# fork_orphan 

orphan process

``` bash
$ worker process created, pid: 77815 ppid: 77814
```

it's fathers ppid is 1:

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190629153028.png"/>


# ipc_pipe

communication bewteen two process with pipe

``` bash
$ npm run demo:ipc_pipe 
```

```
81160 81161
I am worker, PID:  81161
```



# prettier

use yorkie/husky + lint-staged + prettier to format code after commit automatic

# jsonfile

read and write json file

# myPromise

Promise achieve based on promise/A+

# single

single design pattern in node, by cache of module.


# vm

usage of vm2
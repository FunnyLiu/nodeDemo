Some pure Node demo

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

# prettier

use yorkie/husky + lint-staged + prettier to format code after commit automatic

# jsonfile

read and write json file
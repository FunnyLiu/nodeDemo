# 远程调试


首先在工程启动时通过--inspect-brk指定调试端口:

``` bash
node  --inspect-brk=5858 ./debug/app.js
```

然后通过vscode调试：

``` js
        {
            "type": "node",
            "request": "attach",
            "name": "demo:debug:remote",
            "port": 5858,
            "address": "localhost",
            "localRoot": "${workspaceFolder}"
        },
```

注意这里的address是指定ip的，然后这里的request是attach。

launch 会启动 debugger server 并用 debugger client 连接上

attach 只是启动 debugger client 连接上已有的 debugger server，所以要指定端口


const { NodeVM } = require('vm2');
const fs = require('fs');

const content = fs.readFileSync('./vm/from.js','utf-8');
const vm = new NodeVM();

let functionInSandbox = vm.run(content);
const result = functionInSandbox('world');
console.log(result);
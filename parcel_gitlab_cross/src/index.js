const { isNode } = require('@tomato-js/env');
let Gitlab;
if(isNode()){
    Gitlab = require('@gitbeaker/node').Gitlab;
}else {
    Gitlab = require('@gitbeaker/browser').Gitlab;
}
console.log(Gitlab);
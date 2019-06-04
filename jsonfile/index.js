const jsonfile = require('jsonfile')

const file = './test.json'
const outFile = './.testrc'

jsonfile.readFile(file)
    .then(obj=>jsonfile.writeFile(outFile,obj,{spaces:4}))
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var newlineArray = contents.toString().split("\n");

console.log(+newlineArray.length - 1);

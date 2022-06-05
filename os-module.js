const os = require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Free Memory : ${freeMemory}`);
console.log(`Total Memory : ${totalMemory}`);
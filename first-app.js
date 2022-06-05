const logger  = require("./logger");


function sayHello(name){
    console.log("Hello "+name);
}
sayHello("Mosh");
console.log(logger);
// logger('hey');
console.log(logger.vars);
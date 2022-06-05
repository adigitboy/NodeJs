const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.addListener('messageLogged',function(){
    console.log('Event Listened');
});

emitter.emit('messageLogged');
import EventBus from './utils/EventBus'

const eventBus = new EventBus();

const callback = (...args) => {
    console.log('Event emitted', args);
}

eventBus.on('myEvent', callback);
eventBus.emit('myEvent', 'some', 'data', 'to', 'process');

//Event emitted, ['some', 'data', 'to', 'process'] 

console.log(eventBus.emit('myEvent', 'some', 'data', 'to', 'process'));
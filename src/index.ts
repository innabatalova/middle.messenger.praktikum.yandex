import EventBus from './utils/EventBus'
import {v4 as makeUUID} from 'uuid';

const eventBus = new EventBus();

const callback = (...args) => {
    console.log('Event emitted', args);
}

eventBus.on('myEvent', callback);
eventBus.emit('myEvent', 'some', 'data', 'to', 'process');

//Event emitted, ['some', 'data', 'to', 'process'] 
const uuid = makeUUID();
console.log(uuid);
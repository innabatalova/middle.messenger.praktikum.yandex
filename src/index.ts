import EventBus from './utils/EventBus'

const test = new EventBus;

function callback(){
  console.log("test");
  
}

console.log(test.on("eventer", callback));
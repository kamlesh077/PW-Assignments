const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills! </h1>')
    }
    res.end()
})

server.listen(5000)
console.log('The HTTP server is running on port 5000');



const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();


myEmitter.on('subscribe', () => {
  console.log('Thanks for subscribing to me!');
});

myEmitter.emit('subscribe','College Wallah'); 

const greetHandler = () => {
    console.log('Hello, this event is being handled!');
  };
  
  // Step 1: Add the 'greet' event listener
  myEmitter.on('greet', greetHandler);
  
  // Step 2: Emit the 'greet' event (this will trigger the event listener)
  console.log('Emitting the "greet" event for the first time:');
  myEmitter.emit('greet'); // Output: Hello, this event is being handled!
  
  // Step 3: Remove the 'greet' event listener
  myEmitter.removeListener('greet', greetHandler);
  
  // Step 4: Try emitting the 'greet' event again
  console.log('Emitting the "greet" event after removing the listener:');
  myEmitter.emit('greet'); // No output since the listener was removed



  // Step 1: Check the default maximum number of listeners
console.log('Default max listeners:', myEmitter.getMaxListeners()); // Usually 10 by default

// Step 2: Set the maximum number of listeners to 5
myEmitter.setMaxListeners(5);
console.log('Max listeners after setting:', myEmitter.getMaxListeners()); // Output: 5

// Step 3: Add multiple listeners (more than 5 to see what happens)
const listener = () => {
  console.log('Event triggered');
};

for (let i = 1; i <= 6; i++) {
  myEmitter.on('greet', listener);
  console.log(`Added listener ${i}`);
}

// Step 4: Emit the event
console.log('Emitting the "greet" event:');
myEmitter.emit('greet'); // Should trigger only the first 5 listeners
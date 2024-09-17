const fs = require('fs');
const os  = require('os');


fs.writeFile('02/nodejs_architecture.txt', "Node.js architecture is designed to handle multiple requests in a highly efficient manner, making it suitable for building scalable network applications. It's based on the V8 JavaScript Engine (used by Chrome), allowing it to run JavaScript on the server side.", (err) => {
    if (err) {
        throw err;
    }

console.log('File written successfully');
})



// utf8 is the default encoding for readfile
fs.readFile('02/nodejs_architecture.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data);
})



fs.appendFile('02/nodejs_architecture.txt', `\nnew 1. Scalability: Handles many connections simultaneously due to the event-driven, non-blocking model.
2.High Performance: Powered by the fast V8 engine and non-blocking I/O.
3.Efficient Memory Usage: Single-threaded design consumes less memory compared to multi-threaded systems.
4.Asynchronous Processing: Tasks like I/O operations dont block the execution of code, making it ideal for I/O-heavy applications.
5.Cross-Platform: Runs on multiple platforms (Windows, Linux, etc.) thanks to Libuv.
6.Modular Structure:Built-in and user-defined modules promote code reuse and organization.end`, (err) => {
    if (err) {
        throw err;
    }

    console.log('File updated successfully');
})



fs.unlink('02/nodejs_architecture.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log('File deleted successfully');
})


console.log("OS Info: "+ os.type());
console.log("OS Info: "+ os.release());

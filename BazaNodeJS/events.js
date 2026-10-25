const Emitter = require("events");

const emitter = new Emitter();

// emitter.on("message", (data, second, third) => {
//   console.log("Ви надали повідомлення" + data);
//   console.log("Другий аргумент" + second);
// });

// emitter.removeAllListeners();
// emitter.removeListener("message");

// const MESSAGE = process.env.message || ''

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123)
// } else {
//     emitter.emit('message', 'Ви не вказали повідомлення')
// }

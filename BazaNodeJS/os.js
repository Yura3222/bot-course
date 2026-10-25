const os = require("os");
const cluster = require("cluster");

// console.log(os.platform()) //повертає на якій ти ос зараз
// console.log(os.arch()) //повертає архітектуру процесора
// console.log(os.cpus().length) //повертає кількість ядер процесора

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Воркер з pid = ${process.pid} помер`);
//     if (code === ів) {
//       cluster.fork();
//     } else {
//       console.log("воркер вмер");
//     }
//   });
// } else {
//   console.log(`воркер з pid ${process.pid} запущено`);

//   setInterval(() => {
//     console.log(`воркер з pid ${process.pid} все ще працює`);
//   }, 5000);
// }

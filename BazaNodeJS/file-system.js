const fs = require('fs')
const path = require('path')

//Створення папки
// console.log('START')
// //це для простих функцій
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir2'), {recursive: true})

// //це для асинхронних
// fs.mkdir(path.resolve(__dirname, 'dir', 'dir2', 'dir2'), (err) => {
//     if(err) {
//         console.log(err)
//         return;
//     }
//   console.log('Папка створена')
// })
// console.log('END')


//Видалення папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw err
//     }
// })

//Створити файл і записати в нього дані

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 ajnsdnijad 7 9 10', () => {
//     if(err) {
//         throw err
//     }
//     console.log("файл записаний")
// })

//Дописати текст
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Кінцевий текст', () => {
//     if(err) {
//         throw err
//     }
//     console.log("файл записаний")
// })


//Послідовність через Promise()
// const writeFileAsync = async (filePath, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path.resolve(filePath), data, (err) => {
//             if (err) {
//                 return reject(err.message);
//             }

//             resolve();
//         });
//     });
// };

// const appendFileAsync = async (filePath, data) => {
//     return new Promise((resolve, reject) => {
//         fs.appendFile(path.resolve(filePath), data, (err) => {
//             if (err) {
//                 return reject(err.message);
//             }

//             resolve();
//         });
//     });
// };

// const readFileAsync = async (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, {encoding: 'utf-8'}, (err,data) => {
//             if (err) {
//                 return reject(err.message);
//             }

//             resolve(data);
//         });
//     });
// };

// const removeFileAsync = async (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.rm(filePath, (err) => {
//             if (err) {
//                 return reject(err.message);
//             }

//             resolve();
//         });
//     });
// };

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'data2'))
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'data3'))
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'data4'))
//    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//   .then(() => console.log('file was removed'))

// const text = process.env.TEXT || ''

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then(data => data.split(' ').length)
//   .then(count => writeFileAsync(path.resolve__dirname, 'count.txt'), `к-сть слів ${count}`)
//   .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
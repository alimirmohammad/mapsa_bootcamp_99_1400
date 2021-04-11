console.log(1);
setTimeout(() => console.log(2), 0);
new Promise((resolve, reject) => {
  console.log(3);
  resolve(4);
}).then(console.log);
console.log(5);

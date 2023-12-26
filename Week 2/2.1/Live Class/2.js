// asynchronus functions

//setTimeout : deliberately timeout , JS Provides

function onDone() {
  console.log("hi");
}

setTimeout(onDone, 1000);

// for (let i=0;i<1000;i++){
//     console.log(i)
// }
console.log("After timeout");

// reading file - real use of callback

// fs is the Node JS API for file handling

const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading data : ", err);
  }
  if (data) {
    console.log("Recieving data from file : ", data);
  }
});
console.log("After reading");

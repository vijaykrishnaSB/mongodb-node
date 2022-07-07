const fs = require("fs");



// const quote = "i am a good boy";
// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("complete writing");
// });





// const [, , noOfFiles] = process.argv;
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./back/text-${i}.html`, quote2, (err) => {
//     console.log(`completed writing text-${i}.html`);
//   });
// }
////////////// to built the file in vs code files





// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//////////////////////// readFiles in terminal





// const quote3 = "I am learning MERN Stack in Guvi";
// const quote4 = "ab c def g hti ji kl mnop qr st u vwx yxyz dv ubiu i iubeubeu";

// fs.appendFile("./nice.txt", "\n" + quote4, (err) => {
//   console.log("completed writing");
// });
/////////// create a file with paragraph






fs.unlink("./delete.css", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Completed deleting")
    }
})
 ////////////// to delete files in vs code files
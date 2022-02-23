const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2); 

const domain = args[0];
const path = args[1];
// console.log('This is my domain:', domain);
// console.log('This is the path:', path);

request(domain, (error, response, body) => {
  // console.log(response.headers)
  //write to file
  // console.log('body', body);
  if (error) {
    console.log('error:', error);
  }
  const content = body;
// write a file to index.html
  fs.writeFile(path, content, err => {
    if(err) {
      console.error(err)
    }else {
      const stats = fs.statSync(path);
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    }
  })
  
})
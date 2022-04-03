const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 5500;
const home = fs.readFileSync('C:\Users\yasha\Desktop\Easiest WebSite\index.html');
const about = fs.readFileSync('./about.html')



const server = http.createServer((req, res) => {
    console.log(req.url)
    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('home');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
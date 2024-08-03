// Task 01 (FULL STACK DEVELOPMENT)

// 1.Create a Node.js server to implement routes for /home, /about, and /contact that respond with different messages for each route.

// Program:

/*
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/home') {
    res.writeHead(200);
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('This is the About Page.');
  } else if (req.url === '/contact') {
    res.writeHead(200);
    res.end('Contact us at 22cs050@nandhaengg.org');
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/


// output :
//Server is running on http://localhost:3000



//2.Build a server with a route /greet that accepts a query parameter name and responds with a personalized greeting message, e.g., "Hello, [name]!"

// Program:

/*
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/greet') {
    const name = parsedUrl.query.name;
    if (name) {
      res.writeHead(200);
      res.end(`Hello, ${name}!`);
    } else {
      res.writeHead(400);
      res.end('Name query parameter is missing');
    }
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/


// output :
//Server is running on http://localhost:3000
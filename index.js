import { createServer } from 'http';
import { readFile } from 'fs';

createServer((req, res) => {
  switch (req.url) {
    case '/':
      readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
          throw new Error(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    case '/about':
      readFile('./about.html', 'utf8', (err, data) => {
        if (err) {
          throw new Error(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    case '/contact-me':
      readFile('./contact-me.html', 'utf8', (err, data) => {
        if (err) {
          throw new Error(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    default:
      readFile('./404.html', 'utf-8', (err, data) => {
        if (err) {
          throw new Error(err);
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  }
}).listen(8080);

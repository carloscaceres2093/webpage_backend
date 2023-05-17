const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello This is LinuxHint! and I am Sam\n");
});
server.listen(port, () => {
	console.log(`Listening Port ${port}`);
});

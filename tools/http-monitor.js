const http = require('http');

const server = http.createServer((req) => {
	console.log(req.headers);
	console.log('URL:', req.url);
	console.log('Method:', req.method);

	if (req.method === 'POST') {

		let buffer = [];
		req.on('data', (data) => {
			buffer.push(data.toString());
		});

		req.on('end', () => {
			let body = JSON.parse(buffer.join(''));

			let output = new Buffer(body.params.data, 'hex');
			console.log(output);
			console.log(output.toString());
//			console.log(JSON.parse(buffer.join('')));
		});
	}
});

server.listen(46657);

const Tendermint = require('tendermint');
const Basecoin = require('basecoin');

let client = Tendermint('ws://localhost:46657');

client.subscribe({
	event: 'NewBlock'
}, (err, event) => {

	if (event.data.data.block.data.txs.length > 0) {
		console.log(event.name);
		console.log(event.data.data);
		console.log(event.data.data.block.data.txs);
		event.data.data.block.data.txs.forEach((data) => {
			let buf = new Buffer(data, 'base64');
console.log(buf);
			let parts = [];
			let lastPos = 0;
			for (const [ index, byte ] of buf.entries()) {

				if (byte === 0x01) {
					parts.push(buf.slice(lastPos, index - lastPos));
					lastPos = index;
				}
			}

			console.log(parts);
		});
	}
});

/*
client.blockchain({
	minHeight: 0,
	maxHeight: 1
}, (err, info) => {
console.log(info.block_metas.length);
	info.block_metas.forEach((block) => {
		console.log(block);
	});
});


/*
let bc = Basecoin('ws://localhost:46657');

bc.getAccount(new Buffer('15ABDF0C6E755455EF737D90471ED363784C6A81'), (err, info) => {
	console.log(err, info);
});
*/
/*
bc.on('block', (block) => {
	console.log(block);
});
*/

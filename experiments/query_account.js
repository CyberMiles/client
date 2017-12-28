const request = require('request-promise-native');

(async () => {
	let ret = await request({
		method: 'POST',
		uri: 'http://localhost:46657/',
		body: {
			jsonrpc: '2.0',
			id: 'jsonrpc-client',
			method: 'abci_query',
			params: {
				data: '636F696E0000010473696773011415ABDF0C6E755455EF737D90471ED363784C6A81',
				path: '/key',
				prove: true
			}
		},
		json: true
	});

	console.log(ret);
})();

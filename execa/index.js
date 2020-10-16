const execa = require('execa');

(async () => {
	// const {stdout} = await execa('echo', ['brizer']);
	const {stdout} = await execa('ls',['-la'],);
	console.log(stdout);
	//=> 'unicorns'
})();
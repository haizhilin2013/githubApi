const simpleGit = require('simple-git/promise')();

simpleGit.pull('origin', 'master', {'--no-rebase': null});

simpleGit.status()
.then((status)=>{
	console.log(status);
	if(status.files.length > 0){
		simpleGit.add('.');
		simpleGit.commit('555 test...');
		simpleGit.push('origin', 'master', ()=>{
			console.log('doen')
		});
	}
});
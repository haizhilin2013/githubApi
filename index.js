const simpleGit = require('simple-git/promise')();

// 先拉取
simpleGit.pull('origin', 'master', {'--no-rebase': null});

// 查看状态
simpleGit
	.status()
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
const simpleGit = require('simple-git/promise')();

// 拉取更新
simpleGit.pull('origin', 'master', {'--no-rebase': null});

// 查看状态，add,commit,push
simpleGit
	.status()
	.then((status)=>{
		console.log(status);
		if(status.files.length > 0){
			simpleGit.add('.');
			simpleGit.commit('555 test...');
			simpleGit.push('origin', 'master', ()=>{
				console.log('done')
			});
		}
	});
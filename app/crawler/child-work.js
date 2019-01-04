/* 用子进程来实现爬虫服务 */

const cp = require("child_process");
const {resolve} = require("path");
const mysql = require("../models/common/mysql.js");
const MovieModel = require("../models/model/movieModel.js");
const movieModel = MovieModel.instance();
mysql.init();

/* 清理数据 */
// ;(async () => {
//     await movieModel.delNewMovie('中国大陆');
//     console.log("删除数据成功！");
// })();
(async () => {
	
	const childTaskPath = resolve(__dirname,"./trailer-task.js");
	const child = cp.fork(childTaskPath,[]);
	let invoked = false;
	child.on("error",err => {
		
		if(invoked){
			return;
		}
		invoked = true;
		console.log(err);
	});
	child.on("exit",code => {
		
		if(invoked){
			return;
		}
		invoked = false;
		let err = code === 0 ? null : new Error("exit code " + code);
		console.log(err);
	});
	child.on("message",async (data) => {
		
		let result = data.result;
		result.forEach(async (item) => {
			let doubanId = item.doubanId,
				title = item.title,
				rate = item.rate,
				poster= item.poster,
				type = item.type; 
			await movieModel.addNewMovie(doubanId,title,rate,poster,type);
		});
		console.log("数据库导入成功！");
		return "数据库导入成功！";
	});

})();

// module.exports = trailerAddData;

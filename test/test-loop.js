const { readFile } = require("fs");
const EventEmitter = require("events");
// const request = require("../app/helpers/request");
class EE extends EventEmitter{}
const yy = new EE();
yy.on("event",()=>{
	console.log("粗大事了！"+"@2");
});
//三种观察者的优先级顺序是：idle观察者(process.nextTick)>io观察者(setTimeout)>check观察者(setImmediate)
setTimeout(()=>{
	console.log("0毫秒后到期执行的定时器回调"+"@6");
	process.nextTick(()=>{
		console.log("process.nextTick的回调"+"@7");
	});
},0);
setTimeout(()=>{
	console.log("10毫秒后到期执行的定时器回调"+"@11");
},10);
setTimeout(()=>{
	console.log("20毫秒后到期执行的定时器回调"+"@12");
},20);
readFile("../package.json","utf-8",data => {
	console.log(data);
	console.log("完成文件 1 读操作的回调"+"@8");
});
readFile("../README.md","utf-8",data => {
	console.log(data);
	console.log("完成文件 2 读操作的回调"+"@9");
});
setImmediate(()=>{
	console.log("immediate 立即回调"+"@10");
});
process.nextTick(()=>{
	console.log("process.nextTick的回调"+"@1");
});
Promise.resolve().then(()=>{
	yy.emit("event");
	process.nextTick(()=>{
		console.log("process.nextTick的第2次回调"+"@5");
	});
	console.log("Promise的第1次回调"+"@3");
}).then(()=>{
	console.log("Promise的第2次回调"+"@4");
});

// 获取第三方接口数据（测试）
// const getExperience = async function (ctx, next) {
//     const getExperienceData = await request({
//             cache: false,
//             cacheTime: 500,
//             url: 'http://sapi.beibei.com/xinde/gather_all_list/1-10-2.html'
//         })
//     console.log("网络请求@12");
// };
// getExperience();
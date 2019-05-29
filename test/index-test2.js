let multipNum = require("../test-practice/test2.js");

describe("测试test2.js",()=>{
	before(()=>console.info("在本区块的所有测试用例之前执行"));
	after(()=>console.info("在本区块的所有测试用例之后执行"));
	beforeEach(()=>console.info("在本区块的每个测试用例之前执行")) ; 
	afterEach(()=>console.info("在本区块的每个测试用例之后执行"));
	describe("测试multipNum函数",()=>{
		it("两数相乘结果为两个数字的乘积",()=>{
			if(multipNum(1,2) !== 2){
				throw new Error("两数相乘结果不为两个数字的乘积");
			}
		}); 
	});
});

let addNum = require("../test-practice/test1.js");

describe("测试test1.js",()=>{
	describe("测试addNum函数",()=>{
		it("两数相加结果为两个数字的和",()=>{
			if(addNum(1,2) !== 3){
				throw new Error("两数相加结果不为两个数字的和");
			}
		}); 
	});
});

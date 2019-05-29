const child = require("child_process");
child.exec("./test1.sh",function (err, stdout, stderr) {
	console.log(arguments);
	console.log(stderr);
});
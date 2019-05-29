const testGetListHandler = require("../models/handles/testGetListHandler.js");

const testGetList = async function (ctx, next) {
	return await (new testGetListHandler()).handler(ctx, next);
};

module.exports = {
	testGetList
};

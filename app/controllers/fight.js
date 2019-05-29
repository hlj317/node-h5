const getFightUserListHandler = require("../models/handles/getFightUserListHandler.js");
const addFightUserHandler = require("../models/handles/addFightUserHandler.js");
const delFightUserHandler = require("../models/handles/delFightUserHandler.js");
const getFightUserOneHandler = require("../models/handles/getFightUserOneHandler.js");
const updateFightUserHandler = require("../models/handles/updateFightUserHandler.js");

const getFightDetailListHandler = require("../models/handles/getFightDetailListHandler.js");
const addFightDetailHandler = require("../models/handles/addFightDetailHandler.js");
const delFightDetailHandler = require("../models/handles/delFightDetailHandler.js");
const getFightDetailOneHandler = require("../models/handles/getFightDetailOneHandler.js");
const updateFightDetailHandler = require("../models/handles/updateFightDetailHandler.js");

const getFightPropertyListHandler = require("../models/handles/getFightPropertyListHandler.js");
const addFightPropertyHandler = require("../models/handles/addFightPropertyHandler.js");
const delFightPropertyHandler = require("../models/handles/delFightPropertyHandler.js");
const getFightPropertyOneHandler = require("../models/handles/getFightPropertyOneHandler.js");
const updateFightPropertyHandler = require("../models/handles/updateFightPropertyHandler.js");

const index = async function (ctx, next) {
	await ctx.render("movie/index", {
		title: "PK大乱斗首页"
	});
	return next();
};

const getFightUserList = async function (ctx, next) {
	return await (new getFightUserListHandler()).handler(ctx, next);
};
const addFightUser = async function (ctx, next) {
	return await (new addFightUserHandler()).handler(ctx, next);
};
const delFightUser = async function (ctx, next) {
	return await (new delFightUserHandler()).handler(ctx, next);
};
const getFightUserOne = async function (ctx, next) {
	return await (new getFightUserOneHandler()).handler(ctx, next);
};
const updateFightUser = async function (ctx, next) {
	return await (new updateFightUserHandler()).handler(ctx, next);
};

const getFightDetailList = async function (ctx, next) {
	return await (new getFightDetailListHandler()).handler(ctx, next);
};
const addFightDetail = async function (ctx, next) {
	return await (new addFightDetailHandler()).handler(ctx, next);
};
const delFightDetail = async function (ctx, next) {
	return await (new delFightDetailHandler()).handler(ctx, next);
};
const getFightDetailOne = async function (ctx, next) {
	return await (new getFightDetailOneHandler()).handler(ctx, next);
};
const updateFightDetail = async function (ctx, next) {
	return await (new updateFightDetailHandler()).handler(ctx, next);
};

const getFightPropertyList = async function (ctx, next) {
	return await (new getFightPropertyListHandler()).handler(ctx, next);
};
const addFightProperty = async function (ctx, next) {
	return await (new addFightPropertyHandler()).handler(ctx, next);
};
const delFightProperty = async function (ctx, next) {
	return await (new delFightPropertyHandler()).handler(ctx, next);
};
const getFightPropertyOne = async function (ctx, next) {
	return await (new getFightPropertyOneHandler()).handler(ctx, next);
};
const updateFightProperty = async function (ctx, next) {
	return await (new updateFightPropertyHandler()).handler(ctx, next);
};

module.exports = {
	index,
	getFightUserList,
	addFightUser,
	delFightUser,
	getFightUserOne,
	updateFightUser,
	getFightDetailList,
	addFightDetail,
	delFightDetail,
	getFightDetailOne,
	updateFightDetail,
	getFightPropertyList,
	addFightProperty,
	delFightProperty,
	getFightPropertyOne,
	updateFightProperty
};

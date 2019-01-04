let dbConf = "";

const DEV = {
	host: "172.16.3.30",
	user: "root",
	password: "root",
	database: "beibei_wxmp",
	group_table: "flybear_test",
	group_table_field: ["group_name", "group_score"],
	account_table: "movie_login",
	account_table_field: ["username", "password"],
	movie_table: "movie_list",
	movie_table_field: ["doubanId", "title", "rate", "poster", "type"]

};

const PRO = {
	host: "118.31.169.144",
	user: "root",
	password: "123456",
	database: "hlj",
	account_table: "movie_login",
	account_table_field: ["username", "password"],
	movie_table: "movie_list",
	movie_table_field: ["doubanId", "title", "rate", "poster", "type"]
};

if (process.env.NODE_ENV === "dev") {
	dbConf = DEV;
} else {
	dbConf = PRO;
}

module.exports = dbConf;


import axios from "axios";

export const getWinnerInfo = function () {
	return axios({
		method: "flybear_winner_info",
		data: {},
	});
};

export const submitWinnerInfo = function (
	realName,
	phoneNum,
	alipayNum,
	beibeiNum,
	address
) {
	return axios({
		method: "flybear_submit_info",
		data: {
			real_name: realName,
			phone_num: phoneNum,
			alipay_num: alipayNum,
			beibei_num: beibeiNum,
			address,
		},
	});
};


export const updateWinnerInfo = function (
	realName,
	phoneNum,
	alipayNum,
	beibeiNum,
	address
) {
	return axios({
		method: "flybear_update_info",
		data: {
			real_name: realName,
			phone_num: phoneNum,
			alipay_num: alipayNum,
			beibei_num: beibeiNum,
			address,
		},
	});
};

<template>
    <div>
        <div class="container">
            <div class="award-info">您的奖品是「{{message}}」,请填写领奖信息:</div>
            <div class=input-container>
                <div class="name-container">
                    <p class="title-name">姓名 :</p>
                    <input class="value-name" type="text" placeholder="需要填写您真实的名称哦~" v-model="realName">
                    <div class="dash-line"></div>
                </div>
                <div class="phone-container">
                    <p class="title-phone">手机号 :</p>
                    <input class="value-phone" type="text" placeholder="请保持电话畅通，我们会联系您" v-model="phoneNum">
                    <div class="dash-line"></div>
                </div>
                <div class="alipay-container" v-if="showAlipay">
                    <p class="title-alipay">支付宝账号 :</p>
                    <input class="value-alipay" type="text" placeholder="需要真实有效哦~" v-model="alipayNum">
                    <div class="dash-line"></div>
                </div>
                <div class="alipay-container" v-if="showBeibei">
                    <p class="title-alipay">贝贝账号 :</p>
                    <input class="value-alipay" type="text" placeholder="需要真实有效哦~" v-model="beibeiNum">
                    <div class="dash-line"></div>
                </div>
                <div class="address-container" v-if="showAddress">
                    <p class="title-address">收货地址 :</p>
                    <textarea class="value-address" v-model="address" placeholder="收货地址需要准确有效哦~"></textarea>
                </div>
            </div>
            <div class="submit-container" @click="submitInfo">
                <div class="submit-text">{{btnText}}</div>
                <img class="submit-btn" src="http://h0.hucdn.com/open/201836/3b04552e2b818d4c_351x116.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    @import "~src/common/less/common.less";
</style>

<script>
    import _ from 'underscore';
    import axios from 'axios';
    export default {
        name: 'awardScren',
        data() {
            return {
                // {true|false} winnertable 中是否已经有该用户的信息了
                newWinner: '',
                // 提交按钮上应该显示的文案
                btnText: '',

                awardType: 0,
                message: '',

                realName: '',
                phoneNum: '',
                alipayNum: '',
                beibeiNum: '',
                address: '',

                showAddress: false,
                showBeibei: false,
                showAlipay: false,
            };
        },
        methods: {
            fetchWinnerInfo() {
                let self = this;
                axios.get('/server/flybear',{
                        params:{
                            method:'flybear_winner_info',
                            data:{}
                        },
                        responseType: 'json'
                    })
                    .then(res =>{
                        if (res.is_online || res.award_type === 0) {
                            this.$parent.currentView = 'main-screen';
                        }
                        self.newWinner = res.new_winner;
                        self.awardType = res.award_type;
                        self.message = self.getMessage(self.awardType);
                        self.checkShowItem(self.awardType);

                        if (!self.newWinner) {
                            self.realName = res.real_name;
                            self.phoneNum = res.phone_num;
                            self.alipayNum = res.alipay_num;
                            self.beibeiNum = res.beibei_num;
                            self.address = res.address;
                            self.btnText = '提交修改';
                        } else {
                            self.btnText = '确定';
                        }
                    })
                    .catch(function(err){
                        console.log(err);
                    });    

            },
            // 根据中奖类型，显示文案
            getMessage(awardType) {
                let message = '';
                awardType = +awardType;
                if (awardType === 1) {
                    message = '200元现金';
                } else if (awardType === 2) {
                    message = '160元现金';
                } else if (awardType === 3) {
                    message = '120元现金';
                } else if (awardType === 4) {
                    message = '88元代金券';
                } else if (awardType === 5) {
                    message = '50元代金券';
                } else if (awardType >= 6) {
                    message = '贝贝文化产品';
                }
                return message;
            },
            // 根据中奖类型，显示不同的输入框
            checkShowItem(awardType) {
                awardType = +awardType;
                if (awardType === 1) {
                    this.showAlipay = true;
                } else if (awardType === 2) {
                    this.showAlipay = true;
                } else if (awardType === 3) {
                    this.showAlipay = true;
                } else if (awardType === 4) {
                    this.showBeibei = true;
                } else if (awardType === 5) {
                    this.showBeibei = true;
                } else if (awardType >= 6) {
                    this.showAddress = '贝贝文化产品';
                }
            },
            // 提交
            submitInfo() {

                return;
                
                let allValid = this.checkInfo(this.awardType);
                if (!allValid) {
                    return false;
                }

                if (this.newWinner) {
                    submitWinnerInfo(
                        this.realName,
                        this.phoneNum,
                        this.alipayNum,
                        this.beibeiNum,
                        this.address,
                    ).then((res) => {
                        if (res.success) {
                            this.newWinner = false;
                            this.btnText = '提交修改';
                        }
                        if (!res.success) {
                            alert('提交失败，请检查网络状况');
                        }
                    });
                } else {
                    updateWinnerInfo(
                        this.realName,
                        this.phoneNum,
                        this.alipayNum,
                        this.beibeiNum,
                        this.address,
                    ).then((res) => {
                        if (!res.success) {
                            alert('提交失败，请检查网络状况');
                        }
                    });
                }
            },
            // 校验
            checkInfo(awardType) {
                if (!this.realNameOk()) {
                    return false;
                }
                if (!this.phoneNumOk()) {
                    return false;
                }
                if (awardType === 1) {
                    if (!this.alipayOk()) {
                        return false;
                    }
                } else if (awardType === 2) {
                    if (!this.alipayOk()) {
                        return false;
                    }
                } else if (awardType === 3) {
                    if (!this.alipayOk()) {
                        return false;
                    }
                } else if (awardType === 4) {
                    if (!this.beibeiOk()) {
                        return false;
                    }
                } else if (awardType === 5) {
                    if (!this.beibeiOk()) {
                        return false;
                    }
                } else if (awardType >= 6) {
                    if (!this.addressOk()) {
                        return false;
                    }
                }
                return true;
            },
            /**
             *  校验名称是否正确
             * @returns {boolean}
             */
            realNameOk() {
                let result = true;
                if (!this.realName) {
                    alert('名字不能为空哦~');
                    result = false;
                }
                let re = new RegExp('^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$');
                if (!re.test(this.realName)) {
                    alert('请输入真实的名字哦');
                    result = false;
                }
                if (this.realName.length > 4) {
                    alert('请输入真实的名字哦');
                    result = false;
                }
                return result;
            },
            /**
             *  校验手机号是否正确
             * @returns {boolean}
             */
            phoneNumOk() {
                let result = false;
                let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!myreg.test(this.phoneNum)) {
                    alert('请输入真实的手机号哦');
                    result = false;
                } else {
                    result = true;
                }
                return result;
            },

            /**
             * 对地址进行校验
            */
            addressOk() {
                if (_.isUndefined(this.address)) {
                    alert('地址为空怎么能把奖品寄到您家呢？');
                    return false;
                }
                if (typeof this.address !== 'string') {
                    alert('请输入有效的地址哦');
                    return false;
                }
                if (this.address.length < 5) {
                    alert('请输入有效的地址哦');
                    return false;
                }
                if (this.address.indexOf('省') === -1 &&
                    this.address.indexOf('市') === -1 &&
                    this.address.indexOf('县') === -1
                ) {
                    alert('老铁，地址这样写让我们很难办啊~');
                    return false;
                }
                if (this.address.length > 400) {
                    alert('地址长度过长');
                    return false;
                }
                return true;
            },
            /**
             * 对贝贝账号进行校验
             * @returns {boolean}
             */
            beibeiOk() {
                if (_.isUndefined(this.beibeiNum) || this.beibeiNum.length === 0) {
                    alert('请填写贝贝账号');
                    return false;
                }
                return true;
            },

            /**
             * 对支付宝账号进行校验
             */
            alipayOk() {
                if (_.isUndefined(this.alipayNum) || this.alipayNum.length === 0) {
                    alert('请填写支付宝账号');
                    return false;
                }
                return true;
            },
        },
        mounted() {
            this.fetchWinnerInfo();
        },
    };
</script>

<style scoped lang="less">
    @import "~src/common/less/common.less";
    .container {
        width: 100%;
        height: 1334 /@b;
        background-image: url("http://h0.hucdn.com/open/201836/9dde326371e71862_750x1334.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .award-info {
        position: absolute;
        top: 208 /@b;
        left: 50%;
        transform: translate(-50%,0);
        width: 100vw;
        height: 51 /@b;
        color: white;
        text-align: center;
        font-size: 26 /@b;
    }

    .input-container {
        width: 648 /@b;
        height: auto;
        position: absolute;
        left: 50%;
        top: 315 /@b;
        transform: translate(-50%, 0);
        color: white;
        font-size: 30 /@b;
        font-weight: bold;
    }

    .name-container {
        height: 72 /@b;
        position: relative;
        margin-bottom: 20 /@b;
        .title-name {
            position: absolute;
            left: 0;
            top: 0;
        }
        .value-name {
            position: absolute;
            left: 95/@b;
            top: 0;
            border: 0;
            background: none;
            color: white;
            width: 560/@b;
        }
        .dash-line {
            width: 100%;
            height: 2 /@b;
            position: absolute;
            left: 0;
            top: 59 /@b;
            border-bottom: 1px white dashed;
        }
    }

    .phone-container {
        height: 72 /@b;
        position: relative;
        margin-bottom: 20 /@b;
        .title-phone {
            position: absolute;
            left: 0;
            top: 0;
        }
        .value-phone {
            position: absolute;
            left: 115/@b;
            top: 0;
            border: 0;
            background: none;
            color: white;
            width: 480/@b;
        }
        .dash-line {
            width: 100%;
            height: 2 /@b;
            position: absolute;
            left: 0;
            top: 59 /@b;
            border-bottom: 1px white dashed;
        }
    }

    .alipay-container {
        height: 72 /@b;
        position: relative;
        margin-bottom: 20 /@b;
        .title-alipay {
            position: absolute;
            left: 0;
            top: 0;
        }
        .value-alipay {
            position: absolute;
            left: 180/@b;
            top: 0;
            border: 0;
            background: none;
            color: white;
            width: 430/@b;
        }
        .dash-line {
            width: 100%;
            height: 2/@b;
            position: absolute;
            left: 0;
            top: 59 /@b;
            border-bottom: 1px white dashed;
        }
    }

    .address-container {
        position: relative;
        .title-address {
            position: absolute;
            left: 0;
            top: 0;
        }
        .value-address {
            display: inline-block;
            position: absolute;
            left: 0/@b;
            top: 66 /@b;
            border: 0;
            background: none;
            color: white;
            width: 100%;
            height: 272 /@b;
            background-color: rgba(50,29,104, 0.5);
            border-radius: 20/@b;
            padding: 20/@b;
            box-sizing: border-box;
        }
    }

    .submit-container {
        width: 300 /@b;
        height: 90 /@b;
        position: absolute;
        top: 900 /@b;
        left: 50%;
        transform: translate(-50%, 0);
        .submit-text {
            width: 100%;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 49%;
            transform: translate(-50%, -50%);
            color: #ffe082;
            font-size: 38 /@b;
            font-weight: 900;
        }
        .submit-btn {
            width: 100%;
            height: 100%;
        }
    }
</style>
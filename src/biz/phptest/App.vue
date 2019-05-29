<template>
    <div>
        <div class="container">
            <div class="title">实现php的增删改查页面</div>
            <ul class="list">
                <li v-for="(item,index) in listDatas" :key="index">
                    <span>uid:</span>
                    <span class="user">{{item.uid}}</span>
                    <span class="power">power:</span>
                    <input type="number" :value="item.power" @blur="saveTempPower(index,$event)" />
                    <input type="button" value="修改数据" class="button" @click="modifyData(item.id,index)"/>
                    <input type="button" value="删除数据" class="button" @click="deleteData(item.id,index)"/>
                </li>
            </ul>
            <div class="additem">
                <span>uid:</span><input type="text" v-model="currentUid"/>
                <span class="power">power:</span><input type="number" v-model="currentPower"/>
                <span><input type="button" value="添加数据" class="button" @click="addData()"/></span>
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
        data() {
            return {
                listDatas:[],
                currentUid:'',
                currentPower:0
            };
        },
        methods: {
            fetchListDatas() {
                let self = this;
                axios.get('http://api-dev.beibei.com/mroute.html',{
                    params:{
                        method:'beibei.module.market.farm.test.lists'
                    },
                    responseType: 'json'
                })
                .then(res =>{
                    let data = res.data;
                    self.listDatas = data;
                })
                .catch(function(err){
                    console.log(err);
                });    
            },
            /*修改数据*/
            modifyData(id,index){
                let self = this,
                    modifyPower = this.listDatas[index].tempPower || self.listDatas[index].power;
                if(!id){
                    return;
                }
                axios.post('http://api-dev.beibei.com/mroute.html?method=beibei.module.market.farm.test.update',{
                    id:parseInt(id),
                    power:parseInt(modifyPower)
                })
                .then(res =>{
                    let data = res.data;
                    alert(data.message);
                    if(!data.success) return;
                })
                .catch(function(err){
                    console.log(err);
                });
            },
            /*保存临时数据*/
            saveTempPower(index,$event){
                this.listDatas[index].tempPower = $event.target.value;
            },
            /*删除数据*/
            deleteData(id,index){
                let self = this;
                if(!id){
                    return;
                }
                axios.post('http://api-dev.beibei.com/mroute.html?method=beibei.module.market.farm.test.delete',{
                    id:id
                })
                .then(res =>{
                    let data = res.data;
                    alert(data.message);
                    if(!data.success) return;
                    self.listDatas.splice(index,1);
                })
                .catch(function(err){
                    console.log(err);
                }); 
            },
            /*添加数据*/
            addData(){
                let self = this;
                if(!self.currentUid || !self.currentPower){
                    return;
                }
                axios.post('http://api-dev.beibei.com/mroute.html?method=beibei.module.market.farm.test.add',{
                    userid:self.currentUid,
                    power:self.currentPower
                })
                .then(res =>{
                    let data = res.data;
                    alert(data.message);
                    if(!data.success) return;
                    self.listDatas.push({
                        id:data.id,
                        uid:self.currentUid,
                        power:self.currentPower
                    });
                    self.currentUid = '';
                    self.currentPower = '';
                })
                .catch(function(err){
                    console.log(err);
                }); 
            }
        },
        mounted() {
            this.fetchListDatas();
        },
    };
</script>

<style scoped lang="less">
    @import "~src/common/less/common.less";
    .container {
        width: 100%;
        color: #000000;
        padding: 20/@b;
        .title{
            font-size: 36/@b;
            text-align: center;
            margin: 10/@b 0 30/@b 0;
        }
        input{
            background:#ffffff;
            border:1px solid #333;
            padding:10/@b 15/@b;
            width:120/@b;
        }
        input.button{
            width:auto;
            background:#333333;
            color:#fff;
            border-radius:4/@b;
            padding:5/@b 10/@b;
        }
        .list{
            margin:0;
            padding:0;
            li{
                margin:10/@b 0 0 0;
            }
        }
        .additem{
            margin:30/@b 0 0 0;
            padding:15/@b 0 0 0;
            border-top:1px dashed #666;
        }
        .power{
            margin:0 0 0 8/@b;
        }
        .user{
            font-weight:bold;
        }
    }

    .award-info {
        position: absolute;
        top: 208 /@b;
        left: 50%;
        transform: translate(-50%,0);
        width: 100vw;
        height: 51 /@b;
        color: #000000;
        text-align: center;
        font-size: 26 /@b;
    }


</style>
<template>
    <div id="accident">
        <label for='my_file' class="theme-color"><mu-icon left value="backup"></mu-icon>修改头像</label>
        <input type="file" ref="upload" name="avatar" id='my_file' accept="image/jpg" @change="changeAvatar($event)" />
    </div>
</template>

<style scoped lang="less">
    @import "~src/common/less/common.less";
</style>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                imgNum:4
            };
        },
        methods: {
            changeAvatar(event) {
                let img = event.target.files[0];
                let size = img.size;
                if (size > 3145728) {
                    alert('请选择3M以内的图片！');
                    return false;
                }
                
                var form = new FormData();
                form.append('avatar',img);
                axios.post('http://api-dev.beibei.com/mroute.html?method=beibei.module.market.farm.img.test',{
                    data:form,
                    contentType:false,
                    processData:false,     //这个很有必要，不然不行
                    dataType:"json",
                    mimeType:"multipart/form-data",
                })
                .then(res =>{
                    alert(data);
                    if(!data.success) return;
                })
                .catch(function(err){
                    console.log(err);
                });

            }
        }
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
<template>
  <div class="registerwrap">
      <input type="text" v-model="username" placeholder="账号">
      <input  :type="oneflag?'password':'text'" v-model="pwd" placeholder="密码" ref="onepwd">
      <input :type="twoflag?'password':'text'" placeholder="再次输入密码" ref="twopwd" @keyup.enter="register">
      <button @click="register">注册</button>
      <span class="oneshow" @click="onepwdflag">显示</span>
      <span class="twoshow" @click="twopwdflag">显示</span>
  </div>
</template>

<script>
import Axios from 'axios';
import Api from "../api/index"
export default {
    data(){
        return {
            username:"",
            pwd:"",
            oneflag:true,
            twoflag:true,
            flag:true,
        }
    },
    methods: {
        onepwdflag(){
            this.oneflag=!this.oneflag;
        },
        twopwdflag(){
            this.twoflag=!this.twoflag;
        },
        register(){
            if(this.username.trim()==""||this.pwd.trim()==""||this.$refs.twopwd.value.trim()==""){
                this.flag=false;
                alert("不能为空");
                return
            }
            if(this.pwd!==this.$refs.twopwd.value){
                this.flag=false;
                this.$refs.twopwd.value="";
                this.$refs.twopwd.focus();
                alert("两次输入密码不一致");
            }
            if(this.flag){
                Api.register({
                    username:this.username,
                    pwd:this.pwd
                }).then(res=>{
                    console.log(res);
                })
            }
        }
    },
}
</script>

<style>
    .registerwrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px
    }
    input,button{
        width: 100%;
        height: 50px;
        border: 1px solid #999;
        padding: 5px;
        margin-top: 10px;
        border-radius: 15px;
        font-size: 16px;
    }
    .oneshow{
        position: fixed;
        right: 15px;
        top: 90px;
    }
    .twoshow{
        position: fixed;
        right: 15px;
        top: 150px;
    }
    button{
        background-color: orangered;
    }
</style>
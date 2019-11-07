<template>
  <div class="loginwrap">
      <p><input type="text" placeholder="用户名" v-model="user" ref="user"></p>
      <p><input :type="flag?'password':'text'" placeholder="密码" v-model="pwd" @keyup.enter="login"></p>
      <span @click="show">显示</span>
      <button  @click="login">登录</button>
      <button  @click="register">注册</button>
  </div>
</template>

<script>
const Axios=require("axios");
import Api from "../api/index"

export default {
    data(){
        return {
            user:"",
            pwd:"",
            flag:true,
        }
    },
    methods:{
        show(){
            this.flag=!this.flag;
        },
       login(){
           if(this.user.trim()==''){
               alert("用户名不能为空");
               return;
           }else if(this.pwd.trim()==''){
               alert("密码不能为空");
               return;
           }
            /* Axios */
            Api.login({
                    user:this.user,
                    pwd:this.pwd,
            }).then(res=>{
                if(res.code==400){
                    alert(res.message)
                }else if(res.code==200){
                   this.$router.push("/home");
                }
            })
       },
        register(){
            this.$router.push("/register");
        }
      

    },
    mounted() {
        this.$refs.user.focus();
    },
}
</script>

<style lang="scss" scoped>
    .loginwrap{
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
    span{
        position: fixed;
        right: 15px;
        top: 90px;
    }
    button{
        background-color: orangered;
    }
</style>
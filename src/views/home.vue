<template>
  <div class="homewrap">
   <div class="header">
     <router-link tag="span" v-for="(item,index) in list" :key="index" :to="item.path" activeClass="active">{{item.title}}</router-link>
   </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
 
</template>

<script>
export default {
  data(){
    return {
      list:[
        {
          title:"书城",
          path:"/home/book",
        }, {
          title:"书架",
          path:"/home/booklist",
        }
      ]
    }
  },
  mounted() {
     this.$store.dispatch({type:"nav"})//导航数据
     this.$store.dispatch({type:"getlist"});//列表数据
  },
}
</script>

<style lang='scss' scoped>
  .active{
    color:red;
  }
  .homewrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: .5px solid #999;
    span{
      flex:1;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
    }
  }
  .main{
    width: 100%;
    overflow: hidden;;
    flex: 1;
  }
</style>
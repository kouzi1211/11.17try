<template>
  <div class="detailwrap">
      <div class="header">
          <span @click="back">＜</span>
          {{detailData().title}}
      </div>
      <div class="main">
          <div>
              <img v-lazy="detailData().avatar" alt="">
              <h2 clas="easy">简介:</h2>
              <p class="summary">{{detailData().summary}}</p>
          </div>
      </div>
      <span class="like">收藏</span>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch({type:"getDetail"})
    },
    methods: {
        detailData(){
            return this.$store.state.curDetailData;
        },
        back(){
            this.$router.push("/home")
        }
    },
}
</script>

<style lang="scss" scoped>
    .detailwrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #999;
        span{
           position: absolute;
            line-height: 50px;
            left: 15px;
            border-bottom: 1px solid #999;
        }
    }
    .main{
        width: 100%;
        flex:1;
        padding: 5px;
         display: flex;
        img{
            margin-left: 100px;
            width: 100px;
            height: 150px;
        }
    }
    .summary{
        text-indent: 2em;
        line-height: 30px;
        padding: 5px;
    }
    h2{
        line-height: 50px;;
    }
    .like{
        position: fixed;
        right: 15px;
        bottom: 30px;
    }
</style>
<template>
  <div class="bookwrap">
    <nav class="header">
    <span v-for="(item,index) in nav" :key="index" @click="getId(index)" :class="{active:id==index}" >{{item.title}}</span>

    </nav>
    <div class="main">
          <div class="con">
            <div v-for="(item,index) in mian" :key="index" @click="toDetail(item.id)" class="divs">
               <img v-lazy="item.avatar" alt="">
              <div class="txt">
                <!-- <p>{{item.id}}</p> -->
                <p>{{item.title}}</p>
              </div>
              <p class="like">♡</p>
           </div>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
  methods: {
    getId(index){
      this.$store.commit({type:"getCurId",index});
      this.$store.dispatch({type:"getlist"});
    },
    toDetail(index){
      this.$store.commit({type:"getCurDetailId",index});
      this.$router.push("/detail");
    }
  },
  computed: {
    nav(){
      return this.$store.state.navList
    },
    id(){
      return this.$store.state.curId
    },
    mian(){
      return this.$store.state.curData;
    }
  },
}
</script>

<style lang='scss' scoped>
  .active{
    color:red;
  }
  .bookwrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
  }
  .header{
    width: 100%;
    height: 40px;
    display: flex;
    span{
      flex:1;
      text-align: center;
      line-height: 40px;
    }
  }
  .main{
    width: 100%;
    height: 600px;
    /* flex:1; */
    overflow: auto;
    .con{
      width: 100%;
      overflow: auto;
      .divs{
        width: 100%;
        height: 150px;
        display: flex;
        padding: 15px;
        margin-top: 5px;
        background-color: rgb(159, 240, 220);
        position: relative;
        img{
          width: 80px;
          height: 120px;
        }
        .txt{
          flex: 1;
          p{
            text-align: left;
            line-height: 100px;
            margin-left: 10px;
          }
        }
        .like{
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 25px;
        }
      }
      
    }
  }
  </style>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import Api from "../api/index";//引入封装的axios请求数据时接口的方法;
/* Api.getNav().then(res=>{
  console.log(res);
})
 */
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[],//nav数据
    curId:0,///当前nav的下标
    curData:[],//当前相对应的数据
    curDetailId:1009,//详情页面数据的id
    curDetailData:[],//详情页的数据
  },
  mutations: {//同步获取数据
    getNavList(state,{list}){//nav
      state.navList=list;
    },
    getCurId(state,payload){//当前的id
      state.curId=payload.index
    },
    getCurData(state,payload){//当前的list数据
      state.curData=payload.list;
    },
    getCurDetailId(state,payload){//详情页的下标
      state.curDetailId=payload.index;
    },
    getCurDetailData(state,payload){//详情页的数据
      state.curDetailData=payload.list;
    }
  },
  actions: {//异步获取数据
    nav({commit}){
      /* axios.get("/nav") */
      Api.getNav().then(res=>{//nav
        commit({type:"getNavList",list:res})
      })
    },
    getlist({state,commit}){
      /* axios({
        url:`/list?id=${state.curId}`,
        method:"get",
      }) */
      Api.list(`?id=${state.curId}`).then(res=>{//list//可以用模板字符串传参
       commit({type:"getCurData",list:res.values});
      })
    },
    getDetail({state,commit}){
      /* axios({
        url:`/detail`,
        params:{
          id:state.curId,
          detailid:state.curDetailId
        },
        method:"get",
      }) */
      Api.detail({//detail
        id:state.curId,
        detailid:state.curDetailId
      }).then(res=>{
        commit({type:"getCurDetailData",list:res.values});
      })
    }
  },
  modules: {
  }
})

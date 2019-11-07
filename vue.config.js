const Bodeparser=require("body-parser");
const { bookNavData, bookMallData, bookMallDetailData } = require('./data');

let userList = [{
    id: '001',
    username: 'admin',
    password: '123456'
  }, {
    id: '002',
    username: 'xu',
    password: '123'
  }]

  module.exports={
      devServer:{
          before(app){
             /*  app.post("/login",Bodeparser.json(),(req,res)=>{
                  let {user,pwd}=req.body;
                  let use=userList.find(item=>{
                      return item.username==user
                  })
                  if(use){
                      if(use.password==pwd){
                          res.send({
                              code:200,
                              data:{use},
                              message:"登陆成功"
                          })
                      }else{
                        res.send({
                            code:400,
                            message:"登陆失败"
                        })
                      }
                  }else{
                      res.send({
                        code:400,
                        message:"用户名不存在"
                      })
                  }
                  
              }), */
              /* app.get("/nav",(req,res)=>{
                  res.send(bookNavData)
              }), */
              /* app.get("/list",(req,res)=>{
                 let {id}=req.query;
                let list= bookMallData.find(item=>item.id==id).list;
               res.send({
                   values:list,
               })
              }), */
              /* app.get("/detail",(req,res)=>{
                let {id,detailid}=req.query;
                let list= bookMallData.find(item=>item.id==id).list.find(item=>item.id==detailid);
                res.send({
                    values:list
                })
              }) */
              
          },
         
      }
  }
const express=require("express");
const cors=require("cors")
let app=new express();
app.use(cors())
app.get("/nav",(req,res)=>{
    res.send(bookNavData)
});
app.listen("83")
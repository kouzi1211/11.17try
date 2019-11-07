import axios from "axios";
import urls from "./urls";
axios.defaults.baseURL="http://localhost:83/";//axios的默认url;在用的时候后面要加接口名称
const common= async (config)=>{//异步
    let res= await axios(config);//等待执行完成
    return res.data;
}
export default{
    getNav:()=>common({url:urls.nav}),
    login:(data)=>common({url:urls.login,data,method:"post"}),
    list:(url)=>common({url:urls.list+url,method:"get"}),
    detail:(params)=>common({url:urls.detail,params,method:"get"}),
    register:(data)=>common({url:urls.register,data,method:"post"})
}
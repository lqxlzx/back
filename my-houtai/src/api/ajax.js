
import axios from 'axios'

import { message } from 'antd'

export default function ajax(url, data={}, type="GET"){
    return new Promise((resolve, reject)=>{
        let promise //当后面没有值不能用const声明
   if(type==="GET"){
      promise= axios.get(url,{
          params:data
      })
   }else{
      promise= axios.post(url,data)
   }
   promise.then(response=>{
     //成功
     resolve(response)
   }).catch(error=>{
      message.error('请求出错：' + error.message)
   })
    })
   

}
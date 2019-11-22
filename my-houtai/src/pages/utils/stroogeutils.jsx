import store from 'store'

// 进行local数据储存管理的工具模块
const USER_KEY='user_key'
export default{
    // 保存  原生对一些浏览器的兼容不好 所以使用store库
       saveUser(user){
           //localStorage.setItem(USER_KEY, JSON.stringify(user))

           store.set(USER_KEY,user)
       },
    // 读取
       getUser(){
           //return JSON.parse(localStorage.getItem(USER_KEY) || '{}' )
         
           return store.get(USER_KEY) || {}
        },
    // 删除
       remUser(){
           //localStorage.removeItem(USER_KEY)

           store.remove(USER_KEY)
    }
}
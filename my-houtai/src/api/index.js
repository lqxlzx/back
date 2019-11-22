
import ajax from './ajax'

const BASE=''
// export function reqLogin(username, password) {
//   return ajax('https://resta.zam9.com/api/auth/login', {username, password},'POST')
// }

export const reqLogin=(email, password)=>ajax(BASE+'/auth/login', {email, password}, 'POST')
import http from '../utils/http';
// import axios from '../utils/request';
/**
 * @params request 请求地址 例如:http://192.168.0.1:18088/api/...
 * @params 'testIp' 代表vue-cli中vue.config.js中配置的代理
 */

 export function getUserInfo(){
     return http.get('/client/userInfo');
 }

export function getCateList(){
    return http.get('/client/category/list/1/100')
}

export function getImagesList(params){
    return http.get('/client/images/list/',params)
}
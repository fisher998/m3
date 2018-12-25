import axios from 'axios';
// import {JS__tokenError} from './../assets/methods/index'


function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
}
return(false);
}
let pos = getQueryVariable('pos');


const baseURL_test = 'http://39.106.38.50:12300';
// 正式接口

const baseURL_cn = 'https://api.ono.chat';
const baseURL_en = 'https://api.ono.chat';

// 预发接口
// const baseURL_cn = 'https://test.ono.chat';
// const baseURL_en = 'https://test.ono.chat';
const baseURL = /^http:/.test(window.location.href) ? baseURL_test : (pos ? (pos === 'cn' ? baseURL_cn : baseURL_en) : (baseURL_cn));

const newFetch = axios.create({
    baseURL,
    timeout: 6 * 1000,
});
// 请求拦截
newFetch.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// 访问拦截
newFetch.interceptors.response.use(response => {
    if(response.data.status.code === 403) {
        // JS__tokenError();
        return response;
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error);
});

export default newFetch;
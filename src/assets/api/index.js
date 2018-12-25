import fetch from '@/utils/fetch.js'
import newFetch from '../../utils/newFetch';

/* 
Google recaptcha 获取response
*/
export function getReCHPTCHAResponse ({ action = 'N/A' }) {
  return new Promise((resolve) => {
    grecaptcha.ready(() => {
      console.log('-----------')
      console.log('ready')
      // 在微信编辑器的浏览器 华为自带浏览器中不支持 报错 (.then null)
      // 但是在微信app浏览器中虽然不报错 但也掉不成功
        // try {
          grecaptcha.execute('6Ldel3wUAAAAAIlfTZ-1BOreIsd4m3_tm8k7Y_hD', { action })
          .then(response => {
            console.log('成功')
            resolve(response)
          })
        // } catch (error) {
        //   console.log('失败')
        //   var response = '';
        //   resolve(response)
        // }
    });
  });
};

/** 
 * 
 * type 调用的验证器类型  google  tencent
*/
export function registerByInvite ({invite_uid, account, response, type}) {
  const params = {
    invite_uid, // 邀请人uid
    account, // 被邀请人手机号
    response, // Google验证
    type
  };
  return fetch({
    url: '/api/v1/account/user/register_by_invite',
    method: 'post',
    params
  })
}
/* 
index.html总体信息
@ uid     Int
@ token   String
*/
export function getInviteTotalInfo ({ uid, token }) {
  const params = {
    uid,
    token
  };
  return fetch({
    url: '/api/v1/account/invite/getInviteTotalInfo',
    method: 'get',
    params
  })
}


/* 
查询邀请列表 page2.html
@ uid     用户uid
@ token   用户token
@ level   描述 一级邀请 (1) 二级邀请 (2)
@ offset  偏移量
@ limit   每次查询条数
*/
export function findInviteList({uid, token, level, offset, limit = 10}) {
  const params = {
    uid,
    token,
    level,
    offset,
    limit
  };
  return fetch({
    url: '/api/v1/account/invite/findInviteList',
    method: 'get',
    params
  })
}

/* 
滚动文案接口

*/
export function findInviteInfoList({uid, token, offset = 0, limit = 5, lang = 'cn'}) {
  const params = {
    uid,
    token,
    offset,
    limit,
    lang
  };
  return fetch({
    url: '/api/v1/account/invite/findInviteInfoList',
    method: 'get',
    params
  })
}

// 拉取uid对应的信息
export function getUidInfo (uid) {
  return fetch({
    url: '/api/v1/account/user/get_share_info',
    method: 'get',
    params: {
      uid
    }
  })
}

// 拉去国家码
export function getCountryCode () {
  return newFetch({
    url: '/api/v1/CountryCode/getCountryCode',
    method: 'get',
  })
}

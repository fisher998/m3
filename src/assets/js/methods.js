/**
 * 打开ono底部栏
 */

export function queryShare (type) {
  if(/android/i.test(navigator.userAgent)){
    try{
      window.android.queryShare(type)
    }catch(e){
    }
  } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)){
    try{
      window.webkit.messageHandlers.queryShare.postMessage({type})
    }catch(e){
    }
  }
}

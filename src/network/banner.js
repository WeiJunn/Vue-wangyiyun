import { request } from "./request";

// 获取轮播图信息
export  function getBanner() {
  return request({
    url: '/banner'
  })
}


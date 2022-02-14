// palylist.vue 的数据
import { request } from "./request";


// 获取歌单详情
export function getPlayDetail() {
  return request({
    url:'/playlist/detail',
    params:{
      id:2862916340
    }
  })
}

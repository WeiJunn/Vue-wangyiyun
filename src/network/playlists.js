// palylist.vue 的数据
import { request } from "./request";


// 获取歌单详情
export function getPlayDetail(id) {
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}

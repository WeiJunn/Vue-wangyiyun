import { request } from "./request";

//推荐歌单数据
export function getRecommendList() {
  return request({
    url: '/personalized',
    params: {
      limit: 20
    }
  })
}




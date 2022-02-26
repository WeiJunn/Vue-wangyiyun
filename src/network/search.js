import { request } from "./request";

export function getSearch(config) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords: config.keywords,
      limit: config.limit,
      type: config.type,
      offset: config.offset,
    }
  })
}


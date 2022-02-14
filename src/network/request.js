import  axios  from "axios";

export function request(config) {
    // 创建axios实例
    const intance = axios.create({
      // baseURL: 'http://catbk.cn:3000',
      baseURL: 'http://localhost:3000/',
      //  baseURL: 'https://autumnfish.cn',
      timeout: 5000,
      // 跨域是否带token
      withCredentials: true,
    });
   return intance(config)
}



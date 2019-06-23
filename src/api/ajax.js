import axios from "axios";
import { Message } from "element-ui";
//import store from "@/store";
import { dict } from "@/utils/base.js";

// 跨域cookie头
//axios.defaults.withCredentials = true

//让web服务器识别form的post的请求
//axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded;charset=UTF-8";

//axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
//axios.defaults.headers.common['Token'] = "mm";

// 创建axios实例
const ajax = axios.create({
  baseURL: dict.API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //token: "mm"
  }
});
//在实例创建后改变默认值
//ajax.defaults.headers.common ['Authorization'] = "nn";

// 添加请求拦截器
ajax.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    Message({
      showClose: true,
      message: "调用接口错误:" + error,
      type: "error"
    });
    console.log("发送请求错误:", error);
    return Promise.reject(error);
  }
);
// 添加响应拦截器
ajax.interceptors.response.use(
  function(response) {
    if (response.status != 200) {
      Message({
        showClose: true,
        message: "与服务器连接失败，错误码" + response.status,
        type: "error"
      });
    } else {
      return response;
    }
    // if (response.data.code == 3) {
    //   store.dispatch("loginOut").then(() => {
    //     location.reload();
    //   });
    // }
  },
  function(error) {
    // 对响应错误做点什么
    // Message({
    //   message: "服务器返回错误:" + error,
    //   type: "error",
    //   duration: 1
    // });
    console.log("服务器返回错误:", error);
    return Promise.reject(error);
  }
);
export default ajax;

//全局变量
var API_URL = process.env.BASE_API + process.env.BASE_WORKAPP_API;
API_URL = "http://localhost:3000/api";
var IMAGEL_URL = "https://jsonplaceholder.typicode.com/posts/";
var BASE_TABLE_PAGE = 1;
var BASE_TABLE_SIZE = 10;
var IMAGEL_TYPE = "image/jpeg";
var IMAGEL_SIZE = 1024 * 1024 * 2;

var dict = {
  //全局字典
  API_URL: API_URL, //API具体路径
  IMAGEL_URL: IMAGEL_URL, //图片上传路径
  BASE_TABLE_PAGE: BASE_TABLE_PAGE,
  BASE_TABLE_SIZE: BASE_TABLE_SIZE,
  IMAGEL_TYPE: IMAGEL_TYPE,
  IMAGEL_SIZE: IMAGEL_SIZE,

  //loading参数
  loadFullscreen: {
    lock: true,
    text: "加载数据,请稍等...",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  },

  INTER_ZHOU: [
    {
      pid: 0,
      id: 1,
      label: "亚洲",
      value: "AS",
      py: "Y"
    },
    {
      pid: 0,
      id: 2,
      label: "欧洲",
      value: "EU",
      py: "O"
    },
    {
      pid: 0,
      id: 3,
      label: "北美洲",
      value: "NA",
      py: "B"
    },
    {
      pid: 0,
      id: 4,
      label: "南美洲",
      value: "SA",
      py: "N"
    },
    {
      pid: 0,
      id: 5,
      label: "非洲",
      value: "AF",
      py: "F"
    },
    {
      pid: 0,
      id: 6,
      label: "大洋洲",
      value: "OC",
      py: "D"
    },
    {
      pid: 0,
      id: 7,
      label: "南极洲",
      value: "AN",
      py: "N"
    }
  ],

  ENABLE_MODE: [
    {
      label: "启用",
      value: 0
    },
    {
      label: "停用",
      value: 1
    }
  ]
};
//console.log("window: ", window);
// if (process.env.NODE_ENV == "development") {
//   dict = Object.assign(dict, window.DEV_CONFIG);
// }
// if (process.env.NODE_ENV == "production") {
//   //发布时，用public中的config.js声明的全局变量 覆盖API路径
//   dict = Object.assign(dict, window.PRO_CONFIG);
// }
import utils from "@/utils/utils";
export { utils, dict };

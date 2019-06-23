//import XLSX from "xlsx";
export default {
  exportExcel({ data, sheetName, fileName }) {
    console.log("XLSX",XLSX)
    var ws = XLSX.utils.json_to_sheet(data, { skipHeader: true });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  },

  downloadFile(fileName, url) {
    var iframe = document.getElementById("downloadiframe");
    iframe = iframe ? iframe : document.createElement("iframe");
    iframe.id = "downloadiframe";
    iframe.src = url;
    iframe.addEventListener("load", function() {
      iframe.remove();
    });
    document.body.appendChild(iframe);
  },
  timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var D = date.getDate() + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
  },
  callResponse(vm, res) {
    vm.loading = false;
    if (res.data.code == 0) {
      vm.$emit("success");
      vm.$emit("end");
      vm.$message({ message: res.data.msg, type: "success" });
    } else {
      vm.$message({ message: res.data.msg, type: "error" });
    }
  },
  getTreesInList(data) {
    let dictX = {};
    let root = [];
    let childrens = data.filter(item => {
      item.children = [];
      dictX[item.id] = item;
      if (item.pid == 0) {
        root.push(item);
        return false;
      } else {
        return true;
      }
    });
    childrens.map(item => {
      dictX[item.pid].children.push(item);
    });
    //console.log(root);
    return root;
  },
  compareSort(property) {
    return function(a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
    };
  },
  //返回比较两个数组不同的值
  getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function(v, i, arr) {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
  },
  //返回两个数组相同的值
  getArrEqual(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] === arr2[i]) {
          newArr.push(arr1[j]);
        }
      }
    }
    return newArr;
  },
  browserStr: function() {
    return navigator.userAgent;
  },
  browserType: function() {
    //只返回浏览器名称
    if (this.browserStr().match("Chrome")) {
      return "Chrome";
    } else if (this.browserStr().match("Firefox")) {
      return "Firefox";
    } else if (this.browserStr().match("MSIE")) {
      return "IE";
    } else if (this.browserStr().match("Safari")) {
      return "Safari";
    } else if (this.browserStr().match("Opera")) {
      return "Opera";
    }
  },
  browserVersion: function() {
    //返回浏览器名称和版本号,如：["Chrome/31.0.1650.63"]，是一个数组类型
    var regChrome = /chrome\/[\d.]+/gi;
    var regFF = /firefox\/[\d.]+/gi;
    var regIE = /msie [\d.]+;/gi;
    var regSafari = /safari\/[\d.]+/gi;
    var regOpera = /Opera\/[\d.]+/gi;
    switch (this.browserType()) {
      case "Chrome":
        return this.browserStr().match(regChrome);
        break;
      case "Firefox":
        return this.browserStr().match(regFF);
        break;
      case "IE":
        return this.browserStr().match(regIE);
        break;
      case "Safari":
        return this.browserStr().match(regSafari);
        break;
      case "Opera":
        return this.browserStr().match(regOpera);
        break;
      default:
        return "我的天呐~~~,您这是啥浏览器啊???该换个浏览器了!!!";
    }
  },
  /**
   * 生成随机len位数字
   */
  randomLenNum(len, date) {
    let random = "";
    random = Math.ceil(Math.random() * 100000000000000)
      .toString()
      .substr(0, typeof len === "number" ? len : 4);
    if (date) random = random + Date.now();
    return random;
  },
  /**
   * 转换时间为20190801
   * @param {*} date
   */
  formatDatetoYMD(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + m + d;
  },
  /**
   * 日期格式化
   * @param d 日期
   * @param fmt 目标格式 如：yyyy-MM-dd
   * @returns {*}
   * @constructor
   */
  DatetoFormat(d,fmt) { //author: meizz
    var o = {
      "M+": d.getMonth() + 1, //月份
      "d+": d.getDate(), //日
      "h+": d.getHours(), //小时
      "m+": d.getMinutes(), //分
      "s+": d.getSeconds(), //秒
      "q+": Math.floor((d.getMonth() + 3) / 3), //季度
      "S": d.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  /**
   * 判断非空
   * @param val
   * @returns {boolean}
   */
  isEmpty(val){
    val = $.trim(val);
    if(val == null){
      return true;
    }
    if(val == undefined || val == 'undefined'){
      return true;
    }
    if(val == ""){
      return true;
    }
    if(val.length == 0){
      return true;
    }
    if(!/[^(^\s*)|(\s*$)]/.test(val)){
      return true;
    }
    return false;
  }
};

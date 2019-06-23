export default {
  required: {
    trigger: "change",
    required: true,
    message: "必填项，必须填写/选择该项！"
  },
  decimal() {
    var reg = /^([1-9]\d*|0)(\.\d*)?$/;
    var msg = "请填写正确的小数格式";
    return {
      trigger: "change",
      validator: (rule, value, callback) => {
        if (!reg.test(value)) {
          callback(new Error(msg));
          return false;
        }
        callback();
      }
    };
  },
  length({ min, max }) {
    var isMaxUndefined = max === undefined;
    var isMinUndefined = min === undefined;
    min = min || 0;
    max = max || 999;
    var msg = `长度不能小于${min}大于${max}个字符`;
    if (isMaxUndefined) {
      msg = `长度不能小于${min}个字符`;
    }

    if (isMinUndefined) {
      msg = `长度不能大于${max}个字符`;
    }

    return {
      min: min,
      max: max,
      message: msg,
      trigger: "change"
    };
  }
};

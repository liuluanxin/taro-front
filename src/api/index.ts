import Taro from "@tarojs/taro";

export default {
  request(option, method = "GET") {
    return Taro.request({
      ...option,
      method,
      header: {
        "content-type": "application/json",
        ...option.header,
      },
    });
  },
  get(option) {
    return this.request(option, "GET");
  },
  post(option) {
    return this.request(option, "POST");
  },
  delete(option) {
    return this.request(option, "DELETE");
  },
  put(option) {
    return this.request(option, "PUT");
  },
};

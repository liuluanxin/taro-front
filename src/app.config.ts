export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/dateSelect/index",
    "pages/login/index",
    "pages/register/index",
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "static/img/tabbar/home.png",
        selectedIconPath: "static/img/tabbar/homeactive.png",
      },
      {
        pagePath: "pages/dateSelect/index",
        text: "查询",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});

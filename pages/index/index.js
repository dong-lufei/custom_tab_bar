// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    
    // 整个自定义导航页面头部高度
    navbarHeight:getApp().globalData.statusBarHeight + getApp().globalData.navBarHeight,
  },

  toOther() {
    console.log("toOther");
    wx.navigateTo({
      url: '../other/other'
    })
  },
  onLoad() {
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0 // 相对应的 tabBar 索引
      })
    }
  },
  onRouteDone() {
    console.log("【index-onRouteDone】");
  },
  
})

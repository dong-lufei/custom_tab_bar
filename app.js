// app.js
App({
  globalData: {
    userInfo: null,
    statusBarHeight: 0,
    navBarHeight: 0,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })

    //自定义导航栏 获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    wx.getSystemInfo({
      success: (res) => {
        // 基础库 2.1.0 开始支持wx.getMenuButtonBoundingClientRect()，低版本需要适配
        const custom = wx.getMenuButtonBoundingClientRect()
        // console.log('状态栏高度', res.statusBarHeight)
        // console.log('右上角胶囊按钮的高度', custom.height)
        // console.log('右上角胶囊按钮的上边界坐标', custom.top)

        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.navBarHeight = custom.height + (custom.top - res.statusBarHeight) * 2
      }
    })
  },
  onRouteDone() {
    console.log("App-onRouteDone】");
  }
})

// logs.js
import { formatTime } from '../../utils/util.js'

Page({
  data: {
    logs: [],
    // 给自定义导航栏标签设置高度
    navbarHeight: getApp().globalData.statusBarHeight + getApp().globalData.navBarHeight,
    // 传给自定义导航栏组件的导航标题
    navbarTitle: '我是覆盖自定义居中标题啦啦啦',
    // 传给自定义导航栏组件，启用返回图标
    navBackShow: 1,
    // 传给自定义导航栏组件，返回箭头的图标地址
    navBackSrc: '/static/back.svg',
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2 // 相对应的 tabBar 索引
      })
    }
  },
  // 导航栏返回图标的事件
  _goBack() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onRouteDone() {
    console.log("【logs-onRouteDone】");
  },
})
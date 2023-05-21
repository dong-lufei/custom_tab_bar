// pages/app/app.js

Page({
  data: {
    selectedIndex: 0,
    tabbarHeight: 110,
    tabbarBackgroundColor: "#fff",
    isIphoneX: false,
    tabbarShow: true,
    tabbarItems: [
      {
        iconPath: "https://lh1.hetaousercontent.com/img/3802da1d52f94f60.jpg?thumbnail=true",
        selectedIconPath: "https://lh1.hetaousercontent.com/img/469be48700ef6ea5.jpg?thumbnail=true",
        text: "第一页"
      },
      {
        iconPath: "https://lh1.hetaousercontent.com/img/6285e89909a8c421.jpg?thumbnail=true",
        selectedIconPath: "https://lh1.hetaousercontent.com/img/1dfecc41106fe48c.jpg?thumbnail=true",
        text: "第二页"
      },
      {
        iconPath: "https://lh1.hetaousercontent.com/img/1e9e0d55da39bc73.jpg?thumbnail=true",
        selectedIconPath: "https://lh1.hetaousercontent.com/img/2483d968de46362f.jpg?thumbnail=true",
        text: "第三页"
      }
    ]
  },

  onLoad() {
    // 判断是否为iPhone X等刘海屏手机
    let isIphoneX = false;
    wx.getSystemInfo({
      success: function (res) {
        if (res.model.indexOf('iPhone X') != -1 || res.model.indexOf('iPhone 11') != -1) {
          isIphoneX = true;
        }
      }
    });
    this.setData({
      isIphoneX: isIphoneX
    })
  },

  handleTabbarChange(e) {
    const index = e.detail.index;
    this.setData({
      selectedIndex: index
    })
    // 动态改导航栏标题文字内容
    wx.setNavigationBarTitle({
      title: ["第1页", "第2页", "第3页"][index]
    })
  }
})

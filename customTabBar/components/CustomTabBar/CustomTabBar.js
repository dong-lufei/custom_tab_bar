// components/CustomTabBar/CustomTabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // tabbar的高度
    height: {
      type: Number,
      value: 110
    },
    // tabbar的背景色
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    // 是否为iphone X等刘海屏手机
    isIphoneX: {
      type: Boolean,
      value: false
    },
    // 是否显示tabbar
    show: {
      type: Boolean,
      value: true
    },
    // tabbar的items，包含每个 item 的icon、text和selectedIcon
    items: {
      type: Array,
      value: []
    },
    // 当前选中的item的索引
    selectedIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e) {
      let index = e.currentTarget.dataset.index;
      if (this.data.selectedIndex != index) {
        this.setData({
          selectedIndex: index
        })
        this.triggerEvent("change", { index: index }, {})
      }
    }
  }
})

// components/custom-nav-bar/index.js

Component({
  // multipleSlots 为组件开启多插槽模式
  // options: {
  //   multipleSlots: true,
  //   styleIsolation: "apply-shared"
  // },
  // externalClasses 为组件指定多个外部样式类
  externalClasses: ['outer-nav-bgc', 'outer-nav-title', 'outer-back'],
  // properties 组件用来储存外部数据
  properties: {
    // 导航栏中间的标题
    navbarTitle: {
      type: String,
      value: '默认的自定义居中标题',
    },
    // 是否显示左上角图标，1表示显示，0表示不显示
    navBackShow: {
      type: Number,
      value: 0,
    },
    // 返回键的图标地址
    navBackSrc: {
      type: String,
      value: 'https://ts1.cn.mm.bing.net/th/id/R-C.1c75c181f8db8be0253c38eedecb8da3?rik=BrOhfIzw7D0Haw&riu=http%3a%2f%2fyuansu.gzhjida.com%2fwxws%2fimg%2ficon_arrow_left.png&ehk=lWLCwBsYYHRG%2fxEs7GC4kF%2fGbDW2zAZBsZOo5NDX2bo%3d&risl=&pid=ImgRaw&r=0',
    },
    // observer: function (newVal, oldVal) { }
  },

  // 组件用来储存内部私有数据
  data: {
    // 自定义导航栏的高度
    statusBarHeight: getApp().globalData.statusBarHeight,
    navBarHeight: getApp().globalData.navBarHeight
  },
  // attached函数 当组件进入页面节点树时触发，可以使用setData，绝大多数初始化工作在这个时机进行
  // attached: function () { },
  // methods对象 定义组件内的各种方法
  methods: {
    // 返回键，触发自定义事件，将返回的事件交给父级页面来分情况定义
    _navback() {
      this.triggerEvent('goBack')
    }
  }
})
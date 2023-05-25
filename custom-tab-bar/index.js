// custom-tab-bar/index.js
Component({
	/**
	 * 组件的初始数据
	 */
	data: {
		selected: 0, // 选中的索引
		color: "#7A7E83", // 未选中的文本颜色
		selectedColor: "#3cc51f", // 选中的文本颜色
		// 自定义的底部 tabBar 信息
		list: [{
			pagePath: "/pages/index/index", // 页面文件路径
			iconPath: "https://lh1.hetaousercontent.com/img/3802da1d52f94f60.jpg?thumbnail=true",
			selectedIconPath: "https://lh1.hetaousercontent.com/img/469be48700ef6ea5.jpg?thumbnail=true",
			text: "第1页" // 页面导航栏标题文字内容
		}, {
			pagePath: "/pages/second/second",
			iconPath: "https://lh1.hetaousercontent.com/img/6285e89909a8c421.jpg?thumbnail=true",
			selectedIconPath: "https://lh1.hetaousercontent.com/img/1dfecc41106fe48c.jpg?thumbnail=true",
			text: "第2页"
		},
		{
			pagePath: "/pages/logs/logs",
			iconPath: "https://lh1.hetaousercontent.com/img/1e9e0d55da39bc73.jpg?thumbnail=true",
			selectedIconPath: "https://lh1.hetaousercontent.com/img/2483d968de46362f.jpg?thumbnail=true",
			text: "第3页"
		}]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path

			wx.switchTab({ url })
			console.log("switchTab",data.index);
			this.setData({
				selected: data.index
			})
			console.log("this.selected",this.data.selected);

		}
	}
})

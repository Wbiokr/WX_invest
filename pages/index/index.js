Page({
  data: {

    tabs: [
      {
        name: '旅行',
        path: '/pages/travel/index',
      },
      {
        name: '相册',
        path: '/pages/photo/index',
      },
      {
        name: '音乐',
        path: '/pages/music/index',
      }
    ],
    height: getApp().globalData.height,
  },
  
  jumpToTarget(e) {
    wx.navigateTo({
      url: e.target.dataset.item.path,
    })
  }
})
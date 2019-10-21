
const app = getApp();

Page({
  data: {
    height: app.globalData.height,
    provinceList: app.globalData.provinceList,
    index: 11,
  },

  onLoad() {
    console.log(this.data.height)
  }
})
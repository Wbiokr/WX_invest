import provinceList from './data/province';

App({
  // 全局变量
  globalData: {
    height: 0,
    width: 0, 
    provinceList,
  },
  onLaunch() {
    this.setSize();
  },
  setSize() {
    this.globalData = {
      ...this.globalData,
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth,
    }
  }
})
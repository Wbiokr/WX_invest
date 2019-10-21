Page({
  // 
  data: {

  },
  onLanch(){
    console.log(1212)
    wx.login({
      success: res => {
        console.log(res)
      }
    })
  }
})
Page({
  data: {
    height: getApp().globalData.height,
  },  
  onLoad(){
    wx.login({
      success: function(res){
        console.log(res)
      },
      fail: function() {
        // fail
        console.log('fail')
      },
      complete: function() {
        // complete
      }
    })
  }
})
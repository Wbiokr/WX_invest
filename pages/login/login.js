Page({
  data: {
    username:'',
    password:'',
    isLoading:false,
  },
  login(e){
    if(this.data.username==''){
      wx.showToast({
        title:'用戶名不能为空！',
        icon:'none',
        duration:2000,
      })
      return ;
    }

    if(this.data.password==''){
      wx.showToast({
        title:'密码不能为空！',
        icon:'none',
        duration:2000,
      })
      return ;
    }

    this.setData({isLoading:true})

    wx.showLoading({
      title:'登录中...',
      mask:true,
      fail(){
        this.setData({isLoading:false})
      }
    })

    setTimeout(()=>{
      wx.hideLoading()
      this.setData({isLoading:false})
      if(this.data.username!=='ccc'){
        wx.showToast({
          title:'用户名不正确',
          icon:'none'
        })
        return ;
      }
      if(this.data.password!=='2436'){
        wx.showToast({
          title:'密码不正确',
          icon:'none'
        })
        return ;
      }

      // wx.showModal({
      //   title:'登录成功',
      //   content:'去list页面？',
      //   showCancel:true,
      //   cancelText:'cancel',
      //   cancelColor:"gray",
      //   confirmText:'OK',
      //   confirmColor:"green",
      //   success(res){
      //     console.log(res)
      //   }
      // })

      wx.showActionSheet({
        itemList:['to list','to add','cancel'],
        itemColor:'green',
        success(res){
          switch(res.tapIndex){
            case 0:
              wx.switchTab({url:'../list/list'});
              break ;
            case 1:
              wx.switchTab({url:'../add/add'});
              break ;
            default :
              break;
          }
        }
      })      

    },1300)
    
  },
  updateUsername(e){
    
    const username=e.detail.value;

    this.setData({
      username
    })
  },
  updatePassword(e){
    const password=e.detail.value;

    this.setData({
      password
    })
  },
  onLoad: function (options) {
    console.log('登录页')
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})
const format = require('../../utils/format.js')
const {api} = require('../../utils/config')
const {formatParams}= require('../../utils/format')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
         
      },{},{},{},{}
    ],
    page:1,
    size:6,
    isLoading:false,
    isLoadingMore:false,
    isOut:false,
    height:'2000rpx'
  },

  formatDate:format.formatDate,



  getCashList(cb,bf){
    if(this.data.isOut){return ;}
    if(this.data.isLoading){return ;}
    this.setData({
      isLoading:true
    })
    bf&&bf()
    wx.request({
      url:`${api}invest/record`,
      method:'post',
      data:{
        page:this.data.page,
        size:this.data.size,
      },
      dataType:'json',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        const list=this.data.page==1?res.data.data:this.data.list.concat(res.data.data);
        const isOut=res.data.data.length<this.data.size?true:false;
        const {totalBag,totalBagUnit,totalCash,totalCashUnit,totalRate,totalRateUnit} = res.data;
        this.setData({
          list,
          isOut,
          totalBag,
          totalBagUnit,
          totalCash,
          totalCashUnit,
          totalRate,
          totalRateUnit,
          page:this.data.page+1,
        });
        
      },
      complete:()=>{
        cb&&cb()
        setTimeout(()=>{
          this.setData({isLoading:false})
        },10)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({title:'loading'})
    wx.showNavigationBarLoading()
    wx.showLoading({
      title:'请求数据中...'
    })
    
    this.getCashList(()=>{
      wx.hideNavigationBarLoading();
      wx.hideLoading();
      wx.setNavigationBarTitle({title:'list'})
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
    
    this.getCashList(()=>{
      wx.stopPullDownRefresh()
      wx.hideLoading()
    },()=>{
      this.setData({
        page:1,
        isOut:false,
      });
      wx.startPullDownRefresh()
      wx.showLoading({
        title:'下拉刷新...'
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.lower()
  },

  lower(){
    console.log('fsfs')
    this.setData({
      isLoadingMore:true
    })
    this.getCashList(()=>{
      this.setData({
        isLoadingMore:false,
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
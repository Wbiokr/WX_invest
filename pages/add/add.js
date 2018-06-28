const {api} = require('../../utils/config')

Page({
  data:{
    name:'',
    cash:'',
    rateAll:'',
    rateHas:'',
    startTime:'',
    duration:30,
    phone:'',
    card:'',
    arrPhone:[
      {name:'8960',color:'#1aad19'},
      {name:'2939',color:'#1aad19'},
    ],
    arrCard:[
      {name:'8733',color:'#1aad19'},
      {name:'5728',color:'#1aad19'},
    ],
    visiblePhone:false,
    visibleCard:false,
    isLoading:false,
    visibleUpdate:false,
  },
  update(){
    this.setData({
      visibleUpdate:false,
    })
    this.addInvestItem(true)
  },
  cancelUpdate(){
    this.setData({
      visibleUpdate:false
    })
  },
  addInvestItem(isUpdate=false){

    if(this.data.isLoading){
      return ;
    }
    const data={isUpdate}
    if(!this.data.name){
      wx.showToast({title:'请输入正确name',icon:'none'});
      return ;
    }   
    data.name=this.data.name;
    if(!this.data.cash){
      wx.showToast({title:'请输入正确的cash',icon:'none'});
      return ;
    }
    data.cash=this.data.cash;
    if(!this.data.rateAll){
      wx.showToast({title:'请输入正确的rateAll',icon:'none'});
      return ;
    }
    data.rateAll=this.data.rateAll
    if(!this.data.rateHas){
      wx.showToast({title:'请输入正确的rateHas',icon:'none'});
      return ;
    }
    data.rateHas=this.data.rateHas;
    if(!this.data.startTime){
      wx.showToast({title:'请输入正确的startTime',icon:'none'});
      return ;
    }
    data.startTime=new Date(this.data.startTime).getTime();
    if(!this.data.duration){
      wx.showToast({title:'请输入正确的duration',icon:'none'});
      return ;
    }
    data.duration=this.data.duration;
    if(!this.data.phone){
      wx.showToast({title:'请输入正确的phone',icon:'none'});
      return ;
    }
    data.phone=this.data.phone;
    if(!this.data.card){
      wx.showToast({title:'请输入正确的card',icon:'none'});
      return ;
    }
    data.card=this.data.card;
    this.setData({isLoading:true})

    wx.request({
      url:`${api}invest/edit`,
      method:'post',
      data,
      dataType:'json',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:(res)=>{
        console.log(res)
        const data=res.data;
        if(data.code==1){
          wx.showToast({title:data.msg,icon:'none'})
        }else if(data.code==-1){
          wx.showToast({title:data.msg,icon:'none',duration:500})
          setTimeout(()=>{
            this.setData({
              visibleUpdate:true
            })
          },500)
        }
      },
      error(err){
        // wx.showToast({})
      },
      complete:()=>{
        this.setData({isLoading:false})
      }
    })
  },
  changeName(e){
    console.log(e)
    this.setData({
      name:e.detail.detail.value
    })
  },
  changeCash(e){
    this.setData({
      cash:e.detail.detail.value
    })
  },
  changeRateAll(e){
    console.log(e)
    this.setData({
      rateAll:e.detail.detail.value
    })
  },
  changeRateHas(e){
    this.setData({
      rateHas:e.detail.detail.value
    })
  },
  changeDur(e){
    this.setData({
      duration:e.detail.value,
    })
  },
  changeDate(e){
    this.setData({
      startTime:e.detail.value
    })
  },
  selectPhone(e){
    this.setData({
      phone:this.data.arrPhone[e.detail.index].name,
      visiblePhone:false,
    })
  },
  selectCard(e){
    this.setData({
      card:this.data.arrCard[e.detail.index].name,
      visibleCard:false,
    })
  },
  togglePhone(){
    this.setData({
      visiblePhone:true
    })
  },
  toggleCard(){
    this.setData({
      visibleCard:true
    })
  },
  cancel(e){
    const key=e.target.id;
    this.setData({
      [key]:false
    })
  }
})
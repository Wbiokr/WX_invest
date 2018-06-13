App({

  onLaunch: function (params) {
    console.log('launch',params)
  },

  onShow: function (options) {
    console.log('show',options)
    this.hello()
  },

  onHide: function () {
    console.log('hide')    
  },

  onError: function (msg) {
    console.log(`err:${msg}`)    
  },

  onPageNotFound(options){
    console.log(`404:${options}`)
  },

  hello(){
    console.log('hello world !')
  }
})

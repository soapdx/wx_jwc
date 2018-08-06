var app = getApp()
Page({

  data: {
    stuInfo: null
  },

  onLoad: function (options) {
    if(app.appData.userinfo == null ){
      wx.redirectTo({
        url: '../login/login',
      })
    }else{
       this.setData({stuInfo : app.appData.userinfo})
    }
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

})
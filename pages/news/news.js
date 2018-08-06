var app = getApp()
Page({
  data: {
    news:null,
  },

  onLoad: function (options) {
    var thispage = this;
    wx.request({
      url: 'http://www.littlerain.cn:5000/news',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        thispage.setData({news: res.data})
      }
    })
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

})
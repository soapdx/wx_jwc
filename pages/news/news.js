var app = getApp()
Page({
  data: {
    news:null,
  },
  onLoad: function (options) {
    var thispage = this;
    wx.request({
      url: 'https://www.littlerain.cn/news',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      method: "GET",
      success: function (res) {
        //console.log(res.data)
        thispage.setData({news: res.data})
      }
    })
  },

  onPullDownRefresh: function () {
  
  },

  jumpToDetail: function(event){
    var id =null;
    wx.navigateTo({
      url: '../newsdetail/newsdetail?id={{id}}',
    })
  }



})
var WxParse = require('../../wxParse/wxParse.js');
Page({
  
  data: {
  title:null,
  date:null,
  url:null
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      url: options.type,
    });
    
    var article = null;
    //console.log(that.data.url)
    wx.request({
      url: 'https://www.littlerain.cn/newsdet',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      method: "POST",
      data: "urll=" + that.data.url,
      success: function (res) {
        console.log(res.data[2])
        article = res.data[2]
        that.setData({ title: res.data[0]})
        that.setData({ date: res.data[1] })
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })

    
  },

})
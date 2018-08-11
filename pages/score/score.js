var app = getApp()
Page({

  data: {
    score:null
  },

  getStudentScore: function (id, pwd) {
    var that = this
    wx.request({
      url: 'https://www.littlerain.cn/score',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      method: "POST",
      data: "id=" + id + "&pwd=" + pwd,
      success: function (res) {
        that.setData({score:res.data})
      }
    })
  }, 

  onLoad: function (options) {
    if (app.appData.userinfo == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      this.setData({ stuInfo: app.appData.userinfo })
      this.getStudentScore(app.appData.username, app.appData.password)
    }
  },
  
})
//app.js
App({
  appData: {
    username: null,
    password: null,
    userinfo: null,
  },

  getStudentInfo:function(id,pwd,cb){
    var that = this
    wx.request({
      url: 'https://www.littlerain.cn/info', 
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      method:"POST",
      data:"id="+id+"&pwd="+pwd,
      
      success: function (res) {
        that.appData.username = id
        that.appData.password = pwd
        cb(res.data)
      }
    })
  }, 

  

})
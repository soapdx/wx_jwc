//app.js
App({
  appData: {
    username: null,
    password: null,
    userinfo: null,
  },

  getStudentInfo:function(id,pwd,cb){
    wx.request({
      url: 'http://www.littlerain.cn:5000/info', 
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      method:"POST",
      data:"id="+id+"&pwd="+pwd,
      
      success: function (res) {
        cb(res.data)
      }
    })
  }, 

  

})
var app = getApp()
Page({
  data:{
    id:null,
    pwd:null,
    stuInfo:null
  },

  btnClick: function () {
    var thispage = this;
    console.log(this.data)
    app.getStudentInfo(this.data.id,this.data.pwd,function(data){
      thispage.setData({stuInfo:data})
      app.appData.userinfo = {data}
      wx.navigateBack()
    });
    
    
  },

  id: function (e) {
    this.setData({id:e.detail.value})
  },
  pwd: function (e) {
    this.setData({pwd:e.detail.value})
  }

})

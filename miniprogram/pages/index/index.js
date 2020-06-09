const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  getData(){
    //查询数据
    db.collection("demolist").get().then(res=>{
      console.log(res)
      }).catch(err=>{

      })
    db.collection("demolist").where({
      author:"作者"
    }).get()
    .then(res=>{
      console.log(res)
    })
  },
  addData(){
    //新增数据
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
    //这一步用于放止用户一直点击
    db.collection("demolist").add({
      data:{
        title : "测试标题2",
        author : "李四",
        content : "测试内容2"
      }
    }).then(res=>{
      console.log(res)
      wx.hideLoading()
    })
  },
  btnSub(res){
    // var title = res.detail.value.title;
    // var author = res.detail.value.author;
    // var content = res.detail.value.content;
    // db.collection("demolist").add({
    //   data : {
    //     title : title,
    //     author :author,
    //     content : content
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })
    var resVlu = res.detail.value;
    db.collection("demolist").add({
      data:resVlu
    }).then(res=>{
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  
})
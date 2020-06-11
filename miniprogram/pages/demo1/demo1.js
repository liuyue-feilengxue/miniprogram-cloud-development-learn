// pages/demo1/demo1.js
const db = wx.cloud.database();
var delateId = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  updateData(){
    db.collection("demolist").doc("f2a60d815edf897a00727b77257d4935").update({
      data : {
        author:"作者"
      }
    }).then(res=>{
      console.log(res)
    })
  },
  delateBtn(){
    db.collection("demolist").doc(delateId).remove()
    .then(res=>{
      console.log(res)
    })
  },
  delateData(res){
    var Ipt=res.detail.value;
    delateId = Ipt
  },
  getData(){
    db.collection("demolist").get()
    .then(res=>{
      this.setData({
        dataArr : res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    db.collection("demolist").watch({
      onChange:function(res){
        console.log(res.docs)
        //this.setData({
          dataArr : res.docs
        //})
      },
      onError:function(err){
        console.log(err)
      }
    })
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

  }
})
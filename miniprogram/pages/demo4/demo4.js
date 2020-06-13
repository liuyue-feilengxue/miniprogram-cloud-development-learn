// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },
  getData(num=5,page=0){//默认不传的时候，num为5，page为0
    wx.cloud.callFunction({
      name:"demoGetList",
      data:{
        num:num,
        page:page
      }
    }).then(res=>{
      // console.log(res.result.data)
      var oldData = this.data.dataList
      var newData = oldData.concat(res.result.data)
      this.setData({
        dataList:newData
      })
    })
  },
  //点击数值增加
  clickRow(res){
    // 1 获取点击的_id和索引值（完成）
    // 2 云函数更新
    //  3 前端连后端
    // 4 重新渲染数据
    // console.log(res.currentTarget.dataset)
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
    var {id,idx} = res.currentTarget.dataset
    wx.cloud.callFunction({
      name:"demoUpList",
      data:{
        id:id
      }
    }).then(res=>{
      var rowData = this.data.dataList
      rowData[idx].readcount += 7;
      this.setData({
        dataList:rowData
      })
      wx.hideLoading()
      wx.showToast({
        title: '数据加载完成',
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    var page = this.data.dataList.length
    this.getData(5,page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
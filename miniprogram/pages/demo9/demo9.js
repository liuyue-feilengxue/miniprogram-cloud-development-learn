// pages/demo9/demo9.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeks_ch:["日","一","二","三","四","五","六"],
    days:[],
    signUp:[],
    cur_year:0,
    cur_month:0,
    cur_day:0,
    count:0,
    selectDate: {
      'year': new Date().getFullYear(),
      'month': new Date().getMonth() + 1,
      'date': new Date().getDate(),
    },
    // 日期list 
    calendarDays: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMonthDaysCurrent(new Date());
  },
    // 所选时间对应月份日期
    getMonthDaysCurrent(e) {
      let year = e.getFullYear()
      let month = e.getMonth() + 1
      let date = e.getDate()
      let day = e.getDay() // 周几
      let days = new Date(year, month, 0).getDate() //当月天数(即下个月0号=当月最后一天)
  
      let firstDayDate = new Date(year, month - 1, 1) // 当月1号
      let firstDay = firstDayDate.getDay() //当月1号对应的星期
  
      let lastDate = new Date(year, month - 1, days) //当月最后一天日期
      let lastDay = lastDate.getDay() //当月最后一天对应的星期
  
      // 更新选择日期
      this.data.selectDate = {
        'year': year,
        'month': month,
        'date': date,
      }
      let calendarDays = []
  
      // 上个月显示的天数及日期
      for (let i = firstDay - 1; i >= 0; i--) {
        let date = new Date(year, month - 1, -i)
        //console.log(date, date.getMonth() + 1)
  
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': false
        })
      }
  
      // 当月显示的日期
      for (let i = 1; i <= days; i++) {
        calendarDays.push({
          'year': year,
          'month': month,
          'date': i,
          'day': new Date(year, month - 1, i).getDay(),
          'current': true,
          'selected': i == date // 判断当前日期
        })
      }
  
      // 下个月显示的天数及日期
      for (let i = 1; i < 7 - lastDay; i++) {
        let date = new Date(year, month, i)
        //console.log(date, date.getMonth() + 1)
  
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': false
        })
      }
      this.setData({
        calendarDays: calendarDays
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
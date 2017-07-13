// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardno: '',
    bankname: '',
    startDate: '',
    endDateType: '',
    endDate: ''
  },
  fininsh: function(){
    var item = {}
    item.cardno = cardno
    item.bankname = bankname
    item.startDate = startDate
    item.endDateType = endDateType
    item.endDate = endDate
    var logs = wx.getStorageSync('cards') || []
    logs.unshift(item)
    wx.setStorageSync('cards', logs)
  },
  bindKeyInputCard: function (e) {
    this.setData({
      cardno: e.detail.value
    })
  },
  bindKeyInputName: function (e) {
    this.setData({
      bankname: e.detail.value
    })
  },
  bindKeyInputStart: function (e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  bindKeyInputEnd: function (e) {
    this.setData({
      endDate: e.detail.value
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
  
  }
})
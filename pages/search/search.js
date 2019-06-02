var subjectUtil = require("../../utils/subjectUtil.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    movies: [],
    modalHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**搜索的显示 */
  bindKeyInput: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**搜索的内容方法 */
  search: function() {
    if (this.data.inputVal == "") {
      this.setData({
        modalHidden: false
      });
      return;
    }
    wx.showLoading({
      title: '加载中...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
    var page = this;
    wx.request({
      // url: 'https://douban.uieee.com/v2/movie/search?q=' + page.data.inputVal,
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        'Content-Type': 'json'
      },
      success: function(res) {
        var subjects = res.data.subjects;
        // console.log(subjects)
        subjectUtil.processSubjects(subjects);
        page.setData({
          movies: subjects
        });
        wx.hideLoading();
      }

    })
  },
  /**点击提示框取消按钮 */
  hideModal: function() {
    this.setData({
      modalHidden: true
    })
  },
  /**点击跳转详情页面 */
  // detail: function(e) {
  //   wx.navigateTo({
  //     url: '../detail/detail',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // }
  detail:function(e){
    getApp().detail(e)
  }
})
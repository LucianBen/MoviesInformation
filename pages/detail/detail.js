var subjectUtil=require("../../utils/subjectUtil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.loadMovie();

    this.loadMovie(options.id);
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

  loadMovie:function(){
    var page=this;
    var movieId = wx.getStorageSync("movieId")//拿出movie 的 ID
    //获取数据
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + movieId,
      header: { 'Content-Type': 'json' },
      success: function (res) {
        var subject = res.data;
        console.log(subject)
        subjectUtil.processSubject(subject);
        page.setData({ movie: subject })
      }
    })
    
    
  }
})
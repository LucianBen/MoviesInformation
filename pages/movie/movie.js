Page({

  /**
   * 页面的初始数据
   * https://douban.uieee.com/
   */
  data: {
    imgUrls: [
      '/assets/img/001.jpg',
      '/assets/img/002.jpg',
      '/assets/img/003.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movies: [],
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadMovie();
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

  processSubject(subject) {
    //电影名
    var title = subject.title;
    //导演
    var directors = subject.directors;
    var directorStr = "";
    for (var index in directors) {
      directorStr = directorStr + directors[index].name + " / ";
    }
    if (directorStr != "") {
      directorStr = directorStr.substring(0, directorStr.length - 2);
    }
    //演员
    var casts = subject.casts;
    var castsStr = "";
    for (var index in casts) {
      castsStr = castsStr + casts[index].name + " / ";
    }
    if (castsStr != "") {
      castsStr = castsStr.substring(0, castsStr.length - 2);
    }
    //类型 
    var genres = subject.genres;
    var genresStr = "";
    for (var index in genres) {
      genresStr = genresStr + genres[index] + " / ";
    }
    if (genresStr != "") {
      genresStr = genresStr.substring(0, genresStr.length - 2);
    }
    //年份
    var year = subject.mainland_pubdate;
    //拼接字符串
    var text = "电影名：" + title + "\n导演：" + directorStr + "\n主演：" + castsStr + "\n类型：" + genresStr + "\n上映时间：" + year + "（中国大陆）";
    subject.text = text;
  },

  processSubjects(subjects) {
    for (var i = 0; i < subjects.length; i++) {
      var subject = subjects[i];
      this.processSubject(subject);
    }
  },

  loadMovie: function() {
    var page = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/in_theaters",
      header: {
        'Content-Type': 'application/text'
      },
      success: function(res) {
        console.log(res)
        var subjects = res.data.subjects;
        page.processSubjects(subjects);
        page.setData({
          movies: subjects,
          hidden: true
        });
      }
    })

  }
})
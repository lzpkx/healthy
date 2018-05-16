// pages/flybird/flybird.js

var count1 = 0;
var count2 = 375;
var count3 = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fly();
  },


  Bird:function(){
    this.fly = function(){
      var bird = setInterval(this.changeImg, 100);
    }
  },



  fly:function(){
    var bird =setInterval(this.changeImg,100);
    // this.changeImg();
    // requestAnimationFrame(this.fly);
  },

  changeImg:function(){
    var birdW =[0,60,120,180,240];
    const ctx = wx.createCanvasContext("birdCanvas")
    ctx.drawImage("/images/bg.jpg",  0,0,250,510, -count2, 0,375, 667);
    ctx.drawImage("/images/bg.jpg", 250, 0, 250, 510,count3, 0, 375, 667);
    ctx.drawImage("/images/bird.png", birdW[count1], 0,   60, 58,   count2, 120,   80, 80);
    ctx.drawImage("/images/bird.png", birdW[count1], 0,   60, 58,   150, 50,   70, 70);
    ctx.drawImage("/images/bird.png", birdW[count1], 0,   60, 58,   220, 50,   50, 50);
    ctx.draw();
    count1++;
    count2 -= 5;
    count3 += 5;
    if (count2 <=0) { count2 = 375; count3=0;}
    if(count1>4)count1 = 0;
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
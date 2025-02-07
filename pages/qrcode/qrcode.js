Page({
  data: {
    isLoggedIn: false,
    qrCodeData: '',
    progress: 0
  },
  onLoad() {
    this.checkLoginStatus();
    if (this.data.isLoggedIn) {
      this.generateQRCode();
    }
    setInterval(this.updateProgress, 1000); // 每秒更新进度条
  },
  checkLoginStatus() {
    const isLoggedIn = false; // 模拟用户未登录状态
    this.setData({
      isLoggedIn: isLoggedIn
    });
  },
  generateQRCode() {
    const uniqueId = getUserUniqueId(); // 获取用户唯一识别码
    const currentTime = new Date().toISOString();
    const qrData = encryptData(`${currentTime}-${uniqueId}`); // 加密数据
    this.setData({
      qrCodeData: qrData
    });
  },
  updateProgress() {
    const now = new Date();
    const seconds = now.getSeconds();
    this.setData({
      progress: (seconds / 60) * 100 // 基于当前时间的秒数更新进度
    });
  },
  goToProfile() {
    wx.switchTab({
      url: '/pages/profile/profile'
    });
  }
});

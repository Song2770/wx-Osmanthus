Page({
  data: {
    isLoggedIn: false,
    userInfo: {}
  },
  onLoad() {
    this.checkLoginStatus();
    if (this.data.isLoggedIn) {
      this.loadUserInfo();
    }
  },
  checkLoginStatus() {
    // 检查用户是否登录
    this.setData({
      isLoggedIn: getUserLoginStatus()
    });
  },
  loadUserInfo() {
    // 加载用户信息
    const userInfo = getUserInfo();
    this.setData({
      userInfo
    });
  },
  contactSupport() {
    // 联系客服
    wx.makePhoneCall({
      phoneNumber: '客服号码'
    });
  },
  goToLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  goToRegister() {
    wx.navigateTo({
      url: '/pages/register/register'
    });
  }
}); 
Page({
  data: {
    phone: ''
  },
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  login() {
    // 登录逻辑
    if (this.data.phone) {
      // 假设有一个方法 `loginWithPhone` 进行登录
      loginWithPhone(this.data.phone);
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      wx.navigateBack();
    } else {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
    }
  }
}); 
Page({
  data: {
    nickname: '',
    gender: '',
    wechatId: '',
    phone: '',
    drinkingCapacity: '',
    mbti: '',
    birthday: '',
    zodiac: ''
  },
  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [field]: e.detail.value
    });
  },
  register() {
    // 注册逻辑
    if (this.data.nickname && this.data.phone) {
      // 假设有一个方法 `registerUser` 进行注册
      registerUser(this.data);
      wx.showToast({
        title: '注册成功',
        icon: 'success'
      });
      wx.navigateBack();
    } else {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
    }
  }
}); 
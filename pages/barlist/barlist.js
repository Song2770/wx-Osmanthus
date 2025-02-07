Page({
  data: {
    bars: [
      { name: "霓虹跳舞俱乐部", location: "位置A" },
      { name: "XXXX俱乐部", location: "位置B" },
      { name: "black俱乐部", location: "位置C" }
    ]
  },
  onLoad() {
    this.setBarIcons();
  },
  setBarIcons() {
    const bars = this.data.bars.map(bar => {
      const firstChar = bar.name.charAt(0);
      const gradient = this.getRandomGradient();
      return { ...bar, icon: firstChar, gradient };
    });
    this.setData({ bars });
  },
  getRandomGradient() {
    const colors = ['#e15a9c', '#1e90ff', '#ff6347', '#32cd32', '#ffa500'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  },
  viewDetails(e) {
    const name = e.currentTarget.dataset.name;
    // 查看活动详情逻辑
  },
  viewMap(e) {
    const location = e.currentTarget.dataset.location;
    // 打开地图查看位置
    wx.openLocation({
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name
    });
  },
  callTaxi(e) {
    const location = e.currentTarget.dataset.location;
    // 打开打车应用
    wx.navigateToMiniProgram({
      appId: '打车应用的AppID',
      path: `pages/index/index?location=${location}`
    });
  }
}); 
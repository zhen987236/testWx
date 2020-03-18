//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    message:"hello world",
    array:[1,2,3,4,5],
    view:"orange",
    staffA: { firstName: '王', lastName: 'Hu' },
    staffB: { firstName: '李', lastName: 'You' },
    staffC: { firstName: '赵', lastName: 'Lin' },
    id:'1',
    condition:true,
    Hidden:'我是真的',
    a:'1',
    b: '2',
    c: '3'

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

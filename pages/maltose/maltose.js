Page({
    data: {
      textareaFocus: '#999',
      focus: false,
      emoticon: [],
      tab: [],
      showMaltose: true,
      showEmoticon: false,
      showEmoji: true,
      logoTap: false
    },
    codeTap: function(e) {
      // wx.navigateTo({
      //   url: '../logs/logs',
      //   success: function(res){
      //     console.log('success')
      //   },
      //   fail: function() {
      //     console.log('fail')
      //   }
      // })
    },
    maltoseFocus: function(e) {
      this.setData({
        textareaFocus: 'lightsalmon',
        textareaValue: e.detail.value
      })
    },
    maltoseBlur: function(e) {
      this.setData({
        textareaFocus: '#999'
      })
    },
    bindFormSubmit: function() {
      let show = !this.data.showMaltose
      let logoTap = !this.data.logoTap
      this.setData({
        focus: true,
        showMaltose: show,
        logoTap: logoTap
      })
    },
    chooseTab: function(e) {
      var tab = e.target.id
      for(let i = 0; i < this.data.emoticon.length; i++) {
        var j = Object.keys(this.data.emoticon[i])[0]
        if (tab === j) {
          if (j.indexOf('Emoji') === -1) {
            this.toggle(false, true)
          } else {
            this.toggle(true, false)
          }
        }
      }
    },
    toggle: function(i, j) {
      this.setData({
        showEmoticon: i,
        showEmoji: j
      })
    },
    appendHtml: function(e) {
      if(e.target.id) {
        let newValue = this.data.textareaValue + e.target.id
        this.setData({
          textareaValue: newValue
        })
      }
    },
    onLoad: function() {
      console.log('maltose onload')
      var that = this
      wx.request({
        url: `https://luyilin.github.io/Maltose/demo/maltose2.json`,
        data: {},
        dataType: 'json',
        method: 'GET',
        success: function(res){
          console.log('request success')
          that.setData({
            emoticon: res.data,
            tab: Object.keys(res.data)
          })
        },
        fail: function() {
          console.log('request fail')
        },
        complete: function() {
          // complete
        }
      })
    }
})
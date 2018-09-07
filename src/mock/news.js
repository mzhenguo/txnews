const news = [
  { id: 1, typeId: 1, title: '1习近平会见马来西亚总理1', image: [''], isTop: true, src: '央视新闻网', commentNum: 2548, time: '1小时前' },
  { id: 2, typeId: 1, title: '1微视频 | 22国青年说“一带一路”2', image: [''], isTop: true, src: '人民日报', commentNum: 17632, time: '1小时前' },
  { id: 3, typeId: 1, title: '1山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值3', image: [''], isTop: false, src: '山东商报', commentNum: 879, time: '1小时前' },
  { id: 4, typeId: 1, title: '190后买房全靠60后支持，父母的第一套房子是怎么来的？4', image: [''], isTop: false, src: '上流UpFlow', commentNum: 4215, time: '2小时前' },
  { id: 5, typeId: 1, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀5', image: [''], isTop: false, src: '央视新闻网', commentNum: 65557, time: '2小时前' },
  { id: 6, typeId: 1, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶6', image: [''], isTop: false, src: '央视新闻网', commentNum: 1225, time: '3小时前' },
  { id: 7, typeId: 1, title: '今天，我国再次成功发射两颗北斗卫星7', image: [''], isTop: false, src: '央视新闻网', commentNum: 250, time: '4小时前' },
  { id: 8, typeId: 1, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值8', image: [''], isTop: false, src: '央视新闻网', commentNum: 1234, time: '5小时前' },
  { id: 9, typeId: 1, title: '90后买房全靠60后支持，父母的第一套房子是怎么来的？9', image: [''], isTop: false, src: '央视新闻网', commentNum: 3214, time: '5小时前' },
  { id: 10, typeId: 1, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀10', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '5小时前' },

  { id: 11, typeId: 1, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶11', image: [''], isTop: false, src: '央视新闻网', commentNum: 55544, time: '6小时前' },
  { id: 12, typeId: 1, title: '今天，我国再次成功发射两颗北斗卫星12', image: [''], isTop: false, src: '央视新闻网', commentNum: 87774, time: '6小时前' },
  { id: 13, typeId: 1, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值13', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '6小时前' },
  { id: 14, typeId: 1, title: '90后买房全靠60后支持，父母的第一套房子是怎么来的14', image: [''], isTop: false, src: '央视新闻网', commentNum: 654, time: '7小时前' },
  { id: 15, typeId: 1, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀15', image: [''], isTop: false, src: '央视新闻网', commentNum: 9851, time: '7小时前' },
  { id: 16, typeId: 1, title: '今天，我国再次成功发射两颗北斗卫星16', image: [''], isTop: false, src: '央视新闻网', commentNum: 12350, time: '7小时前' },
  { id: 17, typeId: 1, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶17', image: [''], isTop: false, src: '央视新闻网', commentNum: 965444, time: '8小时前' },
  { id: 18, typeId: 1, title: '微视频 | 22国青年说“一带一路“18', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '8小时前' },
  { id: 19, typeId: 1, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值19', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '6小时前' },
  { id: 20, typeId: 1, title: '90后买房全靠60后支持，父母的第一套房子是怎么来的20', image: [''], isTop: false, src: '央视新闻网', commentNum: 654, time: '7小时前' },

  { id: 1, typeId: 2, title: '1习近平会见马来西亚总理1', image: [''], isTop: true, src: '央视新闻网', commentNum: 2548, time: '1小时前' },
  { id: 2, typeId: 2, title: '1微视频 | 22国青年说“一带一路”2', image: [''], isTop: true, src: '人民日报', commentNum: 17632, time: '1小时前' },
  { id: 3, typeId: 2, title: '1山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值3', image: [''], isTop: false, src: '山东商报', commentNum: 879, time: '1小时前' },
  { id: 4, typeId: 2, title: '190后买房全靠60后支持，父母的第一套房子是怎么来的？4', image: [''], isTop: false, src: '上流UpFlow', commentNum: 4215, time: '2小时前' },
  { id: 5, typeId: 2, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀5', image: [''], isTop: false, src: '央视新闻网', commentNum: 65557, time: '2小时前' },
  { id: 6, typeId: 2, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶6', image: [''], isTop: false, src: '央视新闻网', commentNum: 1225, time: '3小时前' },
  { id: 7, typeId: 2, title: '今天，我国再次成功发射两颗北斗卫星7', image: [''], isTop: false, src: '央视新闻网', commentNum: 250, time: '4小时前' },
  { id: 8, typeId: 2, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值8', image: [''], isTop: false, src: '央视新闻网', commentNum: 1234, time: '5小时前' },
  { id: 9, typeId: 2, title: '90后买房全靠60后支持，父母的第一套房子是怎么来的？9', image: [''], isTop: false, src: '央视新闻网', commentNum: 3214, time: '5小时前' },
  { id: 10, typeId: 2, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀10', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '5小时前' },

  { id: 11, typeId: 2, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶11', image: [''], isTop: false, src: '央视新闻网', commentNum: 55544, time: '6小时前' },
  { id: 12, typeId: 2, title: '今天，我国再次成功发射两颗北斗卫星12', image: [''], isTop: false, src: '央视新闻网', commentNum: 87774, time: '6小时前' },
  { id: 13, typeId: 2, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值13', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '6小时前' },
  { id: 14, typeId: 2, title: '90后买房全靠60后支持，父母的第一套房子是怎么来的14', image: [''], isTop: false, src: '央视新闻网', commentNum: 654, time: '7小时前' },
  { id: 15, typeId: 2, title: '美竟威胁所有国家？谁买这款导弹制裁谁，首先是65年老朋友开刀15', image: [''], isTop: false, src: '央视新闻网', commentNum: 9851, time: '7小时前' },
  { id: 16, typeId: 2, title: '今天，我国再次成功发射两颗北斗卫星16', image: [''], isTop: false, src: '央视新闻网', commentNum: 12350, time: '7小时前' },
  { id: 17, typeId: 2, title: '美媒：唯恐关税升级，天然气货轮离美向华飞驶17', image: [''], isTop: false, src: '央视新闻网', commentNum: 965444, time: '8小时前' },
  { id: 18, typeId: 2, title: '微视频 | 22国青年说“一带一路“18', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '8小时前' },
  { id: 19, typeId: 3, title: '山东洪涝致5.7万头生猪死亡 降雨量为建国后有记录的最大值19', image: [''], isTop: false, src: '央视新闻网', commentNum: 2548, time: '6小时前' }
]

export function getNews(config) {
  // config 为通过异步请求发送到 服务端的数据，config.body 为数据内容
  const { page, typeId } = JSON.parse(config.body)
  let start = (page - 1) * 10
  let end = page * 10

  let typeArr = news.filter(v => {
    return v.typeId === typeId
  })

  // 返回数据
  let data = typeArr.slice(start, end)

  return {
    func: 'getNews-->',
    code: 0,
    msg: '',
    page,
    pageSize: 10,
    data
  }

}

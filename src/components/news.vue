<template>
  <div class="news"  :style="{'-webkit-overflow-scrolling': listScroll.scrollMode}">
    <div class="news-header">
      <!-- search -->
      <div class="search">
        <div class="logo"><img src="../assets/img/logo.jpg" alt=""></div>
        <div class="input-box">
          <i class='fa fa-search'></i>
          <input type="text" class='search-input' placeholder='热搜：“温比亚”北上'>
        </div>
      </div>
      <!-- navbar -->
      <div class="news-navbar" ref='newsNavbar'>
        <mt-navbar v-model='selected' :style='{marginLeft: navMar+"px"}'>
          <mt-tab-item v-for='item of navIdList' :key='item.id' :id='item.id'>{{item.title}}</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model='selected'>
          <mt-tab-container-item v-for='item of navIdList' :key='item.id' :id='item.id'>
            <!-- 新闻列表 -->
            <div class="news1" :style="{'-webkit-overflow-scrolling': listScroll.scrollMode}">
              <v-loadmore
                :top-method="loadTop" 
                @top-status-change="handleTopChange"
                :auto-fill="false"

                :topPullText='listScroll.topPullText' 
                :topDropText="listScroll.topDropText"
                :topLoadingText="listScroll.topLoadingText"
                
                ref="loadmore"
              >
                <ul
                  v-infinite-scroll="loadMore"
                  :infinite-scroll-disabled="infiniteLoading"
                  infinite-scroll-distance="10"
                >
                  <li class='news1-li' v-for="(item, index) of dataArr" :key='index'>
                    <div class='news1-li-title'>{{item.title}}</div>
                    <div class="news1-li-img"><img src="../assets/img/new-img-1.jpg" alt=""></div>
                    <div class="news1-li-desc">
                      <span class='news1-li-desc-1' v-if='item.isTop'>置顶</span>
                      <span>{{item.src}}</span>
                      <span>{{item.commentNum}} 评</span>
                      <span>{{item.time}}</span>
                    </div>
                  </li>
                  <div class='loadBottomBox' v-show='showLoadMoreBar'>正在加载</div>

                </ul>
                <!-- 自定义 顶部加载区域提示 HTML 模板 -->
                <!-- <div slot="top" class='mint-loadmore-top'>
                  <span v-show="topStatus!== 'loading'" :class="{'rotate': topStatus === 'drop'}">向下箭头</span>
                  <span v-show="topStatus === 'loading'">Loading...</span>
                </div> -->
              </v-loadmore>
            </div>
          
            <!-- <mt-cell v-for='item in dataArr' :key='item.id'>{{item.title}}</mt-cell> -->
          </mt-tab-container-item>

        </mt-tab-container>
      </div>
    </div>
    
    <!-- <mt-cell v-for='n in 10' :key='n' title='waimai'></mt-cell> -->
  </div>
</template>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem, Indicator, Loadmore, InfiniteScroll } from 'mint-ui'
import { getNews } from '@/api/getNews'
export default {
  name: 'news',
  data () {
    return {
      selected: 1,
      navMar: 0,
      navStartMar: 0,
      navmoveX: 0,
      navState: false,
      navIdList: [
        { id: 1, title: '要闻' },
        { id: 2, title: '视频' },
        { id: 3, title: '推荐' },
        { id: 4, title: '娱乐' },
        { id: 5, title: '体育' },
        { id: 6, title: '新时代' },
        { id: 7, title: 'NBA' },
        { id: 8, title: '财经' },
        { id: 9, title: '汽车' },
        { id: 10, title: '法制' },
        { id: 11, title: '科技' },
        { id: 12, title: '军事' },
        { id: 13, title: '国际' },
        { id: 14, title: '时尚' },
        { id: 15, title: '文化' },
        { id: 16, title: '游戏' },
        { id: 17, title: '独家' },
        { id: 18, title: '图片' },
        { id: 19, title: '数码' },
        { id: 20, title: '星座' },
        { id: 21, title: '电影' },
        { id: 22, title: '教育' },
        { id: 23, title: '动漫' },
        { id: 24, title: '理财' },
        { id: 25, title: '政务' }

      ],
      dataArr: [],
      page: 1,

      // news1
      listScroll: {
        allLoaded: false, // 数据全部加载或没有更多数据时，修改为 true
        scrollMode: 'auto', // 移动端弹性滚动效果，touch 为弹性滚动，auto 为非弹性滚动
        topStatus: '',

        topPullText: '下拉刷新',
        topDropText: '释放刷新',
        topLoadingText: '请稍等'
      },
      infiniteLoading: true,
      showLoadMoreBar: false
    }
  },
  computed: {
    
  },
  
  created() {
    this.getNews()
  },
  mounted() {
    var navBarWidth = $('.news-navbar .mint-navbar').width()
    $('.news-navbar .mint-navbar').on('touchstart', ev => {
      this.navStartMar = 0
      let minHeight = $('.news-navbar').offset().top; // 46
      let maxHeight = minHeight + $('.news-navbar').height() // 78
      let touch0 = ev.touches[0]
      if (touch0.clientY < minHeight || touch0.clientY > maxHeight) {
        this.navState = false
        return false
      }
      this.navState = true
      this.navStartMar = touch0.clientX
    })
    $('body').on('touchmove', ev => {
      if (this.navState) {
        let touch = ev.touches[0]
        let moveX = touch.clientX - this.navStartMar
        // console.log(moveX)
        this.navStartMar = touch.clientX
        this.navMar += moveX

        // 设置滚动的左右边界
        this.navMar > 0 && (this.navMar = 0)
        let windowWidth = $('body').width()

        // console.log(navBarWidth, windowWidth)

        let scrollMax = windowWidth - navBarWidth
        // console.log(this.navMar, scrollMax)
        if (this.navMar < scrollMax) {
          this.navMar = scrollMax
        }
      }
    })
    $('body').on('touchend', ev => {
      this.navState = false
    })

    // news1 固定高度
    let winHeight = $(window).height()
    // alert(winHeight)
    $('.news1').height(winHeight - 135)
  },
  methods: {
    getNews() {
      Indicator.open()
      let page = this.page
      let typeId = this.selected
      getNews({page, typeId}).then(res => {
        Indicator.close()
        
        // console.log('请求成功', res)
        if (page === 1) {
          this.dataArr = []
          this.dataArr = res.data
          this.$refs.loadmore[0].onTopLoaded() // 固定方法，查询完要调用一次，用于重新定位
          
        } else {
          console.log('aaa', this.dataArr)
          this.dataArr = this.dataArr.concat(res.data)
          console.log('bbb', this.dataArr)
        }
        this.infiniteLoading = false
        this.showLoadMoreBar = true
      })
    },

    // 下拉触发方法
    loadTop() {
      console.log('下拉触发')
      this.page = 1
      this.getNews()
    },
    handleTopChange(status) {
      console.log('下拉状态改变', status)
      this.topStatus = status
    },
    // 底部加载更多
    loadMore() {
      if (this.infiniteLoading) {
        return false
      }
      this.infiniteLoading = true
      this.page += 1
      this.getNews()
    }

  },
  components: {
    'mt-navbar': Navbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'v-loadmore': Loadmore
  },
  watch: {
    selected() {
      console.log(this.selected)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$borderColor: #e2e2e2;
// search
.search {
  display: flex;
  margin: 8px;
  .logo {
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .input-box {
    flex: 1;
    margin-left: 6px;
    position: relative;
    i {
      position: absolute;
      display: block;
      left: 7px;
      top: 6px;
      color: #a3b2b7;
      font-size: 16px;
    }
    input {
      width: 100%;
      border-radius: 18px;
      background-color: #f2f6f7;
      box-sizing: border-box;
      color: #a3b2b7;
      font-size: 14px;
      padding-left: 26px;
      line-height: 30px;
      height: 30px;
    }
  }
}
// navbar
.mint-navbar {
  position: relative;
  width: 1200px;
  border-bottom: 1px solid $borderColor;
}
.mint-navbar .mint-tab-item {
  padding: 10px 0;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #2881e7;
  color: #2881e7;
  margin-bottom: -3px
}

// news1
.news1 {
  overflow: auto;
  height: 0px;
}
.news1-li {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid $borderColor;
  .news1-li-title {
    margin-top: 2px;
    line-height: 1.2;
  }
  .news1-li-img {
    margin-left: 10px;
    img {
      height: 90px;
    }
  }
  .news1-li-desc {
    position: absolute;
    left: 12px;
    bottom: 16px;
    font-size: 12px;
    span {
      display: inline-block;
      margin-right: 6px;
      color: #999;
      &.news1-li-desc-1 {
        color: #2881e7;
      }
    }
  }
}
.loadBottomBox {
  line-height: 50px;
  text-align: center;
}

</style>

<template>
  <div class="temp" :style="{'-webkit-overflow-scrolling': listScroll.scrollMode}">
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
        <li class='aaa' v-for="(item, index) of list" :key='index'>{{item}}</li>
        <div>最后一个</div>

      </ul>
      <!-- 自定义 顶部加载区域提示 HTML 模板 -->
      <!-- <div slot="top" class='mint-loadmore-top'>
        <span v-show="topStatus!== 'loading'" :class="{'rotate': topStatus === 'drop'}">向下箭头</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div> -->
    </v-loadmore>
  </div>
</template>

<script>
import { Loadmore, InfiniteScroll } from 'mint-ui'
export default {
  name: 'temp',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 7, 3, 6, 5, 2, 4, 5, 6, 7, 2],
      listScroll: {
        allLoaded: false, // 数据全部加载或没有更多数据时，修改为 true
        scrollMode: 'auto', // 移动端弹性滚动效果，touch 为弹性滚动，auto 为非弹性滚动
        topStatus: '',

        topPullText: '下拉刷新',
        topDropText: '释放刷新',
        topLoadingText: '请稍等'
      },
      infiniteLoading: false
      
    }
  },
  components: {
    'v-loadmore': Loadmore
  },
  created() {
    
  },
  methods: {
    // 下拉触发方法
    loadTop() {
      console.log('下拉触发')
      setTimeout(() => {
        this.$refs.loadmore[0].onTopLoaded() // 固定方法，查询完要调用一次，用于重新定位
      }, 3000)
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
      console.log(111)
      setTimeout(() => {
        console.log('请求数据成功')
        this.list.push('爱的', '33', '44', '55')
        this.infiniteLoading = false
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.aaa {
  line-height: 50px;
}
</style>

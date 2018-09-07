<template>
  <div class="index">
    <mt-tabbar v-model="selected">
      <mt-tab-item id='1'>
        <img v-if='selected !== "1"' slot='icon' src="../assets/img/tabbar-icon-1.jpg" alt="">
        <img v-else slot='icon' src="../assets/img/tabbar-icon-1-active.jpg" alt="">
        新闻
      </mt-tab-item>
      <mt-tab-item id='2'>
        <img v-if='selected !== "2"' slot='icon' src="../assets/img/tabbar-icon-2.jpg" alt="">
        <img v-else slot='icon' src="../assets/img/tabbar-icon-2-active.jpg" alt="">
        视频
      </mt-tab-item>
      <mt-tab-item id='3'>
        <img v-if='selected !== "3"' slot='icon' src="../assets/img/tabbar-icon-3.jpg" alt="">
        <img v-else slot='icon' src="../assets/img/tabbar-icon-3-active.jpg" alt="">
        广场
      </mt-tab-item>
      <mt-tab-item id='4'>
        <img v-if='selected !== "4"' slot='icon' src="../assets/img/tabbar-icon-4.jpg" alt="">
        <img v-else slot='icon' src="../assets/img/tabbar-icon-4-active.jpg" alt="">
        我
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model='selected'>
      <mt-tab-container-item id='1'>
        <news/>
      </mt-tab-container-item>
      <mt-tab-container-item id='2'>
        <mt-cell v-for='n in 5' :key='n' title='wode'></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id='3'>
        <mt-cell v-for='n in 7' :key='n' title="faxian"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id='4'>
        <mt-cell v-for='n in 7' :key='n' title="faxian"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import News from './news'

export default {
  name: 'temp',
  data () {
    return {
      selected: '1' // 可以设定初始页面
    }
  },
  computed: {
    
  },
  
  created() {
    
  },
  methods: {
    
  },
  components: {
    'mt-tabbar': Tabbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,

    'news': News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.mint-tabbar {
  border-top: 1px solid #e2e2e2;
}
.mint-tabbar > .mint-tab-item {
  background-color: #fff;
  color: #859298;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: #252c3c;
}
</style>

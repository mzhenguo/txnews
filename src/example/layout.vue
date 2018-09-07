<template>
  <div class="temp">
    <!-- 1, header 顶部导航栏 -->
    <!--  
      <mt-header
        fixed
        title='标题过长会隐藏后边的内容啊啊啊'
      >
        <router-link to='/' slot='left'>
          <mt-button icon='back'>返回</mt-button>
        </router-link>
        <mt-button icon='more' slot='right'></mt-button>
      </mt-header>

      import { Header } from 'mint-ui'
      components: {
        'mt-header': Header
      }

      .mint-header {
        background-color: red;
      }
    -->

    <!-- 2,tabber(底部选项卡) + TabContainer(面板),实现页面切换  -->
    <!--  
      <mt-tabbar v-model="selected">
        <mt-tab-item id='外卖'>
          外卖买
        </mt-tab-item>
        <mt-tab-item id='我的'>
          我的
        </mt-tab-item>
        <mt-tab-item id='发现'>
          发现
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container v-model='selected'>
        <mt-tab-container-item id='外卖'>
          <mt-cell v-for='n in 10' :key='n' title='waimai'></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id='我的'>
          <mt-cell v-for='n in 5' :key='n' title='wode'></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id='发现'>
          <mt-cell v-for='n in 7' :key='n' title="faxian"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>

      import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
      data() {
        return {
          selected: '发现' // 可以设定初始页面
        }
      }
      components: {
        'mt-tabbar': Tabbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
      }
    -->

    <!-- 3,Navbar 顶部选项卡，与 Tabbar 类似 -->
    <!--  
      <mt-navbar v-model='selected'>
        <mt-tab-item id='1'>选项一</mt-tab-item>
        <mt-tab-item id='2'>选项2</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model='selected'>
        <mt-tab-container-item id='1'>
          <mt-cell v-for='n in 10' :key='n' title='n'></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id='2'>
          <mt-cell v-for='n in 7' :key='n' title='n'></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>

      import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
      data() {
        return {
          selected: '1'
        }
      }
      components: {
        'mt-navbar': Navbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
      }
    -->

    <!-- 4,button ,plain 代表边框为原先的背景颜色，背景颜色变为白色 -->
    <!--  
      <mt-button type='default' size='large' @click.native='handleClick'>default</mt-button>
      <mt-button type='primary' size='normal'>primary</mt-button>
      <mt-button type='danger' size='small'>danger</mt-button>
      <mt-button disabled>disabled</mt-button>
      <mt-button plain>plain</mt-button>
      <mt-button icon='back'>返回</mt-button>
      <mt-button icon='more'>更多</mt-button>
      <mt-button>
        <img src="../assets/100x100.png" height='20' width='20' alt="" slot='icon'>
        带自定义图标
      </mt-button>

      import { Button } from 'mint-ui'
      components: {
        'mt-button': Button
      },
      methods: {
        handleClick() {
          console.log('按钮点击了')
        }
      }
    -->

    <!-- 5，Cell,单元格，用于展示列表信息，连接或者表单 -->
    <!-- title（左侧标题）、icon（标题左侧图标）、label（标题下方的备注）、value（右侧说明文字） -->
    <!-- is-link（可点击链接）、to（链接地址） -->

    <!-- 
      <mt-cell icon='more' title='标题文字' label='备注信息' value='说明文字' is-link></mt-cell>
      <mt-cell title='标题文字'>
        <span>icon 是图片</span>
        <img slot='icon' src="" alt="">
      </mt-cell>

      import { Cell } from 'mint-ui'
      components: {
        'mt-cell': Cell
      }
    -->
  </div>
</template>

<script>
import { Cell } from 'mint-ui'

export default {
  name: 'temp',
  data () {
    return {

    }
  },
  computed: {

  },
  components: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.mint-header {
  background-color: red;
}
</style>

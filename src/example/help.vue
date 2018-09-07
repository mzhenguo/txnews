<template>
  <div class="temp">
    <!-- 1,弹窗 -->
    <!-- import { Toast } from 'mint-ui' -->
    <!--
      Toast('aaaa')
      Toast({
        message: '提示',
        position: 'top/middle/bottom',
        duration: 5000,
        iconClass: 'icon icon-success'  // 图标字体
      })

      // 用于关闭 Toast
      let instance = Toast('提示信息')
      setTimeout(() => {
        instance.close()
      }, 2000)
     -->

    <!-- 2,加载提示框 -->
    <!-- 
      import { Indicator } from 'mint-ui'
      Indicator.open()
      Indicator.open('加载中')
      Indicator.open({
        text: '加载中',
        spinnerType: 'snake/fading-circle/double-bounce/triple-bounce'
      })

      关闭 load
      Indicator.close()
     -->

    <!-- 3,下拉刷新 + 列表触底追加数据 -->
    <!-- 详看 example/dataLoad.vue -->

    <!-- 4,弹出提示框 -->
    <!-- 4.1传入标题和字符串 -->
    <!-- MessageBox('提示', '操作成功') -->
    <!-- 4.2或传入一个对象 -->
    <!-- 
      MessageBox({
        title: '提示',
        message: '确定执行此操作？',
        showCancelButton: true,
        closeOnClickModal: false // 是否在点击遮罩层时关闭提示框
      })
     -->
    <!-- 4.3提供了 alert、confirm、prompt，三个方法，并都返回一个Promise -->
    <!-- 
      MessageBox.alert('提示', '操作成功')
      MessageBox.alert('提示', '操作成功').then(action => {
        console.log(action) // confirm
      })
    -->
    <!-- 
      MessageBox.confirm('确定此操作？')
      MessageBox.confirm('确定此操作？').then(action => {
        console.log(action) // confirm
      })
    -->
    <!--  
      MessageBox.prompt('请输入姓名')
      MessageBox.prompt('请输入姓名').then(({value, action}) => {
        console.log(value, action) // value confirm
      })
    -->

    <!-- 5,操作表，从屏幕下方移入 -->
    <!--  
      <button @click="sheetVisible = !sheetVisible">啊啊啊啊</button>
      <mt-action
        :actions="actions" // 操作表中的项，两个键，name（显示的汉字）和method（点击后触发methods中的方法，this.paizhao）
        v-model='sheetVisible' // 控制操作表的显示和隐藏
      >
      </mt-action>
 
      import { Actionsheet } from 'mint-ui'
      data () {
        return {
          sheetVisible: false,
          actions: [
            { name: '拍照', method: this.paizhao }
          ]
        }
      },
      components: {
        'mt-action': Actionsheet 
      },
      methods: {
        paizhao() {
          console.log('点击了该方法')
        }
      }
    -->

    <!-- 6,弹出的内容层 -->
    <!--  
      <button @click="popupVisible = !popupVisible">1111</button>
      <mt-popup
        v-model="popupVisible"
        position="top/bottom/left/right"
      >
        hello
      </mt-popup>

      import { Popup } from 'mint-ui'
      data() {
        return {
          popupVisible: false
        }
      },
      components: {
        'mt-popup': Popup
      }
    -->

    <!-- 7,swiper，auto为0时取消自动播放 -->
    <!--  
      <mt-swipe class='m-swipe' :auto='4000' :show-indicators='false' @change="handleChange">
        <mt-swipe-item v-for='(item, index) of swipeList' :key='index'>{{item}}</mt-swipe-item>
      </mt-swipe>

      import { Swipe, SwipeItem } from 'mint-ui'
      data () {
        return {
          swipeList: [1, 2, 3, 4]
        }
      },
      components: {
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
      },
      methods: {
        handleChange(index) {
          console.log(index)
        }
      }
      http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg
      http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg
    -->

    <!-- 8,图片懒加载指令 v-lazy -->
    <!--  
      <ul>
        <li v-for='(item, index) of imgList' :key='index'>
          <img v-lazy="item" alt="">
        </li>
      </ul>

      import { Lazyload } from 'mint-ui'

      data() {
        reutrn{
          imgList: [
            'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg'
          ]
        }
      }

      图片未加载时的样式
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        border: 1px solid red;
      }
    -->

    <!-- 9，滑块 Range，定义自定义步长，区间等 -->
    <!--  
      <mt-range
        v-model="rangeValue"
        :min="0"
        :max='100'
        :step='10'
        :bar-height='5'
      >
        <div slot='start'>0</div>
        <div slot='end'>100</div>
      
      </mt-range>
      <p>{{rangeValue}}</p>

      import { Range } from 'mint-ui'
      data() {
        return {
          rangeValue: 12
        }
      },
      components: {
        'mt-range': Range
      }
    -->

    <!-- 10, 进度条 Progress -->
    <!--  
      <mt-progress
        :value="progressValue"
        :bar-height="5"
      >
        <div slot='start'>0%</div>
        <div slot='end'>100%</div>
      </mt-progress>

      import { Progress } from 'mint-ui'
      data() {
        return {
          progressValue: 47
        }
      },
      components: {
        'mt-progress': Progress
      }
    -->

    <!-- 11, 选择器 Picker，支持多级联动 -->
    <!--  
      <mt-picker :slots='slots' @change='onValueChange'></mt-picker>
      <p>{{value1}} - {{value2}}</p>

      import { Picker } from 'mint-ui'
      data() {
        return {
          value1: '',
          value2: '',
          slots: [
            {
              flex: 1,
              className: 'slot1',
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              textAlign: 'right'
            },
            {
              divider: true,
              content: '-',
              className: 'slot2'
            },
            {
              flex: 1,
              className: 'slot3',
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              textAlign: 'left'
            }
          ]
        }
      },
      components: {
        'mt-picker': Picker
      },
      methods: {
        onValueChange(picker, values) {
          if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0])
          }
          this.value1 = picker.getSlotValue(0)
          this.value2 = picker.getSlotValue(1)
        }
      }
    -->

    <!-- 12，时间日期选择器 DatetimePicker -->
    <!--  
      <mt-datetime-picker
        ref="picker"
        type='date'
        :startDate='startDate'
        :endDate='endDate'
        v-model="pickerValue"
        year-format='{value} 年'
        month-format='{value} 月'
        date-format="{value} 日"
        @confirm="handleConfirm"
      ></mt-datetime-picker>
      <button @click='openPicker'>弹出日期</button>
      <p>{{pickerValue}}</p>
      <p>{{showValue}}</p>

      import { DatetimePicker } from 'mint-ui'
      data() {
        return {
          pickerValue: '',
          showValue: ''
        }
      },
      computed: {
        // 自定义起始日期
        startDate() {
          let date = new Date()
          date.setFullYear(2000, 0, 1)
          return date
        }

        // 自定义结束日期
        endDate() {
          let date = new Date()
          date.setFullYear(2066, 0, 0) // 到2065年最后一天
          return date
        }
      },
      components: {
        'mt-datetime-picker': DatetimePicker
      },
      methods: {
        openPicker() {
          this.$refs.picker.open()
          // close() 是关闭
        },
        // 点击了确定按钮
        handleConfirm(value) {
          console.log(value)
          let year = value.getFullYear()
          let month = value.getMonth() + 1
          let date = value.getDate()
          this.showValue = `${year} - ${month} - ${date}`
        }
      }
    -->

    <!-- 13,索引列表，indexList -->
    <!--  
      <mt-index-list>
        <mt-index-section index='A'>
          <mt-cell title="aarom"></mt-cell>
          <mt-cell title="aarom"></mt-cell>
          <mt-cell title="aarom"></mt-cell>
        </mt-index-section>
        <mt-index-section index='B'>
          <mt-cell title="aarom"></mt-cell>
          <mt-cell title="aarom"></mt-cell>
          <mt-cell title="aarom"></mt-cell>
        </mt-index-section>
      </mt-index-list>

      import { IndexList, IndexSection } from 'mint-ui'
      components: {
        'mt-index-list': IndexList,
        'mt-index-section': IndexSection
      }
    -->
    
  </div>
</template>

<script>

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

</style>

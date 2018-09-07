<template>
  <div class="temp">
    <div class='box1'>
      <div class="box2">888</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.box1 {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  .box2 {
    width: 40px;
    height: 40px;
    border: 1px solid green;
  }
}
</style>

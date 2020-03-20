<template>
  <text 
    class="iconfont" 
    :class="'icon-' + icon" 
    @click="onClick">
  </text>
</template>

<script>
  /**
   * iconfont 图标
   * @description 用于展示 iconfont 图标
   * @property {String} icon 图标图案，参考示例
   * @event {Function} click 点击 Icon 触发事件
   */
  export default {
    name: 'iconfont',
    props: {
      icon: {
        type: String,
        default: ''
      }
    },
    data() {
      return {};
    },
    methods: {
      onClick(e) {
        this.$emit('click', e);
      }
    }
  };
</script>

<style lang="scss">
  @import url('./iconfont.css');
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $mainColor;
    font-size: 32rpx;
  }
</style>

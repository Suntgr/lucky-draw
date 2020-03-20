<template>
  <view>
    公共抽奖
  </view>
</template>

<script>
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
  export default {
    components: {
      uniPopup
    },
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {
      open() {
        this.$refs.popup.open()
      }
    }
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

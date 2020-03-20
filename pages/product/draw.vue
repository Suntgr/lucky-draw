<template>
  <view class="draw">
    <view class="group">
      <image class="banner" src="" mode="aspectFill"></image>
      <view class="cell">
        <icon-font icon="gift"></icon-font>
        <text class="cell-name">抽奖类型</text>
        <view class="switch">
          <view class="btn">普通</view>
          <view class="btn">趣味</view>
        </view>
      </view>
      <view class="cell">
        <icon-font icon="gift"></icon-font>
        <text class="cell-name">奖品名称</text>
        <input class="cell-input" type="text" placeholder="请输入奖品名称">
      </view>
      <view class="cell">
        <icon-font icon="gift"></icon-font>
        <text class="cell-name">奖品份数</text>
        <input class="cell-input" type="number" placeholder="请输入份数">
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .draw /deep/ {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 40rpx 20rpx 0;

    .group {
      width: auto;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 8rpx 0px rgba(0, 0, 0, 0.1);
      border-radius: 8rpx;
      padding: 30rpx;

      .banner {
        width: 100%;
        height: 340rpx;
        background: #C56C62;
      }

      .cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20rpx;
        height: 112rpx;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 42rpx;
          right: -30rpx;
          height: 1px;
          background:rgba(0,0,0,0.1);
        }
      }

      .cell-name {
        margin-right: auto;
        font-size: 14px;
        margin-left: 10rpx;
      }

      .switch {
        .btn {
          display: inline-block;
          width: 132rpx;
          height: 60rpx;
          text-align: center;
          line-height: 60rpx;
          color: #E57170;
          border: 1rpx solid;
          border-radius: 8rpx;
          background: rgba(217, 52, 51, 0.1)
        }
      }
      .cell-input {
        text-align: right;
      }
    }
  }
</style>

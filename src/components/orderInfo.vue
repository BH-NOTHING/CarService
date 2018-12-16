<template>
  <div class="order-info">
    <div class="order-num-wrapper">
      <p>订单编号：</p>
      <p style="font-size: 12px">65465441654363546541</p>
    </div>
    <div class="car-type">
      <span class="car-title">服务项目:</span>
      <input
        placeholder="请输入服务车型"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">接单店铺:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">车主姓名:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">接单时间:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">订单状态:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="order-info-input"
        type="text">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderInfo',
    data () {
      return {
        phone: '18710139476',
        name: '方世虎',
        type: '超级管理员'
      }
    },
    methods: {
      next () {
        console.log('下一步')
      },
      collectionRecord () {
        console.log('收款记录')
      }
    }
  }
</script>
<style scoped>
  .order-info .order-info-input{
    border: none;
    outline: none;
    background: transparent;
    margin-left: 16px;
  }
  .order-info .car-type,.order-info .pay-id{
    padding: 12px;
    border-bottom: 1px solid #E2E2E2;
  }
  .order-info .btn-wrapper{
    width: 100%;
    text-align: center;
  }
  .order-info .btn-wrapper .btn{
    width: 80%;
    border-radius: 4px;
    padding: 10px;
    margin-top: 18px;
  }
  .order-info .btn-wrapper .next{
    color: #fff;
    background: #0078FA;
    border: none;
  }
  .order-info .btn-wrapper .record{
    background: #FFF;
    border: 1px solid #ccc;
  }
  .order-num-wrapper{
    width: 100%;
    height: 80px;
    padding: 20px;
    color: #ffffff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #0078FA;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .order-num-wrapper p{
    line-height: 20px;
  }
</style>

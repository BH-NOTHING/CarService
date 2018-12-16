<template>
  <div class="collection">
    <div class="car-type">
      <span class="car-title">车&nbsp;&nbsp;&nbsp;型:</span>
      <input
        placeholder="请输入服务车型"
        class="collection-input"
        type="text">
    </div>
    <div class="pay-id">
      <span class="car-title">凭证码:</span>
      <input
        placeholder="请输入车主出示的付款凭码"
        class="collection-input"
        type="text">
    </div>
    <div class="btn-wrapper">
      <div>
        <button class="btn next" @click="next">下一步</button>
      </div>
      <div>
        <button class="btn record" @click="collectionRecord">收款记录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection',
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
.collection .collection-input{
  border: none;
  outline: none;
  background: transparent;
  margin-left: 16px;
}
.collection .car-type,.collection .pay-id{
  padding: 12px;
  border-bottom: 1px solid #E2E2E2;
}
.collection .btn-wrapper{
  width: 100%;
  text-align: center;
}
.collection .btn-wrapper .btn{
  width: 80%;
  border-radius: 4px;
  padding: 10px;
  margin-top: 18px;
}
.collection .btn-wrapper .next{
  color: #fff;
  background: #0078FA;
  border: none;
}
.collection .btn-wrapper .record{
  background: #FFF;
  border: 1px solid #ccc;
}
</style>

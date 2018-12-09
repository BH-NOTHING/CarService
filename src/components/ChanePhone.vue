<template>
  <div>
    <div class="phoneInfo">
      <div class="info-icon">
        {{name ? name.slice(0,1) : ''}}
      </div>
      <div class="info-detail">
        <div class="info-detail-items">
          <span>手机号码：</span>
          <span> {{phone}}</span>
        </div>
        <div class="info-detail-items">
          <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
          <span>{{name}}</span>
        </div>
        <div class="info-detail-items">
          <span>角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</span>
          <span>{{type}}</span>
        </div>
      </div>
    </div>
    <button
      class="change-phone-btn"
      @click="changePhoone"
    >更改手机号码</button>
  </div>
</template>

<script>
export default {
  name: 'chanePhone',
  data () {
    return {
      phone: '18710139476',
      name: '方世虎',
      type: '超级管理员'
    }
  },
  methods:{
    changePhoone(){
      console.log('更改手机')
    }
  }
}
</script>
<style scoped>
.phoneInfo{
  width: 100%;
  height: 200px;
  background: #5CB1FF;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.phoneInfo .info-icon{
  width: 60px;
  height: 60px;
  border-radius: 50px;
  line-height: 60px;
  background: #BAE4BC;
  margin-left: 30px;
  font-size: 20px;
  text-align: center;
}
.phoneInfo .info-detail{
  padding-left: 10px;
  color: #DCF5FB;
  text-align: left;
}
.phoneInfo .info-detail .info-detail-items{
  padding: 10px
}
.change-phone-btn{
  width: 100%;
  height: 50px;
  border: none;
  background: #007AF9;
  border-radius: 4px;
  margin-top: 30px;
  color: #DCF5FB;
}
</style>

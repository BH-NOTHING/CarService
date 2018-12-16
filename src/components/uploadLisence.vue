<template>
  <div class="upload-page">
    <div class="upload-tips">
      <span>上传营业执照和身份证信息后您的店铺将可以直接出现在天猫页面，供网购者选择，有利于您提升店铺形象和提高接单量。</span>
    </div>
    <div class="shop">
      <div>
        <span class="shop-name">帅卡汽车美容装饰门头照片：</span>
        <span style="font-size:12px;color: #A1A1A1;">(上传门头照片)</span>
      </div>
      <div class="photo-wrapper">
        <div class="newPhoto" v-for="(item,index) in shopImgList" :key="index">
          <img :src="item.src" alt="">
        </div>
        <div v-if="shopImgList.length <= 5" class="add-photo-btn" @click="addshopImg"></div>
      </div>
    </div>
    <div class="shop">
      <div>
        <span class="shop-name">营业执照照片：</span>
        <span style="font-size:12px;color: #A1A1A1;">(上传营业执照照片)</span>
      </div>
      <div class="photo-wrapper">
        <div class="newPhoto" v-for="(item,index) in lisenceList" :key="index">
          <img :src="item.src" alt="">
        </div>
        <div v-if="lisenceList.length <= 2" class="add-photo-btn" @click="addLisenceImg"></div>
      </div>
    </div>
    <div class="shop-info">
      <p>公司名称：</p>
      <p>{{companyName}}</p>
    </div>
    <div class="shop-info">
      <p>营业执照编号：</p>
      <p>{{lisenceNum}}</p>
    </div>
    <div class="leader-img">
      <p>负责人身份证照片（可不是法人）</p>
      <div class="leader-img-wrapper">
        <div v-if="!leaderFaceImg" class="add-photo-btn" @click="addLeaderFace" />
        <div v-else class="leader-img-face">
          <img :src="leaderFaceImg" alt="">
        </div>
        <div style="padding: 0 30px 0 0;">正面</div>
        <div v-if="!leaderBackImg" class="add-photo-btn" @click="addLeaderBack" />
        <div v-else class="leader-img-back">
          <img :src="leaderBackImg" alt="">
        </div>
        <div>反面</div>
      </div>
    </div>
    <div class="shop-info">
      <p>负责人姓名：</p>
      <p>{{leaderName}}</p>
    </div>
    <div class="shop-info">
      <p>公司名称：</p>
      <p>{{leaderId}}</p>
    </div>
    <div style="text-align: center">
      <button class="submit-btn" @click="nextStep">下一步</button>
    </div>
  </div>
</template>

<script>
import { chooseFile } from '../lib/xhrUploadFile'
export default {
  name: 'uploadLisence',
  components: {
  },
  props: {
  },
  data () {
    return {
      shopImgList: [1,2], //店铺照片
      lisenceList: [1,2], //营业执照照片,
      companyName: '廊坊帅卡汽车美容装饰有限公司',
      lisenceNum: 123455662313123,
      leaderName: '方东浩',
      leaderId: 222405198027165344,
      leaderFaceImg: '',
      leaderBackImg: ''
    }
  },
  mounted(){
  },
  destroyed () {
  },
  computed: {
  },
  methods: {
    addshopImg(){
      chooseFile('image')
    },
    addLisenceImg(){
      chooseFile('image')
    },
    addLeaderFace(){
      chooseFile('image')
    },
    addLeaderBack(){
      chooseFile('image')
    },
    nextStep(){

    }
  }
}
</script>
<style scoped>
.upload-page{
  padding: 20px 10px;
}
.upload-tips{
  font-size: 14px;
  color: #A1A1A1;
}
.shop{
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.shop .photo-wrapper{
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}
.shop .photo-wrapper .newPhoto,.leader-img-face,.leader-img-back{
  width: 100px;
  height: 100px;
  margin: 4px;
}
.shop .photo-wrapper .newPhoto img,
.leader-img-face img,
.leader-img-back img
{
  width: 100%;
  height: 100%;
}
.add-photo-btn{
  width: 100px;
  height: 100px;
  border: 1px dashed #dbdbdb;
  background: url("../style/pic/addPhoto.png") no-repeat 0 0;
  background-size: 100px 100px;
  margin: 4px;
}
.shop-info{
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.shop-info p{
  line-height: 24px;
}
.leader-img{
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.leader-img-wrapper{
  display: flex;
  align-items: center;
}
.leader-img-face .leader-img-back{
  width: 100px;
  height: 100px;
  margin: 4px;
}
.submit-btn{
  width: 80%;
  color: #fff;
  background: #0078FA;
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin: 10px auto
}
</style>

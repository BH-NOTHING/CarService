<template>
  <!--<div>-->
    <!--<div class="inputInfo">-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">店铺名称</span>-->
        <!--<input placeholder="请输入店铺名称" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">负责人</span>-->
        <!--<input placeholder="请输入负责人姓名" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">手机号码</span>-->
        <!--<input placeholder="请输入手机号码" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">图形码</span>-->
        <!--<input placeholder="请输入图形码" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item info-phone-id">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">验证码</span>-->
        <!--<input class="input-short" placeholder="请输入验证码" type="text" />-->
        <!--<button  class="phone-id">获取验证码</button>-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<span class="shop-photo-name">门店照片：</span><span class="shop-photo-tips">(用于展示在店铺主页，仅支持JPG、GIF、JPEG、BMP格式，文件100KB以内)</span>-->
        <!--<div class="add-photo" @click="addPhoto"></div>-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">省市区</span>-->
        <!--<input placeholder="请输入省市区" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">详细地址</span>-->
        <!--<input placeholder="请输入详细地址" type="text" />-->
      <!--</div>-->
      <!--<div class="info-item info-map-mark">-->
        <!--<svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>-->
        <!--<span class="info-name">地址标注</span>-->
        <!--<input placeholder="请输入验证码" type="text" />-->
      <!--</div>-->
    <!--</div>-->
    <!--<div>-->
      <!--我已经阅读并同意<a href="#">协议条款</a>-->
    <!--</div>-->
  <!--</div>-->
 <div class="add-shop">
   <div class="filed-div">
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="店铺名称" placeholder="请输入店铺名称" v-model="shopName" rows=5></mt-field>
   </div>
   <div class="filed-div">
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="负责人" placeholder="请输入负责人姓名" type="text" v-model="leaderName"></mt-field>
   </div>
   <div class="filed-div">
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="手机号码" placeholder="请输入手机号码" type="tel" :attr="{ maxlength: 11 }" v-model="phone"></mt-field>
   </div>
   <div class="filed-div">
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="图形码" placeholder="请输入图形码" v-model="picId"></mt-field>
   </div>
   <div class="filed-div info-id-wrapper">
     <span v-if="showInfoId" class="info-id-btn" @click="getInfoId">获取验证码</span>
     <span v-else class="info-id-btn">重新发送({{count}})</span>
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="验证码" placeholder="请输入验证码" v-model="infoId"></mt-field>
   </div>
   <div class="shop-photo">
     <span class="shop-photo-name">门店照片：</span><span class="shop-photo-tips">(用于展示在店铺主页，仅支持JPG、GIF、JPEG、BMP格式，文件100KB以内)</span>
     <div class="photo-wrapper">
       <div class="newPhoto" v-for="(item,index) in photoList" :key="index">
         <img :src="item.src" alt="">
       </div>
       <div v-if="photoList.length <= 5" class="add-photo-btn" @click="addPhoto"></div>
     </div>
   </div>
   <div @click="showPicker" class="filed-div">
     <svg class="icon-required" style="width: 0.5em; height: 0.5em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2025"><path d="M876.8 659.2 620.8 512l256-147.2c25.6-12.8 38.4-51.2 19.2-76.8-12.8-25.6-51.2-38.4-76.8-19.2l-256 147.2L563.2 121.6C569.6 89.6 544 64 512 64S454.4 89.6 454.4 121.6l0 294.4-256-147.2C179.2 249.6 140.8 262.4 128 288c-12.8 25.6-6.4 64 19.2 76.8l256 147.2-256 147.2c-25.6 12.8-38.4 51.2-19.2 76.8 12.8 19.2 32 25.6 51.2 25.6 6.4 0 19.2 0 25.6-6.4l256-147.2 0 294.4C454.4 934.4 480 960 512 960s57.6-25.6 57.6-57.6L569.6 608l256 147.2c6.4 6.4 19.2 6.4 25.6 6.4 19.2 0 38.4-12.8 51.2-25.6C908.8 710.4 902.4 672 876.8 659.2z" p-id="2026"></path></svg>
     <mt-field label="详细地址" placeholder="请输入详细地址" :value="getAd"></mt-field>
   </div>
   <div v-if="pickerShow" v-click-outside="hidePicker" class="picker-wrapper">
     <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
   </div>
 </div>
</template>

<script>
import { Field } from 'mint-ui'
import { chooseFile } from '../lib/xhrUploadFile'
import cityData from '../lib/cityData'
import { Picker } from 'mint-ui';
import ClickOutside from 'vue-click-outside'
console.log(cityData)
export default {
  name: 'addShop',
  components: {
    'mt-field': Field,
    'mt-picker': Picker
  },
  directives: {
    ClickOutside
  },
  props: {
    // shopName: {
    //   type: [String, Number],
    //   default: ''
    // },
    // leaderName: {
    //   type: [String, Number],
    //   default: ''
    // },
    // phone: {
    //   type: [String, Number],
    //   default: ''
    // },
    // picId: [String, Number],
    // infoId: [String, Number],
    // detailAd: String

  },
  data () {
    return {
      shopName: '',
      leaderName: '',
      phone: '',
      picId: '',
      infoId: '',
      detailAd: '',
      showInfoId: true,
      count: 60,
      photoList: [],
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(cityData),  //省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      myAddressProvince:'',
      myAddressCity:'',
      myAddresscounty:'',
      pickerShow: false
    }
  },
  mounted(){
    this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  },
  computed: {
    getAd(){
      let ad = ''
      ad = this.myAddressProvince ? this.myAddressProvince + ad : ad
      ad = this.myAddressCity ? this.myAddressCity + ad : ad
      ad =this. myAddresscounty ? this.myAddresscounty + ad : ad
      return ad
    }
  },
  methods: {
    addPhoto () {
      console.log('添加图片')
      chooseFile('image')
    },
    getInfoId(){
      this.showInfoId = false
      let timer = setInterval(()=>{
        this.count--
        if(this.count == 0){
          clearInterval(timer)
          this.count = 60
          this.showInfoId = true
        }
      },1000)
    },
    onValuesChange(picker, values) {
      console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onMyAddressChange(picker, values) {
      if(cityData[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1,Object.keys(cityData[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2,cityData[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
      }
    },
    hidePicker(){
      this.pickerShow = false
    },
    showPicker(){
      this.pickerShow = true
    }
  }
}
</script>
<style scoped>
.filed-div{
  position: relative;
}
.icon-required{
  position: absolute;
  top: calc(50% - 2px);
  left: 0;
  z-index:99;
}
.filed-div .mint-cell-wrapper{
  background-image: initial;
  padding-left: 16px;
}
.filed-div .info-id-btn{
  position: absolute;
  z-index: 99;
  right: 20px;
  color: #2A72C5;
  top: calc(50% - 10px);
}
.filed-div.info-id-wrapper{
  border-bottom: 6px solid #D9D9D9;
}
.shop-photo{
  padding: 16px;
  border-bottom: 1px solid #D9D9D9;
}
.shop-photo .shop-photo-name{
  font-size: 15px;
}
.shop-photo  .shop-photo-tips{
  font-size: 12px;
  color: #B5B5B5
}
.shop-photo .add-photo-btn{
  width: 100px;
  height: 100px;
  border: 1px dashed #dbdbdb;
  background: url("../style/pic/addPhoto.png") no-repeat 0 0;
  background-size: 100px 100px;
  margin: 4px;
}
.shop-photo .photo-wrapper{
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}
.shop-photo .photo-wrapper .newPhoto{
  width: 100px;
  height: 100px;
  margin: 4px;
}
.shop-photo .photo-wrapper .newPhoto img{
  width: 100%;
  height: 100%;
}
.add-shop .picker-wrapper{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.add-shop .picker-wrapper .picker{
  overflow: hidden;
  background: #EDEDED;
}
/*.inputInfo .icon-required{*/
  /*bottom: 0.08em;*/
  /*position: relative;*/
/*}*/
/*.inputInfo .info-item{*/
  /*padding: 10px 15px;*/
  /*border-bottom: 1px solid #ccc;*/
/*}*/
/*.inputInfo .info-item .add-photo{*/
  /*width: 100px;*/
  /*height: 100px;*/
  /*background: red;*/
  /*margin: 10px 0;*/
/*}*/
/*.inputInfo .info-item.info-phone-id,*/
/*.inputInfo .info-item.info-map-mark{*/
  /*padding: 10px 15px;*/
  /*border-bottom: 4px solid #ccc;*/
/*}*/
/*.inputInfo input{*/
  /*width: 200px;*/
  /*border: none;*/
  /*outline: none;*/
/*}*/
/*.inputInfo .input-short{*/
  /*width: 100px;*/
/*}*/
/*.inputInfo .phone-id{*/
  /*float: right;*/
  /*margin-right: 20px;*/
/*}*/
/*.inputInfo .info-name{*/
  /*display: inline-block;*/
  /*width: 70px;*/
/*}*/
/*.inputInfo .shop-photo-name{*/
  /*font-size: 15px;*/
/*}*/
/*.inputInfo  .shop-photo-tips{*/
  /*font-size: 12px;*/
  /*color: #B5B5B5*/
/*}*/
</style>

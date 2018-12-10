<template>
  <div>
    <div class="order-title">安装订单</div>
    <div class="order-record">
      <ul>
        <li class="record-details" v-for="item in orders">
          <div class="record-info">
            <div>
              <span class="info-good">{{item.good}}</span>
              <span class="info-price">{{item.price}}</span>
            </div>
            <div class="info-bottom">
              <span class="info-date">{{item.date}}</span>
              <span class="info-status">{{item.status}}</span>
            </div>
          </div>
          <div class="record-next">x</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderRecord',
  data () {
    return {
      orders: [
        {
          good: '坐垫(5座)',
          price: '30元',
          date: '2018-11-29 15:45:02',
          status: '订单完成'
        },
        {
          good: '坐垫(5座)',
          price: '30元',
          date: '2018-11-29 15:45:02',
          status: '订单完成'
        },
        {
          good: '坐垫(5座)',
          price: '30元',
          date: '2018-11-29 15:45:02',
          status: '订单完成'
        },
        {
          good: '坐垫(5座)',
          price: '30元',
          date: '2018-11-29 15:45:02',
          status: '订单完成'
        }
      ]
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
.order-title{
  text-align: center;
  color: #2679E9;
  padding: 10px;
  border-bottom: 1px solid #E5E5E5;
}
.order-record li{
  list-style-type: none;
}
.order-record  .record-details{
  display: flex;
  border-bottom: 2px solid #E5E5E5;
}
.order-record  .record-details .record-info{
  width: 100%;
  height: 50px;
  padding: 16px;
}
.order-record  .record-details  .record-next{
    width: 10px;
    line-height: 82px;
}
.order-record  .record-details .record-info .info-bottom{
  padding-top: 6px;
}
.order-record  .record-details .record-info .info-good{
  font-size: 16px;
  font-weight: bold;
}
.order-record  .record-details .record-info .info-price{
  float: right;
  font-size: 16px;
  font-weight: bold;
}
.order-record  .record-details .record-info .info-date{
  font-size: 12px;
  color: #A1A1A1;
}
.order-record  .record-details .record-info .info-status{
  float: right;
  font-size:12px;
  color: #2679E9;
}
</style>

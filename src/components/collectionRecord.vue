<template>
  <div>
    <div class="collection-total">
      <span>累计收款金额(元)：</span>
      <span class="collection-total-num">{{getTotal}}</span>
    </div>
    <div class="collection-title">
      <span>icon</span>
      <span>收款记录</span>
    </div>
    <div class="collection-record-list">
      <div
        class="item-wrap"
        v-for="(item,index) in recordList"
        :key="index">
        <div class="item-name">{{item.name}}</div>
        <div class="item-price">{{item.price}}</div>
        <div class="item-date">{{item.date}}</div>
        <div class="icon-next" @clic="moreInfo(item)">
          <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="570"><path style="fill:#CCCCCC" d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z" p-id="571"></path></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collectionRecord',
  data () {
    return {
      total: 123456789,
      recordList: [
        {
          name: '坐垫(5座)坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        },
        {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        },
        {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }, {
          name: '坐垫(5座)',
          price: '30.00元',
          date: '2018-12-02 10：40：41'
        }
      ]
    }
  },
  computed: {
    getTotal () {
      return (this.total + '').replace(/(?=((?!\b)\d{3})+$)/g, ',')
    }
  },
  methods: {
    moreInfo () {
      console.log('下一步')
    }
  }
}
</script>
<style scoped>
.collection-total{
  width: 90%;
  margin: auto;
  background: #D8B36D;
  padding: 24px 10px 16px 20px;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: #555555 0px 0px 10px;
}
.collection-total .collection-total-num{
  font-size: 18px;
}
.collection-title{
  padding: 20px 10px 10px 10px;
  color: #B6BABB;
}
.item-wrap{
  width: 100%;
  display: flex;
  font-size: 14px;
  float: left;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #E5E5E5;
}
.icon-next{
  width: 30px;
  display: inline-block;
  float: right;
}
.item-wrap .item-name{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 20px;
  width: calc(30% - 10px);
}
.item-wrap .item-price{
  padding-right: 10px;
  width: calc(30% - 10px);
}
.item-wrap .item-date{
  width: calc(40% - 10px);
  font-size: 12px;
  color: #A1A1A1;
}
</style>

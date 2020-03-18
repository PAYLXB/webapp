<template>
  <div class="order">
    <!-- <mt-header title="在线下单"></mt-header> -->
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    <mt-field label="商品价格" placeholder="Input username" v-model="price"></mt-field>
    <mt-field label="下单数量" placeholder="Input username" v-model="munber"></mt-field>
    <mt-field label="作品链接" placeholder="Input username" v-model="link"></mt-field>
    <mt-field label="备注" placeholder="Input username" v-model="mark"></mt-field>
    <mt-button type="primary" @click="handleSubremovemit()" size="large" class="btn">
      <span >立即下单</span>
    </mt-button>
    <div class="text">
      提示：刷单存在一定概率被检测，检测到就怎刷都无效，下单后24小时完成刷量订单，下单后不退不换，请上传正确连接！
    </div>
        <!-- <Footbar></Footbar> -->
    </div>
</template>
<script>
// import Footbar from "../../components/footBar/footBar"
export default {
  data() {
    return {
      price:"",
      munber:"",
      link:"",
      mark:"",

      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
//   components:{Footbar},
  methods: {
     onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
    },

  watch: {
  }
};
</script>

<style scoped>
.order{
    background: #eee;
}


.btn {
  width: 90%;
  /* height: 100px; */
  margin: 10% 0 10% 5%;
  border-radius: 50px;
  background: linear-gradient(to right,#2f89d3,#8db5f1);
}

.text{
  padding: 40px 20px;
  background: #bbd3f7;
  color: #0d84e6;
}
</style>

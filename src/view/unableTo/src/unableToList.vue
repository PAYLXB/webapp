<template>
  <div class="unableList">
    <mt-header :title="$route.meta.name">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link> -->
      <mt-button slot="right">
        <mt-badge size="normal" @click.native="addList">新增</mt-badge>
      </mt-button>
    </mt-header>
     <div class='contBox'>
    <selection :options="optionList" @search="getCarList" />
    <ul>
      <li v-for="item in list" :key="item.plateCode">
        <div class="vfh">
          <h4 class="plateCode">{{item.plateCode}}</h4>
          <span class="time">{{$fiflter.format(item.createTime,'yyyy-MM-dd HH:mm:ss')}}</span>
        </div>
        <span>{{item.enterpriseName}}</span>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import selection from "../../../components/selection/selection";
import { findNotInstallRecordInfoList } from "../../../API/index";
import { Indicator } from "mint-ui";
export default {
  mounted() {
    this.search({});
    console.log(88);
  },
  components: {
    selection
  },
  data() {
    return {
      optionList: [{ name: "车牌号", index: 0 }, { name: "ICCID", index: 1 }],
      list: []
    };
  },
  methods: {
    getCarList(val) {
      this.search({
        plateCode: val.plateCode,
        ICCID: val.iccid
      });
    },
    addList() {
      this.$router.push("unableToAdd");
    },
    /**
     * 搜索
     */
    search(data) {
      this.$method.loadOpen();
      findNotInstallRecordInfoList(data).then(res => {
        this.list = res.data ? res.data.records : [];
        if (res.errorCode == 208) {
          this.$method.messageBox();
        }
        this.$method.loadClose();
      });
    }
  }
};
</script>

<style  lang='less'>
.unableList {
  height: 100%;
  .mint-header {
    background-color: #1495eb;
  }

  ul {
    height: 100%;
    overflow: scroll;
    li {
      padding: 30px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      .vfh {
        margin-bottom: 20px;
        overflow: hidden;
      }
      span {
        color: #999999;
        font-size: 30px;
      }
      .plateCode {
        float: left;
        font-size: 36px;
        color: #000;
      }
      .time {
        float: right;
      }
    }
  }
}
</style>
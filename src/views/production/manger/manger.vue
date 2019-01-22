<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" class="slist">
    <el-tab-pane label="裁单明细" name="first" class="dmit">
      <PlanInformation ref="planInformation" :rowInformation="rowInformation"/>
    </el-tab-pane>
    <el-tab-pane label="裁单查询" name="second" class="dmit">
      <PlanSearch @setInformation="getInformation"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import PlanSearch from './planSearch'
import PlanInformation from './planInformation'
export default {
  components: {
    PlanSearch,
    PlanInformation
  },
  data () {
    return {
      activeName: 'second',
      rowInformation: {
        index: 0,
        rowData: {
          status: '0',
          groups: '缝制组一组/缝制组二组',
          styles: '款式001',
          orders: '订单001',
          ordersNum: '950',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      }
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    getInformation (index, rowData) {
      this.activeName = 'first'
      this.rowInformation.index = index
      this.rowInformation.rowData = rowData
      this.$refs['planInformation'].setInformationMd()
    }
  }
}
</script>
<style lang='scss'>
// .slist {
//   .dmit .el-tabs__item {
//     width: 20px;
//     height: 120px;
//     white-space:normal;
//     word-break:break-all;
//     word-wrap:break-word;
//     line-height:normal;
//     text-align: center;
//   }
// }
// .slist #tab-second {
//   padding-top: 20px;
// }
// .plan-tab .el-tabs__item.is-active,
// .plan-tab .el-tabs__item:hover {
//   color: #ffd04b;
// }
// .el-tabs__active-bar {
//   background-color: #ffd04b;
// }
</style>

<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" class="receipt-tab">
    <el-tab-pane label="入库单查询" name="first">
      <ReceiptSearch @setInReceipt='setInReceipt'/>
    </el-tab-pane>
    <el-tab-pane label="入库单明细" name="second">
      <ReceiptInformation ref="receiptDetails" :rowInReceipt='rowInReceipt'/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ReceiptSearch from './receiptSearch'
import ReceiptInformation from './receiptInformation'
export default {
  components: {
    ReceiptSearch,
    ReceiptInformation
  },
  data () {
    return {
      activeName: 'first',
      rowInReceipt: {
        index: 0,
        rowData: {
          inOrder: '19011800001',
          inWarePosition: 'A仓',
          inStartTime: '2019-01-02',
          wareName: '员工1',
          inName: '员工2'
        }
      }
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    setInReceipt (index, rowData) {
      this.activeName = 'second'
      this.rowInReceipt.index = index
      this.rowInReceipt.rowData = rowData
      this.$refs['receiptDetails'].setReceiptDetails()
    }
  }
}
</script>
<style lang='scss' scoped>
.receipt-tab >>> .el-tabs--left .el-tabs__item.is-left {
  width: 20px;
  height: 120px;
  white-space:normal;
  word-break:break-all;
  word-wrap:break-word;
  line-height:normal;
  text-align: center;
}
.receipt-tab #tab-second {
  padding-top: 20px;
}
.receipt-tab .el-tabs__item.is-active,
.receipt-tab .el-tabs__item:hover {
  color: #ffd04b;
}
.el-tabs__active-bar {
  background-color: #ffd04b;
}
</style>

<template>
  <div class="receipt-details">
    <el-row>
      <el-col>
        <p class="search-title">单据信息</p>
        <el-card class="box-card">
          <el-form :inline="true" :model="receiptDetailsForm" ref="receiptDetailsForm" class="bill-form-inline" label-width="100px" label-position="right">
            <el-form-item label="入库单编号：" prop="inOrder">
              <el-input disabled class="info-common" v-model="receiptDetailsForm.inOrder" placeholder="请输入入库单编号"></el-input>
            </el-form-item>
            <el-form-item label="入库仓位：" prop="inWarePosition">
              <el-select disabled class="info-select-common" v-model="receiptDetailsForm.inWarePosition" placeholder="请选择入库仓位">
                <el-option label="A仓" value="a"></el-option>
                <el-option label="B仓" value="b"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始日期：" prop="inStartTime">
              <el-date-picker
                disabled
                class="info-common"
                v-model="receiptDetailsForm.inStartTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择开始日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="仓库人员：" prop="wareName">
              <el-input disabled class="info-common" v-model="receiptDetailsForm.wareName" placeholder="请输入仓库人员"></el-input>
            </el-form-item>
            <el-form-item label="入库人员：" prop="inName">
              <el-input disabled class="info-common" v-model="receiptDetailsForm.inName" placeholder="请输入入库人员"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="search-row">
      <el-col>
        <p class="search-title">单据明细</p>
      </el-col>
      <el-col>
        <el-card>
          <el-tabs v-model="inActiveName" type="card">
            <el-tab-pane label="扎件选择" name="first">
              <el-table
                stripe
                :data="detailsTableData"
                class="receipt-details-table"
                style="width: 100%">
                <el-table-column
                  prop="inStyles"
                  label="款号">
                </el-table-column>
                <el-table-column
                  prop="inProductNum"
                  label="生产单号">
                </el-table-column>
                <el-table-column
                  prop="inSheetNum"
                  label="裁单号">
                </el-table-column>
                <el-table-column
                  prop="inParts"
                  label="部件">
                </el-table-column>
                <el-table-column
                  prop="inColor"
                  label="颜色">
                </el-table-column>
                <el-table-column
                  prop="inSize"
                  label="尺码">
                </el-table-column>
                <el-table-column
                  prop="inType"
                  label="扎类别">
                </el-table-column>
                <el-table-column
                  prop="inTieNum"
                  label="扎号">
                </el-table-column>
                <el-table-column
                  prop="inTieTotal"
                  label="每扎数量">
                </el-table-column>
              </el-table>
              <!-- <el-row type="flex" justify="end" style="margin-top:36px">
                <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
              </el-row> -->
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { receiptDetails } from '../../../utils/planInformationData'
export default {
  data () {
    return {
      inActiveName: 'first',
      receiptDetailsForm: {
        inOrder: '19011800001',
        inWarePosition: 'A仓',
        inStartTime: '2019-01-18',
        wareName: '员工1',
        inName: '员工2'
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      detailsTableData: [{
        inStyles: '款式001',
        inProductNum: 'SC001',
        inSheetNum: 'CS001',
        inParts: '前片',
        inColor: '黑',
        inSize: 180,
        inType: '扎件',
        inTieNum: 1,
        inTieTotal: 10
      },
      {
        inStyles: '款式001',
        inProductNum: 'SC001',
        inSheetNum: 'CS001',
        inParts: '前片',
        inColor: '黑',
        inSize: 185,
        inType: '扎件',
        inTieNum: 2,
        inTieTotal: 10
      },
      {
        inStyles: '款式001',
        inProductNum: 'SC001',
        inSheetNum: 'CS001',
        inParts: '前片',
        inColor: '黑',
        inSize: 185,
        inType: '扎件',
        inTieNum: 3,
        inTieTotal: 10
      },
      {
        inStyles: '款式001',
        inProductNum: 'SC001',
        inSheetNum: 'CS001',
        inParts: '前片',
        inColor: '黑',
        inSize: 185,
        inType: '扎件',
        inTieNum: 4,
        inTieTotal: 10
      }]
    }
  },
  props: {
    rowInReceipt: {
      type: Object,
      default: function () {
        return {

        }
      }
    }
  },
  methods: {
    setReceiptDetails () {
      this.receiptDetailsForm = this.rowInReceipt.rowData
      this.receiptDetailsForm.wareName = '员工1'
      this.detailsTableData = receiptDetails[this.rowInReceipt.index].list
    }
  }
}
</script>
<style lang='scss'>
.bill-form-inline .el-form-item {
  width: 30%;
  margin-right: 0px;
}
.bill-form-inline .el-form-item__content {
  width: 68%;
}
.info-common,
.info-select-common,
.info-common.el-date-editor.el-input {
  width: 100%;
  font-size: 12px;
}
</style>
<style lang='scss' scoped>
.receipt-details{
  .info-row {
    height: 60px;
    background: #ffffff;
    border-radius: 4px;
    .box-card {
      width: 100%;
    }
    .el-col{
      width: 70px;
      div {
        height: 36px;
        border-right: 1px solid #cccccc;
        text-align: center;
        margin-top: 12px;
        cursor: pointer;
      }
    }
  }
  .add{
    color:#7ED321;
  }
  .change{
    color:#4D7CFE;
  }
  .save{
    color:#05DBEB;
  }
  .cannel{
    color: #ffa000;
  }
  .delete{
    color:#FF5773;
  }
  .exit{
    color:#7ED321;
  }
  .search-row {
    margin-top: 20px;
  }
  .search-title {
    text-indent: 16px;
    height: 28px;
    line-height: 28px;
    font-size: 16px;
  }
  .search-title::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    width: 2px;
    height: 16px;
    background: #cccccc;
  }
  .receipt-details-table {
    width: 100%;
    min-height: 340px;
  }
  .receipt-details-table:before {
    background-color: transparent;
  }
}

</style>

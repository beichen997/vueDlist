<template>
  <div class="infomation">
    <el-row type="flex" align="center" class="info-row">
      <el-col>
        <div class="info-icon-div">
          <span class="iconfont icon-ic_xinzeng add"></span>
          <p>新增</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class="iconfont icon-ic_bianji change"></span>
          <p>编辑</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class="iconfont icon-ic_baocun save"></span>
          <p>保存</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class="iconfont icon-ic_quxiao cannel"></span>
          <p>取消</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class="iconfont icon-ic_zuofei delete"></span>
          <p>作废</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class="iconfont icon-ic_tuichu exit"></span>
          <p>退出</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="search-row">
      <el-col>
        <p class="search-title">排单信息</p>
        <el-card class="box-card">
          <el-form :inline="true" :model="formInfoData" ref="formInfoData" class="info-form-inline" label-width="85px" label-position="right">
            <el-form-item label="订单信息：" prop="orders">
              <el-select disabled class="info-select-common" v-model="formInfoData.orders" placeholder="请选择订单信息">
                <el-option label="订单信息一" value="message1"></el-option>
                <el-option label="订单信息二" value="message2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="款式信息：" prop="styles">
              <el-input disabled class="info-common" v-model="formInfoData.styles" placeholder="请输入款式信息"></el-input>
            </el-form-item>
            <el-form-item label="订单数量：" prop="ordersNum">
              <el-input disabled class="info-common" v-model="formInfoData.ordersNum" placeholder="请输入订单数量"></el-input>
            </el-form-item>
            <el-form-item label="订单交期：" prop="lastTime">
              <el-date-picker
                disabled
                class="info-common"
                v-model="formInfoData.lastTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择订单交期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="生产开始：" prop="startTime">
              <el-date-picker
                disabled
                class="info-common"
                v-model="formInfoData.startTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择开始时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="生产结束：" prop="endTime">
              <el-date-picker
                disabled
                class="info-common"
                v-model="formInfoData.endTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="安排组别：" prop="groupsAngle">
              <el-input disabled class="info-common" v-model="formInfoData.groupsAngle" placeholder="请输入安排组别"></el-input>
            </el-form-item>
            <el-form-item label="生产人数：" prop="peopleNum">
              <el-input disabled class="info-common" v-model="formInfoData.peopleNum" placeholder="请输入生产人数"></el-input>
            </el-form-item>
            <el-form-item label="生产天数：" prop="dateNum">
              <el-input disabled class="info-common" v-model="formInfoData.dateNum" placeholder="由子项计算得出"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="search-row">
      <el-col>
        <p class="search-title">计划信息</p>
        <el-card class="box-card">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="groups"
              label="组别">
            </el-table-column>
            <el-table-column
              prop="peopleNum"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="ordersNum"
              label="订单数">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间">
            </el-table-column>
          </el-table>
          <el-row type="flex" justify="end" style="margin-top:36px">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { planData } from '../../../utils/planInformationData'
export default {
  data () {
    return {
      formInfoData: {
        orders: '订单001',
        styles: '款式001',
        ordersNum: '950',
        lastTime: '2019-01-11',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
        groupsAngle: '2',
        peopleNum: '18',
        dateNum: '10'
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      tableData: [{
        groups: '缝制组一组',
        peopleNum: 10,
        ordersNum: 500,
        startTime: '2019-01-02',
        endTime: '2019-01-11'
      },
      {
        groups: '缝制组二组',
        peopleNum: 8,
        ordersNum: 450,
        startTime: '2019-01-02',
        endTime: '2019-01-11'
      }]
    }
  },
  props: {
    rowInformation: {
      type: Object,
      default: function () {
        return {

        }
      }
    }
  },
  methods: {
    buttonType (status) {
      // 0 未审核 1 已审核 2 已完成
      if (status === '0') {
        return 'warning'
      } else if (status === '1') {
        return 'success'
      } else if (status === '2') {
        return 'info'
      }
    },
    setInformationMd () {
      this.formInfoData = this.rowInformation.rowData
      this.formInfoData.lastTime = this.rowInformation.rowData.endTime
      let start = this.rowInformation.rowData.startTime.replace(new RegExp('-', 'gm'), '/')
      let end = this.rowInformation.rowData.endTime.replace(new RegExp('-', 'gm'), '/')
      let startDate = (new Date(start)).getTime()
      let endDate = (new Date(end)).getTime()
      let lastDay = ((endDate - startDate) / 1000 / 60 / 60 / 24) + 1
      this.formInfoData.dateNum = lastDay
      let newTableData = planData()[this.rowInformation.index].planInformationList
      this.tableData = newTableData
      this.formInfoData.groupsAngle = newTableData.length
      let people = 0
      for (let i = 0; i < newTableData.length; i++) {
        people += newTableData[i].peopleNum
      }
      this.formInfoData.peopleNum = people
    }
  },
  watch: {

  }
}
</script>
<style lang='scss'>
.info-form-inline .el-form-item {
  width: 24%;
  margin-right: 0px;
}
.info-form-inline .el-form-item__content {
  width: 58%;
}
.info-common,
.info-select-common,
.info-common.el-date-editor.el-input {
  width: 100%;
  font-size: 12px;
}
</style>
<style lang='scss' scoped>
.infomation{
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
}

</style>

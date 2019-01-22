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
          <el-form :inline="true" :model="formInfoData" ref="formInfoData" class="info-form-inline" label-width="120px" label-position="right">
            <el-form-item label="裁剪单编号：" prop="order">
              <!-- <el-select disabled class="info-select-common" v-model="formInfoData.orders" placeholder="请选择订单信息">
                <el-option label="订单信息一" value="message1"></el-option>
                <el-option label="订单信息二" value="message2"></el-option>
              </el-select> -->
              <el-input disabled class="info-common" v-model="formInfoData.order" placeholder="请输入裁剪单编号"></el-input>
            </el-form-item>
             <el-form-item label='状态：' prop='status'>
              <el-select
                class='search-select-common'
                v-model='formInfoData.status'
                disabled
                placeholder='请选择状态'
              >
                <el-option label='正常' value='shanghai'></el-option>
                <el-option label='禁用' value='beijing'></el-option>
                <el-option label='空白款' value='shanghais'></el-option>

              </el-select>
            </el-form-item>
              <el-form-item label="裁剪单类别：" prop="groups">
              <el-select disabled class="info-select-common" v-model="formInfoData.groups" placeholder="请选择裁剪单类别">
                 <el-option label='上衣' value='shanghai'></el-option>
                <el-option label='短袖' value='beijing'></el-option>
                <el-option label='背心' value='shanghais'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="生产单编号：" prop="lit">
              <el-input disabled class="info-common" v-model="formInfoData.lit" placeholder="请输入款式信息"></el-input>
            </el-form-item>
             <el-form-item label='生产日期：' prop='startTime'>
              <el-date-picker
                disabled
                class='search-common'
                v-model='formInfoData.startTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择开始时间'
              ></el-date-picker>
            </el-form-item>
            <el-form-item label='交货日期：' prop='endTime'>
              <el-date-picker
                disabled
                class='search-common'
                v-model='formInfoData.endTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择结束时间'
              ></el-date-picker>
            </el-form-item>
             <el-form-item label="款式编号：" prop="orders">
              <el-input disabled class="info-common" v-model="formInfoData.orders" placeholder=""></el-input>
            </el-form-item>
             <el-form-item label="款式名称：" prop="styles">
              <el-input disabled class="info-common" v-model="formInfoData.styles" placeholder=""></el-input>
            </el-form-item>
             <el-form-item label="裁单数量：" prop="peopleNum">
              <el-input disabled class="info-common" v-model="formInfoData.peopleNum" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="制卡部门：" prop="group">
              <el-select disabled class="info-select-common" v-model="formInfoData.group" placeholder="请选择裁">
                 <el-option label='一组' value='shanghai'></el-option>
                <el-option label='二组' value='beijing'></el-option>
                <el-option label='三组' value='shanghais'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="床号：" prop="ordersNum">
              <el-input disabled class="info-common" v-model="formInfoData.ordersNum" placeholder="请输入订单数量"></el-input>
            </el-form-item>
            <el-form-item label="扎数量：" prop="dateNum">
              <el-input disabled class="info-common" v-model="formInfoData.dateNum" placeholder=""></el-input>
            </el-form-item>

            <!-- <el-form-item label="描述：" prop="groupsAngle" >
            <div class="dlist">
                <el-input type='textarea' disabled class="info-common"  :autosize="{ minRows: 6, maxRows: 8}" v-model="formInfoData.groupsAngle" placeholder=""></el-input>
            </div>
            </el-form-item> -->
          </el-form>
          <el-form ref='form' :model='form' label-width='120px'>
              <el-form-item label="描述：" prop="groupsAngle" >
                <div class="dlist">
                    <el-input type='textarea' disabled class="info-common"  :autosize="{ minRows: 6, maxRows: 8}" v-model="formInfoData.groupsAngle" placeholder=""></el-input>
                </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="search-row">
      <el-col>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="工序" name="first"><div class="limt"><yaoqiu /></div></el-tab-pane>
          <el-tab-pane label="颜色尺码" name="second"><div class="limt"><fenxi /></div></el-tab-pane>
          <el-tab-pane label="扎件" name="third"><div class="limt"><gongjia/></div></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { planData } from '../../../utils/planInformationData'
import Process from './process'
import yaoqiu from './yaoqiu'
import fenxi from './fenxi'
import gongjia from './gongjia'
export default {
  components: {
    Process,
    yaoqiu,
    fenxi,
    gongjia
  },
  data () {
    return {
      formInfoData: {
        orders: '00034090',
        styles: '款式001',
        ordersNum: '1',
        lastTime: '2019-01-11',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
        groupsAngle: '',
        peopleNum: '45',
        dateNum: '18',
        groups: '',
        status: 'shanghai',
        order: 'CS001',
        lit: 'SC001',
        group: 'shanghai'
      },
      activeName: 'first',
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
    handleClick (tab, event) {
      console.log(tab, event)
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
.mbt{
  width:100%;
}
.mbt .el-form-item{
  width:100%;
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
.groupsAngle{
  width:100%;
}
.limt{
  width:100%;
  min-height:400px;
  background: #fff;
}
.dlist{
  width:95%;
}
</style>

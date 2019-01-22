<template>
  <div class='homepage'>
    <div class='left'>
      <div class='title'>
        <b></b>&nbsp;今日计划
      </div>
      <div>
        <el-table key='tab1' :data='tableData1' style='width: 100%;'>
          <el-table-column prop='status' label='状态'>
            <template slot-scope='scope'>
              <el-button
                round
                :type='buttonType(scope.row.status)'
                size='mini'
              >{{scope.row.status === '0'?'未完成':'已完成'}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop='style' label='款式'></el-table-column>
          <el-table-column prop='name' label='订单'></el-table-column>
          <el-table-column prop='jihuanumber' label='计划数量'></el-table-column>
          <el-table-column prop='success' label='完成数量'></el-table-column>
          <el-table-column prop='startdate' label='计划开始时间'></el-table-column>
          <el-table-column prop='enddate' label='计划结束时间'></el-table-column>
          <el-table-column prop='Satisfied' label='当前进度'></el-table-column>
        </el-table>
        <el-row type='flex' justify='end' style='margin-top:36px'>
          <el-pagination background layout='prev, pager, next' :total='100'></el-pagination>
        </el-row>
      </div>
    </div>
    <div class='right'>
      <div class='right-div1'>
        <div class='title'>
          <b></b>&nbsp;人员安排
        </div>
        <div>
          <el-table key='tab2' :data='tableData2' style='width: 100%'>
            <el-table-column label='组别' width='200px'>
              <template slot-scope='scope'>
                <img class='list' src='../../../assets/image/left.png' alt>
                {{scope.row.names}}
              </template>
            </el-table-column>
            <el-table-column prop='number' label='上班人数'></el-table-column>
            <el-table-column prop='target' label='今日目标'></el-table-column>
            <el-table-column prop='success' label='今日完成'></el-table-column>
          </el-table>
        </div>
      </div>
      <div class='right-div2'>
        <div class='title'>
          <b></b>&nbsp;订单进度
        </div>
        <div>
          <el-table key='tab3' :data='tableData3' style='width: 100%'>
            <el-table-column prop='style' label='款式'></el-table-column>
            <el-table-column prop='number' label='订单'></el-table-column>
            <el-table-column prop='target' label='计划数量'></el-table-column>
            <el-table-column prop='success' label='完成数量'></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intelligenceHome',
  data () {
    return {
      currentPage4: 1,
      tableData1: [
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式001',
          name: '订单001',
          jihuanumber: '1000',
          success: '950',
          Satisfied: '95%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式002',
          name: '订单002',
          jihuanumber: '10000',
          success: '2500',
          Satisfied: '25%'
        },
        {
          status: '1',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式003',
          name: '订单003',
          jihuanumber: '2000',
          success: '2000',
          Satisfied: '100%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式004',
          name: '订单004',
          jihuanumber: '1000',
          success: '100',
          Satisfied: '10%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式005',
          name: '订单005',
          jihuanumber: '10000',
          success: '100',
          Satisfied: '1%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式006',
          name: '订单006',
          jihuanumber: '2000',
          success: '1000',
          Satisfied: '50%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式007',
          name: '订单007',
          jihuanumber: '2000',
          success: '1000',
          Satisfied: '50%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式008',
          name: '订单008',
          jihuanumber: '1000',
          success: '950',
          Satisfied: '95%'
        },
        {
          status: '0',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式009',
          name: '订单009',
          jihuanumber: '10000',
          success: '2500',
          Satisfied: '25%'
        },
        {
          status: '1',
          startdate: '2019-01-02',
          enddate: '2019-01-11',
          style: '款式010',
          name: '订单010',
          jihuanumber: '2000',
          success: '2000',
          Satisfied: '100%'
        }
      ],
      tableData2: [
        {
          names: '裁剪一组',
          number: '12',
          target: 1000,
          success: 950
        },
        {
          names: '缝制一组',
          number: '15',
          target: 10000,
          success: 2500
        },
        {
          names: '缝制二组',
          number: '15',
          target: 2000,
          success: 1000
        },
        {
          names: '包装一组',
          number: '12',
          target: 1000,
          success: 100
        }
      ],
      tableData3: [
        {
          style: '款式001',
          number: '订单001',
          target: 1000,
          success: 950
        },
        {
          style: '款式002',
          number: '订单002',
          target: 10000,
          success: 2500
        },
        {
          style: '款式003',
          number: '订单003',
          target: 2000,
          success: 1000
        },
        {
          style: '款式004',
          number: '订单004',
          target: 1000,
          success: 100
        },
        {
          style: '款式005',
          number: '订单005',
          target: 10000,
          success: 100
        }
      ]
    }
  },
  methods: {
    handleEdit () {},
    buttonType (status) {
      // 0 未审核 1 已审核 2 已完成
      if (status === '0') {
        return 'warning'
      } else if (status === '1') {
        return 'success'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.homepage {
  display: flex;
  justify-content: space-between;
  .left {
    width: 60%;
    min-height: 640px;
    background: #fff;
    padding-bottom: 60px;
  }
  .right {
    width: 39%;
    margin-left: 1%;
    .right-div1,
    .right-div2 {
      height: 365px;
      background: #fff;
    }
    .right-div2 {
      margin-top: 10px;
    }
  }
}
.title {
  height: 29px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 0px;
  color: #303133;
  background: #f4f4f4;
}
b {
  border-left: 2px solid #333;
}
.sizecolor {
  display: block;
  text-align: center;
  color: #fff;
  width: 72px;
  height: 25px;
  background-color: #ffa000;
  border-radius: 12px;
}
.block {
  padding: 20px;
  background: #fff;
  text-align: right;
}
.list {
  vertical-align: middle;
}
</style>

<template>
  <div class='lit'>
    <el-row type='flex' align='center' class='info-row'>
      <el-col>
        <div class='info-icon-div'>
          <span class='iconfont icon-ic_xinzeng add'></span>
          <p>选择部件</p>
        </div>
      </el-col>
    </el-row>
    <el-table :data='tableData' style='width: 100%'>
      <!-- <el-table-column
        prop='date'
        label='序号'
        >
      </el-table-column>-->
      <el-table-column prop='name1' label='工序编码'></el-table-column>
      <el-table-column prop='name2' label='工序名称'></el-table-column>
      <el-table-column prop='name3' label='部件'></el-table-column>
      <el-table-column prop='name4' label='级别'></el-table-column>
      <el-table-column prop='name5' label='级别单位'></el-table-column>
      <el-table-column prop='name6' label='校准共识'></el-table-column>
      <el-table-column prop='name7' label='工序组'></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name1: '000006',
          name2: '修理（毛里）',
          name3: '鞋子',
          name4: '',
          name5: '2135',
          name6: '3',
          name7: '1039',
          name8: '生产开始1',
          name9: false,
          name10: ''
        },
        {
          name1: '000007',
          name2: '刷新包白胶',
          name3: '鞋子',
          name4: '5',
          name5: '5',
          name6: '3',
          name7: '1039',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '000008',
          name2: '钉中底',
          name3: '鞋子',
          name4: '6',
          name5: '2135',
          name6: '3',
          name7: '1039',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '000009',
          name2: '前帮机',
          name3: '鞋子',
          name4: '4',
          name5: '4',
          name6: '15.198',
          name7: '1039',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '0000010',
          name2: '中帮',
          name3: '鞋子',
          name4: '',
          name5: '0',
          name6: '0',
          name7: '1039',
          name8: '',
          name9: false,
          name10: ''
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
.lit {
  .info-row {
    height: 60px;
    background: #ffffff;
    border-radius: 4px;
    .box-card {
      width: 100%;
    }
    .el-col {
      width: 150px;
      div {
        height: 36px;
        border-right: 1px solid #cccccc;
        text-align: center;
        margin-top: 12px;
        cursor: pointer;
      }
    }
  }
  .add {
    color: #7ed321;
  }
  .change {
    color: #4d7cfe;
  }
  .save {
    color: #05dbeb;
  }
  .cannel {
    color: #ffa000;
  }
  .delete {
    color: #ff5773;
  }
  .exit {
    color: #7ed321;
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
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 2px;
    height: 16px;
    background: #cccccc;
  }
}
</style>

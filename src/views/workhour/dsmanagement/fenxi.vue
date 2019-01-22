<template>
  <div class='lit'>
    <el-row type='flex' align='center' class='info-row'>
      <el-col>
        <div class='info-icon-div'>
          <span class='iconfont icon-ic_xinzeng add'></span>
          <p>新增</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_bianji change'></span>
          <p>插入</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_baocun save'></span>
          <p>删除当前记录</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_zuofei delete'></span>
          <p>全删</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_tuichu exit'></span>
          <p>工序选择</p>
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
      <el-table-column prop='name6' label='工序组'></el-table-column>
      <el-table-column prop='name7' label='机器'></el-table-column>
      <el-table-column prop='name8' label='检查点名称'></el-table-column>
      <el-table-column label='最后工序'>
        <template slot-scope='scope'>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model='scope.row.name9'></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop='name10' label='备注'></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name1: '000001',
          name2: '工序1',
          name3: '前片（主）',
          name4: 'A',
          name5: '0.10',
          name6: '主工序组',
          name7: 'test1',
          name8: '生产开始1',
          name9: false,
          name10: ''
        },
        {
          name1: '000002',
          name2: '工序2',
          name3: '前片（主）',
          name4: 'A',
          name5: '0.20',
          name6: '主工序组',
          name7: 'test1',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '000003',
          name2: '工序3',
          name3: '前片（主）',
          name4: 'A',
          name5: '0.30',
          name6: '主工序组',
          name7: 'test1',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '000004',
          name2: '工序4',
          name3: '前片（主）',
          name4: 'A',
          name5: '0.40',
          name6: '主工序组',
          name7: '流道机',
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

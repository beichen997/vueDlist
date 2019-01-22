<template>
  <div class='lit'>
    <el-row type='flex' align='center' class='info-row'>
      <el-col>
        <div class='info-icon-div'>
          <span class='iconfont icon-ic_xinzeng add'></span>
          <p>生成</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_bianji change'></span>
          <p>全选</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_bianji change'></span>
          <p>全不选</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_bianji change'></span>
          <p>打印</p>
        </div>
      </el-col>
    </el-row>
    <el-table :data='tableData' style='width: 100%'>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <!-- <el-table-column
        prop='date'
        label='序号'
        >
      </el-table-column>-->
      <el-table-column prop='name1' label='条码'></el-table-column>
      <el-table-column prop='' label='卡号'></el-table-column>
      <el-table-column prop='name2' label='扎号'></el-table-column>
      <el-table-column prop='name3' label='部件'></el-table-column>
      <el-table-column prop='name5' label='颜色'></el-table-column>
      <el-table-column prop='' label='缸号'></el-table-column>
      <el-table-column prop='' label='规格'></el-table-column>
      <el-table-column prop='name6' label='尺码'></el-table-column>
      <el-table-column prop='name7' label='每扎数量'></el-table-column>
      <el-table-column label='是否已拍卡'>
          <template slot-scope='scope'>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model='scope.row.name9'></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name1: '00000000735586',
          name2: '00001',
          name3: '鞋子',
          name4: '',
          name5: '白',
          name6: '39',
          name7: '2',
          name8: '生产开始1',
          name9: false,
          name10: ''
        },
        {
          name1: '00000000735587',
          name2: '00002',
          name3: '鞋子',
          name4: '5',
          name5: '白',
          name6: '39',
          name7: '2',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '00000000735588',
          name2: '00003',
          name3: '鞋子',
          name4: '6',
          name5: '白',
          name6: '39',
          name7: '2',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '00000000735589',
          name2: '00004',
          name3: '鞋子',
          name4: '4',
          name5: '白',
          name6: '39',
          name7: '2',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '00000000735590',
          name2: '00005',
          name3: '鞋子',
          name4: '',
          name5: '红1111',
          name6: '39',
          name7: '2',
          name8: '',
          name9: false,
          name10: ''
        },
        {
          name1: '00000000735591',
          name2: '00006',
          name3: '鞋子',
          name4: '',
          name5: '红1111',
          name6: '39',
          name7: '2',
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

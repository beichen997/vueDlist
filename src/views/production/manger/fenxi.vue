<template>
  <div class='lit'>
    <el-row type='flex' align='center' class='info-row'>
      <el-col>
        <div class='info-icon-div'>
          <span class='iconfont icon-ic_xinzeng add'></span>
          <p>条件生成</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_bianji change'></span>
          <p>条件选择</p>
        </div>
      </el-col>
      <el-col>
        <div>
          <span class='iconfont icon-ic_baocun save'></span>
          <p>尺码选择</p>
        </div>
      </el-col>
    </el-row>
    <el-table :data='tableData' style='width: 100%'>
      <!-- <el-table-column
        prop='date'
        label='序号'
        >
      </el-table-column>-->
      <el-table-column prop='name1' label='颜色'></el-table-column>
      <el-table-column prop='name2' label='客户颜色'></el-table-column>
      <el-table-column prop='name3' label='尺码'></el-table-column>
      <el-table-column prop='name4' label='数量'></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name1: '白',
          name2: '白色',
          name3: '39',
          name4: '8'
        },
        {
          name1: '白',
          name2: '白色',
          name3: '40',
          name4: '10'
        },
        {
          name1: '红1111',
          name2: '红色',
          name3: '39',
          name4: '12'
        },
        {
          name1: '红1111',
          name2: '红色',
          name3: '40',
          name4: '15'
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

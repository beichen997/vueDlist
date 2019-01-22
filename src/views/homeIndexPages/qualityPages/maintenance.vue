<template>
  <div class='maintenance'>
    <div class='left'>
      <div class='title'>
        <b></b>&nbsp;疵点分类
      </div>
      <div class='treelist'>
        <el-menu
          default-active='2-1'
          active-text-color='rgb(255, 208, 75)'
          class='el-menu-vertical-demo'
        >
          <el-menu-item index='1'>
            <i class='el-icon-menu'></i>
            <span slot='title'>波司登</span>
          </el-menu-item>
          <el-submenu index='2'>
            <template slot='title'>
              <i class='el-icon-location'></i>
              <span>雪上飞</span>
            </template>
            <el-menu-item index='2-1'>
              <i class='el-icon-location'></i>
              <span slot='title'>分类一</span>
            </el-menu-item>
            <el-menu-item index='2-2'>
              <i class='el-icon-location'></i>
              <span slot='title'>分类二</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index='3'>
            <i class='el-icon-document'></i>
            <span slot='title'>冰洁</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class='right'>
      <ul class='tlist'>
        <li>
          <div>
            <i class='add iconfont icon-ic_xinzeng'></i>
            <p>新增</p>
          </div>
        </li>
        <li class>
          <div>
            <i class='change iconfont icon-ic_bianji'></i>
            <p>编辑</p>
          </div>
        </li>
        <li class>
          <div>
            <i class='save iconfont icon-ic_baocun'></i>
            <p>保存</p>
          </div>
        </li>
        <li class>
          <div>
            <i class='delete iconfont icon-ic_zuofei'></i>
            <p>作废</p>
          </div>
        </li>
        <li class>
          <div>
            <i class='exit iconfont icon-ic_tuichu'></i>
            <p>退出</p>
          </div>
        </li>
      </ul>
      <div>
        <p class='title' style='margin-top:20px'>
          <b></b>&nbsp;疵点信息
        </p>
        <el-card class='box-card'>
          <el-form
            :inline='true'
            :model='maintenanceForm'
            ref='maintenanceForm'
            class='maintenance-form-inline'
            label-width='85px'
            label-position='right'
          >
            <el-form-item label='疵点品类：' prop='category'>
              <el-select
                disabled
                class='maintenance-common'
                v-model='maintenanceForm.category'
                placeholder='请选择疵点品类'
              >
                <el-option label='雪上飞' value='category1'></el-option>
                <el-option label='冰洁' value='category2'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='疵点分类：' prop='classification'>
              <el-select
                disabled
                class='maintenance-common'
                v-model='maintenanceForm.classification'
                placeholder='请选择疵点分类'
              >
                <el-option label='分类一' value='classification1'></el-option>
                <el-option label='分类二' value='classification2'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='疵点编号：' prop='number'>
              <el-input
                disabled
                class='maintenance-common'
                v-model='maintenanceForm.number'
                placeholder='请输入疵点编号'
              ></el-input>
            </el-form-item>
            <el-form-item label='疵点名称：' prop='names'>
              <el-input
                disabled
                class='maintenance-common'
                v-model='maintenanceForm.names'
                placeholder='请输入疵点名称'
              ></el-input>
            </el-form-item>
            <el-form-item label='是否停用：' prop='discontinue'>
              <el-radio-group disabled v-model='maintenanceForm.discontinue'>
                <el-radio label='是'>是</el-radio>
                <el-radio label='否'>否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
      <div>
        <p class='title' style='margin-top:20px'>
          <b></b>&nbsp;疵点列表
        </p>
        <el-card class='box-card'>
          <el-table :data='tableData' style='width: 100%' type='index'>
            <el-table-column prop='number' label='疵点编号'></el-table-column>
            <el-table-column prop='names' label='疵点名称'></el-table-column>
            <el-table-column prop='discontinue' label='是否停用'></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="seeRow(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row type='flex' justify='end' style='margin-top:36px'>
            <el-pagination background layout='prev, pager, next' :total='100'></el-pagination>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'maintenance',
  data () {
    return {
      maintenanceForm: {
        category: 'category1',
        classification: 'classification1',
        number: '0101',
        names: '疵点1',
        discontinue: '是'
      },
      tableData: [
        {
          number: '0101',
          names: '疵点1',
          discontinue: '是'
        },
        {
          number: '0102',
          names: '疵点2',
          discontinue: '是'
        },
        {
          number: '0103',
          names: '疵点3',
          discontinue: '否'
        },
        {
          number: '0104',
          names: '疵点4',
          discontinue: '否'
        }
      ]
    }
  },
  methods: {
    seeRow (index, rowData) {
      this.maintenanceForm.number = rowData.number
      this.maintenanceForm.names = rowData.names
      this.maintenanceForm.discontinue = rowData.discontinue
      console.log(index)
      console.log(rowData)
    }
  }
}
</script>
<style lang='scss'>
.maintenance-form-inline .el-form-item {
  width: 32%;
  margin-right: 0px;
}
.maintenance-form-inline .el-form-item__content {
  width: 66%;
}
.maintenance-common {
  width: 100%;
}
</style>
<style lang='scss' scoped>
.maintenance {
  .left {
    width: 280px;
    float: left;
    .treelist {
      min-height: 695px;
      background: #fff;
    }
  }
  .right {
    margin-left: 300px;
    .tlist {
      display: flex;
      justify-content: start;
      background: #ffff;
      li {
        width: 70px;
        height: 60px;
        text-align: center;
        div {
          height: 36px;
          border-right: 1px solid #cccccc;
          text-align: center;
          margin-top: 12px;
          cursor: pointer;
        }
        p {
          font-size: 12px;
          margin: 0;
          padding: 0;
        }
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
  .delete {
    color: #ff5773;
  }
  .exit {
    color: #7ed321;
  }
  .title {
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #303133;
  }
  b {
    border-left: 2px solid #ccc;
  }
}
</style>

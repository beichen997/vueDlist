<template>
  <div>
    <el-row>
      <el-col>
        <p class='search-title'>查询条件</p>
        <el-card class='box-card'>
          <el-form
            :inline='true'
            :model='inReceiptForm'
            :rules='inReceiptFormRules'
            ref='inReceiptForm'
            class='receiptsearch-form-inline'
            label-width='100px'
            label-position='right'
          >
            <el-form-item label='入库单编号：' prop='inOrder' class='search-item'>
              <el-input class='in-search-common' v-model='inReceiptForm.inOrder' placeholder='请入库单编号'></el-input>
            </el-form-item>
            <el-form-item label='入库仓位：' prop='inWarePosition'>
              <el-select
                class='in-search-select-common'
                v-model='inReceiptForm.inWarePosition'
                placeholder='请选择入库仓位'
              >
                <el-option label='A仓' value='a'></el-option>
                <el-option label='B仓' value='b'></el-option>
                <el-option label='c仓' value='c'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='开始时间：' prop='inStartTime'>
              <el-date-picker
                class='in-search-common'
                v-model='inReceiptForm.inStartTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择开始时间'
              ></el-date-picker>
            </el-form-item>
            <el-form-item label='结束时间：' prop='inEndTime'>
              <el-date-picker
                class='in-search-common'
                v-model='inReceiptForm.inEndTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择结束时间'
              ></el-date-picker>
            </el-form-item>
            <el-form-item class='last-item'>
              <el-row type='flex' justify='start'>
                <el-button @click='resetForm("inReceiptForm")'>清空条件</el-button>
                <el-button type='warning' @click='submitForm("inReceiptForm")'>搜索数据</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class='search-row'>
      <el-col>
        <p class='search-title'>入库单数据</p>
        <el-card class='box-card'>
          <el-table :data='inTableData' class="in-receipt-table">
            <el-table-column prop='inOrder' label='单据编号'></el-table-column>
            <el-table-column prop='inStartTime' label='入库日期'></el-table-column>
            <el-table-column prop='inWarePosition' label='入库仓位'></el-table-column>
            <el-table-column prop='inName' label='入库人员'></el-table-column>
            <el-table-column prop='inTotal' label='数量'></el-table-column>
            <el-table-column label='操作'>
              <template slot-scope='scope'>
                <el-button
                  size='mini'
                 @click="seeDetails(scope.$index, scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- <el-row type='flex' justify='end' style='margin-top:36px'>
            <el-pagination background layout='prev, pager, next' :total='100'></el-pagination>
          </el-row> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inReceiptFormRules: {
        inOrder: [
          { required: false, message: '请输入入库编号', trigger: 'blur' }
        ],
        inWarePosition: [
          { required: false, message: '请选择仓位', trigger: 'change' }
        ],
        inStartTime: [
          { required: false, message: '请选择开始时间', trigger: 'change' }
        ],
        inEndTime: [
          { required: false, message: '请选择结束时间', trigger: 'change' }
        ]
      },
      inReceiptForm: {
        inOrder: '',
        inWarePosition: '',
        inStartTime: '',
        inEndTime: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      inTableData: [
        {
          inOrder: '19011800001',
          inStartTime: '2019-01-18',
          inWarePosition: 'A仓',
          inName: '员工2',
          inTotal: '40'
        },
        {
          inOrder: '19011800002',
          inStartTime: '2019-01-03',
          inWarePosition: 'A仓',
          inName: '员工2',
          inTotal: '50'
        },
        {
          inOrder: '19011800003',
          inStartTime: '2019-01-04',
          inWarePosition: 'B仓',
          inName: '员工2',
          inTotal: '50'
        },
        {
          inOrder: '19011800004',
          inStartTime: '2019-01-05',
          inWarePosition: 'C仓',
          inName: '员工3',
          inTotal: '100'
        }
      ]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    seeDetails (index, rowData) {
      this.$emit('setInReceipt', index, rowData)
    }
  }
}
</script>
<style lang='scss'>
.receiptsearch-form-inline .el-form-item {
  width: 24%;
  margin-right: 0px;
}
.receiptsearch-form-inline .last-item {
  margin-left: 100px;
}
.receiptsearch-form-inline .el-form-item__content {
  width: 64%;
}

.in-search-common,
.in-search-select-common,
.in-search-common.el-date-editor.el-input {
  width: 100%;
  font-size: 12px;
}
</style>

<style lang='scss' scoped>
.search-row {
  margin-top: 20px;
}
.search-title {
  text-indent: 16px;
  height: 28px;
  line-height: 28px;
  font-size: 16px;
  position: relative;
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
.in-receipt-table {
  width: 100%;
  min-height: 340px;
}
.in-receipt-table.el-table::before {
  background-color: transparent;
}
</style>

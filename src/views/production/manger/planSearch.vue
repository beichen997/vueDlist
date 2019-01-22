<template>
  <div>
    <el-row>
      <el-col>
        <p class='search-title'>查询条件</p>
        <el-card class='box-card'>
          <el-form
            :inline='true'
            :model='formInline'
            :rules='formInlineRules'
            ref='formInline'
            class='plansearch-form-inline'
            label-width='120px'
            label-position='right'
          >
            <el-form-item label='裁剪单编号：' prop='styles' class='search-item'>
              <el-input class='search-common' v-model='formInline.styles' placeholder='请输入款式'></el-input>
            </el-form-item>
            <el-form-item label='开始时间：' prop='startTime'>
              <el-date-picker
                class='search-common'
                v-model='formInline.startTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择开始时间'
              ></el-date-picker>
            </el-form-item>
            <el-form-item label='结束时间：' prop='endTime'>
              <el-date-picker
                class='search-common'
                v-model='formInline.endTime'
                :picker-options='pickerOptions'
                type='date'
                placeholder='请选择结束时间'
              ></el-date-picker>
            </el-form-item>
            <el-form-item label='生产单编号：' prop='orders'>
              <el-input class='search-common' v-model='formInline.orders' placeholder='请输入生产单编号'></el-input>
            </el-form-item>
             <el-form-item label='款式编号：' prop='state'>
              <el-input class='search-common' v-model='formInline.state' placeholder='请输入款式编号'></el-input>
            </el-form-item>
            <!-- <el-form-item label='组别：' prop='groups'>
              <el-input class='search-common' v-model='formInline.groups' placeholder='请输入组别'></el-input>
            </el-form-item> -->
            <el-form-item label='部件：' prop='style'>
              <el-select
                class='search-select-common'
                v-model='formInline.style'
                placeholder='请选择部件'
              >
                <!-- <el-option label='上衣' value='shanghai'></el-option>
                <el-option label='短袖' value='beijing'></el-option>
                <el-option label='背心' value='shanghais'></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label='裁剪单状态：' prop='status'>
              <el-select
                class='search-select-common'
                v-model='formInline.status'
                placeholder='请选择状态'
              >
                <el-option label='正常' value='shanghai'></el-option>
                <el-option label='完成' value='beijing'></el-option>
                <el-option label='废弃' value='shanghais'></el-option>
                <el-option label='错误' value='hais'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class='last-item'>
              <el-row type='flex' justify='start'>
                <el-button @click='resetForm("formInline")'>清空条件</el-button>
                <el-button type='warning' @click='submitForm("formInline")'>检索数据</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class='search-row'>
      <el-col>
        <p class='search-title'>排单数据</p>
        <el-card class='box-card'>
          <el-table :data='tableData' style='width: 100%'>
            <el-table-column prop='status' label='状态'>
              <template slot-scope='scope'>
                <el-button
                  round
                  :type='buttonType(scope.row.status)'
                  size='mini'
                >{{scope.row.status=='0'?'新建':scope.row.status=='1'?'已审核':'已完成'}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop='order' label='裁剪单编号'></el-table-column>
            <el-table-column prop='lit' label='生产单编号'></el-table-column>
            <el-table-column prop='orders' label='款号'></el-table-column>
            <el-table-column prop='styles' label='款式名称'></el-table-column>
            <el-table-column prop='groups' label='裁剪单数量'></el-table-column>
            <el-table-column prop='startTime' label='创建时间'></el-table-column>
            <el-table-column prop='ordersNum' label='版本号'></el-table-column>
            <!-- <el-table-column prop='endTime' label='结束时间'></el-table-column> -->
            <el-table-column label='操作'>
              <template slot-scope='scope'>
                <el-button
                  size='mini'
                 @click="seeDetails(scope.$index, scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row type='flex' justify='end' style='margin-top:36px'>
            <el-pagination background layout='prev, pager, next' :total='100'></el-pagination>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInlineRules: {
        styles: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        orders: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        groups: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        status: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ],
        startTime: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ],
        endTime: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      formInline: {
        styles: '',
        orders: '',
        status: '',
        startTime: '',
        endTime: '',
        style: '',
        state: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      tableData: [
        {
          order: 'CS001',
          lit: 'SC001',
          status: '0',
          groups: '100',
          styles: '款式001',
          orders: '00034090',
          ordersNum: '1',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          order: 'CS002',
          lit: 'SC002',
          status: '0',
          groups: '500',
          styles: '款式002',
          orders: '00034091',
          ordersNum: '2',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          order: 'CS003',
          lit: 'SC003',
          status: '0',
          groups: '500',
          styles: '款式003',
          orders: '00034092',
          ordersNum: '1',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          order: 'CS004',
          lit: 'SC004',
          status: '0',
          groups: '300',
          styles: '款式004',
          orders: '00034093',
          ordersNum: '1',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        },
        {
          order: 'CS005',
          lit: 'SC005',
          status: '0',
          groups: '500',
          styles: '款式005',
          orders: '00034094',
          ordersNum: '3',
          startTime: '2019-01-02',
          endTime: '2019-01-11'
        }
      ]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
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
    seeDetails (index, rowData) {
      this.$emit('setInformation', index, rowData)
    }
  }
}
</script>
<style lang='scss'>
.plansearch-form-inline .el-form-item {
  width: 24%;
  margin-right: 0px;
}
.plansearch-form-inline .last-item {
  margin-left: 85px;
}
.plansearch-form-inline .el-form-item__content {
  width: 64%;
}
.search-common,
.search-select-common,
.search-common.el-date-editor.el-input {
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
</style>

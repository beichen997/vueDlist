<template>
  <div class='authSetting'>
    <p class='search-title'>查询条件</p>
    <el-card>
      <el-row class="authSetting-header">
        <el-form
          :model='authForm'
          :inline='true'
          :rules='authFormRules'
          ref='authForm'
          label-width='100px'
          class='authSetting-form'
        >
          <el-form-item label='角色：' prop='role'>
            <el-input type='text' v-model='authForm.role' placeholder="请输入角色"></el-input>
          </el-form-item>
          <el-form-item label='用户名：' prop='userName'>
            <el-input type='text' v-model='authForm.userName' placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label='人员：' prop='peopleNum'>
            <el-input v-model.number='authForm.peopleNum' placeholder="请输入人员"></el-input>
          </el-form-item>
          <el-row>
            <el-form-item class="authSetting-last-item">
              <el-button @click='resetForm("authForm")'>清空条件</el-button>
              <el-button type='primary' @click='submitForm("authForm")'>搜索数据</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </el-row>
    </el-card>
    <el-card class="authSetting-edit-card">
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
            <span class="iconfont icon-ic_zuofei delete"></span>
            <p>删除</p>
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
            <span class="iconfont icon-ic_tuichu exit"></span>
            <p>退出</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-row type="flex" justify="space-between" class="authSetting-foot">
      <el-col style="marginRight: 20px;">
        <el-row>
          <el-col>
            <p class='search-title'>角色</p>
            <el-card>
              <el-table
                :data="roleTable"
                style="width: 100%;minHeight: 300px;">
                <el-table-column
                  prop="roleCode"
                  label="角色代码">
                </el-table-column>
                <el-table-column
                  prop="roleName"
                  label="角色名称">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
          <el-col class="authSetting-user-col">
            <p class='search-title'>用户</p>
            <el-card class="user-card-button">
              <el-row type="flex" align="middle" style="height: 100%;padding: 0 20px;">
                <el-button type="primary">添加用户</el-button>
                <el-button type="primary">修改用户</el-button>
              </el-row>
            </el-card>
            <el-card>
              <el-table
                ref="userTable"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                :data="userTable"
                style="width: 100%;minHeight: 300px;">
                <el-table-column
                  prop="userCode"
                  label="用户代码">
                </el-table-column>
                <el-table-column
                  prop="userName"
                  label="用户名">
                </el-table-column>
                <el-table-column
                  prop="userFullName"
                  label="员工姓名">
                </el-table-column>
                <el-table-column
                  prop="stop"
                  label="停用">
                  <template slot-scope="scope">
                    <el-checkbox v-model='scope.row.stop' :disabled='scope.row.disabled'></el-checkbox>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row>
          <el-col>
            <p class='search-title'>窗口</p>
            <el-card>
              <el-table
                ref="windowTable"
                tooltip-effect="dark"
                :data="windowTable"
                style="width: 100%;minHeight: 742px;">
                <el-table-column
                  prop="windowCode"
                  label="窗口代码">
                </el-table-column>
                <el-table-column
                  prop="windowName"
                  label="窗口名称">
                </el-table-column>
                <el-table-column
                  prop="moduleName"
                  label="模块名称">
                </el-table-column>
                <el-table-column
                  prop="authName"
                  label="权限名称">
                </el-table-column>
                <el-table-column
                  prop="stop"
                  label="值">
                  <template slot-scope="scope">
                    <el-checkbox v-model='scope.row.stop' :disabled='scope.row.disabled'></el-checkbox>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'authSetting',
  data () {
    return {
      authForm: {
        role: '',
        userName: '',
        peopleNum: ''
      },
      authFormRules: {
        role: [{ required: false, message: '请输入角色', trigger: 'blur' }],
        userName: [{ required: false, message: '请输入用户名', trigger: 'blur' }],
        peopleNum: [{ required: false, message: '请输入人员', trigger: 'blur' }]
      },
      roleTable: [{
        roleCode: '001',
        roleName: '操作员'
      }, {
        roleCode: '002',
        roleName: '管理员'
      }],
      userTable: [{
        userCode: '00101',
        userName: 'zs',
        userFullName: '张三',
        stop: false,
        disabled: false
      }, {
        userCode: '00102',
        userName: 'ls',
        userFullName: '李四',
        stop: false,
        disabled: false
      }, {
        userCode: '00103',
        userName: 'ww',
        userFullName: '王五',
        stop: true,
        disabled: true
      }],
      multipleSelection: [],
      windowTable: [{
        windowCode: 'F_AAAA',
        windowName: '生产单',
        moduleName: '生产管理',
        authName: '新增',
        stop: true,
        disabled: true
      }, {
        windowCode: 'F_AAAA',
        windowName: '生产单',
        moduleName: '生产管理',
        authName: '编辑',
        stop: true,
        disabled: true
      }, {
        windowCode: 'F_AAAB',
        windowName: '裁剪单',
        moduleName: '生产管理',
        authName: '新增',
        stop: true,
        disabled: true
      }, {
        windowCode: 'F_AAAB',
        windowName: '裁剪单',
        moduleName: '生产管理',
        authName: '编辑',
        stop: true,
        disabled: true
      }, {
        windowCode: 'F_AAAC',
        windowName: '仓库',
        moduleName: '仓库管理',
        authName: '新增',
        stop: false,
        disabled: false
      }, {
        windowCode: 'F_AAAC',
        windowName: '仓库',
        moduleName: '仓库管理',
        authName: '编辑',
        stop: true,
        disabled: true
      }]
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
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style lang='scss'>
.authSetting-form .el-form-item__content {
  width: 60%;
}
.authSetting-edit-card {
  height: 60px;
  margin-top: 20px;
  .el-card__body {
    padding: 0px;
  }
}
.authSetting-user-col {
  .user-card-button {
    height: 60px;
    margin-bottom: 10px;
    .el-card__body {
      padding: 0px;
      height: 100%;
    }
  }
}

</style>
<style lang='scss' scoped>
.authSetting {
  min-width: 1150px;
}
.authSetting-form .el-form-item {
  width: 24%;
}
.authSetting-form .authSetting-last-item {
  width: 80%;
  margin-left: 100px;
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
.info-row {
  height: 100%;
  background: #ffffff;
  border-radius: 4px;
  .el-col {
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
.add {
  color:#7ED321;
}
.change {
  color:#4D7CFE;
}
.save {
  color:#05DBEB;
}
.cannel {
  color: #ffa000;
}
.delete {
  color:#FF5773;
}
.exit {
  color:#7ED321;
}
.authSetting-foot {
  margin-top: 20px;
  .el-table::before {
    background-color: transparent;
  }
}
</style>

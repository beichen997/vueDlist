<template>
  <div class='login-form-div'>
    <el-row type='flex' justify='center'>
      <el-col :span='20' class='login-div LoginByAccount'>
        <el-tabs v-model='activeName' @tab-click='handleClick' :stretch='stretch'>
          <el-tab-pane label='账号登录' name='first'>
            <el-form :rules='loginInfoRules' ref='ruleForm' :model='loginInfo'>
              <el-form-item prop='accountCode'>
                <el-input
                  v-model.trim='loginInfo.accountCode'
                  type='text'
                  placeholder='请输入手机号码/邮箱地址/用户名'
                  prefix-icon='iconfont icon-icon-131'
                ></el-input>
              </el-form-item>
              <el-form-item prop='password'>
                <el-input
                  maxlength='20'
                  minlength='8'
                  v-model='loginInfo.password'
                  type='password'
                  placeholder='请输入登录密码'
                  prefix-icon='iconfont icon-icon-24'
                ></el-input>
              </el-form-item>
              <el-row type='flex' justify='space-between' class='pass'>
                <span class='sizeColor cursor'>帮助中心</span>
                <!-- <router-link :to='{'name':'helpcenter'}' tag='span'>
                  <span class='sizeColor cursor' @click='hand'>帮助中心</span>
                </router-link>-->
                <span class='sizeColor cursor' @click='forgetPassword'>忘记密码?</span>
              </el-row>
              <el-button type='primary' class='log-in' @click="handleLogin('ruleForm')">登录</el-button>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label='短信登录' name='second'>
            <el-form :rules='phoneRules' ref='phoneRuleForm' :model='phoneForm'>
              <el-form-item prop='accountCode'>
                <el-input
                  v-model.trim='phoneForm.accountCode'
                  type='text'
                  maxlength='11'
                  placeholder='请输入手机号码'
                  prefix-icon='iconfont icon-icon-131'
                ></el-input>
              </el-form-item>
              <el-form-item label-position='left' prop='verificationCode'>
                <el-col :span='14'>
                  <el-input
                    v-model.trim='phoneForm.verificationCode'
                    type='text'
                    placeholder='请输入短信验证码'
                    prefix-icon='iconfont icon-icon-119'
                    class='validate-code-input'
                  ></el-input>
                </el-col>
                <el-col class='line' :span='1'>&nbsp;</el-col>
                <el-col :span='9'>
                  <getCode/>
                </el-col>
              </el-form-item>
              <el-row type='flex' justify='space-between' class='pass'>
                <span class='sizeColor cursor'>帮助中心</span>
                <!-- <router-link :to='{'name':'helpcenter'}' tag='span'>
                  <span class='sizeColor cursor' @click='hand'>帮助中心</span>
                </router-link>-->
                <span class='sizeColor cursor' @click='forgetPassword'>忘记密码?</span>
              </el-row>
              <el-button type='primary' class='log-in' @click="handlePhoneLogin('phoneRuleForm')">登录</el-button>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <el-row type='flex' justify='space-around' class='commot'>
          <el-col :span='12'>
            <span class='cursor weixin'>
              <b class='weixin-icon'></b>其他登录方式&nbsp;
            </span>
            <!-- <router-link :to='{'name':'wechatlogin'}' tag='div'>
              <span class='cursor weixin'>
                <b class='weixin-icon'></b>其他登录方式&nbsp;</span>
            </router-link>-->
          </el-col>
          <el-col :span='12' class='sizeColor cursor size-align'>
            <router-link :to="{'name':'register'}" tag='span'>
              <span>注册账户</span>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validatePhoneUser } from '@/utils/validate'
import code from '@/components/code/Code'
export default {
  name: 'login',
  components: {
    getCode: code
  },
  data () {
    const identifyingCodeLegal = (rule, value, callback) => {
      if (value) {
        if (value.length === 4) {
          callback()
        } else {
          callback(new Error('请输入正确的短信验证码'))
        }
      } else {
        callback(new Error('请输入短信验证码'))
      }
    }
    // 用户账号规则校验
    const accountCodeLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请输入手机号码/邮箱地址/用户名'))
      } else {
        callback()
      }
    }
    // 手机号规则校验
    const accountCodePhone = (rule, value, callback) => {
      if (value) {
        if (!validatePhoneUser(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入手机号码'))
      }
    }
    // 密码规则验证
    const passwordLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      msg: 'Welcome to Your Vue.js App',
      stretch: true,
      activeName: 'first',
      validateCode: '',
      phoneForm: {
        accountCode: '',
        verificationCode: ''
      },
      phoneRules: {
        accountCode: [{ validator: accountCodePhone, trigger: 'blur' }],
        verificationCode: [{ validator: identifyingCodeLegal, trigger: 'blur' }]
      },
      loginInfo: {
        accountCode: '',
        password: ''
      },
      // panel设置
      panel: {
        show: false,
        title: '',
        btnName: '',
        // 表单操作结果显示 type:(-1,0,1),msg
        result: {
          type: 0,
          msg: ''
        }
      },
      loginInfoRules: {
        accountCode: [{ validator: accountCodeLegal, trigger: 'blur' }],
        password: [{ validator: passwordLegal, trigger: 'blur' }]
        // validatecode: [{ validator: validateCodeLegal, trigger: 'blur' }]
      }
    }
  },
  mounted () {
    // var dom = document.getElementById('echarts')
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleClick () {},
    hand () {
      window.open('http://www.baidu.com')
    },
    // 用户登录
    handleLogin (nameForm) {
      this.$refs[nameForm].validate(valid => {
        // 数据传递的规则验证
        if (valid) {
          this.$router.push('/home')
          //   // try {
          //   this.$apollo
          //     .mutate({
          //       mutation: gql`
          //         mutation login($account:LoginInput) {
          //           login(account: $account)
          //         }
          //       `,
          //       // fetchPolicy: 'no-cache',
          //       client: 'center',
          //       variables: {
          //         account: this.loginInfo
          //       }
          //     })
          //     .then(res => {
          //       const token = res.data.login
          //       const url = this.$route.query.redirect_url
          //       if (token) {
          //         // 判断是否从别的地址跳转过来的
          //         if (!url) {
          //           this.doLogin({ token }).then(() => {
          //             this.$router.push({ path: '/home' }) // 成功后跳转到首页
          //           })
          //         } else {
          //           // 跳转外部地址
          //           window.location.href = url + '?' + 'token=' + token
          //         }
          //       } else {
          //         this.$message.error('网络异常')
          //       }
          //     }).catch(err => {
          //       this.$message.error(getErrorByCode(err))
          //     })
        } else {
          return false
        }
      })
    },
    // 短信登录
    handlePhoneLogin (nameForm) {
      this.$refs[nameForm].validate(valid => {
        // 数据传递的规则验证
        if (valid) {
          this.$router.push('/intelligence')
          // this.$apollo
          //   .mutate({
          //     mutation: gql`
          //       mutation login($account:LoginInput) {
          //         login(account: $account)
          //       }
          //     `,
          //     // fetchPolicy: 'no-cache',
          //     client: 'center',
          //     variables: {
          //       account: this.phoneForm
          //     }
          //   })
          //   .then(res => {
          //     const token = res.data.login
          //     const url = this.$route.query.redirect_url
          //     if (token) {
          //       // 判断是否从别的地址跳转过来的
          //       if (!url) {
          //         this.doLogin({ token }).then(() => {
          //           this.$router.push({ path: '/home' }) // 成功后跳转到首页
          //         })
          //       } else {
          //         // 跳转外部地址
          //         window.location.href = url + '?' + 'token=' + token
          //       }
          //     } else {
          //       this.$message.error('网络异常')
          //     }
          //   }).catch(err => {
          //     this.$message.error(getErrorByCode(err))
          //   })
        } else {
          return false
        }
      })
    },
    forgetPassword () {
      this.$router.push('/forgetPassword')
    }
  }
}
</script>

<style lang='scss' scoped>
.login-form-div {
  width: 390px;
  margin: 0 auto;
  padding-top: 15px;
}
.commot {
  font-size: 14px;
  margin: 20px 0;
  text-align: left;
}
.pass {
  text-align: right;
  padding-bottom: 16px;
}
.sizeColor {
  color: #1989fa;
  font-size: 14px;
}
.cursor {
  cursor: pointer;
}

.size-align {
  text-align: right;
}

.log-in {
  width: 100%;
}

.weixin {
  font-size: 14px;
  color: #606266;
  padding-right: 24px;
  position: relative;
  color: #909399;
  .weixin-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    background-image: url('./image/weChat.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.medium-button {
  width: 100%;
}

.forget-password-div {
  width: 325px;
  margin: 0 auto;
}
</style>

<!-- Register.vue -->
<template>
  <el-row type='flex' justify='center'>
    <el-col>
      <el-row type='flex' justify='center' class='register-div'>
        <el-col :span='20'>
          <div class='header'>用户注册</div>
          <el-form
            label-position='top'
            :rules='registerInfoRules'
            ref='ruleForm'
            :model='registerInfo'
            class='personal-register'
          >
            <el-form-item prop='userMobile' :error='error'>
              <el-input
                v-model='registerInfo.userMobile'
                type='text'
                placeholder='请输入手机号码'
                prefix-icon='iconfont icon-icon-10'
              ></el-input>
            </el-form-item>
            <el-form-item label-position='top' prop='verificationCode'>
              <el-col :span='14'>
                <el-input
                  v-model='registerInfo.verificationCode'
                  class='validate-code-input'
                  type='text'
                  placeholder='请输入短信验证码'
                  prefix-icon='iconfont icon-icon-119'
                ></el-input>
              </el-col>
              <el-col class='line' :span='1'>&nbsp;</el-col>
              <el-col :span='9'>
                <getcode/>
              </el-col>
            </el-form-item>
            <el-form-item prop='password'>
              <el-input
                maxlength='20'
                v-model='registerInfo.password'
                type='password'
                placeholder='请输入登录密码'
                prop='pass'
                auto-complete='off'
                prefix-icon='iconfont icon-icon-24'
              ></el-input>
            </el-form-item>
            <el-form-item prop='checkPass'>
              <el-input
                maxlength='20'
                v-model='registerInfo.checkPass'
                type='password'
                placeholder='请再次输入登录密码'
                auto-complete='off'
                prefix-icon='iconfont icon-icon-24'
              ></el-input>
            </el-form-item>
            <el-button type='primary' class='register-btn' @click='handRegister'>确认</el-button>
          </el-form>
          <div class='handlogin' @click='handlogin'>返回登录</div>
        </el-col>
      </el-row>
      <!-- <el-row
        v-if='step==3'
        type='flex'
        justify='center'
        class='register-div register-sucess'
      >
        <el-col>
          <div class='register-success-icon'>
          </div>
          <div class='register-success-tip'>
            恭喜您注册成功
          </div>
          <div class='register-success-welcome'>
            欢迎加入上海科技，祝您使用愉快！
          </div>
          <el-row>
            <el-button
              type='primary'
              @click='submit'
              class='register-btn register-sucess-btn'
            >
              立即登录
            </el-button>
          </el-row>
        </el-col>
      </el-row>-->
    </el-col>
  </el-row>
</template>

<script>
import code from '@/components/code/Code'
import {
  validateAuthCode,
  validatePhoneUser,
  validatePassword
} from '@/utils/validate'
export default {
  name: 'register',
  components: {
    getcode: code
  },
  data () {
    // 用户账号规则校验
    const accountCodeLegal = (rule, value, callback) => {
      if (value) {
        if (!validatePhoneUser(value)) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入手机号码'))
      }
    }
    // 验证码规则校验
    const verificationCodeLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请输入短信验证码'))
      } else if (!validateAuthCode(value)) {
        callback(new Error('请输入正确的短信验证码'))
      } else {
        callback()
      }
    }
    // 密码规则校验
    const passLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请输入密码'))
      } else if (!validatePassword(value)) {
        callback(
          new Error('请输入正确的密码(8-20位字符，必须由数字、字母组成)')
        )
      } else {
        callback()
      }
    }
    // 确认密码规则校验
    const passCheckLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请再次输入登录密码'))
      } else if (!(value === this.registerInfo.password)) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      error: '',
      registerInfo: {
        userMobile: '',
        verificationCode: '',
        password: '',
        checkPass: ''
      },
      registerInfoRules: {
        userMobile: [{ validator: accountCodeLegal, trigger: 'blur' }],
        verificationCode: [
          { validator: verificationCodeLegal, trigger: 'blur' }
        ],
        password: [{ validator: passLegal, trigger: 'blur' }],
        checkPass: [{ validator: passCheckLegal, trigger: 'blur' }]
      }
    }
  },

  computed: {},

  mounted () {},

  methods: {
    // 注册事件
    handRegister () {
      this.$refs['ruleForm'].validate(valid => {
        // 数据传递的规则验证
        if (valid) {
          this.$router.push('/myProject')
          // this.$apollo
          //   .mutate({
          //     mutation: gql`
          //       mutation register($account:RegisterInput) {
          //         register(account: $account)
          //       }
          //     `,
          //     client: 'center',
          //     fetchPolicy: 'no-cache',
          //     variables: {
          //       account: {
          //         userMobile: this.registerInfo.userMobile,
          //         verificationCode: this.registerInfo.verificationCode,
          //         password: this.registerInfo.password,
          //         userFullname: this.registerInfo.userFullname,
          //         userCertificatetype: this.registerInfo.userCertificatetype,
          //         userCertificate: this.registerInfo.userCertificate
          //       }
          //     }
          //   })
          //   .then(res => {
          //     // 返回userId
          //     if (res.data.register) {
          //       this.step++
          //     } else {
          //       this.$message.error('注册失败')
          //     }
          //   })
          //   .catch(err => {
          //     this.$message.error(getErrorByCode(err))
          //   })
        } else {
          return false
        }
      })
    },
    // 返回登录
    handlogin () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='scss' scoped>
// 用户中心注册
.register-div {
  width: 390px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: left;
  .register-btn {
    width: 100%;
  }
  .register-success-icon {
    height: 60px;
    width: 60px;
    margin: 40px auto;
    background-image: url('./images/icon_yes@1x.png');
  }
  .register-success-tip {
    font-size: 20px;
    color: #fa5555;
    text-align: center;
  }
  .register-success-welcome {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    color: #303133;
    text-align: center;
    margin: 10px 0;
  }
}

.date-picker {
  width: 100%;
}
.register-sucess {
  width: 320px;
}
.el-form-border {
  margin: 20px 0;
  border-top: 1px solid #eee;
}
.handlogin {
  text-align: right;
  font-size: 14px;
  color: #1989fa;
  cursor: pointer;
  margin-top: 10px;
}
.medium-button {
  width: 100%;
}
.header {
  font-size: 23px;
  padding: 10px 0;
  color: #409eff;
  text-align: center;
}
</style>

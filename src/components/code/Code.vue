<template>
  <div>
    <el-button type="primary" plain :id="filesone" class="count-down-pass" @click="handCodes" :disabled="disableds">{{codeVerifications}}</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      filesone: this.id || 'vue-filesone-' + +new Date() + +Math.random(),
      disableds: false,
      codeVerifications: '发送验证码'
    }
  },
  props: ['childForm'],
  computed: {},
  methods: {
    handCodes () {
      // 忘记密码发送验证码
      let total = 60
      const timer = setInterval(() => {
        this.codeVerifications = '重新发送(' + total + ')'
        this.disableds = true
        total--
        if (total <= 0) {
          clearTimeout(timer)
          this.codeVerifications = '获取验证码'
          this.disableds = false
        }
      }, 1000)
      // this.getCode()
    },
    async getCode () {
      // try {
      //   const result = await GetMobileVerificationCode(
      //     this.childForm,
      //     this.$apollo
      //   ) // 调取手机发送验证码接口
      //   const code = result.data.getMobileVerificationCode.code
      //   if (code === 200) {
      //     this.$emit('updateForm', result)
      //   } else {
      //     this.$message.error(getErrorByCode(code))
      //   }
      // } catch (error) {
      //   this.$message.error('服务器异常')
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.count-down-pass{
  display:block;
  height:40px;
  padding:0;
  width:100%;
  border-radius:3px;
  text-align:center;
  font-size:14px;
  color:#fff;
  background-color: #409EFF;
  line-height:40px;
}

</style>

<template>
  <div class='yaoqiu'>
    <el-form ref='form' :model='form' label-width='80px'>
      <el-row>
        <el-col :span='12'>
          <el-form-item label='工厂系数'>
            <el-input v-model='form.name'></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='12'>
          <el-form-item label='班组系数'>
            <el-input v-model='form.name'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label='工艺要求'>
        <el-input type='textarea' :autosize='{ minRows: 6, maxRows: 8}' v-model='form.desc'></el-input>
      </el-form-item>
      <el-form-item label='工艺资料'>
        <img src='../../../assets/image/ziliao.jpg' alt>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '10000',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '1:面、里无套结，里文献，袖里同大身里布。2、有防称部件：前片，前侧'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}

</script>

<style lang='scss' scoped>
.yaoqiu {
  padding: 20px 0;
  margin: 0 auto;
  width: 70%;
}
</style>

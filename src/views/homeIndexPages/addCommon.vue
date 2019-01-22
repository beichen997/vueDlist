<template>
  <div class="addcommon-hlist">
    <div class="addcommon-list">
      <el-menu
        class="addcommon-menu"
        mode="horizontal"
        background-color="#fff"
        text-color="#303133"
        active-text-color="#303133"
      >
        <el-menu-item :index="list.name" v-for="(list, index) in basic" :key="index">
          <!-- <router-link class="addcommon-imglist" :to="list.path" tag="div">
            <span>{{list.meta.title}}</span>
            <i class="el-icon-delete" @click="remove(list)"></i>
          </router-link> -->
          <!-- <div class="imglist imglists">
            <i class="el-icon-delete" @click="remove(list)"></i>
          </div> -->
            <router-link class="imglist addcommon-imglist" :to="list.path" tag="div">
              <span>{{list.meta.title}}</span>
          </router-link>
          <div class="imglist imglists" @click="remove(list)">
              <!-- <img class="img" src="../image/header.jpg" alt=""> -->
              <i class="el-icon-delete" ></i>
              <!-- <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="remove(list)"></el-button> -->
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    basic () {
      return this.$store.state.routerStore.routers
    }
  },
  methods: {
    remove (list) {
      if (list.meta.delete) {
        if (this.basic.length > 1) {
          this.$store.commit('DELETE_ROUTERS', list)
          console.log(this.basic)
          this.$router.push(this.basic[this.basic.length - 1].path)

          // this.$router.push({name:'empty'})
          // console.log(this.$router)
        }
      }
    }
  }
}
</script>
<style lang="scss">
.addcommon-menu .el-menu-item {
  padding: 0px;
}
.addcommon-menu .el-menu-item.is-active {
  border: none;
}
</style>

<style lang="scss" scoped>
.addcommon-list {
  text-align: right;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 20px;
  color: #303133;
  margin-bottom: 20px;
}
.addcommon-list .el-menu.el-menu--horizontal {
  border: none;
}
.addcommon-imglist {
  display: inline-block;
  height: 100%;
  text-align: center;
  padding-left:10px;
  i {
    font-size: 20px;
    margin-right: 0;
  }
}
.addcommon-imglists {
  padding:0;
  i {
    color: #303133;
  }
}
.addcommon-menu .myActive i{
  color: #ffa000;
}
.imglist{
  display: inline-block;
  text-align: center;
  i{
    font-size: 20px;
  }
}
.imglists{
  padding: 0 10px;
}
</style>

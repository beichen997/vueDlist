<template>
  <div class="homeIndex">
    <el-container class='homeIndex-container'>
      <el-header>
        <div class='home-header'>
          <img class='home-logo' src='../../assets/image/logo.png' alt>波司登智造系统
        </div>
        <div class='home-list'>
          <el-tabs class="home-tabs" v-model="activeName" @tab-click='clickTabsBar'>
            <el-tab-pane name='/workHour'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/workHour' }">
                  <p style="textAlign:center"><i class='iconfont ic_工时 icon-ic_gongshi'></i></p>
                  <p>标准工时</p>
                </router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane name='/intelligence'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/intelligence' }">
                  <p style="textAlign:center"><i class='iconfont icon-ic_zhineng'></i></p>
                  <p>智能排单</p>
                </router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane name='/production'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/production' }">
                  <p style="textAlign:center"><i class='iconfont icon-ic_shengchan'></i></p>
                  <p>生产管理</p>
                </router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane name='/warehouse'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/warehouse' }">
                  <p style="textAlign:center"><i class='iconfont icon-ic_changchu'></i></p>
                  <p>仓库管理</p>
                </router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane name='/quality'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/quality' }">
                  <p style="textAlign:center"><i class='iconfont icon-ic_zhiliang'></i></p>
                  <p>质量管理</p>
                </router-link>
              </div>
            </el-tab-pane>
            <el-tab-pane name='/system'>
              <div slot="label">
                <router-link tag='div' :to="{ path: '/system' }">
                  <p style="textAlign:center"><i class='iconfont icon-ic_xitong'></i></p>
                  <p>系统设置</p>
                </router-link>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class='home-foot'>
            <div class='home-right'>
              <div class='home-date'>2019年1月12日</div>
              <div class='home-datelist'>星期一</div>
            </div>
            <div class='bor'></div>
            <div class='home-left'>
              <div class='home-photo'>
                <img class='home-img' src='../../assets/image/header.jpg' alt>
              </div>
              <div class='home-photoright'>
                <div class='home-textlist'>
                  <span>戴总,</span>&nbsp;你好
                </div>
                <div>
                  <el-button size='mini' class='home-forget iconfont icon-ic_gaimi'>修改密码</el-button>
                  <el-button size='mini' class='home-xit iconfont icon-ic_tuichu'>退出系统</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-header>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
      activeName: this.$store.getters.activeName
    }
  },
  beforeCreate: function () {
    document.getElementsByTagName('body')[0].style.overflow = 'scroll'
  },
  created () {
    // 首次加载设置默认路由
    this.$store.commit('CHANGE_RUOTERLIST', this.$route.meta.parentPath)
    this.$store.commit('CLEAR_ROUTERS')
    this.$store.commit('SET_ACTIVENAME', this.$route.meta.parentPath)
    // 在右侧设置默认首页
    let arr = this.$store.state.routerStore.routerlist
    arr.map((item) => {
      item.children.map((items) => {
        // 显示默认页
        if (items.meta.default) {
          this.$store.commit('SET_ROUTERS', items)
        }
        // 页面刷新时 地址不是默认页时 把当前地址添加到路由
        if (this.$route.path === items.path) {
          this.$store.commit('SET_ROUTERS', items)
        }
      })
    })
  },
  methods: {
    clickTabsBar (tab) {
      this.$store.commit('CHANGE_RUOTERLIST', tab.name)
      this.$store.commit('CLEAR_ROUTERS')
      this.$store.commit('SET_ACTIVENAME', tab.name)
      // 点击最上部的路由 设置右侧默认首页
      let arr = this.$store.state.routerStore.routerlist
      arr.map((item) => {
        item.children.map((items) => {
          if (items.meta.default) {
            this.$store.commit('SET_ROUTERS', items)
          }
        })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.homeIndex .el-container,
.homeIndex .el-header{
  height: 120px;
  padding: 0;
  min-width: 1140px;
}
.home-header {
  float: left;
  width: 199px;
  height: 120px;
  line-height: 120px;
  background: #fff;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffa000;
  border-right: 1px solid #f3f3f3;
}
.home-logo {
  vertical-align: middle;
  width: 40px;
  margin-right: 5px;
}
.home-list {
  height: 120px;
  margin-left: 200px;
  text-align: right;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 20px;
  color: #e3e3e3;
}
.home-tabs {
  margin-top: 28px;
  i {
    font-size: 30px;
  }
  p {
    height: 30px;
    margin:0;
  }
}
.home-foot {
  width: 350px;
  margin-top: 28px;
}
.home-right {
  float: left;
  height: 60px;
  line-height: 60px;
  padding-right: 5px;
  border-right: 1px solid #ececec;
}
.home-date {
  text-align: right;
  height: 30px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #303133;
}
.home-datelist {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.home-left {
  float: right;
  height: 60px;
  width: 250px;
  line-height: 60px;
  display: flex;
  justify-content: center;
}
.home-photo {
  width: 40px;
  .home-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    vertical-align: middle;
  }
}
.home-photoright {
  width: 210px;
}
.home-photoright > div {
  height: 30px;
  line-height: 30px;
}
.home-textlist {
  padding-left: 10px;
  text-align: left;
  color: #9e9e9e;
  span {
    color: #333;
    font-size: 15px;
  }
}
.home-forget {
  background-color: #ffa000;
  border-radius: 4px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.home-exit {
  background-color: #7ed321;
  border-radius: 4px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>

<style>
.home-tabs .el-tabs__item {
  height: 70px;
}
.home-tabs .el-tabs__item:hover {
  color: #ffa000;
}
.myActive {
  color: #ffa000;
  position: relative;
}
.home-tabs .myActive:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background: #ffa000;
  bottom: -10px;
  left: 0;
}
.home-tabs .el-tabs__item.is-active {
  color: #303133;
}
.home-tabs .el-tabs__active-bar {
  background: transparent;
}
</style>

<template>
  <div>
    <el-container class='aside-container'>
      <el-container>
        <el-aside width='200px'>
          <el-menu
            router
            :default-active='this.$route.path'
            class='aside-menulist'
            text-color='#303133'
            active-text-color='#ffd04b'
            :default-openeds='defaultOpen'
            @select='handselect'
          >
            <el-submenu
              :index="((index + 1) + '')"
              v-for='(item, index) in routerlist'
              :key='index'
              :disabled='item.meta.disabled'
            >
              <template slot='title'>
                <i class='iconfont' :class='item.meta.icon'></i>
                {{item.meta.title}}
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index='lastItem.path'
                  v-for='(lastItem, key) in item.children'
                  :key='key'
                  :disabled='lastItem.meta.disabled'
                >
                  <!-- <i class='iconfont' :class='lastItem.meta.icon'></i> -->
                  <router-link
                    v-if='lastItem.meta.disabled === false'
                    :to='{ path: lastItem.path }'
                  >
                    <i class='iconfont' :class='lastItem.meta.icon'></i>{{ lastItem.meta.title }}
                  </router-link>
                  <span v-else class='not-allowed'><i class='iconfont' :class='lastItem.meta.icon'></i>{{ lastItem.meta.title }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <AddCommon/>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AddCommon from './addCommon'
export default {
  name: 'asideCommon',
  data () {
    return {
      defaultOpen: []
    }
  },
  components: {
    AddCommon
  },
  mounted () {
    this.defaultOpenMethod()
  },
  computed: {
    routerlist () {
      return this.$store.state.routerStore.routerlist
    }
  },
  methods: {
    defaultOpenMethod () {
      let arr = this.$store.state.routerStore.routerlist
      for (let i = 0; i < arr.length; i++) {
        let index = i + 1
        index = index.toString()
        this.defaultOpen.push(index)
      }
    },
    handselect (key) {
      let router = {}
      this.routerlist.map((item) => {
        item.children.map((items) => {
          if (items.path === key) {
            router = items
          }
        })
      })
      this.$store.commit('SET_ROUTERS', router)
      this.$router.push(key)
    }
  }
}
</script>
<style lang='scss' scoped>
.el-aside {
  background-color: #f4f4f4;
  color: #303133;
}
.el-main {
  background-color: #f4f4f4;
  color: #303133;
}
.aside-menulist {
  min-height: 800px;
  a {
    text-decoration: none;
    color: #303133;
  }
  i {
    color: #303133;
    margin-right: 5px;
  }
  .myActive {
    color: #ffa000;
    i {
      color: #ffa000;
    }
  }
  .not-allowed {
    color: #303133;
  }
}
</style>
<style>
</style>

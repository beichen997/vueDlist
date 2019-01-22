import { staticRoutes } from '@/router/index'
const routerStore = {
  state: {
    activeName: '/intelligence',
    routers: [],
    routerlist: []
  },
  mutations: {
    SET_ROUTERS: (state, router) => {
      if (JSON.stringify(state.routers).indexOf(JSON.stringify(router)) === -1) {
        state.routers.push(router)
      }
    },
    DELETE_ROUTERS: (state, router) => {
      state.routers.map((item, index) => {
        if (item.path === router.path) {
          state.routers.splice(index, 1)
        }
      })
    },
    CLEAR_ROUTERS: (state, router) => {
      state.routers = []
    },
    CHANGE_RUOTERLIST: (state, router) => {
      let routers = []
      staticRoutes.map((item) => {
        if (item.title === 'homeIndex') {
          item.children.map((ites) => {
            if (ites.path === router) {
              routers = ites.children
            }
          })
        }
      })
      state.routerlist = routers
    },
    SET_ACTIVENAME: (state, activeName) => {
      state.activeName = activeName
    }
  },
  actions: {
  },
  getters: {

  }
}

export default routerStore

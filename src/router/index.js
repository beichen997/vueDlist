import HomeIndex from '@/views/homeIndexPages/HomeIndex'
import AsideCommon from '@/views/homeIndexPages/asideCommon'
import LeftCommon from '@/views/homeIndexPages/leftCommon'
import LoginLayout from '@/views/layout/LoginLayout'

export const staticRoutes = [
  {
    path: '/401',
    name: 'page401',
    component: () => import('@/views/error/401')
  },
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/views/error/404')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    name: 'loginLayout',
    component: LoginLayout,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login')
      }
    ]
  },
  {
    path: '/forgetPassword',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'forgetPassword',
        component: () => import('@/views/forgetpassword/ForgetPassword')
      }
    ]
  },
  {
    path: '/register',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('@/views/register/Register')
      }
    ]
  },
  {
    path: '/home',
    name: 'homeIndex',
    title: 'homeIndex',
    component: HomeIndex,
    redirect: '/intelligence',
    children: [
      {
        path: '/workHour',
        name: 'workHour',
        title: '标准工时',
        component: LeftCommon,
        redirect: '/workHour/basic',
        children: [
          {
            path: '/workHour/basic',
            name: 'basic',
            meta: {
              title: '基础资料',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/workHour/basic/style',
            children: [
              {
                path: '/workHour/basic/style',
                name: 'style',
                meta: {
                  title: '款式类别',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: false,
                  default: true
                },
                component: () => import('@/views/workhour/basis/style')
              },
              {
                path: '/workHour/basic/parts',
                name: 'parts',
                meta: {
                  title: '部件',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/workhour/basis/parts')
              },
              {
                path: '/workHour/basic/processgroup',
                name: 'processgroup',
                meta: {
                  title: '工序组',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/workhour/basis/processgroup')
              },
              {
                path: '/workHour/basic/processlevel',
                name: 'proesslevel',
                meta: {
                  title: '工序级别',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/workhour/basis/processlevel')
              },
              {
                path: '/workHour/basic/checkpoint',
                name: 'checkpoint',
                meta: {
                  title: '检查点',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/workhour/basis/checkpoint')
              }
            ]
          },
          {
            path: '/workHour/dsmanagement',
            name: 'dsmanagement',
            meta: {
              title: '款式管理',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/workHour/dsmanagement/process1',
            children: [
              {
                path: '/workHour/dsmanagement/process1',
                name: 'process1',
                meta: {
                  title: '工序分析',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              },
              {
                path: '/workHour/dsmanagement/style',
                name: 'styles',
                meta: {
                  title: '款式分析',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/workHour',
                  delete: true,
                  default: false
                },
                component: () => import('@/views//workhour/dsmanagement/style')
              }

            ]
          }
        ]
      },
      {
        path: '/intelligence',
        name: 'intelligence',
        title: '智能排单',
        component: LeftCommon,
        redirect: '/intelligence/empty',
        children: [
          {
            path: '/intelligence/empty',
            name: 'empty',
            meta: {
              title: '生产排单首页',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/intelligence/empty/intelligenceHome',
            children: [
              {
                path: '/intelligence/empty/intelligenceHome',
                name: 'intelligenceHome',
                meta: {
                  title: '生产排单首页',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/intelligence',
                  delete: false,
                  default: true
                },
                component: () => import('@/views/homeIndexPages/intelligencePages/intelligenceHome')
              }
            ]
          },
          {
            path: '/intelligence/process',
            name: 'process',
            meta: {
              title: '生产过程',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/intelligence/process/plan',
            children: [
              {
                path: '/intelligence/process/plan',
                name: 'plan',
                meta: {
                  title: '计划排单',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/intelligence',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/intelligencePages/plan')
              },
              {
                path: '/intelligence/process/sportList',
                name: 'sportList',
                meta: {
                  title: '计划审核',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/intelligence',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              }
            ]
          },
          {
            path: '/intelligence/target',
            name: 'target',
            meta: {
              title: '目标管理',
              icon: 'icon-ic_extension',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/intelligence/target/productTarget',
            children: [
              {
                path: '/intelligence/target/productTarget',
                name: 'productTarget',
                meta: {
                  title: '生产目标',
                  icon: 'icon-ic_extension',
                  disabled: false,
                  parentPath: '/intelligence',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              }
            ]
          },
          {
            path: '/intelligence/machine',
            name: 'machine',
            meta: {
              title: '人机排位',
              icon: 'icon-ic_labs',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/intelligence/machine/machineHome',
            children: [
              {
                path: '/intelligence/machine/machineHome',
                name: 'machineHome',
                meta: {
                  title: '人机分配',
                  icon: 'icon-ic_labs',
                  disabled: true,
                  parentPath: '/intelligence',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              }
            ]
          }
        ]
      },
      {
        path: '/production',
        name: 'production',
        title: '生产管理',
        component: LeftCommon,
        redirect: '/production/proEmpty',
        children: [
          {
            path: '/production/proEmpty',
            name: 'proEmpty',
            meta: {
              title: '基础资料',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/production/proEmpty/productionHome',
            children: [
              {
                path: '/production/proEmpty/productionHome',
                name: 'productionHome',
                meta: {
                  title: '生产档设定',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/production',
                  delete: false,
                  default: true
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              }
            ]
          },
          {
            path: '/production/productionPage',
            name: 'productionPage',
            meta: {
              title: '生产管理',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/production/productionPage/productionManage',
            children: [
              {
                path: '/production/productionPage/productionManage',
                name: 'productionManage',
                meta: {
                  title: '生产单',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/production',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/emptyPages/emptyPage')
              },
              {
                path: '/production/productionPage/manger',
                name: 'manger',
                meta: {
                  title: '裁剪单',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/production',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/production/manger/manger')
              }
            ]
          }
        ]
      },
      {
        path: '/warehouse',
        name: 'warehouse',
        title: '仓库管理',
        component: LeftCommon,
        redirect: '/warehouse/libraryManage',
        children: [
          {
            path: '/warehouse/wareManage',
            name: 'wareManage',
            meta: {
              title: '仓库管理',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/warehouse/wareManage/wareHome',
            children: [
              {
                path: '/warehouse/wareManage/wareHome',
                name: 'wareHome',
                meta: {
                  title: '仓库',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/warehouse',
                  delete: false,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/warehousePages/wareHome')
              },
              {
                path: '/warehouse/wareManage/wareAllot',
                name: 'wareAllot',
                meta: {
                  title: '库存储位分配',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/warehouse',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/warehousePages/wareAllot')
              }
            ]
          },
          {
            path: '/warehouse/libraryManage',
            name: 'libraryManage',
            meta: {
              title: '出入库管理',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/warehouse/libraryManage/receipt',
            children: [
              {
                path: '/warehouse/libraryManage/receipt',
                name: 'receipt',
                meta: {
                  title: '入库单',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/warehouse',
                  delete: true,
                  default: true
                },
                component: () => import('@/views/homeIndexPages/warehousePages/receipt')
              },
              {
                path: '/warehouse/libraryManage/outBound',
                name: 'outBound',
                meta: {
                  title: '出库单',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/warehouse',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/warehousePages/outBound')
              }
            ]
          }
        ]
      },
      {
        path: '/quality',
        name: 'quality',
        title: '质量管理',
        component: LeftCommon,
        redirect: '/quality/defect',
        children: [
          {
            path: '/quality/qualityBasic',
            name: 'qualiEmpty',
            meta: {
              title: '基础信息',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/quality/qualityBasic/qualityRoute',
            children: [
              {
                path: '/quality/qualityBasic/qualityRoute',
                name: 'qualityRoute',
                meta: {
                  title: '半成品路线维护',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/quality',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/qualityPages/qualityRoute')
              },
              {
                path: '/quality/qualityBasic/routeGroup',
                name: 'routeGroup',
                meta: {
                  title: '半成品路线组维护',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/quality',
                  delete: false,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/qualityPages/routeGroup')
              }
            ]
          },
          {
            path: '/quality/defect',
            name: 'defect',
            meta: {
              title: '疵点信息',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/quality/defect/maintenance',
            children: [
              {
                path: '/quality/defect/maintenance',
                name: 'maintenance',
                meta: {
                  title: '疵点维护',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/quality',
                  delete: false,
                  default: true
                },
                component: () => import('@/views/homeIndexPages/qualityPages/maintenance')
              }
            ]
          },
          {
            path: '/quality/track',
            name: 'track',
            meta: {
              title: '质量跟踪',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/quality/track/piece',
            children: [
              {
                path: '/quality/track/piece',
                name: 'piece',
                meta: {
                  title: '扎件扣数',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/quality',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/qualityPages/piece')
              },
              {
                path: '/quality/track/supplement',
                name: 'supplement',
                meta: {
                  title: '质检补录',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/quality',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/qualityPages/supplement')
              }
            ]
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        title: '系统设置',
        component: LeftCommon,
        redirect: '/system/authManage',
        children: [
          {
            path: '/system/authManage',
            name: 'authManage',
            meta: {
              title: '权限管理',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/system/authManage/authSetting',
            children: [
              {
                path: '/system/authManage/authSetting',
                name: 'authSetting',
                meta: {
                  title: '权限设定',
                  icon: 'icon-ic_dashboard',
                  disabled: false,
                  parentPath: '/system',
                  delete: false,
                  default: true
                },
                component: () => import('@/views/homeIndexPages/systemPages/authSetting')
              }
            ]
          },
          {
            path: '/system/funSetting',
            name: 'funSetting',
            meta: {
              title: '功能设定',
              icon: 'icon-ic_dashboard',
              disabled: false
            },
            component: AsideCommon,
            redirect: '/system/funSetting/systemParameter',
            children: [
              {
                path: '/system/funSetting/systemParameter',
                name: 'systemParameter',
                meta: {
                  title: '系统参数配置',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/system',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/systemPages/systemParameter')
              },
              {
                path: '/system/funSetting/funConfig',
                name: 'funConfig',
                meta: {
                  title: '模块功能配置',
                  icon: 'icon-ic_dashboard',
                  disabled: true,
                  parentPath: '/system',
                  delete: true,
                  default: false
                },
                component: () => import('@/views/homeIndexPages/systemPages/funConfig')
              }
            ]
          }
        ]
      }
    ]
  }
]

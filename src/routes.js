import index from './components/index'
import list from './components/list'
import detail from './components/detail'
import photo from './components/photo'
import notes from './components/notes'
import me from './components/me'
import map from './components/map'
import live from './components/live'

import Child01 from './components/childs/child01'
import Child02 from './components/childs/child02'
export default [
  //嵌套路由
  // { path: '/', component: Page01 },
  // //动态路由
  // { name: 'Page02', path: '/02/:id', component: Page02 },
  // //命名路由&路由传参
  // { name: 'com03', path: '/03/:sex', component: Page03 },
  // { path: '/04', component: Page04,
  //   children: [
  //     { name: 'child01', path: '/', component: Child01 },
  //     { name: 'child02', path: '/c02', component: Child02 },
  //   ]
  // },
  // { name: 'Page05', path: '/05/:txt', component: Page05 },
  { path: '/', component: index },
  //动态路由
  { name: 'list', path: '/list', component: list },
  { name: 'photo', path: '/photo', component: photo },
  { name: 'live', path: '/live', component: live },
  { name: 'map', path: '/map', component: map },
  { name: 'notes', path: '/notes', component: notes },
  { name: 'me', path: '/me', component: me ,
    children: [
      { name: 'child01', path: '/', component: Child01 },
      { name: 'child02', path: '/02', component: Child02 },
    ]
  },
  //命名路由&路由传参
  { name: 'chi', path: '/detail', component: detail }
]

import index from './components/index'
import list from './components/list'
import detail from './components/detail'
import photo from './components/photo'
import notes from './components/notes'
import me from './components/me'
import map from './components/map'
import live from './components/live'
import artList from './components/artList'
import artcle from './components/artcle'
import newArtcle from './components/newArtcle'
import demoList from './components/demoList'
import pictures from './components/pictures'
import picList from './components/picList'
import Child01 from './components/childs/child01'
import Child02 from './components/childs/child02'
export default [
  //嵌套路由
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
  { name: 'artList', path: '/artList', component: artList },
  { name: 'artcle' , path: '/artcle', component : artcle},
  { name: 'newArtcle' , path:'/newArtcle', component : newArtcle},
  { name: 'demoList' , path:'/demoList', component : demoList},
  { name: 'pictures' ,path:'/pictures',component:pictures},
  { name: 'picList' ,path:'/picList',component:picList},
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

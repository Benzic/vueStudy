import index from './pages/index.vue'
import login from './components/login'
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
import newDemo from './components/newDe'
import words from './components/messagesBoard'

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
  { path: '/', component: login },
  { path: '/login', component: login },
  //动态路由
  { name: 'index', path: '/index', component: index ,
    children: [
      { name: 'me', path: '/', component: me },
      { name: 'list', path: '/list', component: list },
      { name: 'photo', path: '/photo', component: photo },
      { name: 'artList', path: '/artList', component: artList },
      { name: 'artcle' , path: '/artcle', component : artcle},
      { name: 'newArtcle' , path:'/newArtcle', component : newArtcle},
      { name: 'deletedPhoto' , path:'/deletedPhoto', component : newArtcle},
      { name: 'deletedArt' , path:'/deletedArt', component : newArtcle},
      { name: 'deletedDemo' , path:'/deletedDemo', component : newArtcle},
      { name: 'deletedArt' , path:'/deletedArt', component : newArtcle},
      { name: 'demoList' , path:'/demoList', component : demoList},
      { name: 'newDemo', path:'/newDemo', component:newDemo},
      { name: 'pictures' ,path:'/pictures',component:pictures},
      { name: 'picList' ,path:'/picList',component:picList},
      { name: 'messages', path:'/messages',component:words},
      { name: 'me', path: '/me', component: me }
    ]
  },
]

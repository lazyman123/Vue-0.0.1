import Vue from 'vue'
import Router from 'vue-router'
import MRecommend from 'components/recommend/recommend'
import MSinger from 'components/singer/singer'
import MRank from 'components/rank/rank'
import MSearch from 'components/search/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      component: MRecommend,
    },
    {
      path: '/singer',
      component: MSinger
    },
    {
      path: '/rank',
      component: MRank
    },
    {
      path: '/search',
      component: MSearch
    }
  ]
})

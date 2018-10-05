import Vue from 'vue'
import Vuex from 'vuex'
import issues from './issues'
import issue from './issue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    issues: issues,
    issue: issue
  }
})

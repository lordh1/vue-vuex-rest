import { dateReplaceTZ, sortByDate, fromLastWeek } from '../helpers/helpers'

export default {
  namespaced: true,
  state: {
    issues: []
  },
  mutations: {
    setIssues (state, val) {
      state.issues = val
    }
  },
  actions: {
    apiGetIssues (context) {
      fetch(process.env.API_URL + '/issues')
        .then(response => response.json())
        .then(issues => context.commit('setIssues', dateReplaceTZ(sortByDate(fromLastWeek(issues)))))
        .catch(error => {
          throw (error)
        })
    }
  }
}

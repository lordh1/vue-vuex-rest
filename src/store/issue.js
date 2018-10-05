export default {
  namespaced: true,
  state: {
    issue: null
  },
  mutations: {
    setIssue (state, val) {
      state.issue = val
    },
    setFlushIssue (state) {
      state.issue = null
    }
  }
}

<template>
  <div>
    <h1 class="Issues__h1">React Repo Issues</h1>
    <table class="Issues__table">
      <thead>
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>State</th>
        <th>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(issue, key) in issues" :key="key" @click="setIssue(issue)">
      <td>{{key + 1}}</td>
      <td>{{issue.title}}</td>
      <td>{{issue.state}}</td>
      <td>{{issue.created_at}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Issues',
  methods: {
    ...mapMutations('issues', [
      'setIssues'
    ]),
    ...mapActions('issues', [
      'apiGetIssues'
    ]),
    ...mapMutations('issue', [
      'setIssue'
    ])
  },
  computed: {
    ...mapState({
      issues: state => state.issues.issues
    })
  },
  created () {
    this.apiGetIssues()
  }
}
</script>

<style scoped>
@import '../css/issues.css';
</style>

<template>
  <div v-if="issue">
    <h1 class="Issue__h1">{{issue.title}}</h1>
    <div v-html="issue.body"></div>
    <div class="Issue__ButtonsArea"><button class="Issue__button" @click="setFlushIssue">Back</button></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Issue',
  methods: {
    ...mapMutations('issue', [
      'setFlushIssue'
    ])
  },
  computed: {
    ...mapState('issue', [
      'issue'
    ])
  }
}
</script>

<style scoped>
@import '../css/Issue.css';
</style>

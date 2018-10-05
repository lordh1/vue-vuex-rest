<template>
  <div id="app">
    <Issue v-show="issue" />
    <Issues v-show="!issue" />
  </div>
</template>

<script>
import Issues from './components/Issues'
import Issue from './components/Issue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {Issues, Issue},
  computed: {
    ...mapState('issue', [
      'issue'
    ])
  }
}
</script>

<style scoped>
@import "css/App.css";
</style>

<template>
  <div>
    <h2>{{ this.$store.state.count }}</h2>
    <h2>{{ this.$store.getters.getStateCount }}</h2>
    <p>count的值:{{ this.$store.getters.getStateCount }}</p>
    <button @click="addFun">+</button>
    <button @click="reduceFun">-</button>

    <div>{{ count1 }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      count1: state => state.count
    })
  },
  methods: {
    addFun () {
      // this.$store.commit('add')
      this.$store.dispatch('addFun')
    },
    reduceFun () {
      // this.$store.commit('reduce')
      this.$store.dispatch('reduceFun')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

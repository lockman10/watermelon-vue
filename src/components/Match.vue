<template>
  <div>
    <input v-model="username" placeholder="姓名">
    <input v-model="constellation" placeholder="星座">
    <button @click="match">匹配</button>
    <p>用户信息:{{ matchMsg }}</p>
  </div>
</template>

<script>
import {match} from '@/api/api'

export default {
  name: 'Match',
  data() {
    return {
      username: '',
      constellation: '',
      matchMsg: {
        score: '',
        desc: ''
      }
    }
  },
  methods: {
    match() {
      match().then(req => {
        this.matchMsg = req.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

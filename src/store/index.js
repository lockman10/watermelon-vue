import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  // 数据源
  state: {
    count: 1
  },
  getters: {
    getStateCount (state) {
      return state.count + 1
    }
  },
  mutations: {
    add (state) {
      state.count = state.count + 1
    },
    reduce (state) {
      state.count = state.count - 1
    }
  },
  actions: {
    addFun (context) {
      context.commit('add')
    },
    reduceFun (context) {
      context.commit('reduce')
    }
  }
})

// 导出stor
export default store

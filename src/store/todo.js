import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    todos: [{
      title: 'Todo A',
      project: 'Project A',
      done: false
    }, {
      title: 'Todo B',
      project: 'Project B',
      done: true
    }, {
      title: 'Todo C',
      project: 'Project C',
      done: false
    }, {
      title: 'Todo D',
      project: 'Project D',
      done: false
    }]
  },
  mutations: {
    CREATE_TODO (state, todo) {
      state.todos.push(todo)
    },
    DELETE_TODO (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos.splice(todoIndex, 1)
    },
    TOGGLE_COMPLETION (state, todo) {
      todo.done = !todo.done
    }
  },
  actions: {
    createTodo (context, todo) {
      context.commit("CREATE_TODO", todo)
    },
    deleteTodo (context, todo) {
      context.commit("DELETE_TODO", todo)
    },
    toggleCompletion (context, todo) {
      context.commit("TOGGLE_COMPLETION", todo)
    }
  },
  modules: {
  },
  getters: {
    getTodos(state) {
      return state.todos
    }
  }
}

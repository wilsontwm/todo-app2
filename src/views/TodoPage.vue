<template>
  <div>
    <TodoList></TodoList>
    <CreateTodo></CreateTodo>
  </div>
</template>

<script>
import TodoList from './todos/TodoList'
import CreateTodo from './todos/CreateTodo'

export default {
  name: 'TodoPage',
  components: {
    TodoList,
    CreateTodo
  },
  // data function avails data to the template
  data () {
    return {
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
    }
  },
  methods: {
    createTodo (todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

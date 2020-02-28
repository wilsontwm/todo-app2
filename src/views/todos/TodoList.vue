<template>
    <div>
      <h4>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</h4>
      <h4>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</h4>
      <Todo v-for="(todo, index) in todos" v-bind:key="index" v-bind:todo="todo"></Todo>
    </div>
</template>
<script>
import Todo from './Todo'

export default {
  name: 'TodoList',
  components: {
    Todo
  },
  props: [],
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {}
}
</script>
<style scoped>

</style>

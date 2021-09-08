<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title>DOST MIMAROPA</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
    <div class="q-pa-md">
      <q-input v-model="task" type="text" label="What needs to be done?" @keyup.enter="addTask" />
      <q-list bordered separator>
        <q-item v-for="(todo, i) in filteredTodos" :key="'todo'+i" clickable v-ripple>
          <q-item-section avatar>
            <q-checkbox @click="toggleStatus(todo)" :modelValue="todo.isDone" />
          </q-item-section>
          <q-item-section class="row">
            <span :class="{
              'text-grey': todo.isDone,
              'text-strike': todo.isDone
            }">
              {{ todo.desc }}
            </span>
          </q-item-section>
          <q-item-section side>
            <q-btn @click="removeTask(i)" icon="delete" round size="sm" color="red" flat />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row q-pa-sm">
        <div class="col">
          {{ itemsLeft }} items left
        </div>

        <div class="q-gutter-xs">
          <q-btn @click="filter = 'All'" size="sm" :outline="filter === 'All'" :flat="filter !== 'All'" label="All" />
          <q-btn @click="filter = 'Active'" size="sm" :outline="filter === 'Active'" :flat="filter !== 'Active'" label="Active" />
          <q-btn @click="filter = 'Completed'" size="sm" :outline="filter === 'Completed'" :flat="filter !== 'Completed'" label="Completed" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: 'All',
      task: '',
      todos: [
        {
          desc: 'Create Add Button',
          isDone: false
        }
      ]
    }
  },
  computed: {
    itemsLeft () {
      return this.todos.filter(todo => !todo.isDone).length
    },
    filteredTodos () {
      switch (this.filter) {
        case 'Active':
          console.log('active', this.todos)
          return this.todos.filter(todo => !todo.isDone)
        case 'Completed':
          console.log('complete')
          return this.todos.filter(todo => todo.isDone)
        default:
          console.log('all')
          return this.todos
      }
    }
  },
  methods: {
    addTask () {
      this.todos.push({
        desc: this.task,
        isDone: false
      })
      this.task = ''
    },
    removeTask (i) {
      // your activity here

      // get the index or position
      // receive it and pass it as function parameter

      this.todos.splice(i, 1)
    },
    toggleStatus (todo) {
      // your activity here

      // Tips!
      // receive a parameter
      // use the Not (!) symbol
      // and assign it with the new value

      todo.isDone = !todo.isDone
    }
  }
}
</script>

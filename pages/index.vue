<template>
  <div class="static h-full ">
    <div class="w-full bg-ToDo-Green h-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="grid w-full h-screen ">
      <div class="w-5/6 lg:w-1/2 place-self-center">
      <ToDoList></ToDoList>
    </div>
    </div>
  </div>
</template>


<script>

import ToDoList from "../components/ToDoList.vue"

export default {
    components: {
      ToDoList
    },

    data() {
      return {

      }
    },

    computed: {

    },

    methods: {

    },

  }
</script>

<style>


</style>
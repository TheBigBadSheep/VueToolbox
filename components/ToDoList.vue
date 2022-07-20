<template>
  <div>

    <ToDoInputField
      :show-check-box="showCheckBox"
      :all-checked="allChecked"
      class="">
     </ToDoInputField>

    <ToDoListItem
    v-for="(item, index) in itemsFiltered"
    :key="index"
    :item="item"
    @onCheckedNiklas="(id) => markAsCheckedNiklas(id)"
    class=""
    >
    </ToDoListItem>

    <ToDoFooter
    :items="items">
    </ToDoFooter>
  </div>
</template>


<script>

import ToDoInputField from "./ToDoInputField.vue"
import ToDoListItem from "./ToDoListItem.vue"
import ToDoFooter from "./ToDoFooter.vue"

export default {

    components: {
      ToDoInputField, ToDoListItem, ToDoFooter,
    },

    data() {
      return {
      }
    },

    computed: {

        itemsFiltered(){
          return this.$store.getters.filteredItems
        },

        showCheckBox(){
          return this.$store.getters.showCheckBox
        },

         allChecked(){
          return this.$store.getters.allChecked
         },

        items(){
          return this.$store.state.items
        },

        filter(){
          return this.$store.state.filter
        }
    },

    methods: {
        markAsCheckedNiklas(id){
          const index = this.items.findIndex( item => item.id === id )
          if(index === -1) return;
          const item = this.items[index];
          item.isChecked = true;
          this.items.splice(index, 1, item)
        },

    },

  }
</script>

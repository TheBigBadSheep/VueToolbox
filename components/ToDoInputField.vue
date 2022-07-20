<template>
    <div class="border-2 border-ToDo-Green p-10 rounded-lg">
        <div class="pb-2 font-medium"> TODO: </div>
        <span v-show="showCheckBox" :class="activeArrowStyle">
            <img src="../assets/inputArrow.svg" class="absolute h-6 w-6 mt-4 ml-1 sm:mt-3">
            <input
            class=" absolute mb-5 ml-2.5 h-4 w-4 opacity-0 mt-4 sm:mt-4"
            type="checkbox" :checked="allChecked" @change="checkAll">
        </span>
        <div class="flex">
            <input
                v-model="item"
                class="w-full text-2xl px-8 shadow-md py-3 border-2 rounded-lg bg-white border-ToDo-Green placeholder-gray-500 text-gray-900 italic-font focus:outline-none
                sm:text-2xl sm:py-2"
                type="text"
                placeholder="What needs to be done?"
                @keypress.enter="addItem">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11 mt-1 ml-2 text-ToDo-Green hover:text-ToDo-LightGreen " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                @click="addItem">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        showCheckBox:{
            type: Boolean, default: false
        },
        allChecked:{
            type: Boolean, default: false
        }
    },
    data () {
        return {
            item: ''
        }
    },

    computed: {
        activeArrowStyle(){
          if(this.allChecked) return 'opacity-100'
          return 'opacity-30'
        },
    },

    methods: {
        addItem(){
            this.$store.dispatch('addItem', this.item)
            this.item = ''
        },
        checkAll(){
            this.$store.dispatch('checkAllToDos')
        }
    }

}
</script>

<style scoped>

  .italic-font::placeholder {
    font-style: italic;
    color: rgb(209, 213, 219)
  }
</style>
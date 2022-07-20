<template>
    <div class="bg-white border-2 border-t-0 border-ToDo-Green rounded-lg py-1 mt-0.5smh">
        <ul class="py-3">
            <div class=" static w-full flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="h-10 w-10 absolute ml-1 -mt-1 text-ToDo-LightGreen" :class="item.isChecked ? 'opacity-100' : 'opacity-0'">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="h-10 w-10 absolute ml-1 -mt-1 text-ToDo-LightGreen" :class="!item.isChecked ? 'opacity-100' : 'opacity-0'">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input class="h-10 w-10 ml-1 -mt-1 opacity-0 relative"
                type="checkbox"
                @change="isDone" >
                <input
                v-model="inputValue"
                class="w-10/12 ml-1 px-2 text-2xl active:border-transparent"
                :class="{'line-through opacity-30': item.isChecked}"
                type="text"
                @change="() => readOnly='true'"
                @dblclick="() => readOnly='false'"
                @keyup.enter="(event) => editToDo(event)">
                <div class="relative grid grid-cols-1 place-items-end w-auto md:opacity-0 hover:opacity-100 ">
                    <button class="h-8 w-8 mr-3 opacity-0" @click="removeToDo"> </button>
                    <img src="../assets/deleteButton.svg" class="h-8 w-8 -mt-8 mr-3">
                </div>
            </div>

        </ul>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            default: () => null,
            type: Object
        }
    },

    data() {
         return {
             inputValue: this.item.name
         }
    },
    methods: {
        isDone() {

            this.$store.dispatch('markAsChecked', this.item.id)
        },
        removeToDo() {
            this.$store.dispatch('removeItem', this.item.id)
        },

        editToDo(event){
            event.target.blur();
            // eslint-disable-next-line vue/no-mutating-props
            this.item.readOnly = false
            const payload = {
                id: this.item.id,
                inputValue: this.inputValue
            }
            this.$store.dispatch('editToDo', payload)
        }

    }
}
</script>

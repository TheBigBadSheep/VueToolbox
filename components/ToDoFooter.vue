<template>
    <div>
        <footer v-show="items.length > 0">
            <div class="bg-white h-9 py-1">
                <div class="flex py-1 justify-between">
                    <span v-if="itemsLeft.length == 1" class="text-xs sm:text-sm opacity-80 mt-1 sm:mt-0"> {{ itemsLeft.length }} Item left </span>
                    <span v-if="itemsLeft.length != 1" class="text-xs sm:text-sm opacity-80 mt-1 sm:mt-0"> {{ itemsLeft.length }} Items left </span>
                    <div class="-mt-0.5 ml-16 lg:ml-0">
                        <button
                        class="text-xs sm:text-sm rounded-lg px-2 border-2 border-transparent opacity-80 "
                        :class="{active: filter == 'all', 'border-ToDo-LightGreen border-opacity-20s shadow-sm': filter == 'all' }"
                        @click="onChangeFilter" @focus="filter='all'"> All
                        </button>
                        <button
                        class="text-xs sm:text-sm rounded-lg px-2 border-2 border-transparent opacity-80 "
                        :class="{active: filter == 'all', 'border-ToDo-LightGreen border-opacity-20s shadow-sm': filter == 'active' }"
                        @click="onChangeFilter" @focus="filter='active'"> Active
                        </button>
                        <button
                        class="text-xs sm:text-sm rounded-lg px-2 border-2 border-transparent opacity-80 "
                        :class="{active: filter == 'all', 'border-ToDo-LightGreen border-opacity-20s shadow-sm': filter == 'completed' }"
                        @click="onChangeFilter" @focus="filter='completed'"> Completed
                        </button>
                    </div>
                    <div class="">
                        <span v-show="atLeastOneChecked">
                            <button
                            class="absolute opacity-0 text-null -ml-28 sm:opacity-80 hover:underline hover:text-ToDo-Green mt-1 sm:mt-0 sm:text-sm"
                            @click="clearCompleted"> Clear completed
                            </button>

                        </span>
                    </div>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
export default {

    props: {
        items: {
            default: () => [],
            type: Array
        },
    },

    data() {
        return {
            filter: 'all',
        }
    },

    computed: {
        itemsLeft(){
            return this.items.filter(item => !item.isChecked)
        },
        atLeastOneChecked(){
            return this.itemsLeft.length !== this.items.length
        },
    },
    methods: {
        onChangeFilter(){
            this.$store.dispatch('changeFilter', this.filter)
        },

        clearCompleted(){
            this.$store.dispatch('clearCompleted')
        }
    }
}
</script>

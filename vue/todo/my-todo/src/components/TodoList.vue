<template>
   <section>
       <ul>
           <li>할 일 1</li>
           <li>할 일 2</li>
           <li>할 일 3</li>
       </ul>
   </section>
</template>

<script>
    export default {
        data() {
            return {
                todoItems: []
            }
        },
        created() {
            if(localStorage.length > 0) {
                for(var i=0; i<localStorage.length; i++) {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }

    }
</script>

<style>
</style>
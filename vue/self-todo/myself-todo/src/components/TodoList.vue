<template>
    <section>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                todoItems : []
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

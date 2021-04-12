<template>
    <section>
        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem">{{todoItem}}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return  {
                todoItems : []
            }
        },

        created() {
            if(localStorage.length>0) { //로컬스토리지에 데이터가 있다면?
                for(var i=0; i<localStorage.length; i++) {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
       
    
    }
</script>

<style>
</style>
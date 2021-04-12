<template>
    <div class="inputBox shadow">
        <input style="text" v-model="newTodoItems" placeholder="마 뭐해야하노"
            v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodoItems : ''
            }
        },
        methods : {
            addTodo() {
                if(this.newTodoItems !== "") {
                    var value = this.newTodoItems && this.newTodoItems.trim();
                    this.$emit('addTodo', value);
                    this.clearInput();
               }
               else {
                   alert('입력을 하라궁ㅇㅅㅇ');
                   this.clearInput();
                   
               }
            },
            clearInput() {
                this.newTodoItems ='';
            }
        }

    }
</script>

<style scoped>
    input:focus {
        outline:none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float:right;
        background:linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    
</style>
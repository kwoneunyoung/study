<template>
    <div>
        <h3>TodoList!</h3>
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
    export default {
        components: {
            'TodoHeader' : TodoHeader,
            'TodoInput' : TodoInput,
            'TodoList' : TodoList,
            'TodoFooter' : TodoFooter
        }
            }
    
    import TodoHeader from './components/TodoHeader.vue';
    import TodoInput from './components/TodoInput.vue';
    import TodoList from './components/TodoList.vue';
    import TodoFooter from './components/TodoFooter.vue';
</script>

<style>
</style>

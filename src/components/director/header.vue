<template>   
<div>   
    <input type="text" v-model="name">
    <p>{{name}}</p>
<p v-once>原数值：{{msg}}</p>
<p>现在值：{{msg}}</p>
<input type="text" v-model="msg">

    <ul>
    <li v-for="tmp in menuList">{{tmp}}</li>
    </ul>

    </div>
</template>
<script>
export default{
data(){
    return{
        name:'james',
        menuList:["首页","关于","产品" ,"留言","新闻",""],
        msg:"今天天气很好"
    }
},

 methods:{
     
 }
}
</script>
<style scoped>
h1{
    color:red;
    font-size:40px;
}
</style>
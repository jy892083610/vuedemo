<template>   
<div>   
  <!--第一部分-->
    <div>
        <h1>拇指哥学生录入系统</h1>
        <p>姓名：<input type="text" v-model="newUser.name"> </p>
        <p>年龄：<input type="text" v-model="newUser.age"> </p>
        <p>性别：
            <select name="男" id="" v-model="newUser.sex">
            <option value="男">男</option>
            <option value="女">女</option>
            </select> 
            </p>
            <p>手机：<input type="text" v-model="newUser.phone"> </p〉
            <p><button @click=createNewUser>创建</button></p>
    </div>
<!--第二部分-->
<div>
    <table>
        <thead>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <td>手机</td>
                <td>删除</td>
            </tr>
        </thead>
        <tbody>
              <tr v-for="(p,index) in person">
                <td>{{p.name}}</td>
                <td>{{p.age}}</td>
                <td>{{p.sex}}</td>
                <td>{{p.phone}}</td>
                <td><button @click="deleteUser(index)">删除</button> </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
</template>
<script>
export default{  
data(){
    return{
       person:[
           {name:"张三",age:20,sex:"男",phone:12345678909},
           {name:"张四",age:21,sex:"女",phone:12345678909},
           {name:"张五",age:22,sex:"男",phone:12345678909},
           {name:"张六",age:23,sex:"女",phone:12345678909},
           {name:"张七",age:24,sex:"男",phone:12345678909},
           {name:"张八",age:25,sex:"男",phone:12345678909}
       ],
       newUser:{name:"",age:"",sex:"",phone:""}
    }
},

 methods:{

     //创建一条新纪录 
     createNewUser(){
         if(this.newUser.name===""){
             alert("用户名不能为空");
             return;
         }
          this.person.unshift(this.newUser);
          this.newUser={name:"",age:"",sex:"",phone:""}
     }, 
     deleteUser(index){
 this.person.splice(index,1);
     }
 }   
}
</script>
<style scoped>
h1{
    color:red;
    font-size:40px;
}
table{
    width:600px;
    border:1px solid red;
}
table>thead{
    font-size:30px;
    color:red;
}
table>tbody td{
    padding:5px;
    border:1px solid green;
}
</style>
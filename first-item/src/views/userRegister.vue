<template>
    <div class="w">
        <div class="title">
            用户注册界面
        </div>
        <div class="account">账号：<input type="text" placeholder="  不能为空" v-model="userStore.user.account"></div>
        <div class="password">密码：<input type="text" placeholder="  不能为空" v-model="userStore.user.password"></div>
        <div class="Uname">昵称：<input type="text" placeholder="  不能为空" v-model="userStore.user.Uname"></div>
        <button @click="userStore.addUser()">注册</button>
        <button @click="userStore.printAccount()">打印</button>
    </div>
</template>
<script setup>
import { useUserStore } from '@/stores/userstore';
const userStore = useUserStore();
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.w {
    margin-top: 50px;
    width: 75%;
    height: 75%;
    text-align: center;
    border: 1px solid #666;
}

.title {
    margin: 50px;
    font-size: 50px;
}

.account,
.password,
.Uname {
    margin: 20px auto;
    height: 60px;
    width: 500px;
    line-height: 50px;
    font-size: 28px;
    border: 1px solid #666;
    border-radius: 3px;
}

.account input,
.password input,
.Uname input {
    width: 400px;
    height: 35px;
}

button {
    margin-top: 10px;
    height: 50px;
    width: 100px;
    font-size: 25px;
}
</style>
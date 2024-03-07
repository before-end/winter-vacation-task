<template>
    <div class="w">
        <div class="amendPassword">
            <h2>修改密码</h2>
            <input type="text" placeholder="  不能为空" v-model="userStore.user.password">
            <button @click="userStore.amendUserPassword()">修改</button>
            <br>
            <button @click="userStore.printAccount()">打印</button>
            <br>
            <button @click="userStore.toMainState(),userStore.returnTextState()">退出</button>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '@/stores/userstore';
const userStore = useUserStore()
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.w {
    margin-top: 75px;
    width: 60%;
    height: 60%;
    font-size: 16px;
    text-align: center;
}

.amendPassword {
    margin-top: 50px;
}

.amendPassword input {
    margin: 20px;
    height: 45px;
    width: 60%;

}

button {
    margin-top: 10px;
    height: 50px;
    width: 100px;
    font-size: 25px;
}
</style>
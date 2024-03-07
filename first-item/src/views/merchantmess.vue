<template>
    <div class="w">
        <div class="merchant">
            <button @click="userStore.toMainState(),userStore.returnTextState()">退出</button>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '@/stores/userstore';
const userStore=useUserStore()
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

.merchant {
    margin-top: 50px;
}
.merchant button{
    button {
    margin-top: 10px;
    height: 50px;
    width: 100px;
    font-size: 25px;
}
}
button {
    width: 100px;
    height: 50px;
    font-size: 30px;
}
</style>
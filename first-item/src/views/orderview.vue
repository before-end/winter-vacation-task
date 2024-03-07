<template>
    <div class="w">
        <div class="title">我的订单</div>
        <div class="myOrder">
            <ul>
                <li v-for="(item,index) in userStore.order">
                    <div class="order">
                        <div class="dishName">{{ item.dishName }}</div>
                        <div class="dishNum">{{ item.dishNum }}</div>
                        <div class="dishPrice">{{ item.dishPrice }}</div>
                        <button class="remove" @click="userStore.delOrder(index)">移除</button>
                    </div>
                </li>
            </ul>
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
    margin: 30px auto;
    height: 80%;
    width: 70%;
    border: 1px solid #666;
}
.title {
    margin: 10px auto;
    height: 30px;
    width: 150px;
    text-align: center;
    font-size: 24px;
}
.myOrder {
    margin: 5px auto;
    height: 80%;
    width: 80%;
    border: 1px solid #666;
}

.order {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin:5px auto;
    width: 90%;
    height: 50px;
    border: 1px solid #666;
}
.order .dishName,
.order .dishNum,
.order .dishPrice {
    height: 80%;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
}
.order .dishName {
    width: 30%;
}
.order .dishNum {
    width: 15%;
}
.order .dishPrice {
    width: 15%;
}
.order .remove {
    width: 10%;
    height: 50%;
}
</style>
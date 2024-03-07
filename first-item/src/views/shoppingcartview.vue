<template>
<div class="w">
    <div class="title">我的购物车</div>
    <div class="shoppingCart">
        <ul>
            <li v-for="(item,index) in userStore.userCartList">
                <div class="good">
                    <div class="goodName">{{ item.dishName }}</div>
                    <div class="goodUnitprice">{{ item.dishUnitprice }}</div>
                    <button class="reduce" @click="userStore.reduceDishNum(index)">-</button>
                    <div class="goodNum">{{ item.dishNum }}</div>
                    <button class="add" @click="userStore.addDishNum(index)">+</button>
                    <div class="goodPrice">{{ item.dishPrice}}</div>
                    <button class="remove" @click="userStore.delShoppingcart()">移除</button>
                    <button class="order" @click="userStore.addToOrder1(index)">下单</button>
                </div>
            </li>
        </ul>
    </div>
    <div class="toOrder">
        <div class="totlePrice">总价:{{ userStore.cartTotlePrice }}</div>
        <button class="getOrder" @click="userStore.addToOrder2()">下单</button>
    </div>
</div>
</template>
<script setup>
import { useUserStore } from '@/stores/userstore';
const userStore=useUserStore()
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.w {
    margin: 20px auto;
    height: 90%;
    width: 75%;
    border: 1px solid #666;
}
.title {
    margin: 10px auto;
    height: 25px;
    line-height: 25px;
    width: 30%;
    font-size: 25px;
    text-align: center;
}
.shoppingCart {
    margin: 5px auto;
    width: 80%;
    height: 80%;
    border: 1px solid #666;
}
.shoppingCart ul li {
    margin: 10px auto;
    width: 90%;
    height: 70px;
    border: 1px solid #666;
}
.good {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.goodName ,
.goodNum ,
.goodUnitprice ,
.goodPrice {
    display: inline-block;
    height: 80%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
}
.good .goodName {
    width: 30%;
}
.good .goodUnitprice {
    width: 10%;
}
.good .goodNum {
    width: 10%;
}
.good .goodPrice {
    width: 10%;
}
.add ,
.reduce{
    height: 40%;
    width: 5%;
}
.remove ,
.order {
    height: 60%;
    width: 10%;
}
.toOrder {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
    width: 80%;
    height: 50px;
    border: 1px solid #666;
}
.totlePrice {
    height: 40px;
    line-height: 40px;
    width: 150px;
    font-size: 20px;
}
.getOrder {
    height: 40px;
    width: 60px;
}
</style>
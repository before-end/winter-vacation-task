<template>
    <div class="w">
        <div class="title">主页</div>
        <div class="dishtext">
            <ul>
                <li v-for="(item,index) in itemStore.dishList ">
                    <div class="good">
                        <span class="goodName">{{ item.dishName }}</span>
                        <span class="gooddetail">{{ item.dishDetail }}</span>
                        <span class="goodUnitprice">{{ item.dishUnitprise }}</span>
                        <button @click="userStore.addToShoppingcart(item.dishName,item.dishUnitprise)">加入购物车</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useItemStore } from '@/stores/itemstore';
const itemStore=useItemStore()
import { useUserStore } from '@/stores/userstore';
const userStore=useUserStore()
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    font-size: 16px;
}

li {
    list-style: none;
}
.w {
    text-align: center;
}
.title {
    margin: 10px auto;
    font-size: 32px;
    font-weight: 700;
}
.dishtext {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    height: 500px;
    width: 600px;
    border: 2px solid #666;
}
.good {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
    height: 50px;
    width: 450px;
    border: solid 1px #666;
}
.goodName ,
.goodUnitprice,
.gooddetail{
    display: inline-block;
    height: 45px;
    text-align: center;
    line-height: 45px;
}
.goodName {
    width: 30%;
}
.goodUnitprice {
    width: 20%;
}
.gooddetail {
    width: 25%;
}
.good button {
    height: 35px;
    width: 15%;
    font-size: 10px;
}
</style>
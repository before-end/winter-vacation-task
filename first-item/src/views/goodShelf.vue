<template>
    <div class="w">
        <div class="shelf">
            <div class="title">我的货架</div>
            <ul>
                <li v-for="(item,index) in userStore.dishList">
                    <div class="good">
                        <div class="goodName">{{ item.Dname }}</div>
                        <div class="goodUnitprice">{{ item.unitprice }}</div>
                        <button class="del" @click="userStore.delDish(index)">删除</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="addDish">
            <div class="func">
                <input type="text" placeholder="菜品名称" class="getName" v-model="userStore.dish.Dname">
                <input type="number" placeholder="单价" class="getPrice" v-model="userStore.dish.unitprice">
                <button class="getFunc" @click="itemstore.addDish(userStore.dish.Dname,userStore.dish.unitprice),userStore.shelfDish()">添加</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userstore';
const userStore=useUserStore()
import { useItemStore } from '@/stores/itemstore';
const itemstore =useItemStore()
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.w {
    width: 100%;
    height: 100%;
    text-align: center;
}
.shelf {
    margin: 30px auto;
    height: 80%;
    width: 75%;
    text-align: center;
    border: 1px solid #666;
}

.shelf .title {
    margin-top: 10px;
    font-size: 40px;
}

.shelf ul li .good {
    margin: 10px auto;
    height: 75px;
    width: 600px;
    border: 1px solid #666;
}

.shelf ul li .good .del {
    margin-left: 10px;
    height: 60%;
    width: 10%;
}

.shelf ul li .goodName,
.shelf ul li .goodUnitprice {
    display: inline-block;
    margin-top: 4px;
    height: 90%;
    line-height: 67px;
    font-size: 20px;
}

.shelf ul li .goodName {
    width: 40%;
}

.shelf ul li .goodUnitprice {
    width: 15%;
}

.w .addDish {
    margin: 10px auto;
    width: 300px;
    height: 50px;
    border: 2px solid #666;
    border-radius: 5px;
}
.w .addDish .func {
    position: relative;
    width: 100%;
    height: 100%;
}

.w .addDish .func .getName {
    position: absolute;
    left: 20px;
    top: 8px;
    width: 150px;
    height: 60%;
    text-align: center;
}
.w .addDish .func .getPrice {
    position: absolute;
    left: 180px;
    top: 8px;
    width: 50px;
    height: 60%;
    text-align: center;
}
.w .func button {
    position: absolute;
    top: 8px;
    left: 240px;
    height: 65%;
    width: 15%;
}
</style>
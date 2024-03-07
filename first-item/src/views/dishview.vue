<template>
    <div class="w">
        <div class="title">我的购物车</div>
        <ul>
            <li>
                <div class="good">
                    <div class="goodName">小米手机</div>
                    <div class="goodUnitprice">1999</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup></script>
<style>
* {
    margin: 0;
    padding: 0;
}

.w {
    margin: 30px auto;
    height: 80%;
    width: 75%;
    text-align: center;
}

.w>.title {
    margin-top: 10px;
    font-size: 40px;
}

.w ul li .good {
    margin: 10px auto;
    height: 75px;
    width: 600px;
    border: 1px solid #666;
}

.w ul li .good .del {
    margin-left: 10px;
    height: 60%;
    width: 10%;
}

.w ul li .goodName,
.w ul li .goodUnitprice {
    display: inline-block;
    margin-top: 4px;
    height: 90%;
    line-height: 67px;
    font-size: 20px;
}

.w ul li .goodName {
    width: 40%;
    background-color: aqua;
}

.w ul li .goodUnitprice {
    width: 15%;
    background-color: aquamarine;
}

</style>
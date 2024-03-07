<template>
  <div class="w">
    <!-- 用户账号状态 -->
    <!-- 登录状态 -->
    <div class="appHeader">
      <div class="user" v-if="userStore.userState == 1">
        <RouterLink to="/user" class="userbutton" @click="userStore.leaveTextState()">{{ userStore.userList[0].Uname }}</RouterLink>
      </div>
      <!-- 初始状态 -->
      <div class="userState" v-if="userStore.userState == 0">
        <div class="section1">
          <RouterLink to="/userregister" class="register" @click="userStore.leaveTextState()">注册</RouterLink>
        </div>
        <div class="section2">
          <RouterLink to="/userlogin" class="login" @click="userStore.leaveTextState()">登录</RouterLink>
        </div>
      </div>
      <!-- 搜索栏 -->
      <div class="search">
        
      </div>
      <!-- 商家登录 -->
      <div class="merchant" v-if="userStore.userState == 0">
        <RouterLink to="/merchantLogin" class="section" @click="userStore.leaveTextState()">我是商家</RouterLink>
      </div>
      <div class="merchant" v-if="userStore.userState==2">
        <RouterLink to="/merchant" class="section" @click="userStore.leaveTextState()">{{ userStore.merchantList[0].account }}</RouterLink>
      </div>
    </div>
    <!-- 显示主体 -->
    <div class="appText">
      <RouterView v-if="userStore.textState==0 "></RouterView>
      <DishShow v-if="userStore.textState==1"></DishShow>
    </div>
    <!-- 项目状态 -->
    <div class="appTail">
      <div class="shoppingcart" v-if="userStore.userState==0||userStore.userState==1">
        <RouterLink to="/user/shoppingcart" class="section" @click="userStore.leaveTextState()">购物车</RouterLink>
      </div>
      <div class="shoppingcart" v-if="userStore.userState==2">
        <RouterLink to="/merchant/goodShelf" class="section" @click="userStore.leaveTextState()">货架</RouterLink>
      </div>
      <div class="order">
        <RouterLink to="/user/order" class="section">订单</RouterLink>
      </div>
    </div>

  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useUserStore } from '@/stores/userstore.js'
const userStore = useUserStore()
import { useItemStore } from './stores/itemstore';
const itemStore=useItemStore()

import DishShow from './components/DishShow.vue';
import HeaderSearch from './components/HeaderSearch.vue';
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.w {
  margin: 0 auto;
  height: 900px;
  width: 1000px;
  font-size: 0;
  border: 1px solid #666;
  overflow: hidden;
  border-radius: 20px;
}

.appHeader {
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 10%;
  border-radius: 5px;
  border-bottom: 1px solid #666;
  background-color: rgb(244, 238, 237);
}

.appText {
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 80%;
  border-radius: 20px;
  background-color: rgba(249, 232, 210, 0.883);
}

.appTail {
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 10%;
  border-radius: 5px;
  background-color: rgb(186, 189, 191);
}

.appHeader .merchant {
  flex: 4;
  position: relative;
  font-size: 16px;
}

.appHeader .search {
  flex: 12;
  display: flex;
  justify-content: center;
  align-items: center;
}

.appHeader .user {
  flex: 4;
  position: relative;
  font-size: 16px;
}

.appHeader .user .userbutton {
  position: absolute;
  height: 60%;
  width: 70%;
  margin: 20px 15%;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  text-decoration: none;
  border-radius: 10px;
  background-color: orange;
}

.appHeader .userState {
  display: flex;
  flex: 4;
  font-size: 16px;
}

.appHeader .userState .section1,
.appHeader .userState .section2 {
  flex: 2;
  position: relative;
}

.appHeader .userState .section1 .register,
.appHeader .userState .section2 .login,
.appHeader .merchant .section {
  position: absolute;
  height: 50%;
  width: 50%;
  top: 25%;
  left: 25%;
  text-align: center;
  line-height: 45px;
  border-radius: 50%;
  border: 2px solid #666;
  background-color: rgb(255, 179, 0);
  text-decoration: none;
  color: black;
}

.appTail .shoppingcart,
.appTail .order {
  position: relative;
  flex: 1;
}

.appTail .shoppingcart .section,
.appTail .order .section {
  position: absolute;
  height: 75%;
  width: 75%;
  top: 12%;
  left: 12%;
  text-align: center;
  line-height: 60px;
  border-radius: 25%;
  font-size: 24px;
  text-decoration: none;
  color: black;
  border: 2px solid #666;
  background-color: rgb(255, 127, 127);
}
</style>
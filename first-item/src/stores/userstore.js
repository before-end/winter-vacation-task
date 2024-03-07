import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => {
    return {
      // 账号状态
      userState: 0,
      // 主页状态
      textState: 1,
      // 缓存池数据
      user: {
        Uname: '',
        account: '',
        password: '',
      },
      merchant: {
        account: '',
        password: ''
      },
      dish: {
        Dname: '',
        unitprice: '',
        detail: ''
      },
      // 账号数据
      userList: [
      ],
      merchantList: [
        { account: '天工', password: '2024' },
      ],
      // 商家货架
      dishList: [],
      // 用户数据
      userCartList: [],
      // 购物车订单
      cartOrder: [],
      cartTotlePrice: 0,
      // 订单
      order: [],
    }
  },
  // 监听
  getters: {
  },
  actions: {
    // 清空暂存池
    cleanUserTS() {
      this.user.Uname = ''
      this.user.account = ''
      this.user.password = ''
    },
    cleanMerchantTS() {
      this.merchant.account = ''
      this.merchant.password = ''
    },
    cleanDishTS() {
      this.dish.Dname = ''
      this.dish.unitprice = ''
      this.dish.detail = ''
    },
    // 切换用户状态
    toMainState() {
      this.userState = 0
    },
    toUserState() {
      this.userState = 1
    },
    toMerchantState() {
      this.userState = 2
    },
    // 切换主页状态
    returnTextState() {
      this.textState = 1
    },
    leaveTextState() {
      this.textState = 0
    },
    // 注册账号
    addUser() {
      if (this.user.account == '') {
        alert('账号不能为空！')
      } else if (this.user.password == '') {
        alert('密码不能为空！')
      } else if (this.user.Uname == '') {
        alert('昵称不能为空！')
      } else {
        this.userList.push(
          {
            account: this.user.account,
            password: this.user.password,
            Uname: this.user.Uname
          }
        )
        alert('账号创建成功！')
        this.cleanUserTS()
      }
    },
    addMerchant() {
      if (this.merchant.account == '') {
        alert('账号不能为空！')
      } else if (this.merchant.password == '') {
        alert('密码不能为空！')
      } else {
        this.merchantList.push(
          {
            account: this.merchant.account,
            password: this.merchant.password,
          }
        )
        alert('账号创建成功！')
        this.cleanMerchantTS()
      }
    },
    // 打印已有账号信息
    printAccount() {
      console.log(this.userList)
    },
    // 登录
    loginAccount() {
      if (this.user.account != this.userList[0].account || this.user.password != this.userList[0].password) {
        alert('账号或密码错误！')
      } else {
        alert('登录成功！')
        this.toUserState()
        this.cleanUserTS()
        this.returnTextState()
      }
    },
    loginMerchant() {
      if (this.merchant.account != this.merchantList[0].account || this.merchant.password != this.merchantList[0].password) {
        alert('账号或密码错误！')
      } else {
        alert('登录成功！')
        this.toMerchantState()
        this.cleanMerchantTS()
        this.returnTextState()
      }
    },
    // 修改密码(用户列表功能暂缺)
    amendUserPassword() {
      this.userList[0].password = this.user.password
      alert('修改成功！')
      this.cleanUserTS()
    },
    // 上架菜品
    shelfDish() {
      if (this.dish.Dname === '') {
        alert('菜名不能为空！')
      } else if (this.dish.unitprice === '') {
        alert('单价不能为空！')
      } else {
        this.dishList.push({
          Dname: this.dish.Dname,
          unitprice: this.dish.unitprice,
          detail: this.dish.detail
        })
        this.cleanDishTS()
      }
    },
    // 删除菜品
    delDish(n) {
      this.dishList.splice(n, 1)
    },
    // 更新菜品信息
    // 加入购物车
    addToShoppingcart(Dname, unitprice) {
      if (this.userState == 1) {
        this.userCartList.push(
          {
            dishName: Dname,
            dishUnitprice: unitprice,
            dishNum: 1,
            dishPrice: unitprice
          }
        )
        alert('添加成功！')
      } else {
        alert('请先用户登录')
      }
    },
    delShoppingcart(index) {
      this.userCartList.splice(index, 1)
    },
    // 购物车更新
    addDishNum(index) {
      this.userCartList[index].dishNum++
      this.userCartList[index].dishPrice += this.userCartList[index].dishUnitprice
    },
    reduceDishNum(index) {
      if (this.userCartList[index].dishNum > 1) {
        this.userCartList[index].dishNum--
        this.userCartList[index].dishPrice -= this.userCartList[index].dishUnitprice
      }
    },
    // 入cartOrder
    addToOrder1(index) {
      this.cartOrder.push(
        {
          dishName: this.userCartList[index].dishName,
          dishUnitprice: this.userCartList[index].dishUnitprice,
          dishNum: this.userCartList[index].dishNum,
          dishPrice: this.userCartList[index].dishPrice
        }
      )
      this.cartTotlePrice = 0
      for (let n = 0; n < this.cartOrder.length; n++) {
        this.cartTotlePrice += this.cartOrder[n].dishPrice
      }
    },
    // 入order
    addToOrder2() {
      for (let n = 0; n < this.cartOrder.length; n++) {
        this.order.push(
          {
            dishName: this.cartOrder[n].dishName,
            dishUnitprice: this.cartOrder[n].dishUnitprice,
            dishNum: this.cartOrder[n].dishNum,
            dishPrice: this.cartOrder[n].dishPrice
          }
        )
        this.cartOrder = []
      }
      alert('下单成功！')
      this.cartOrder = []
    },
    // order 删除
    delOrder(index) {
      this.order.splice(index, 1)
    }
  }
})

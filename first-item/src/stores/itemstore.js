import { defineStore } from "pinia";

export const useItemStore = defineStore('ItemStore', {
    state: () => {
        return {
            dishList: [
                { dishName: '鱼香肉丝', dishUnitprise: 100, dishDetail: '好吃' },
            ],
        }
    },
    getters: {
    },
    actions: {
        // 添加菜品
        addDish(Dname, unitprice) {
            this.dishList.push(
                {
                    dishName: Dname,
                    dishUnitprise: unitprice,
                    dishDetail: ''
                }
            )
        }
    }
})
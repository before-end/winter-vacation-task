实现功能：<br>
1.用户的注册、登录、修改密码<br>
2.用户添加商品入购物车、下达订单、取消订单<br>
3.商家上架、下架货物、取消用户订单<br>

注意:<br>
`商家账号：天工  商家密码：2024`<br>
默认提供一个菜品“鱼香肉丝”<br>
打印按钮  请在console里查看内容(用于查看账号信息)<br>

运用技术：<br>
1.用userStore（pinia）存储用户及商家信息、并封装功能函数<br>
2.用itemStore（pinia）存储平台菜品信息<br>
3.用router对不同view进行关联<br>

问题：<br>
1.商家无法注册<br>
2.暂时仅支持单个用户注册（用户数据保存提取暂未优化）<br>
3.搜索组件的css出现问题还未解决，缺少搜索模块<br>
4.`未用到axios技术！！！`<br>
5.`对css使用生疏导致views文件夹创建冗余页面且使router中的路由路径冗余`
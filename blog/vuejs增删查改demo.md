# Date: 2017/12/13

demo博客地址：http://blog.csdn.net/qq_26598303/article/details/53468399

今天做完了vuejs入门demo的增删查改练习。中间也解决了几个问题，这里做个记录：
![图片](http://github.com/ublue1024/dailyBlog/raw/master/blogImg/img121301.png)

若要获取DOM属性值，有两种方法：一是用e.target.getAttribute('userAccount')；二是调用方法时直接传入属性值作为参数，类似@click="deleteUser(user.account)"。如果使用ref，有一个问题是如果元素是用v-for渲染的，会不止一个ref对象，取值比较麻烦。


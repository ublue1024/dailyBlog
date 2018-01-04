近几日整体上把seajs的配置和用法过了一遍，此地做个笔记。
1. 改造jquery为CMD模式有2种方法：
  1.1 底部添加 
      if(typeof define === "function") {
         define(function() {
             return jQuery;
         })
      }
  1.2  define(function() {
           // jQuery code here
           // ...
           return $.noConflict(true);
       })

2. 当sea.js该文件路径中含有版本号时， seajs.config的默认base属性不会包含seajs/1.0.0这些

3. seajs.use(id, ...)和define(id, ...)中的模块标识始终是普通路径，因为这2个方法是在全局环境中执行的

4. 写seajs模块语法类似 define(id?, dependencies?, factory); 推荐不写前2个参数，因为模块打包优化会自动填写这2个参数

5. 当目录层次比较深或是跨目录调用模块的时候，可以设置seajs.config的path属性简化模块标识的书写。path可以结合alias一起配置使用

6. 有些场景下，模块路径在运行时才能确定，可以使用seajs.config的vars配置

7. seajs.config的map配置主要用来做调试用途，做路径转换、版本号、时间戳等管理

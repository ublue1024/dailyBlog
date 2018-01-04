seajs.config({
    // Sea.js 的基础路径  
    base: './js/',
  /*  preload: [
        Function.prototype.bind ? '' : 'es5-safe',
        this.JSON ? '' : 'json'
    ],*/
    // 别名配置 
    alias: { 
        'jquery': 'lib/jquery-3.2.1.js?v=201712291'
    },
    debug: true,
    // 文件编码 
    charset: 'utf-8',
    // 路径配置 
    paths: { 
        'gallery': 'a/b/c/gallery'
    },
    map: [
        ['http://example.com/js/app/', 'http://localhost/js/app/']
    ],
});
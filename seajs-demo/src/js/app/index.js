define(function(require, exports, module) {
  //  document.write('<h1>Hello World</h1>');
  $ = require('jquery'); 
  //require('extend'); 
  require('deps/validate');
  require('mod/mod1');
  require('mod/mod2');
  var jqueryPath = require.resolve('jquery');
  console.log(jqueryPath);

 // require.async('a');

  var index = {
        running: function() {
            $('#myDiv').html('<em>磨刀霍霍向猪羊</em>');
            console.log(module.dependencies);
            console.log(module.id);
         //   console.log(module.filename());
        }

    };

    return index;
});
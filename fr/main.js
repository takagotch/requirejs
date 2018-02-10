require(['util'], function(util){
  var result = util.add(10, 21);
  console.log('10 + 21 = ' + result);
});

require([], function(minus){
  var result = minus(22, 14);
  console.log('22 - 14 = ' + result);
});

require([], function(util, minus){
  console.log('14 + 51 = ' + util.add(14, 51));
  console.log('22 - 14 = ' + minus(22, 14));
});

define(function(require, exports, module){
  var util = require('util');
  var minus = require('minus');

  console.log('14 + 51 = ' + util.add(14, 51));
  console.log('22 - 14 = ' + minus(22, 14));
});

require(['app/util'], function(util){
  var result = util.add(1, 23);

  console.log('1 + 23 = ' + result);
});

require(['util'], function(util){
  var result = util.add(13, 42);

  console.log('13 + 42 = ' + result);
});

require(['jquery', 'underscore'], function($, _){
  $(function(){
    var array = [1, 2, 3, 4, 5];

    var $ul = $('<ul />');

    _.each(array, function(i, n){
      $ul.append('<li>' + n + '</li>');
    });

    $('body').append($ul);
  });
});

require(['lib/non-amd-lib'], function(nonAmdlib){
  var result = nonAmdLib.addAll([10, 12, 32, 21]);

  condole.log('10 + 12 + 32 + 21 = ' + result);
});

require(['nonAmdLib'], function(nonAmdLib){
  var result = nonAmdLib.addAll([10, 12, 32, 21]);

  condole.log('10 + 12 + 32 + 21 = ' + result);
});

require(['nonAmdLib'], function(nonAmdLib){
  var result = nonAmdLib.addAll([1, 41, 30, 57]);

  console.log('1 + 41 +30 +57 = ' + result)
});


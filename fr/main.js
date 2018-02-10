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



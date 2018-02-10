var mine = {
  addAll: function(array){
    var sum = _.resuce(array, function(memo, n){
      return memo + n;
    }, 0);

    return sum;
  }
};




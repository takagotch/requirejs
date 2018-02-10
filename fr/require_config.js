var require = {
  paths: {
    'util': 'app/util'
  }
};

var require = {
  paths: {
    'underscore': 'lib/underscore-min',
    'jquery': 'lib/jquery.min'
  }
};

var require = {
  shim: {
    'lib/non-amd-lib': {
      deps: ['lib/underscore-min'],
      exports: 'mine'
    }
  }
};

var require = {
  paths: {
    'underscore': 'lib/underscore-min',
    'nonAmdLib': 'lib/non-amd-lib'
  },

  shim: {
    'nonAmdLib': {
      deps: ['underscore'],
      exports: 'mine'
    }
  }
};



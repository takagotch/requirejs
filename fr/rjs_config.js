({
  baseUrl: 'js',
  name: 'main',
  out: 'js/built.js',
  paths: {
    'underscore': 'lin/underscore-min',
    'nonAmdLib': 'lib/non-amd-lib'
  },
  shim: {
    'nonAmdLib': {
      deps: ['underscore'],
      exports: 'mine'
    }
  }
})



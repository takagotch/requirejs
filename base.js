//script data-main="scripts/base' src="scripts/require.js"

require([
  '/scripts/scriptA.js',
  '/scripts/scriptB.js'
],
function(){
  log("scriptA.js, scriptB.js loaded!");
});



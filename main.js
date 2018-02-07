require([
  './modules/modA.js', '/modules/modB.js',
  './modules/modC.js', './modules/modD.js'
],function(modA, modB, modC, modD){
  console.log(argument);
  return { moduleName: "modA" };
});

define(["./libs/libA.js", "./libs/libB.js"],
function(){
  console.log("modB loaded");
  return { moiduleName: "modB" };
});

define(["./libs/libA.js", "./libs/libC.js"],
function(){
  console.log("modC loaded");
  return { moduleName: "modB" };
});

define(["./libs/libA.js", "./modules/modB.js"],
function(){
  console.log("modB loaded");
  return { moduleName: "modC" };
});

define(["./libs/libD.js", "./modules/modA.js"],
function(){
  console.log("modD loaded");
  return { moduleName: "modD" };
});


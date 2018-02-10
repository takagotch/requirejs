define("util", [], function(){return{add: function(e,t){return e+t}}}), require(["util"], function(e){var t=e.add(20, 31); console.log("20 + 31 = "+t)}), define("main", function(){});


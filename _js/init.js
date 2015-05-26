//Add the js class
document.documentElement.className="js";

//Write in vanilla
var l = false;
var t = false;

document.addEventListener("DOMContentLoaded", function(event) {
	if (t) { document.body.className = "loaded"; } else { l = true; }
});

var i = setInterval(function() {
	if (l) { document.body.className = "loaded"; } else { t = true; }
	clearInterval(i);
}, 3000);
//Write in vanilla
var loaded = false;
var timer = false;

document.addEventListener("DOMContentLoaded", function(event) {
	if (timer) { document.body.className = "loaded"; } else { loaded = true; }
});

window.setInterval(function() {
	if (loaded) { document.body.className = "loaded"; } else { timer = true; }
}, 2000);
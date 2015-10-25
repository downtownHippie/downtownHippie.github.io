// hippie.cc.js
//   javascript components for the hippie.cc home page for the home

// setup some useful common page elements

document.getElementById("currYearForCopyright").textContent = new Date().getFullYear();

// common functions
//
//
function isNullorEmpty(text) {
	if ((text == null) || (text == '')) {
		return true;
	}
	return false;
}


// hide show blocks
var hideLists = document.getElementsByClassName("hideListHeader");
for (var i = 0; i < hideLists.length; i++) {
	hideLists[i].onclick = function() {
		hideMenu(this.nextElementSibling);
	};
}
function hideMenu(id) {
	var state = id.style.display;
	switch (state) {
		case 'block':
			id.style.display = 'none';
			break;
		case 'none':
			id.style.display = 'block';
			break;
		default: // is probably shown, so hide; too bad we don't konw what the css says
			id.style.display = 'none';
			break; // unnecessary?
	}
}


/** from https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

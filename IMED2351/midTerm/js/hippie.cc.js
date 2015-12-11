// hippie.cc.js
//   javascript components for the hippie.cc home page for the home

// setup some useful common page elements

document.getElementById('currYearForCopyright').textContent = new Date().getFullYear();

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
var hideLists = document.getElementsByClassName('hideListHeader');
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
		default: // since this is hideMenu assume hidden - too bad we can't ask what the css is...
			id.style.display = 'block';
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

function showElements(selection, elementName) {
	var fullName = '';

	for (var i = 1; i <= selection.value; i++) {
		fullName = elementName + i;
		document.getElementById(fullName).style.display = 'block';
	}

	var curSpot = selection.value;
	curSpot++;
	for (var i = curSpot; i < selection.length; i++) {
		fullName = elementName + i;
		document.getElementById(fullName).style.display = 'none';
	}
}

function validateRadios(radios) {
	for (i = 0; i < radios.length; i++) {
		if (radios[i].checked) return true;
	}
	return false;
};

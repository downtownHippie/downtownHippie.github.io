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

document.getElementById('hippieForm').onsubmit = function() {
	var valid = true;

	var errorTexts = document.getElementsByClassName('formErrorText');
	for (var i = 0; i < errorTexts.length; i++) {
		errorTexts[i].textContent = '';
	}

	var elles = document.getElementsByClassName('formValidate');

	for (var i = 0; i < elles.length; i++) {
		var v = elles[i];
		if (isNullorEmpty(v.value)) {
				var n = elles[i].name;
				document.getElementById(n + 'ErrorText').textContent = 'Please enter your ' + n;
				valid = false;
		};
	}

	var radios = (document.forms['hippieForm']['gender'])
	if (radios != null) {
		if (!validateRadios(radios)) {
			document.getElementById('genderErrorText').textContent = 'Please tell us if you\'re an inny or an outy';
			valid = false;
		}
	}

	return valid;
};

document.getElementById('termsAgreedTo').onchange = function() {
	if (this.checked) {
		document.getElementById('submitButton').disabled = false;
	}
	else
		document.getElementById('submitButton').disabled = true;
};

document.getElementById('petSelect').onchange = function() {
	if (this.value > 0) {
		document.getElementById('petNameInput').style.display = 'block';
		showElements(this, 'petName');
	}
	else {
		document.getElementById('petNameInput').style.display = 'none';
	}
}

var iCBG = document.getElementsByClassName('interestsCBGroup')
for (var i = 0; i < iCBG.length; i++) {
	if (iCBG[i].name != 'interestNone') {
		iCBG[i].onchange = function () {
			if (this.checked) {
				document.getElementById('interestNone').checked = false;
			}
		};
	}
	else {
		iCBG[i].onchange = function() {
			if (this.checked) {
				var cbs = document.getElementsByClassName('interestsCBGroup');
				for (var i = 0; i < cbs.length; i++) {
					if (cbs[i].name != 'interestNone') {
						cbs[i].checked = false;
					}
				}
			}
		};
	}
}

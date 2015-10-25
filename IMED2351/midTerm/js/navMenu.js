//  The idea of the hidden div menu came from:
//  http://javascript-array.com/scripts/simple_drop_down_menu/
//  	I deconstructed it:
//  		the html/css:
//  				the horizontal "nav menu" is a horizontal list (ul with
//  				list-style none) with the list-item as a string of inline-block
//  				anchor tags (giving them shape), all but the
//  				first hidden in a div.	mousing in, and out and around
//  				the first anchor unhides the rest of the anchors in that
//  				div, and then mousing in out and around the div affects
//  				its visibility as well
//  
//  				the div's position is absolute while it's anchors position
//  				is relative, with the positive z index on the whole element the
//  				menus float above the page
//  
//  		javascript:
//  				storing the id of the element in a global variable
//  				allows each menu to close whoever last opened then set
//  				themselves as open.
//  and rebuilt it for my purposes.
//
//  the original had a delay on close, I might reimplement that, it was "smoother"

var navMenuImport = document.querySelector('#navMenuHTML');
var navMenuContent = navMenuImport.import.querySelector('#nav');
document.getElementsByTagName('nav')[0].innerHTML = document.importNode(navMenuContent, true).innerHTML;

var navMenuMenus = document.getElementsByClassName("navMenu");
var navMenuMenuHeaders = document.getElementsByClassName("navMenuHeader");

var navMenuOpenItem = 0;

for (var i = 0; i < navMenuMenus.length; i++) {
	navMenuMenus[i].onmouseover = function() {
		navMenuMenuOpen(this);
		};
	navMenuMenus[i].onmouseout = function() {
		navMenuMenuClose();
		};
	navMenuMenuHeaders[i].onmouseover = function() {
		navMenuMenuOpen(this.nextElementSibling);
		};
	navMenuMenuHeaders[i].onmouseout = function() {
		navMenuMenuClose();
		};
}

function navMenuMenuClose() {
	if (navMenuOpenItem) navMenuOpenItem.style.visibility = 'hidden';
}
function navMenuMenuOpen(id) {
	if (navMenuOpenItem) navMenuOpenItem.style.visibility = 'hidden';
	navMenuOpenItem = id;
	navMenuOpenItem.style.visibility = 'visible';
}

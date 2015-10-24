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

var menus = document.getElementsByClassName("navMenu");
var menuHeaders = document.getElementsByClassName("navMenuHeader");

var openItem = 0;

for (var i = 0; i < menus.length; i++) {
	menus[i].onmouseover = function() {
		menuOpen(this);
		};
	menus[i].onmouseout = function() {
		menuClose();
		};
	menuHeaders[i].onmouseover = function() {
		menuOpen(this.nextElementSibling);
		};
	menuHeaders[i].onmouseout = function() {
		menuClose();
		};
}

function menuClose() {
	if (openItem) openItem.style.visibility = 'hidden';
}
function menuOpen(id) {
	if (openItem) openItem.style.visibility = 'hidden';
	openItem = id;
	openItem.style.visibility = 'visible';
}

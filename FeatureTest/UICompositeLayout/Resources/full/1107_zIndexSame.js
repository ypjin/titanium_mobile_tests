// Create multiple views on top of each other with the same zIndex 
// view will be placed in the order they were called and all view should have the same zindex  

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});
var view1 = Ti.UI.createView({
	backgroundColor: 'blue',
	top: 60,
	left: 20,
	height: 40,
	width: 40,
	zIndex:1
});

var view2 = Ti.UI.createView({
	backgroundColor: 'orange',
	top: 80,
	left: 40,
	height: 40,
	width: 40,
	zIndex:1
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Pass if the orange view is on top of the blue view';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view1);
win.add(view2);
win.add(label);
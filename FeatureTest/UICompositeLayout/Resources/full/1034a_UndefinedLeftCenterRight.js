// Create a view and do not set the left and set center.x to 80 and right to 120, call left value (static/dynamic) 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	center: {x:80},
	right: 120
});

win.addEventListener('open', function(e){
	label.text = 'View Dynamic Left value: '+view.rect.left +'\n Static Left Value is undefined:' + view.left;
});

win.add(view);
win.add(label);
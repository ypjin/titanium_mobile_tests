//Create a view and do not set the right set center.x to 50 and left to 10 call right value(static/dynamic) 

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
	center: {x:50},
	left:10
});

win.addEventListener('open', function(e){
	label.text = 'View Dynamic Right value: '+view.rect.right + '=90' +'\n Static Right Value is undefined:' + view.right;
});

win.add(view);
win.add(label);
//Create a view and do not set the top and set height to 100 and bottom to 200, call top value (static/dynamic) 

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
	bototm: 200,
	height: 100
});

win.addEventListener('open', function(e){
	label.text = 'View Dynamic Top value: '+ view.rect.top + '\n Static Height Value is undefined:' + view.top;
});

win.add(view);
win.add(label);
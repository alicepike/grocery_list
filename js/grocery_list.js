$(function(){

	var list = [];
	var item;
	var found = false;
	var response = prompt('(a)dd item or (q)uit?');
	while(response === 'a'){
		item = prompt('what would you like to add?');
		for(var i = 0; i<list.length; i++){
			if(list[i] === item){
				found = true;
				alert('You already have this item on your list');
				break;
			}
		}

		if(!found){
			list.push(item);
		}
		found = false;
		response = prompt('(a)dd item or (q)uit?');
	}
	$('ul').before('<h1>Shopping List</h1>');
	for(var c = 0; c<list.length; c++){
		$('ul').append('<li>' + list[c] + '</li>');
	}

});
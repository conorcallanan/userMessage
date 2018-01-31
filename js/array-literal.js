//create array and assign values
var colors = new Array('white',
					   'black',
					   'red');
					   
colors.push('purple');

colors[2] = 'Beige';

//show first item from array
var el = document.getElementById('colors');
el.textContent = colors[3];
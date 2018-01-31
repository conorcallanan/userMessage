// create vars
var username;
var message;

//assign values
username = 'Conor';
message = 'Hey ' +username+ ', See our upcoming range';

//get element with id of name
var elName = document.getElementById('name');
//replace content of this element
elName.textContent = username;

//get element with id of note
var elNote = document.getElementById('note');
// replace content of this element
elNote.textContent = message;
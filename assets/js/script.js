// Created a variable for container
var container=$('.container');
// Added a new tag of <div> to the container with a class of "col" to create a column
var firstCol = $('<div>').addClass('col');
$(container).prepend(firstCol);
// Created variable for a new <input> tag and prepended that to the first column
var addInput = $('<input>').addClass('row');
$('.col').prepend(addInput);
// Created variable for a new <dropdown> and appended to the first column
var addDrop = $('<select>');
$('.col').append(addDrop);
// Here I created a button and dropdown button that I am appending to the first column
var topBtn=$('<button>').addClass('row');
var dropBtn= $('<button>').addClass('row dropbtn');
$('.col').append(topBtn);
$('.col').append(dropBtn);
// Here I am creating a var for the second column and appending it to the containier
var secondCol= $('<div>').addClass('col-10');
$(container).append(secondCol);
// Added a header to the second column;
$('.col-10').addElement('header');
// Added new <div> tags within column two
$('.col-10').append('<div>');



















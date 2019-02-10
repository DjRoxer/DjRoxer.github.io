$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#add").show();
	$("#contact").show();
	$("#contacts").hide(); // hide the element with ID "otherElement"
	$("#addScreen").hide();
});
$("#dialer").click(function() {

	$("#numbers").show();
	$("#addScreen").hide();
	$("#contacts").hide();
	$(this).css('backgroundColor', 'white');
	$('#contact').css('backgroundColor', 'lightgrey');
	$('#add').css('backgroundColor', 'lightgrey');
});
$("#contact").click(function() {

	$("#contacts").show();
	$("#numbers").hide();
	$("#addScreen").hide();
	$(this).css('backgroundColor', 'white');
	$('#dialer').css('backgroundColor', 'lightgrey');
	$('#add').css('backgroundColor', 'lightgrey');
});
$("#add").click(function() {

	$("#addScreen").show();
	$("#numbers").hide();
	$("#contacts").hide();
	$(this).css('backgroundColor', 'white');
	$('#contact').css('backgroundColor', 'lightgrey');
	$('#dialer').css('backgroundColor', 'lightgrey');
});

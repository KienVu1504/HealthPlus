//save user name
$(function() {
	$('#NameForm').submit(function() {
		username = $('#user').val()
		localStorage.setItem('username', username)
    })
});

//get and show user name 
username = localStorage.getItem('username');
if (username == null || username.length == 0) {
    $('#nameShow').html('Hello User');
} else {
    $('#nameShow').html('Hello: ' + username);
}
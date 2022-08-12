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

//device detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location.replace("https://kienvu1504.github.io/HealthPlus/K/");
}
//  else {
//     window.location.replace("https://kienvu1504.github.io/HealthPlus/Z/");
// }
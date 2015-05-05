// YOUR CODE HERE:
var app = {};
app.init = function() {
	this.server = 'https://api.parse.com/1/classes/chatterbox';
	this.$roomSelect = $('#roomSelect');
	this.$chats = $('#chats');
	this.$formMessage = $('#formMessage');
};
var pretend = "lol its almost like it works!"
app.send = function(message) {
	$.ajax({
		// This is the url you should use to communicate with the parse API server.
		url: this.server,
		type: 'POST',
		data: JSON.stringify(message),
		contentType: 'application/json',
		success: function(data) {
			console.log('chatterbox: Message sent');
		},
		error: function(data) {
			// See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
			console.error('chatterbox: Failed to send message');
		}
	});
};

app.fetch = function(message) {
	$.ajax({
		// This is the url you should use to communicate with the parse API server.
		url: this.server,
		type: 'GET',
		data: JSON.stringify(message),
		contentType: 'application/json',
		success: function(data) {
			console.log('chatterbox: Message received');
		},
		error: function(data) {
			// See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
			console.error('chatterbox: Failed to receive message');
		}
	});
};

app.addRoom = function(name) {
	this.$roomSelect.append($('<option></option>').attr("value", name).text(name));
};

app.addMessage = function(message) {
	// this.message = this.$formMessage.message.value
	// $('#inputButton').on('click', function(form){
	// 	this.$chats.append($('<div></div>').text(this.form.message)
	// )});
	// this.message = document.getElementById("message");
	// var mess = this.message.value;
	// this.$chats.append("<div>lol</div>");

	$('#inputButton').submit($("#chats").append('<div></div>').text(message));
		// e.preventDefault();
		// // $('#chats').append($('<div></div>').text(message)
		// 	console.log("test");

	//});
};

app.clearMessages = function(message) {
	this.$chats.text(message);
};

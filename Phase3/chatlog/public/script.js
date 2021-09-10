function sendMessage(name, msg){
    console.log(`name: ${name}, msg: ${msg}`);
    var socket = io();
    socket.emit('obj', {name: name, msg: msg});
    document.getElementById('name').value = '';
    document.getElementById('msg').value = '';
    document.getElementById('status-message').innerHTML = "Sent!"
}
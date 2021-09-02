var socket = io();
socket.emit('obj', '1');
socket.on('obj', (msg) => {
  addServerText(msg);
  if (messageCount === 5) {
    setTimeout(() => {
      endChat();
    }, 1100);
  }
});
let messageCount = 2;

function sendText() {
  let text = document.getElementById('input-chat').value;
  let chatBody = document.getElementById('chat-id');
  chatBody.innerHTML += `<p><span class="client">Client (${getCurTime()}): </span>${text}</p><hr />`;
  document.getElementById('input-chat').value = '';
  setTimeout(() => {
    console.log('Getting reply...');
    socket.emit('obj', [messageCount, text]);
    messageCount++;
  }, 1100);
}

function addServerText(text) {
  let chatBody = document.getElementById('chat-id');
  chatBody.innerHTML += `<p><span class="server">Server (${getCurTime()}): </span>${text}</p><hr />`;
}

function endChat() {
  addServerText('Goodbye!');
  document.getElementById('input-id').innerHTML = `
  <div style="text-align: center;width: inherit;">
    <h4>Chat Ended</h4>
  </div>`;
}

function getCurTime() {
  let newDate = new Date();
  return newDate.toLocaleTimeString();
}

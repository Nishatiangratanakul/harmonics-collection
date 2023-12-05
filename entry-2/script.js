const chatContainer = document.querySelector(".chat");

function clearChat() {
  chatContainer.innerHTML = "";
}

function showMessage(message, isMine) {
  const messageDiv = document.createElement("div");
  messageDiv.className = isMine ? "mine messages" : "yours messages";

  const innerMessageDiv = document.createElement("div");
  innerMessageDiv.className = "message last";
  innerMessageDiv.innerHTML = message;

  messageDiv.appendChild(innerMessageDiv);
  chatContainer.appendChild(messageDiv);

  // Auto-scroll to the bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function displayMessages(messages, index = 0) {
  if (index >= messages.length) {
    return;
  }

  const { message, isMine } = messages[index];
  const messageDiv = document.createElement("div");
  messageDiv.className = isMine ? "mine messages" : "yours messages";

  if (message.startsWith('<img') || message.startsWith('<audio')) {
    messageDiv.innerHTML = message;
  } else {
    const innerMessageDiv = document.createElement("div");
    innerMessageDiv.className = "message";
    innerMessageDiv.innerHTML = message;
    messageDiv.appendChild(innerMessageDiv);
  }

  chatContainer.appendChild(messageDiv);

  // Auto-scroll to the bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Continue displaying messages
  setTimeout(() => displayMessages(messages, index + 1), 2000);
}


// Clear existing chat messages
clearChat();

const messages = [
  { message: "Sha today is cold?", isMine: false },
  { message: "I saw temperature drop a lot.", isMine: false },
  { message: "对 I almost froze to death", isMine: true },
  { message: "你小心啊, remember to wear 厚的外套", isMine: false },
  { message: "Yeah dw I’ll be fine", isMine: true },
  { message: "Make some hot soup to warm yourself up", isMine: false },
  { message: "这个 Weather makes me 想念你的牛肉面", isMine: true },
  { message: "你要我教你吗? Really easy", isMine: false },
  { message: "Really？", isMine: true },
  { message: "你可以 teach me 吗?", isMine: true },
  { message: "Sure", isMine: false },
  { message: "Yay", isMine: true },
  { message: "我需要买什么 ingredient?", isMine: true },
  { message: "Beef shank, onion, tomato, rice wine, herb mix, Taiwanese mustard pickle, and 豆瓣酱.", isMine: false },
  { message: "And noodle", isMine: false },
  { message: "What is 豆瓣酱?", isMine: true },
  { message: "And what spice bag do I need", isMine: true },
  { message: '<img src="images/bean-paste.JPG">', isMine: false },
  { message: '<audio controls hidden="hidden"><source src="audios/Spice.mp3" type="audio/mpeg"/><p>Download <a href="Spice.mp3">MP3</a></p></audio>', isMine: false },
  { message: '<img src="images/spice-bag.JPG">', isMine: false },
  { message: "👌", isMine: true },
  { message: "好，明天我会去买。", isMine: true },
  { message: "Got everything", isMine: true },
  { message: "So how should I start?", isMine: true },
  { message: '<audio controls hidden="hidden"><source src="audios/How-to-cook-1.mp3" type="audio/mpeg"/><p>Download <a href="How-to-cook-1.mp3">MP3</a></p></audio>', isMine: false },
  { message: '<audio controls hidden="hidden"><source src="audios/How-to-cook-2.mp3" type="audio/mpeg"/><p>Download <a href="How-to-cook-2.mp3">MP3</a></p></audio>', isMine: false },
  { message: '<audio controls hidden="hidden"><source src="audios/Cook-Pickles.mp3" type="audio/mpeg"/><p>Download <a href="Cook-Pickles.mp3">MP3</a></p></audio>', isMine: false },
  { message: '<img src="images/noodles.jpg">', isMine: true },
  { message: "这个noodle可以吗?", isMine: true },
  { message: 'Yeah this one works', isMine: false },
  { message: "我太厉害了吧 ✌️?", isMine: true },
  { message: '<img src="images/beef-noodle.jpeg">', isMine: true },
  { message: "Good job", isMine: false },
  { message: "You made a big pot right? Give some to your brother", isMine: false },
  { message: "News said 今年冬天会很冷, make sure you keep warm okay?", isMine: false },
  { message: "Yeah I know don’t worry", isMine: true },
  { message: "Thank you, too bad I can’t have your 牛肉面", isMine: true },
  { message: "I miss you", isMine: true },
];





// Start displaying messages
displayMessages(messages);

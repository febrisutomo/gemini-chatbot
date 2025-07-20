// public/script.js
document.addEventListener('DOMContentLoaded', () => {
   const chatForm = document.getElementById('chat-form');
   const userInput = document.getElementById('user-input');
   const chatBox = document.getElementById('chat-box');
   const sendBtn = document.getElementById('send-btn');

   // Inisialisasi Marked.js dengan opsi yang sesuai
   marked.setOptions({
       breaks: true, // Mengaktifkan line breaks dengan baris baru
       gfm: true,    // Mengaktifkan GitHub Flavored Markdown
       sanitize: false // Jangan melakukan sanitasi HTML (hati-hati dengan konten eksternal)
   });

   let chatHistory = [];

   const addMessage = (message, sender) => {
       const messageClass = sender === 'user' ? 'justify-content-end' : 'justify-content-start';
       const containerClass = sender === 'user' ? 'msg_cotainer_send' : 'msg_cotainer';
       const formattedMessage = sender === 'ai' ? marked.parse(message) : message;

       const messageElement = `
           <div class="d-flex ${messageClass} mb-4">
               <div class="${containerClass}">
                   ${formattedMessage}
               </div>
           </div>`;
       chatBox.innerHTML += messageElement;
       chatBox.scrollTop = chatBox.scrollHeight;
   };

   const showTypingIndicator = () => {
       const typingIndicator = `
           <div class="d-flex justify-content-start mb-4" id="typing-indicator">
               <div class="msg_cotainer">
                   <div class="spinner-border spinner-border-sm" role="status">
                       <span class="visually-hidden">Loading...</span>
                   </div>
               </div>
           </div>`;
       chatBox.innerHTML += typingIndicator;
       chatBox.scrollTop = chatBox.scrollHeight;
   };

   const removeTypingIndicator = () => {
       const indicator = document.getElementById('typing-indicator');
       if (indicator) {
           indicator.remove();
       }
   };

   chatForm.addEventListener('submit', async (e) => {
       e.preventDefault();
       const message = userInput.value.trim();
       if (!message) return;

       addMessage(message, 'user');
       chatHistory.push({ role: 'user', parts: [{ text: message }] });
       userInput.value = '';
       showTypingIndicator();

       try {
           const response = await fetch('http://localhost:3000/chat', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                   message: message,
                   history: chatHistory
               }),
           });

           removeTypingIndicator();

           if (!response.ok) {
               throw new Error('Gagal mendapatkan respons dari server.');
           }

           const data = await response.json();
           const aiReply = data.reply;
           addMessage(aiReply, 'ai');
           chatHistory.push({ role: 'model', parts: [{ text: aiReply }] });

       } catch (error) {
           removeTypingIndicator();
           console.error('Error:', error);
           addMessage('Maaf, terjadi kesalahan. Silakan coba lagi.', 'ai');
       }
   });
});
// Import library yang dibutuhkan
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

// Muat variabel lingkungan dari file .env
dotenv.config();

// Inisialisasi aplikasi Express
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Mengizinkan Cross-Origin Resource Sharing
app.use(express.json()); // Mem-parsing body permintaan sebagai JSON
app.use(express.static('public')); // Menyajikan file statis dari folder 'public'

// Inisialisasi Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Definisikan endpoint untuk chat
app.post('/chat', async (req, res) => {
    try {
        // Ambil pesan dari body permintaan
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
        }

        // Pilih model Gemini
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Mulai chat dengan histori (jika ada)
        const chat = model.startChat({
            history: req.body.history || [], // Gunakan histori dari request jika ada
        });

        // Kirim pesan ke model dan tunggu hasilnya
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        // Kirim balasan dari AI ke frontend
        res.json({ reply: text });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat memproses permintaan Anda.' });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
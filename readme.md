# Chatbot AI dengan Gemini API

Ini adalah proyek chatbot AI sederhana yang menggunakan **Google Gemini API** untuk menghasilkan respons cerdas. Backend dibangun dengan **Node.js** dan **Express.js**, sementara frontend interaktifnya menggunakan **HTML**, **Bootstrap**, dan **JavaScript**.

## ✨ Fitur

  * **Antarmuka Chat Real-time**: Tampilan chat yang responsif dan modern dengan tema gelap.
  * **Koneksi ke Gemini API**: Terhubung ke model AI generatif Google untuk percakapan yang dinamis.
  * **Parsing Markdown**: Respons dari AI yang mengandung format Markdown (seperti daftar, tebal, atau blok kode) akan ditampilkan sebagai HTML.
  * **Pemisahan Backend & Frontend**: Arsitektur yang aman di mana API Key disembunyikan di sisi server.
  * **Lingkungan Pengembangan Modern**: Menggunakan `nodemon` untuk *hot-reloading*, mempercepat proses pengembangan.

-----

## 🛠️ Teknologi yang Digunakan

  * **Frontend**:
      * HTML5
      * CSS3
      * Bootstrap 5
      * JavaScript (ES6+)
      * Font Awesome (untuk ikon)
      * Marked.js (untuk parsing Markdown)
  * **Backend**:
      * Node.js
      * Express.js
  * **API**:
      * Google Gemini API (`@google/generative-ai`)
  * **Alat Pengembangan**:
      * `nodemon`
      * `dotenv`

-----

## 🚀 Instalasi dan Penggunaan

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut.

### 1\. Prasyarat

  * [Node.js](https://nodejs.org/en/) (v18 atau lebih baru)
  * NPM (biasanya sudah terinstal bersama Node.js)
  * **Google AI API Key** dari [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2\. Kloning Repositori

```bash
git clone https://github.com/NAMA_PENGGUNA_ANDA/NAMA_REPOSITORI_ANDA.git
cd NAMA_REPOSITORI_ANDA
```

### 3\. Instalasi Dependensi

Instal semua paket yang dibutuhkan untuk backend.

```bash
npm install
```

### 4\. Konfigurasi Environment

Buat file `.env` di direktori utama proyek. File ini akan menyimpan API key Anda secara rahasia.

```
touch .env
```

Buka file `.env` dan tambahkan API key Anda:

```env
GEMINI_API_KEY="MASUKKAN_API_KEY_ANDA_DI_SINI"
```

### 5\. Jalankan Aplikasi

Gunakan perintah `dev` untuk menjalankan server dengan `nodemon`. Server akan otomatis restart setiap kali ada perubahan file.

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`. Buka alamat tersebut di browser Anda untuk mulai menggunakan chatbot.

-----

## 📁 Struktur Proyek

```
chatbot-gemini/
├── public/                # Semua file frontend
│   ├── index.html         # Struktur utama halaman
│   ├── style.css          # Styling kustom
│   └── script.js          # Logika frontend
├── .env                   # Menyimpan variabel rahasia (TIDAK di-commit ke Git)
├── .gitignore             # Mengabaikan node_modules dan .env
├── package.json           # Info proyek dan dependensi
├── package-lock.json      # Versi dependensi yang terkunci
└── server.js              # Server Express dan logika backend
```

-----

## 📜 Skrip NPM

  * `npm run dev`: Menjalankan server dalam mode pengembangan dengan `nodemon`.
  * `npm start`: Menjalankan server dalam mode produksi dengan `node`.
  * `npm test`: (Belum diimplementasikan) Menjalankan pengujian.
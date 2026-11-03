<div align="center">

# 🎭 Sembilan Communication
### Premier Corporate Event Organizer & Technical Production Platform

[![React](https://img.shields.io/badge/React-19.0.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

<p align="center">
  Platform web resmi berstandar korporat modern untuk <strong>PT Sembilan Komunikasi Indonesia (Sembilan Communication)</strong> — spesialis penyelenggaraan konvensi skala nasional (MICE), <em>brand activation</em> imersif, konser arena, <em>executive gathering</em>, dan manajemen teknis peralatan audio-visual panggung.
</p>

[Fitur Utama](#-fitur-utama--arsitektur-komponen) • [Desain & Desain Token](#-design-system--identitas-visual) • [Struktur Proyek](#-struktur-direktori) • [Panduan Instalasi](#-memulai-lokal-quick-start) • [Mesin Kalkulator Anggaran](#-mesin-kalkulator-estimasi-biaya) • [Lisensi](#-lisensi)

</div>

---

## 📌 Ikhtisar Proyek (Project Overview)

**Sembilan Communication** dirancang untuk menghadirkan pengalaman digital berfidelitas tinggi (*high-fidelity corporate event organizer landing page*) yang memadukan estetika korporat terpercaya, tipografi proporsional, serta tata letak asimetris yang dinamis sesuai kebutuhan industri MICE dan *event production* modern di Indonesia.

Website ini memadukan **realisme fotografi event** (bukan ilustrasi abstrak generik) dengan interaktivitas menyeluruh:
* **Performa Tinggi**: Dibangun di atas **Vite 8** dan **React 19** dengan *zero-bundle bloat*.
* **Gaya Modern**: Didukung arsitektur **Tailwind CSS v4** menggunakan sistem utilitas teroptimasi.
* **Pengalaman Pengguna Interaktif**: Dilengkapi 6 modal dinamis (*Budget Calculator, RFQ Proposal, Case Study, Article Reader, Showreel Player, Service Spec Detail*).
* **Validasi Data**: Modul utilitas TypeScript mandiri untuk perhitungan estimasi anggaran dan sanitasi input formulir konsultasi.

---

## 🎨 Design System & Identitas Visual

Aplikasi mengadopsi palet warna korporat yang kokoh, seimbang, dan berwibawa:

| Peran Token | Kode HEX / Kelas | Penerapan |
| :--- | :--- | :--- |
| **Corporate Navy (Primary)** | `#0B1B3D` / `bg-[#0B1B3D]` | Header button, judul utama, kartu statistik, footer backdrop, teks dominan |
| **Deep Midnight (Dark Base)** | `#071324` / `bg-[#071324]` | Background Hero vignette, Footer background |
| **Vibrant Orange (Accent)** | `#F95700` / `bg-[#F95700]` | Call-to-Action (CTA), garis aksen kategori, badge highlight |
| **Sky / Royal Blue (Secondary)**| `#0052CC` / `#38BDF8` | Brandmark crossbar, lencana sertifikasi, aksen backdrop geometris |
| **Surface & Neutral Soft** | `#F8FAFC` / `#FFFFFF` | Background seksi konten, kontainer kartu dengan border slate halus |
| **Border & Divider** | `border-slate-200/90` | Pembatas antar-kartu dan garis tipis vertikal |

### Tipografi
* **Font Keluarga Utama**: `Plus Jakarta Sans` (Google Fonts: 400, 500, 600, 700, 800) untuk keterbacaan optimal pada antarmuka digital korporat.
* **Display & Accent**: `Playfair Display` (serif opsional untuk lencana formal/aksen editorial).

---

## 🏗 Fitur Utama & Arsitektur Komponen

Semua komponen dirancang modular, bebas ketergantungan sirkular, dan sepenuhnya responsif:

```
[ App.tsx ]
   ├── [ Navbar.tsx ]               --> Header putih ramping, dropdown menu, modal trigger
   ├── [ Hero.tsx ]                 --> Panggung konvensi sinematik, CTA utama, pagination slider
   ├── [ ServicesSection.tsx ]      --> 4-kolom kiri + 8-kolom kanan (3-column grid layanan + Our Equipment)
   ├── [ SocialSection.tsx ]        --> Saluran media sosial + galeri media foto 3x2 dengan Lightbox
   ├── [ PortfolioSection.tsx ]     --> Statistik 70k+ / 2M+, logo klien (Telkomsel, BCA, Mandiri, Unilever, Indofood) + foto tumpang tindih
   ├── [ BlogSection.tsx ]          --> Grid editorial 4:8 dengan 3 kartu artikel berlebar seimbang
   ├── [ CompanyProfileSection.tsx ]--> Layout asimetris 3-tier, unduh company profile, lencana IBS/MICE, foto tim bervektor
   ├── [ Footer.tsx ]               --> Kantor operasional (Jakarta, BSD, Surabaya), indeks layanan, newsletter
   └── [ Modals ]
         ├── ProposalModal.tsx           --> Formulir pemesanan proposal dengan validasi data
         ├── BudgetCalculatorModal.tsx   --> Kalkulator estimasi instan interaktif
         ├── CaseStudyModal.tsx          --> Dokumentasi detail proyek event
         ├── ArticleModal.tsx            --> Pembaca artikel dan tips event
         ├── ShowreelModal.tsx           --> Video player showreel produksi
         └── ServiceDetailModal.tsx      --> Spesifikasi teknis per layanan
```

### 1. Compact White Navigation Header (`Navbar.tsx`)
- Logo *A-lettermark* geometris khas Sembilan Communication.
- Navigasi deskstop dengan *hover dropdown* untuk menu **Services** dan **Profile**.
- Tombol aksi utama **"✉ Contact Us"** dalam balutan solid navy.

### 2. Full-Width Cinematic Hero (`Hero.tsx`)
- Background arena konvensi megah dengan tata pencahayaan biru dan audiens masif.
- Lapisan gradien presisi untuk memastikan kontras teks memenuhi standar aksesibilitas WCAG.
- Tombol kapsul oranye terintegrasi langsung dengan lompatan *smooth-scroll* ke bagian layanan.

### 3. Services Section & Equipment Showcase (`ServicesSection.tsx`)
- Tata letak asimetris: 4 kolom narasi di kiri dan 8 kolom kartu di kanan.
- Menampilkan 5 kartu layanan utama: **MICE**, **Brand Activation**, **Gathering**, **Event Planner**, **Event Equipment Support**.
- Kartu ke-6 berupa **Our Equipment** berlatar gradasi *light blue* yang menampilkan foto *moving-head spotlight* serta checklist peralatan panggung (*Sound & Light, LED, Rigging, Booth, Apparel*).

### 4. Social Media Feed & Lightbox (`SocialSection.tsx`)
- Tautan akun resmi: Instagram, YouTube, LinkedIn, dan TikTok.
- Galeri foto 3-by-2 yang mendokumentasikan konser, kru lapangan, gapura acara, siaran live broadcast, dan panggung plenary.
- Dilengkapi modal *lightbox* beresolusi penuh saat foto diklik.

### 5. Portfolio Section & Dual Image Overlap (`PortfolioSection.tsx`)
- Menampilkan metrik pencapaian skala besar: **`70.000+ Events`** dan **`2M+ Clients`**.
- Deretan logo institusi dan korporat ternama di Indonesia: Telkomsel, BCA, Unilever, Bank Mandiri, dan Indofood.
- Komposisi foto panggung luar ruangan bersudut lengkung khusus (*rounded contour*) yang ditumpuk dengan foto vertikal gapura VIP berbingkai putih.

### 6. Blog & Industry Insights (`BlogSection.tsx`)
- Struktur grid 12-kolom (`lg:col-span-4` dan `lg:col-span-8`) bebas *bug layout blowout*.
- Tiga kartu artikel terstandarisasi dengan thumbnail foto realistis, tanggal, ikon kalender, dan pratinjau konten.

### 7. Asymmetrical Company Profile (`CompanyProfileSection.tsx`)
- Terdiri atas 3 zona: Informasi perusahaan & tombol unduh PDF profil, tautan cepat & lencana asosiasi (*IBS, MICE Indonesia, Indonesia Event Industry*), serta foto tim profesional berseragam polo hitam berpadu grafis poligon biru-oranye.

---

## 🧮 Mesin Kalkulator Estimasi Biaya

Aplikasi menyertakan mesin simulasi anggaran event di [`src/utils/eventCalculators.ts`](file:///f:/sembilan-communication/src/utils/eventCalculators.ts):

$$\text{Total Anggaran} = \left(\text{Base Rate} \times \left[1 + (\text{Hari} - 1) \times 0.4\right]\right) + (\text{Peserta} \times \text{Tarif Logistik}) + \sum \text{Addons}$$

### Parameter Biaya Dasar (Base Costs):
* **Summit / Konferensi**: \$25,000 dasar + \$120 / peserta
* **Executive Retreat**: \$18,000 dasar + \$350 / peserta
* **Brand Activation**: \$30,000 dasar + \$95 / peserta
* **Gala Dinner**: \$22,000 dasar + \$240 / peserta
* **Exhibition / Expo**: \$35,000 dasar + \$85 / peserta

### Komponen Tambahan (Technical Add-ons):
* *Dual-Redundant Live Streaming 4K*: +$7,500
* *White-Glove VIP Hospitality Concierge*: +$12,000
* *Bespoke Architectural Staging & Curved LED*: +$15,000

---

## 📁 Struktur Direktori

```bash
sembilan-communication/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Modul UI Reusable
│   │   ├── ArticleModal.tsx
│   │   ├── BlogSection.tsx
│   │   ├── BudgetCalculatorModal.tsx
│   │   ├── CaseStudyModal.tsx
│   │   ├── CompanyProfileSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProposalModal.tsx
│   │   ├── ServiceDetailModal.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ShowreelModal.tsx
│   │   └── SocialSection.tsx
│   ├── utils/              # Logika kalkulasi & testing
│   │   ├── eventCalculators.ts
│   │   └── eventCalculators.test.ts
│   ├── App.tsx             # Root layout & orkestrasi modal
│   ├── index.css           # Konfigurasi Tailwind CSS layer & font
│   └── main.tsx            # React DOM bootstrap
├── .env.example            # Konfigurasi environment template
├── index.html              # HTML5 entry point & SEO meta
├── package.json            # Daftar dependensi & npm scripts
├── tsconfig.json           # Konfigurasi kompilator TypeScript
└── vite.config.ts          # Konfigurasi bundling Vite
```

---

## 🚀 Memulai Lokal (Quick Start)

### Prasyarat:
* **Node.js**: Versi `18.x` atau yang lebih baru (disarankan `v20.x` / `v22.x`)
* **NPM**: Versi `9.x` atau `10.x`

### 1. Kloning Repositori & Masuk ke Direktori:
```bash
git clone https://github.com/your-username/sembilan-communication.git
cd sembilan-communication
```

### 2. Instalasi Dependensi:
```bash
npm install
```

### 3. Konfigurasi Environment:
Salin berkas sampel lingkungan:
```bash
cp .env.example .env.local
```
Sesuaikan variabel environment bila Anda menggunakan modul Gemini AI:
```env
GEMINI_API_KEY="your-gemini-api-key-here"
```

### 4. Jalankan Development Server:
```bash
npm run dev
```
Aplikasi akan aktif secara lokal di: `http://localhost:3000` (atau port yang dialokasikan oleh Vite).

---

## 🛠 Panduan Skrip NPM

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan Vite lokal dengan *Hot Module Replacement* (HMR). |
| `npm run build` | Melakukan kompilasi TypeScript dan membangun aset produksi minified ke direktori `dist/`. |
| `npm run preview` | Menjalankan web server lokal untuk menguji hasil build produksi sebelum rilis. |
| `npm run lint` | Menjalankan pengecekan tipe statis (*static typecheck*) tanpa melakukan emit berkas (`tsc --noEmit`). |

---

## 📦 Produksi & Deployment

Proyek ini telah dikonfigurasi untuk siap didistribusikan ke berbagai platform cloud modern seperti **Vercel**, **Netlify**, **Cloud Run**, atau **VPS kustom**:

```bash
# Build untuk produksi
npm run build
```

Berkas keluaran di folder `dist/` berukuran sangat ringkas:
* `dist/index.html`: ~1.30 kB (0.56 kB gzip)
* `dist/assets/index-[hash].css`: ~52 kB (8.9 kB gzip)
* `dist/assets/index-[hash].js`: ~308 kB (87 kB gzip)

---

## 🛡 Kebijakan Mutu & Aksesibilitas
* **Responsif Sepenuhnya**: Diuji secara konsisten pada breakpoint *Mobile* (360px+), *Tablet* (768px+), *Laptop* (1024px+), dan *Desktop Ultrawide* (1440px+).
* **Semantik HTML5**: Menggunakan elemen semantik `<header>`, `<main>`, `<section>`, `<article>`, dan `<footer>` lengkap dengan label `aria-*`.
* **Zero Runtime Overhead**: Gaya berbasis *utility-first* Tailwind CSS v4 tanpa dependensi styling eksternal yang memberatkan CPU.

---

## 📄 Lisensi

Hak Cipta © 2026 **PT Sembilan Komunikasi Indonesia (Sembilan Communication)**. Seluruh hak cipta dilindungi undang-undang. Proyek ini didistribusikan di bawah lisensi internal / Apache-2.0.

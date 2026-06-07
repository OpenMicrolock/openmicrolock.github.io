# Plan Company Profile Open Microlock

Dokumen ini adalah gambaran awal untuk company profile Open Microlock dan DARMI. Fokusnya dibuat clean, kredibel, dan siap dikembangkan menjadi website/profile deck tanpa terasa seperti template umum.

## 1. Arah Utama

Open Microlock diposisikan sebagai komunitas teknologi open-source yang membangun solusi akses digital berbasis hardware, mobile app, dashboard, dan otomasi operasional.

Produk utama yang ditonjolkan:

- DARMI: Digital Access Management Interface.
- MicroLock: firmware ESP32 untuk smart lock.
- Darmi Mobile: aplikasi Flutter untuk kontrol smart lock dan smart lamp.
- DARMI Sales Order: MVP operasional untuk intake order Telegram dan monitoring dashboard.

Narasi singkat:

> Open Microlock membangun ekosistem akses digital yang terbuka, dapat dipelajari, dan dapat dikembangkan bersama. DARMI menjadi interface utama untuk menghubungkan perangkat, pengguna, dan alur operasional secara sederhana.

## 2. Prinsip Branding

- Clean dan industri: banyak ruang kosong, grid rapi, tipografi jelas, warna tidak terlalu ramai.
- Tidak templating: hindari hero generik seperti "We build the future"; pakai bukti nyata dari project, repository, prototipe, dan lomba.
- Community-first: open-source bukan cuma publish code, tapi perlu misi, roadmap, status project, dan cara kontribusi.
- Lokal tapi profesional: prestasi Pemuda Pelopor Jakarta Barat bisa jadi update/milestone komunitas, bukan klaim hero yang terlalu menonjol.
- Technical but readable: orang non-teknis tetap paham masalah yang diselesaikan, developer tetap bisa melihat arsitektur dan repo.

## 3. Hal Penting Yang Harus Ada Dulu

### 3.1 Hero / Cover

Tujuan: dalam 5 detik orang paham Open Microlock itu apa.

Isi:

- Logo/nama: Open Microlock.
- Headline: "Open-source digital access system for smarter local infrastructure."
- Subheadline: "Komunitas teknologi yang membangun DARMI, MicroLock, mobile control app, dan dashboard operasional untuk eksperimen akses digital berbasis ESP32."
- CTA utama: "Explore Project"
- CTA kedua: "Contribute on GitHub"
- Latest updates: card berita/milestone seperti "Juara 2 Pemuda Pelopor tingkat Jakarta Barat" dan progress open-source DARMI.

Catatan visual:

- Jangan pakai stock photo abstrak.
- Lebih kuat memakai foto/prototipe hardware, screenshot aplikasi, atau render sederhana perangkat.
- Layout hero: kiri teks ringkas, kanan collage produk nyata atau device mockup, bukan kartu marketing besar.

### 3.2 Problem

Masalah yang disorot:

- Banyak sistem akses digital mahal, tertutup, dan sulit dipelajari.
- Prototype IoT sering berhenti di demo, belum punya interface dan dokumentasi yang enak dipakai.
- Komunitas lokal butuh project nyata yang bisa jadi bahan belajar, riset, dan pengembangan produk.

Output copy:

> Kami memulai dari masalah sederhana: akses fisik dan kontrol perangkat seharusnya bisa dipelajari, diuji, dan dikembangkan tanpa terkunci pada platform tertutup.

### 3.3 Solution / DARMI

Jelaskan DARMI sebagai payung interface:

- Digital Access Management Interface.
- Menghubungkan perangkat ESP32, mobile client, dashboard, dan workflow operasional.
- Bukan hanya satu aplikasi, tapi ekosistem project open-source.

Fokus fitur:

- Device control: lock/unlock, lamp on/off.
- Local HTTP API untuk prototyping.
- Mobile-first control experience.
- Dashboard untuk monitoring dan operasi.
- Simulator untuk development tanpa hardware.

### 3.4 Project Ecosystem

Buat section "Projects" dengan 4 item utama:

| Project | Fungsi | Status awal |
| --- | --- | --- |
| MicroLock Firmware | Firmware ESP32 smart lock dengan API lokal | Prototype aktif |
| Darmi Mobile | Flutter app untuk kontrol smart lock/lamp dan provisioning | Prototype aktif |
| DARMI Sales Order | FastAPI + Telegram bot + Next.js dashboard untuk order monitoring | MVP |
| MicroLamp / Smart Lamp | ESP32 smart lamp untuk perluasan use case device control | Prototype aktif |

Setiap project perlu:

- Link repository.
- README yang jelas.
- Status project.
- License.
- Cara kontribusi.
- Roadmap singkat.

### 3.5 Open Source Commitment

Open-source harus terlihat sebagai keputusan serius.

Isi yang wajib:

- Kenapa di-open-source-kan.
- Apa yang bisa dipelajari publik.
- Bagaimana orang bisa kontribusi.
- Governance sederhana: maintainer, issue, pull request, code of conduct.
- Roadmap publik.

Copy awal:

> Kami membuka project agar developer, pelajar, maker, dan komunitas lokal dapat mempelajari sistem akses digital dari hardware sampai interface. Kontribusi dapat masuk melalui dokumentasi, firmware, mobile UI, backend, simulasi perangkat, dan pengujian lapangan.

### 3.6 Updates / Milestones

Tempatkan prestasi dan perkembangan komunitas sebagai card berita/update. Ini membuat homepage terasa hidup dan tidak mengunci branding hanya pada satu achievement.

Contoh card update:

- Community Milestone: Juara 2 Pemuda Pelopor tingkat Jakarta Barat.
- Project Update: DARMI menuju open-source release.
- Engineering Update: MicroLock firmware dan Darmi Mobile siap dokumentasi publik.

Copy sementara untuk card Pemuda Pelopor:

> Open Microlock ikut serta dalam Lomba Pemuda Pelopor tingkat Jakarta Barat dan meraih Juara 2. Update ini menjadi salah satu milestone awal komunitas dalam membawa project teknologi terbuka ke ruang kepeloporan lokal.

Status verifikasi:

- Perlu bukti internal: sertifikat, foto acara, surat keputusan, tautan berita, atau dokumentasi penilaian.
- Hasil pencarian publik menemukan informasi umum Pemuda Pelopor Jakarta Barat, tetapi belum menemukan halaman publik yang spesifik menyebut Open Microlock/DARMI sebagai Juara 2.
- Jangan publish card update ini tanpa bukti pendukung.

### 3.7 Team / Community

Konten minimal:

- Founder / maintainer.
- Kontributor aktif.
- Area kontribusi: firmware, mobile, backend, UI/UX, dokumentasi, hardware testing.
- Prinsip komunitas: terbuka, dokumentatif, eksperimental, bertanggung jawab.

Hindari:

- Struktur organisasi terlalu formal jika komunitas belum butuh.
- Foto generik.

### 3.8 Contact / Collaboration

CTA yang perlu:

- GitHub Organization.
- Email/contact.
- Instagram/LinkedIn jika ada.
- "Open for collaboration: schools, communities, makers, SMEs, local government programs."

## 4. Layout Kasar Website Company Profile

Menu utama:

- Home
- About
- Project
- Contribute
- Contact

### Page 1: Home

Urutan section:

1. Hero: Open Microlock + DARMI positioning.
2. Product proof strip: firmware, mobile app, dashboard, simulator.
3. Problem: closed access systems and learning gap.
4. DARMI solution: ecosystem diagram.
5. Project: cards/list 4 project utama.
6. Open-source commitment: contribution path.
7. Updates / Milestones: card berita komunitas, termasuk Pemuda Pelopor Juara 2 setelah bukti siap.
8. Community/team.
9. Contact/collaboration CTA.

### Page 2: Project

Fokus:

- Daftar project.
- Status.
- Tech stack.
- Repository link.
- How to run.
- Roadmap.

### Page 3: About

Fokus:

- Cerita Open Microlock.
- Kenapa DARMI dibuat.
- Milestone.
- Prinsip komunitas.

### Page 4: Contribute

Fokus:

- Cara mulai kontribusi.
- Issue labels.
- Development setup.
- Code of conduct.
- Maintainer contact.

## 5. Style Direction

### Visual

- Background: putih/off-white atau very light gray.
- Text: charcoal/near black.
- Accent: hijau teknologi atau cyan yang dipakai hemat.
- Secondary accent: amber/orange kecil untuk status hardware/lamp.
- Radius: 6-8px, tidak terlalu rounded.
- Banyak screenshot dan diagram sederhana.

### Tipografi

- Sans-serif modern: Inter, IBM Plex Sans, atau Geist.
- Heading tegas tapi tidak terlalu besar.
- Body text singkat, banyak bullet teknis.

### Komponen

- Navbar sederhana: Home, About, Project, Contribute, Contact.
- Project list lebih baik dari card marketing besar.
- Diagram ekosistem DARMI: Device -> API -> Mobile/Dashboard -> User/Operations.
- Milestone timeline ringkas.

## 6. Asset Yang Perlu Dikumpulkan

- Logo Open Microlock versi SVG/PNG.
- Logo atau wordmark DARMI.
- Foto prototype smart lock/lamp.
- Screenshot Darmi Mobile.
- Screenshot DARMI Sales Order dashboard.
- Link GitHub org/repo final.
- Sertifikat/foto/SK Juara 2 Pemuda Pelopor Jakarta Barat.
- Nama founder/maintainer dan kontak resmi.

## 7. Dokumen Open Source Yang Perlu Disiapkan

Untuk tiap repository:

- README.md
- LICENSE
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md jika project menyentuh akses fisik atau credential.
- ROADMAP.md
- docs/architecture.md untuk project yang kompleks.

Catatan: karena MicroLock menyentuh akses fisik, dokumentasi security perlu jujur. Misalnya, jika firmware masih HTTP lokal dan token hard-coded, tulis batasannya dan jangan diposisikan sebagai production-ready.

## 8. Draft Messaging

### One-liner

Open Microlock is an open-source community building DARMI, a digital access management interface for connected devices, mobile control, and operational dashboards.

### Versi Indonesia

Open Microlock adalah komunitas open-source yang membangun DARMI, interface manajemen akses digital untuk menghubungkan perangkat, aplikasi mobile, dan dashboard operasional.

### Short pitch

Kami membangun project akses digital dari level firmware sampai interface pengguna. DARMI menjadi payung untuk eksperimen smart lock, smart lamp, mobile control, dashboard, dan otomasi operasional yang dapat dipelajari serta dikembangkan bersama.

## 9. Referensi Riset Singkat

- GitHub Government Best Practices - Open Source Community Building: dokumentasi open-source sebaiknya punya misi, fitur/roadmap, status project, dan cara kontribusi. https://government.github.io/best-practices/community-building/
- Open Source Guides - Best Practices for Maintainers: maintainer open-source perlu mendokumentasikan proses, mengelola kontribusi, dan menjaga komunitas. https://opensource.guide/best-practices/
- Jakarta Barat - Pemuda Pelopor 2026 fact finding: kegiatan Pemuda Pelopor adalah ajang mencari bibit kepeloporan pemuda Jakarta Barat dan pemenang mewakili kota ke tingkat provinsi. https://barat.jakarta.go.id/berita/sudin-pora-jakbar-tetapkan-15-pemuda-pelopor-jalani-fact-finding
- Jakarta Barat - Pendaftaran Pemuda Pelopor 2026: pemenang tiap bidang mewakili Jakarta Barat ke tingkat Provinsi DKI Jakarta. https://barat.jakarta.go.id/berita/pendaftaran-pemuda-pelopor-jakbar-2026-dibuka-hingga-akhir-maret

## 10. Next Step

Prioritas paling dekat:

1. Validasi nama resmi komunitas, logo, dan kontak.
2. Kumpulkan bukti lomba Pemuda Pelopor Juara 2.
3. Tentukan repo mana yang akan benar-benar public.
4. Rapikan README dan license tiap project.
5. Buat wireframe homepage berdasarkan layout di atas.
6. Setelah disetujui, lanjut buat website/company profile static atau Next.js.

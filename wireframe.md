# Wireframe Kasar Company Profile Open Microlock

Ini gambaran kasar struktur web company profile. Tujuannya bukan desain final, tapi supaya alur halaman, prioritas konten, dan rasa layout-nya bisa dibaca cepat.

## 1. Homepage Desktop

```txt
┌────────────────────────────────────────────────────────────────────────────┐
│ OPEN MICROLOCK                   Home  About  Project  Contribute  Contact │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Open-source digital access system            ┌─────────────────────────┐  │
│  for smarter local infrastructure.            │ Product proof area       │  │
│                                               │                         │  │
│  Komunitas teknologi yang membangun           │ [Mobile screenshot]      │  │
│  DARMI, MicroLock, mobile control app,        │ [Dashboard screenshot]   │  │
│  dan dashboard operasional berbasis ESP32.    │ [Hardware photo]         │  │
│                                               │                         │  │
│  [Explore Project]  [GitHub]                  └─────────────────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Latest Updates                                                            │
│                                                                            │
│  ┌──────────────────────────────┐ ┌──────────────────────────────────────┐ │
│  │ Community Milestone          │ │ Open-source Progress                 │ │
│  │ Juara 2 Pemuda Pelopor       │ │ DARMI ecosystem docs & repos         │ │
│  │ Jakarta Barat                │ │ being prepared for public release    │ │
│  │ [Read update]                │ │ [View roadmap]                       │ │
│  └──────────────────────────────┘ └──────────────────────────────────────┘ │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Built from real prototypes                                                │
│                                                                            │
│  MicroLock Firmware       Darmi Mobile       DARMI Dashboard       Lamp IoT │
│  ESP32 smart lock API     Flutter app        Ops monitoring        ESP32    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  The problem                                                               │
│  Sistem akses digital sering mahal, tertutup, dan sulit dipelajari.        │
│  Prototype IoT juga sering berhenti di demo tanpa interface yang rapi.     │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  DARMI: Digital Access Management Interface                                │
│                                                                            │
│  ┌────────────┐     ┌────────────┐     ┌────────────┐     ┌────────────┐  │
│  │ ESP32      │ --> │ Local API  │ --> │ Mobile App │ --> │ User       │  │
│  │ Devices    │     │ / Backend  │     │ Dashboard  │     │ Operations │  │
│  └────────────┘     └────────────┘     └────────────┘     └────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Project Ecosystem                                                         │
│                                                                            │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌───────────────────┐ │
│  │ MicroLock Firmware   │ │ Darmi Mobile         │ │ DARMI Sales Order  │ │
│  │ ESP32 smart lock     │ │ Flutter control app  │ │ Bot + dashboard    │ │
│  │ Status: Prototype    │ │ Status: Prototype    │ │ Status: MVP        │ │
│  │ [Repo] [Docs]        │ │ [Repo] [Docs]        │ │ [Repo] [Docs]     │ │
│  └──────────────────────┘ └──────────────────────┘ └───────────────────┘ │
│                                                                            │
│  ┌──────────────────────┐                                                  │
│  │ MicroLamp / Smart    │                                                  │
│  │ ESP32 smart lamp     │                                                  │
│  │ Status: Prototype    │                                                  │
│  │ [Repo] [Docs]        │                                                  │
│  └──────────────────────┘                                                  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Open-source commitment                                                    │
│                                                                            │
│  Why open source      How to contribute      Governance                    │
│  Learn & reuse        Docs, firmware, app     Maintainers, PR, issues      │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Updates / Milestones                                                      │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Community Milestone                                                  │  │
│  │ Juara 2 Pemuda Pelopor tingkat Jakarta Barat                         │  │
│  │ Ringkasan singkat, foto/sertifikat, tanggal, dan konteks lomba.      │  │
│  │ [Baca update]                                                        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Project Update                                                       │  │
│  │ DARMI menuju open-source release                                     │  │
│  │ Status repo, dokumentasi, license, dan roadmap public.               │  │
│  │ [Lihat roadmap]                                                      │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Community                                                                 │
│                                                                            │
│  Maintainers        Contributors        Collaboration                      │
│  Firmware           Mobile              School / community / maker         │
│  Backend            UI/UX               SME / local program                │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  Ready to collaborate?                                                     │
│  [GitHub Organization] [Contact]                                           │
└────────────────────────────────────────────────────────────────────────────┘
```

## 2. Homepage Mobile

```txt
┌──────────────────────────────┐
│ OPEN MICROLOCK          ☰    │
├──────────────────────────────┤
│ Open-source digital access   │
│ system for smarter local     │
│ infrastructure.              │
│                              │
│ Komunitas teknologi yang     │
│ membangun DARMI dan project  │
│ akses digital berbasis ESP32.│
│                              │
│ Menu: Home / About / Project │
│       Contribute / Contact   │
│                              │
│ [Explore Project]            │
│ [GitHub]                     │
│                              │
│ ┌──────────────────────────┐ │
│ │ Product screenshot/photo │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│ Built from real prototypes   │
│ MicroLock Firmware           │
│ Darmi Mobile                 │
│ DARMI Dashboard              │
│ Smart Lamp                   │
├──────────────────────────────┤
│ The problem                  │
│ Sistem akses digital mahal,  │
│ tertutup, dan sulit dipelajari.│
├──────────────────────────────┤
│ DARMI                        │
│ Device -> API -> App -> User │
├──────────────────────────────┤
│ Project                      │
│ ┌──────────────────────────┐ │
│ │ MicroLock Firmware       │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ Darmi Mobile             │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ DARMI Sales Order        │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│ Open Source                  │
│ Why / Contribute / Governance│
├──────────────────────────────┤
│ Updates                      │
│ ┌──────────────────────────┐ │
│ │ Juara 2 Pemuda Pelopor   │ │
│ │ [Baca update]            │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ DARMI open-source prep   │ │
│ │ [Roadmap]                │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│ Contact                      │
│ [GitHub] [Email]             │
└──────────────────────────────┘
```

## 3. Rasa Visual Yang Dicari

```txt
Clean industrial, bukan startup template.

Background      : #F7F8FA / white
Text utama      : #111827
Text sekunder   : #4B5563
Accent utama    : #0F766E atau #0891B2
Accent kecil    : #F59E0B untuk status/milestone
Border          : #E5E7EB
Radius          : 6px sampai 8px
Font            : Inter / Geist / IBM Plex Sans
```

## 4. Hero Lebih Detail

```txt
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  OPEN MICROLOCK                                                            │
│                                                                            │
│  Open-source digital access system                                         │
│  for smarter local infrastructure.                                         │
│                                                                            │
│  DARMI menghubungkan perangkat ESP32, aplikasi mobile, dashboard,          │
│  dan workflow operasional dalam satu ekosistem project terbuka.            │
│                                                                            │
│  [Explore Project]  [Contribute]                                           │
│                                                                            │
│                                      ┌──────────────────────────────────┐  │
│                                      │  Darmi Mobile screenshot         │  │
│                                      │  + dashboard screenshot          │  │
│                                      │  + foto prototype lock/lamp      │  │
│                                      └──────────────────────────────────┘  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

## 5. Section Project Lebih Detail

Setiap project jangan dibuat seperti kartu marketing kosong. Isinya harus langsung menjawab:

- Apa project ini?
- Dipakai untuk apa?
- Statusnya apa?
- Stack-nya apa?
- Link repo dan docs mana?

```txt
┌────────────────────────────────────────────────────────────────────────────┐
│ MicroLock Firmware                                                         │
│ ESP32 firmware for local smart-lock control.                               │
│                                                                            │
│ Stack    ESP32, PlatformIO, Arduino, HTTP JSON API                          │
│ Status   Prototype                                                         │
│ Links    Repository / Documentation                                        │
└────────────────────────────────────────────────────────────────────────────┘
```

## 6. Catatan Penting Sebelum Desain Final

- Achievement seperti "Juara 2 Pemuda Pelopor Jakarta Barat" lebih baik masuk sebagai card berita/update komunitas, bukan badge hero.
- Card update tetap perlu bukti sebelum dipublish: tanggal, foto/sertifikat, dan konteks lomba.
- Foto/screenshot asli akan membuat profil terasa jauh lebih kuat daripada ilustrasi generik.
- Kalau belum punya logo final, pakai wordmark clean dulu: `Open Microlock`.
- DARMI perlu dijelaskan sebagai ekosistem/interface, bukan satu aplikasi tunggal, karena repo sekarang mencakup firmware, mobile, dashboard, dan MVP order.

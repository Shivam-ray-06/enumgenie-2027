# EnumGenie 2027 - Census & Digital Enumeration

## Overview
EnumGenie 2027 is a robust, offline-capable Progressive Web App (PWA) built for the Google for Developers Hack2Skill "Census 2027 & Digital Enumeration" challenge. It demonstrates advanced integration of Gemini Multimodal AI, edge computing capabilities (simulated via C++ and WebAssembly conceptually), and secure backend data handling (Java).

## Features
- **Offline-First PWA:** Ensures data can be collected in low-connectivity rural areas via Service Workers.
- **Gemini Multimodal AI ("Census Mitra"):** Provides a conversational interface (text, voice, image upload) to guide citizens through enumeration, debunking misinformation and simplifying complex questions.
- **Dual-Role Dashboards:** Separate experiences for Citizens (Self-Enumeration Wizard) and Admins (Analytics Dashboard with HTML5 Canvas).
- **Multi-Language Support:** 16-language regional toggle for inclusive access.
- **Glassmorphism UI:** Premium aesthetic utilizing Tailwind CSS (CDN), custom CSS animations, and deep slate/indigo/emerald accents.
- **Edge Computing & Privacy:** C++ module for validating demographic boundaries and simulating SHA-256 local hashing.
- **Secure Backend Integration:** Java utility class for robust JSON data parsing and exception handling.

## Directory Structure
- `/public`: Contains the frontend assets (HTML, CSS, JS, PWA config).
- `/functions`: Firebase Cloud Functions placeholder (if needed).
- `/wasm-core`: Contains the C++ module (`crypto-validator.cpp`) for edge validation.
- `/java-utils`: Contains the Java module (`CensusDataIngestion.java`) for backend processing.

## Deployment Instructions (Vercel/Netlify)
Since the frontend uses standard web technologies and Firebase for simulated backend/hosting, you can deploy the `/public` directory easily.

### Option 1: Firebase Hosting (Recommended for Firestore/Rules integration)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize (if not already done): `firebase init` (Select Hosting, use `public` directory).
4. Deploy: `firebase deploy --only hosting,firestore:rules`

### Option 2: Vercel/Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Set the publish directory to `public` (or leave default if they autodetect static assets).
3. Deploy! No build step is required as Tailwind is loaded via CDN for this demonstration.

## Hackathon Scoring Criteria Compliance
- **Infrastructure:** Firebase Hosting/Firestore used for structure.
- **Gemini AI:** Integrated via simulated API calls with comprehensive prompts.
- **Multi-Language Codebase:** Includes HTML/JS, C++ (`/wasm-core/crypto-validator.cpp`), and Java (`/java-utils/CensusDataIngestion.java`).
- **No Government Logos:** Uses a custom abstract SVG logo.

## Architecture Diagram (Data Flow)
```text
[ Citizen Device / Browser ]
       |
       | 1. UI Input (HTML/JS)
       v
[ WebAssembly Edge Module (C++) ]
       | - Validates bounds locally
       | - Hashes PII (Aadhaar/DOB)
       | - Generates 64-bit signature
       v
[ Firebase Hosting / Network Layer ]
       |
       | 2. Encrypted Transit
       v
[ Java Data Ingestion Backend ]
       | - Aggressive XSS / SQLi Stripping
       | - Cross-field Anomaly Detection
       v
[ Firebase Cloud Functions ]
       | - UID Rate Limiting
       | - API Key Masking
       v
[ Google Gemini AI / Firestore ]
```

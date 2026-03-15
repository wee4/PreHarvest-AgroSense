# 🌾 HarvestSync

### Pre-Harvest Ecosystem Coordination Platform

![HarvestSync Banner](https://images.unsplash.com/photo-1500382017468-9049fed747ef)

![GitHub stars](https://img.shields.io/github/stars/wee4/PreHarvest-AgroSense?style=social)
![GitHub forks](https://img.shields.io/github/forks/wee4/PreHarvest-AgroSense?style=social)
![Issues](https://img.shields.io/github/issues/wee4/PreHarvest-AgroSense)
![License](https://img.shields.io/badge/license-MIT-green)

---

# 🚀 Overview

**HarvestSync** is a **Pre-Harvest Ecosystem Coordination Platform** that connects farmers, buyers, transporters, storage providers, and agricultural organizations before crops are harvested.

The platform introduces **Pre-Harvest Commitments**, allowing buyers to secure produce early while enabling farmers to plan logistics, reduce waste, and optimize harvest decisions.

By combining **market analytics, logistics coordination, and cooperative aggregation**, HarvestSync creates a **coordinated agricultural marketplace that minimizes oversupply and crop loss.**

---

# 🌍 Problem Statement

Agricultural supply chains suffer from several major inefficiencies:

• sudden oversupply causing price crashes
• lack of coordination between farmers and buyers
• transport shortages during peak harvest
• storage availability issues
• crop spoilage due to delayed logistics

Farmers often discover buyers **after harvest**, leading to distress selling and waste.

HarvestSync solves this through **pre-harvest coordination across the entire ecosystem.**

---

# 💡 Solution

HarvestSync enables **data-driven harvest planning** where stakeholders interact before crops are harvested.

This allows:

• buyers to reserve crops early
• farmers to view real market demand
• transporters to schedule routes ahead of time
• storage providers to allocate warehouse space
• cooperatives to aggregate small harvests

---

# ✨ Core Platform Features

## 🌾 Harvest Readiness Score

AI-assisted scoring system that evaluates harvest readiness based on:

• market demand
• transport availability
• storage capacity
• oversupply probability
• spoilage risk

Helps farmers determine **optimal harvest timing.**

---

## 📦 Pre-Harvest Commitment System

Buyers can **reserve crops before harvest**.

Benefits:

• price stability for farmers
• guaranteed supply for buyers
• reduced uncertainty in the market

---

## 🤝 Cooperative Aggregation Mode

Small farmers can combine harvests into **bulk supply clusters**.

Advantages:

• better bargaining power
• access to larger buyers
• reduced logistics costs

---

## ⏱ Spoilage Risk Timer

Real-time system displaying:

• remaining safe harvest window
• spoilage probability
• urgency alerts

---

## 🚚 Transport Availability Module

Transporters can list:

• vehicle availability
• pickup routes
• time slots

Farmers can reserve transport before harvest.

---

## 🏬 Storage Availability Module

Storage providers list:

• warehouse capacity
• storage duration
• environmental conditions

Includes **buffer day calculations for safe storage planning.**

---

## 🔎 Buyer Discovery Engine

Farmers can view:

• nearby buyers
• open demand listings
• pricing ranges
• buyer credibility scores

---

## 📈 Market Trend Module

Provides analytics including:

• 7-day price trends
• demand vs supply ratios
• regional price fluctuations

---

# ⚡ Advanced Platform Features

### 🔐 KYC Verification System

Only verified users can participate in transactions.

---

### 💳 Secure Payment Escrow

Funds remain in escrow until delivery confirmation.

---

### 💰 Instant Micro-Loans

Farmers can access short-term loans based on **confirmed pre-bookings.**

---

### 🗺 Regional Coordination Map

Interactive heatmap displaying harvest timing and supply density.

---

### 🧠 Harvest Timing Game-Theory Engine

Prevents collective oversupply by recommending staggered harvest schedules.

---

### ♻ Waste-to-Profit Converter

Suggests alternative buyers or industries for lower-grade produce.

---

### 🌱 Local Crop Diversification Engine

Recommends crops to prevent regional oversupply.

---

### 📡 Offline-First Data Entry

Farmers can record crop data without internet connectivity.

---

### 📉 Low Data Mode

Optimized for rural areas with slow internet connections.

---

### 🧑‍🌾 FPO / Village Agent Mode

Allows coordinators to manage multiple farmers.

---

# 🖥 Dashboards

## Farmer Dashboard

Features:

• harvest readiness score
• crop listings
• buyer offers
• transport bookings
• spoilage alerts

![Farmer Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71)

---

## Buyer Dashboard

Allows buyers to:

• browse crops
• commit to pre-harvest deals
• monitor supply contracts
• analyze market trends

![Buyer Dashboard](https://images.unsplash.com/photo-1460925895917-afdab827c52f)

---

## Logistics Dashboard

Transport and storage providers can manage:

• booking requests
• route planning
• availability schedules

![Logistics Dashboard](https://images.unsplash.com/photo-1492724441997-5dc865305da7)

---

# 🧠 System Architecture

```
Farmers / Buyers / Transporters
            │
            ▼
      Next.js Frontend
            │
            ▼
      REST API Layer
      (Node.js + Express)
            │
            ▼
      Business Logic
            │
            ▼
      MongoDB Database
            │
            ▼
   Analytics & Coordination Engine
            │
            ▼
     Role-Based Dashboards
```

---

# 🛠 Tech Stack

![Frontend](https://img.shields.io/badge/Frontend-Next.js-black)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)

![Language](https://img.shields.io/badge/Language-TypeScript-blue)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)

![UI](https://img.shields.io/badge/UI-TailwindCSS-38B2AC)

![Backend](https://img.shields.io/badge/Backend-Node.js-green)
![Backend](https://img.shields.io/badge/Backend-Express.js-lightgrey)

![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![ODM](https://img.shields.io/badge/ODM-Mongoose-red)

![Auth](https://img.shields.io/badge/Auth-JWT-orange)
![Security](https://img.shields.io/badge/Security-bcryptjs-yellow)

![State](https://img.shields.io/badge/State-Zustand-purple)
![API](https://img.shields.io/badge/API-Axios-blue)

![Build](https://img.shields.io/badge/Build-Vite-purple)
![Deployment](https://img.shields.io/badge/Deployment-Node%20Server-black)

![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

# ⚙️ Installation

### Prerequisites

Node.js 18+
MongoDB (Local or Atlas)
npm or yarn

---

### Install Dependencies

```bash
npm install
```

---

### Backend Setup

```bash
cd backend
npm install
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

---

### Environment Variables

```
cp backend/.env.example backend/.env
```

Edit `.env` and add:

```
MONGODB_URI=
JWT_SECRET=
PORT=5000
```

---

### Start Development Servers

```
npm run dev
```

Or run separately

```
npm run dev:backend
npm run dev:frontend
```

Backend → http://localhost:5000
Frontend → http://localhost:3000

---

# 📂 Project Structure

```
harvestsync/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── server.ts
│
├── frontend/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── login/
│   │   └── page.tsx
│   │
│   ├── components/
│   ├── lib/
│   └── store/
│
└── README.md
```

---

# 👥 User Roles

Farmer
Buyer
Transporter
Storage Provider
FPO / Agricultural Officer
Organization

---

# 🔌 API Endpoints

### Authentication

POST `/api/auth/register`
POST `/api/auth/verify-otp`
POST `/api/auth/login`
POST `/api/auth/kyc/upload`
GET `/api/auth/me`

### Farmer

POST `/api/farmer/crop`
GET `/api/farmer/crops`
GET `/api/farmer/crop/:id`
PUT `/api/farmer/crop/:id`
GET `/api/farmer/next-crop-suggestion`

### Buyer

POST `/api/buyer/demand`
GET `/api/buyer/crops`
POST `/api/buyer/commit`
GET `/api/buyer/commitments`

### Transporter

POST `/api/transporter/availability`
GET `/api/transporter/availability`
POST `/api/transporter/offer/:cropId`

### Market

GET `/api/market/trends`
GET `/api/harvest/readiness/:cropId`
GET `/api/harvest/heatmap`

---

# 🔮 Future Roadmap

• AI crop yield prediction
• satellite crop monitoring
• blockchain supply chain tracking
• automated logistics matching
• mobile farmer application

---

# 🤝 Contributing

Fork the repository
Create feature branch

```
git checkout -b feature-name
```

Commit changes

```
git commit -m "Added feature"
```

Push branch

```
git push origin feature-name
```

Create Pull Request.

---

# 📄 License

MIT License

---

# 👨‍💻 Team

Developed by **Team WEE4**

Building technology to modernize agricultural supply chains and reduce food waste.

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork the repository
📢 Share it with the community

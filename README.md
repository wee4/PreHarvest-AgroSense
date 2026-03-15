# HarvestSync - Pre-Harvest Ecosystem Coordination Platform

A comprehensive platform connecting farmers, buyers, transporters, and other stakeholders to coordinate harvests and reduce food waste through Pre-Harvest Commitments.

## Features

### Core Features
1. **Harvest Readiness Score** - AI-powered scoring system based on demand, logistics, storage, and oversupply risk
2. **Pre-Harvest Commitment System** - Buyers can pre-book crops before harvest
3. **Cooperative Aggregation Mode** - Small farmers can combine harvests for bulk deals
4. **Spoilage Risk Timer** - Real-time countdown and risk assessment
5. **Transport Availability Module** - Transporters register availability, farmers see slots
6. **Storage Availability Module** - Storage providers list capacity, buffer days calculator
7. **Buyer Discovery** - Farmers see nearby buyers and open demand slots
8. **Market Trend Module** - 7-day price trends and demand/supply ratios

### Advanced Features
- **KYC Verification System** - Verified accounts only
- **Secure Payment Escrow** - Protects both farmers and buyers
- **Instant Micro-Loans** - Based on pre-bookings
- **Regional Coordination Map** - Visual heatmap of harvest timing
- **Harvest Timing Game Theory Engine** - Prevents collective oversupply
- **Waste-to-Profit Converter** - Suggests alternative buyers for low-quality crops
- **Local Crop Diversification Engine** - Prevents oversupply through suggestions
- **Offline-First Entry** - Farmers can enter data offline
- **Low Data Mode** - Optimized for weak 3G connections
- **FPO/Village Agent Mode** - Coordinators can enter data for multiple farmers

## Tech Stack

### Backend
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand for state management
- Axios for API calls

## Setup

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Set up environment variables:
```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and other configs
```

5. Start development servers:
```bash
# From root directory
npm run dev

# Or separately:
npm run dev:backend  # Runs on http://localhost:5000
npm run dev:frontend # Runs on http://localhost:3000
```

## Project Structure

```
harvestsync/
├── backend/
│   ├── src/
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Auth, error handling
│   │   └── server.ts        # Entry point
│   └── package.json
├── frontend/
│   ├── app/                 # Next.js app directory
│   │   ├── dashboard/      # Role-based dashboards
│   │   ├── login/           # Auth pages
│   │   └── page.tsx         # Landing page
│   ├── components/          # React components
│   ├── lib/                 # Utilities
│   └── store/               # State management
└── README.md
```

## User Roles

- **Farmer** - List crops, view readiness scores, manage harvests
- **Buyer** - Browse crops, create pre-harvest commitments
- **Transporter** - Register availability, offer transport
- **FPO/AO** - Coordinate multiple farmers, create clusters
- **Storage Provider** - List storage capacity
- **Organization** - Bulk operations

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/verify-otp` - Verify phone OTP
- `POST /api/auth/login` - Login
- `POST /api/auth/kyc/upload` - Upload KYC documents
- `GET /api/auth/me` - Get current user

### Farmer
- `POST /api/farmer/crop` - List new crop
- `GET /api/farmer/crops` - Get farmer's crops
- `GET /api/farmer/crop/:id` - Get crop details
- `PUT /api/farmer/crop/:id` - Update crop
- `GET /api/farmer/next-crop-suggestion` - Get crop suggestions

### Buyer
- `POST /api/buyer/demand` - Register demand
- `GET /api/buyer/crops` - Browse available crops
- `POST /api/buyer/commit` - Create pre-harvest commitment
- `GET /api/buyer/commitments` - Get buyer's commitments

### Transporter
- `POST /api/transporter/availability` - Register availability
- `GET /api/transporter/availability` - Get available slots
- `POST /api/transporter/offer/:cropId` - Offer transport

### Market & Analytics
- `GET /api/market/trends` - Get market trends
- `GET /api/harvest/readiness/:cropId` - Get readiness score
- `GET /api/harvest/heatmap` - Regional harvest heatmap

## Development

### Adding New Features
1. Create/update models in `backend/src/models/`
2. Add routes in `backend/src/routes/`
3. Implement business logic in `backend/src/services/`
4. Create frontend pages/components in `frontend/app/`
5. Update API client in `frontend/lib/api.ts`

## License

MIT

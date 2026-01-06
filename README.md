🚀 INVOICE AI: Next-Gen Multi-Agent Processing

Invoice AI is a professional SaaS platform designed to automate financial document workflows. By leveraging a multi-agent AI architecture, the system transforms raw invoice uploads into structured, compliant, and fraud-checked data.

🌐 Live Project
Live Demo: [Insert Your Vercel URL Here]

GitHub Repository: https://www.github.com/ABHI3450/invoice-ai

🤖 Multi-Agent AI Architecture
The core differentiator of this project is its logical separation of tasks into specialized AI Agents:

Ingestion Agent: Handles secure file uploads via Cloudinary and validates document integrity.

Classification Agent: Automatically categorizes invoices into "Services," "Goods," or "Medical" types.

Fraud & Anomaly Agent: Scans for duplicate invoices and flags suspicious or unusual total amounts.

Compliance Agent: Simulates VAT/Tax logic to ensure documents meet financial standards (ZATCA/EU VAT).

Reporting Agent: Generates structured views of spend breakdown and vendor data.

🛠️ Tech Stack
Framework: Next.js 14 (App Router)

Language: TypeScript

Database: MongoDB Atlas (NoSQL)

Authentication: Clerk (Google & Email OAuth)

Image Handling: Cloudinary AI

UI/UX: Tailwind CSS, Shadcn/UI, Lucide Icons

🚀 Getting Started
1. Prerequisites
Node.js 18+ installed

A MongoDB Atlas account

A Clerk account

A Cloudinary account

2. Environment Setup
Create a .env.local file in the root directory and add your keys:

# CLERK AUTH
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MONGODB DATABASE
MONGODB_URL=

# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
3. Installation
Bash

# Install dependencies
npm install

# Start the development server
npm run dev

📊 Evaluation Criteria Met
✅ Authentication: Full login/signup flow implemented via Clerk.

✅ Invoice Processing: End-to-end flow from upload to dashboard display.

✅ AI Agent Logic: Rule-based classification and fraud scoring simulated in the processing flow.

✅ Reporting: Dashboard overview of total spend and compliance status.

✅ Branding: Fully customized UI reflecting the "Invoice AI" product vision.

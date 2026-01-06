🚀 Invoice AI
Next-Gen Multi-Agent Invoice Processing Platform

Invoice AI is a SaaS-style AI platform that automates end-to-end financial document workflows.
It leverages a multi-agent AI architecture to transform raw invoice uploads into structured, fraud-checked, and compliance-validated data ready for analytics and reporting.

🌐 Live Project

Live Demo: https://your-vercel-url.vercel.app

GitHub Repository: https://github.com/ABHI3450/invoice-ai

🤖 Multi-Agent AI Architecture

Invoice AI processes each invoice through a specialized agentic workflow, where each agent focuses on a single responsibility.

🕵️ Ingestion Agent

Secure upload of multi-format invoices (PDF, JPG, PNG)

Validates file type, size, and integrity before processing

🏷️ Classification Agent

Categorizes invoices (Utility, Medical, Goods, Services, etc.)

Extracts metadata to route invoices to downstream checks

🚩 Fraud Detection Agent

Detects duplicate invoices and abnormal amount spikes

Applies rule-based heuristics for anomaly detection and risk scoring

⚖️ Compliance Agent

Validates Tax IDs and critical invoice fields

Simulates regional tax and financial compliance checks

📊 Reporting Agent

Aggregates processed invoice data

Feeds analytics dashboards with spend, vendor, and compliance insights

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js 14 (App Router), TypeScript, Tailwind CSS
Backend	Next.js Server Actions, Node.js
Database	MongoDB Atlas (NoSQL)
Authentication	Clerk (Email & Google OAuth)
File Storage	Cloudinary
UI Library	shadcn/ui, Lucide React
📦 Features
🔐 Secure Authentication

Full login & sign-up via Clerk

Google OAuth and Email authentication

📄 Invoice Upload & Management

Drag-and-drop invoice uploads (PDF & Images)

Secure storage via Cloudinary + MongoDB

🤖 Multi-Agent Processing Flow
Ingestion → Classification → Fraud Detection → Compliance → Reporting


Rule-based AI logic simulating realistic agent behavior

📊 Analytics Dashboard

Total spend overview

Number of invoices processed

Risk and compliance status

Vendor-level insights

🎨 Product-Ready UI

Clean, responsive SaaS dashboard

Built with Tailwind CSS and shadcn/ui

Consistent “Invoice AI” branding

🚀 Local Development Setup
1️⃣ Clone the Repository

git clone https://github.com/ABHI3450/invoice-ai.git

cd invoice-ai

2️⃣ Install Dependencies

Make sure Node.js 18+ is installed.

npm install

3️⃣ Configure Environment Variables

Create a .env.local file in the project root:

# CLERK AUTH
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MONGODB DATABASE
MONGODB_URL=your_mongodb_connection_string

# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Ensure Clerk, MongoDB Atlas, and Cloudinary are properly configured.

4️⃣ Run the Development Server

npm run dev


Open in browser:

http://localhost:3000


You can register a new account directly from the UI.

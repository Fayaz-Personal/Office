# 🎓 Study Abroad Navigator

An AI-powered Full Stack Web Application that helps undergraduate students find suitable postgraduate programs abroad. The platform provides university recommendations, exam requirements, scholarship opportunities, education loan guidance, cost-of-living analysis, and AI-assisted counseling.

---

## 🚀 Features

### 👤 Student Profile
- Student Registration & Login
- Academic Profile Management
- CGPA & Degree Tracking
- Budget Preferences
- Preferred Countries & Courses

### 🌍 University Finder
- Search Universities by Country
- Course-Based Filtering
- Tuition Fee Information
- University Rankings
- Admission Requirements

### 📝 Exam Guidance
- IELTS Requirements
- TOEFL Requirements
- GRE Requirements
- GMAT Requirements
- PTE Requirements

### 💰 Scholarship Finder
- Merit-Based Scholarships
- Government Scholarships
- University Scholarships
- Scholarship Eligibility

### 🏦 Education Loan Assistant
- Loan Eligibility Check
- EMI Calculator
- Interest Rate Comparison
- Loan Coverage Information

### 📊 Cost Calculator
- Tuition Fees
- Living Expenses
- Accommodation Costs
- Visa Fees
- Travel Expenses

### 🤖 AI Assistant
- University Recommendations
- Country Suggestions
- Admission Guidance
- Visa Guidance
- Career Advice

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS

### Backend
- FastAPI
- Python

### Database
- PostgreSQL

### Authentication
- JWT Authentication

### AI Services
- OpenAI API

### Deployment
- Vercel (Frontend)
- Render (Backend)
- Supabase (Database)

---

## 📂 Project Structure

study-abroad-platform/

├── app/

│ ├── page.js

│ ├── login/

│ │ └── page.js

│ ├── register/

│ │ └── page.js

│ ├── dashboard/

│ │ └── page.js

│ ├── universities/

│ │ └── page.js

│ ├── layout.js

│ └── globals.css

│

├── components/

│ ├── Navbar.jsx

│ ├── Footer.jsx

│ ├── Hero.jsx

│ └── FeatureCard.jsx

│

├── public/

├── package.json

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/study-abroad-platform.git
cd study-abroad-platform
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📌 Available Pages

| Route | Description |
|---------|-------------|
| / | Landing Page |
| /login | Login Page |
| /register | Registration Page |
| /dashboard | Student Dashboard |
| /universities | University Finder |

---

## 🗄️ Database Schema

### Users

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);
```

### Student Profile

```sql
CREATE TABLE student_profiles (
    id SERIAL PRIMARY KEY,
    user_id INT,
    degree VARCHAR(100),
    cgpa FLOAT,
    budget BIGINT,
    preferred_country VARCHAR(100),
    preferred_course VARCHAR(100)
);
```

### Universities

```sql
CREATE TABLE universities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    country VARCHAR(100),
    ranking VARCHAR(20),
    course VARCHAR(255),
    tuition_fee VARCHAR(100)
);
```

---

## 🔮 Future Enhancements

- AI-Based University Recommendation Engine
- SOP Evaluation System
- Visa Success Prediction
- Alumni Networking Platform
- Real-Time Scholarship Updates
- Education Loan Marketplace
- Application Tracking System
- Study Abroad Community Forum

---

## 🎯 Project Objective

To simplify the study abroad journey for undergraduate students by providing all essential information such as university selection, admission requirements, scholarships, education loans, visa guidance, and career opportunities through a single platform.

---

## 👨‍💻 Developed By

Fayaz Ashwin gifta simirana

Study Abroad Navigator
2026

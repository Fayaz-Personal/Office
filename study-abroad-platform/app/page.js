export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Study Abroad Navigator
          </h1>

          <div className="space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="/universities" className="hover:text-gray-200">Universities</a>
            <a href="#" className="hover:text-gray-200">Scholarships</a>
            <a href="#" className="hover:text-gray-200">Loans</a>
            <a href="/login" className="hover:text-gray-200">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h1 className="text-6xl font-bold mb-6">
          Find Your Perfect PG Program Abroad
        </h1>

        <p className="text-xl max-w-3xl mx-auto">
          Get university recommendations, scholarship details,
          education loan guidance, cost of living estimates,
          exam requirements, and AI-powered career support.
        </p>

        <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              🎓 University Finder
            </h3>
            <p className="text-gray-600">
              Search universities based on CGPA,
              budget, country preference, and rankings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              💰 Scholarship Finder
            </h3>
            <p className="text-gray-600">
              Discover scholarships matching your
              academic profile and financial needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              🏦 Loan Assistant
            </h3>
            <p className="text-gray-600">
              Compare education loans, interest rates,
              and eligibility requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              📊 Cost Calculator
            </h3>
            <p className="text-gray-600">
              Estimate tuition fees, accommodation,
              food, travel, and insurance costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              📝 Exam Guidance
            </h3>
            <p className="text-gray-600">
              Know whether IELTS, TOEFL, GRE, GMAT,
              or PTE is required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              🤖 AI Assistant
            </h3>
            <p className="text-gray-600">
              Ask questions about admissions,
              visas, scholarships, and careers.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p>Universities</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p>Countries</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">1000+</h2>
            <p>Scholarships</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p>AI Support</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold">
            Study Abroad Navigator
          </h3>

          <p className="mt-3 text-gray-400">
            Your complete guide for studying abroad.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © 2026 Study Abroad Navigator. All Rights Reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
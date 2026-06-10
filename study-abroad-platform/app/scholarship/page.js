const scholarships = [
    {
        id: 1,
        name: "Fulbright Scholarship",
        country: "USA",
        amount: "$50,000",
        eligibility: "Merit Based",
    },
    {
        id: 2,
        name: "Chevening Scholarship",
        country: "United Kingdom",
        amount: "Full Funding",
        eligibility: "Leadership & Academics",
    },
    {
        id: 3,
        name: "DAAD Scholarship",
        country: "Germany",
        amount: "€11,000/year",
        eligibility: "Academic Excellence",
    },
    {
        id: 4,
        name: "Erasmus Mundus",
        country: "Europe",
        amount: "Full Funding",
        eligibility: "International Students",
    },
    {
        id: 5,
        name: "Australia Awards",
        country: "Australia",
        amount: "Full Funding",
        eligibility: "Developing Countries",
    },
    {
        id: 6,
        name: "Vanier Canada Scholarship",
        country: "Canada",
        amount: "CAD 50,000/year",
        eligibility: "Research Students",
    },
];

export default function ScholarshipsPage() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-blue-700 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Scholarship Finder
                    </h1>

                    <p className="mt-3 text-lg">
                        Explore scholarships to fund your study abroad journey
                    </p>
                </div>
            </div>

            {/* Search Section */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white p-6 rounded-xl shadow-md">

                    <h2 className="text-2xl font-bold mb-4">
                        Search Scholarships
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">

                        <input
                            type="text"
                            placeholder="Scholarship Name"
                            className="border p-3 rounded-lg"
                        />

                        <select className="border p-3 rounded-lg">
                            <option>Select Country</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>UK</option>
                            <option>Australia</option>
                        </select>

                        <button className="bg-blue-700 text-white rounded-lg px-6 py-3 hover:bg-blue-800">
                            Search
                        </button>

                    </div>

                </div>
            </div>

            {/* Scholarship Cards */}
            <div className="max-w-7xl mx-auto px-6 pb-12">

                <h2 className="text-3xl font-bold mb-8">
                    Popular Scholarships
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {scholarships.map((scholarship) => (
                        <div
                            key={scholarship.id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                        >
                            <h3 className="text-2xl font-bold text-blue-700">
                                {scholarship.name}
                            </h3>

                            <p className="mt-4">
                                🌍 <strong>Country:</strong>
                                <br />
                                {scholarship.country}
                            </p>

                            <p className="mt-3">
                                💰 <strong>Funding:</strong>
                                <br />
                                {scholarship.amount}
                            </p>

                            <p className="mt-3">
                                🎯 <strong>Eligibility:</strong>
                                <br />
                                {scholarship.eligibility}
                            </p>

                            <button className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                                View Details
                            </button>
                        </div>
                    ))}

                </div>

            </div>

            {/* Tips Section */}
            <div className="max-w-7xl mx-auto px-6 pb-12">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Scholarship Application Tips
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li>✅ Maintain a strong CGPA.</li>
                        <li>✅ Prepare a compelling Statement of Purpose (SOP).</li>
                        <li>✅ Obtain strong Letters of Recommendation (LOR).</li>
                        <li>✅ Apply before deadlines.</li>
                        <li>✅ Highlight extracurricular achievements.</li>
                        <li>✅ Keep IELTS/GRE scores ready if required.</li>
                    </ul>

                </div>

            </div>

        </div>
    );
}
const universities = [
    {
        id: 1,
        name: "Technical University of Munich",
        country: "Germany",
        ranking: "#30",
        tuition: "€0 - €3,000/year",
        course: "MSc Data Science",
    },
    {
        id: 2,
        name: "University of Toronto",
        country: "Canada",
        ranking: "#21",
        tuition: "CAD 35,000/year",
        course: "MSc Computer Science",
    },
    {
        id: 3,
        name: "University of Melbourne",
        country: "Australia",
        ranking: "#14",
        tuition: "AUD 45,000/year",
        course: "Master of IT",
    },
    {
        id: 4,
        name: "University of Manchester",
        country: "UK",
        ranking: "#32",
        tuition: "£28,000/year",
        course: "MSc Artificial Intelligence",
    },
    {
        id: 5,
        name: "Arizona State University",
        country: "USA",
        ranking: "#179",
        tuition: "$32,000/year",
        course: "MS Software Engineering",
    },
];

export default function UniversitiesPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-blue-700 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Universities Finder
                    </h1>

                    <p className="mt-3 text-lg">
                        Explore top universities around the world
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white p-6 rounded-xl shadow-md">

                    <h2 className="text-2xl font-bold mb-4">
                        Search Universities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">

                        <input
                            type="text"
                            placeholder="Course Name"
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

            {/* University Cards */}
            <div className="max-w-7xl mx-auto px-6 pb-12">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {universities.map((university) => (
                        <div
                            key={university.id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                        >
                            <h2 className="text-2xl font-bold text-blue-700">
                                {university.name}
                            </h2>

                            <p className="mt-3">
                                🌍 <strong>Country:</strong> {university.country}
                            </p>

                            <p className="mt-2">
                                🏆 <strong>Ranking:</strong> {university.ranking}
                            </p>

                            <p className="mt-2">
                                🎓 <strong>Course:</strong> {university.course}
                            </p>

                            <p className="mt-2">
                                💰 <strong>Tuition:</strong> {university.tuition}
                            </p>

                            <button className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                                View Details
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}
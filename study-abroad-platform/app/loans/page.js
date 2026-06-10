const loans = [
    {
        id: 1,
        bank: "State Bank of India",
        maxAmount: "₹1.5 Crore",
        interest: "8.15%",
        collateral: "Required",
    },
    {
        id: 2,
        bank: "HDFC Credila",
        maxAmount: "₹75 Lakhs",
        interest: "9.25%",
        collateral: "Optional",
    },
    {
        id: 3,
        bank: "ICICI Bank",
        maxAmount: "₹1 Crore",
        interest: "9.50%",
        collateral: "Required",
    },
    {
        id: 4,
        bank: "Axis Bank",
        maxAmount: "₹75 Lakhs",
        interest: "10.00%",
        collateral: "Optional",
    },
];

export default function LoansPage() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-blue-700 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Education Loan Assistant
                    </h1>

                    <p className="mt-2 text-lg">
                        Compare education loans for studying abroad
                    </p>
                </div>
            </div>

            {/* EMI Calculator */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        EMI Calculator
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">

                        <input
                            type="number"
                            placeholder="Loan Amount"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            type="number"
                            placeholder="Interest Rate (%)"
                            className="border p-3 rounded-lg"
                        />

                        <input
                            type="number"
                            placeholder="Loan Tenure (Years)"
                            className="border p-3 rounded-lg"
                        />

                    </div>

                    <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                        Calculate EMI
                    </button>

                </div>
            </div>

            {/* Loan Cards */}
            <div className="max-w-7xl mx-auto px-6 pb-12">

                <h2 className="text-3xl font-bold mb-8">
                    Popular Education Loans
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {loans.map((loan) => (
                        <div
                            key={loan.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                        >
                            <h3 className="text-xl font-bold text-blue-700">
                                {loan.bank}
                            </h3>

                            <p className="mt-4">
                                💰 <strong>Maximum Loan:</strong>
                                <br />
                                {loan.maxAmount}
                            </p>

                            <p className="mt-3">
                                📈 <strong>Interest Rate:</strong>
                                <br />
                                {loan.interest}
                            </p>

                            <p className="mt-3">
                                📄 <strong>Collateral:</strong>
                                <br />
                                {loan.collateral}
                            </p>

                            <button className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                                View Details
                            </button>
                        </div>
                    ))}

                </div>
            </div>

            {/* Loan Eligibility Section */}
            <div className="max-w-7xl mx-auto px-6 pb-12">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Loan Eligibility Requirements
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li>✅ Admission Letter from University</li>
                        <li>✅ Academic Records & Mark Sheets</li>
                        <li>✅ Identity & Address Proof</li>
                        <li>✅ Income Documents of Co-applicant</li>
                        <li>✅ Passport Copy</li>
                        <li>✅ Visa Documents (if available)</li>
                    </ul>

                </div>

            </div>

        </div>
    );
}
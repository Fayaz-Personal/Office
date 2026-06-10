export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800 p-4">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-700">
                        Create Your Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Start your study abroad journey today
                    </p>
                </div>

                <form className="space-y-5">

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="block mb-2 font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Create password"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="block mb-2 font-medium">
                                Degree
                            </label>

                            <input
                                type="text"
                                placeholder="B.E / B.Tech / B.Sc"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                CGPA
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                placeholder="Enter CGPA"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <label className="block mb-2 font-medium">
                                Preferred Country
                            </label>

                            <select className="w-full border rounded-lg p-3">
                                <option>Select Country</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Germany</option>
                                <option>UK</option>
                                <option>Australia</option>
                                <option>Ireland</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Budget (₹)
                            </label>

                            <input
                                type="number"
                                placeholder="Enter budget"
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Preferred Course
                        </label>

                        <input
                            type="text"
                            placeholder="Data Science, AI, Cyber Security..."
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />

                        <label>
                            I agree to the Terms & Conditions
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-semibold"
                    >
                        Create Account
                    </button>

                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Already have an account?
                    </p>

                    <a
                        href="/login"
                        className="text-blue-700 font-semibold hover:underline"
                    >
                        Login Here
                    </a>
                </div>

            </div>

        </div>
    );
}
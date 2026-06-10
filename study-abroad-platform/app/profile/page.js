"use client";

import { useState } from "react";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "Fayaz",
        email: "fayaz@example.com",
        degree: "B.E Computer Science",
        cgpa: "8.2",
        country: "Germany",
        budget: "2000000",
        course: "Data Science",
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-blue-700 text-white py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Student Profile
                    </h1>

                    <p className="mt-2">
                        Manage your academic and study abroad preferences
                    </p>
                </div>
            </div>

            {/* Profile Form */}
            <div className="max-w-4xl mx-auto p-6">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Profile Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Degree
                            </label>
                            <input
                                type="text"
                                name="degree"
                                value={profile.degree}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                CGPA
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                name="cgpa"
                                value={profile.cgpa}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Preferred Country
                            </label>
                            <select
                                name="country"
                                value={profile.country}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            >
                                <option>Germany</option>
                                <option>USA</option>
                                <option>Canada</option>
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
                                name="budget"
                                value={profile.budget}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />
                        </div>

                    </div>

                    <div className="mt-6">
                        <label className="block mb-2 font-medium">
                            Preferred Course
                        </label>
                        <input
                            type="text"
                            name="course"
                            value={profile.course}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>

                    <button
                        className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
                    >
                        Save Profile
                    </button>

                </div>

            </div>

        </div>
    );
}
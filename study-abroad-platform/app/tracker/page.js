"use client";

import { useState } from "react";

export default function TrackerPage() {
    const [steps, setSteps] = useState([
        {
            id: 1,
            title: "Profile Completed",
            completed: true,
        },
        {
            id: 2,
            title: "University Shortlisted",
            completed: true,
        },
        {
            id: 3,
            title: "IELTS / TOEFL Completed",
            completed: false,
        },
        {
            id: 4,
            title: "Application Submitted",
            completed: false,
        },
        {
            id: 5,
            title: "Offer Letter Received",
            completed: false,
        },
        {
            id: 6,
            title: "Education Loan Approved",
            completed: false,
        },
        {
            id: 7,
            title: "Visa Applied",
            completed: false,
        },
        {
            id: 8,
            title: "Visa Approved",
            completed: false,
        },
        {
            id: 9,
            title: "Flight Booked",
            completed: false,
        },
    ]);

    const toggleStep = (id) => {
        setSteps(
            steps.map((step) =>
                step.id === id
                    ? { ...step, completed: !step.completed }
                    : step
            )
        );
    };

    const completedSteps = steps.filter(
        (step) => step.completed
    ).length;

    const progress = Math.round(
        (completedSteps / steps.length) * 100
    );

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-blue-700 text-white py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Application Tracker
                    </h1>

                    <p className="mt-2">
                        Track your study abroad application journey
                    </p>
                </div>
            </div>

            {/* Progress Section */}
            <div className="max-w-6xl mx-auto px-6 py-8">

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <div className="flex justify-between mb-4">
                        <h2 className="text-2xl font-bold">
                            Overall Progress
                        </h2>

                        <span className="text-xl font-bold text-blue-700">
                            {progress}%
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-6">
                        <div
                            className="bg-blue-700 h-6 rounded-full text-white text-center"
                            style={{ width: `${progress}%` }}
                        >
                            {progress}%
                        </div>
                    </div>

                </div>

            </div>

            {/* Tracker Steps */}
            <div className="max-w-6xl mx-auto px-6 pb-10">

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Application Checklist
                    </h2>

                    <div className="space-y-4">

                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="flex items-center justify-between border p-4 rounded-lg"
                            >
                                <div className="flex items-center gap-3">

                                    <input
                                        type="checkbox"
                                        checked={step.completed}
                                        onChange={() =>
                                            toggleStep(step.id)
                                        }
                                        className="h-5 w-5"
                                    />

                                    <span
                                        className={
                                            step.completed
                                                ? "line-through text-green-600 font-medium"
                                                : "font-medium"
                                        }
                                    >
                                        {step.title}
                                    </span>

                                </div>

                                <span>
                                    {step.completed ? "✅" : "⏳"}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}
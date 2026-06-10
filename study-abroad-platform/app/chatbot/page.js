"use client";

import { useState } from "react";

export default function ChatbotPage() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([
        {
            sender: "bot",
            text: "👋 Hi! I'm your Study Abroad Assistant. Ask me anything about universities, scholarships, loans, exams, or visas.",
        },
    ]);

    const sendMessage = () => {
        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        let botReply =
            "I can help you with universities, scholarships, education loans, exams, and visa guidance.";

        if (message.toLowerCase().includes("germany")) {
            botReply =
                "Germany offers many low-cost and tuition-free master's programs. IELTS is usually required.";
        }

        if (message.toLowerCase().includes("canada")) {
            botReply =
                "Canada is popular for PG studies. Most universities require IELTS and tuition ranges from CAD 20,000 - CAD 40,000 per year.";
        }

        if (message.toLowerCase().includes("loan")) {
            botReply =
                "Education loans are available through SBI, HDFC Credila, ICICI Bank, and Axis Bank.";
        }

        if (message.toLowerCase().includes("scholarship")) {
            botReply =
                "Popular scholarships include Fulbright, DAAD, Chevening, Erasmus Mundus, and Australia Awards.";
        }

        const botMessage = {
            sender: "bot",
            text: botReply,
        };

        setChat([...chat, userMessage, botMessage]);
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="bg-blue-700 text-white py-8">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        AI Study Abroad Assistant
                    </h1>

                    <p className="mt-2">
                        Ask questions about universities, scholarships,
                        loans, exams, and visas.
                    </p>
                </div>
            </div>

            {/* Chat Container */}
            <div className="max-w-5xl mx-auto p-6">

                <div className="bg-white rounded-xl shadow-lg h-[600px] flex flex-col">

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">

                        {chat.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-lg px-4 py-3 rounded-xl ${msg.sender === "user"
                                            ? "bg-blue-700 text-white"
                                            : "bg-gray-200 text-black"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Input Section */}
                    <div className="border-t p-4 flex gap-3">

                        <input
                            type="text"
                            value={message}
                            placeholder="Ask a question..."
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && sendMessage()
                            }
                            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                        >
                            Send
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}
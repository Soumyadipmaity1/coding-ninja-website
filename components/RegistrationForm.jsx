"use client";

import { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        roll: "",
        email: "",
        contact: "",
        branch: "",
        suggestion: "",
        question: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/register/api/saveToExcel", { // ✅ Corrected API Path
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                alert("Failed to save data. Please check the console for details.");
                return;
            }

            const result = await response.json();
            console.log("API Response:", result);
            alert("Data saved successfully!");

            // ✅ Reset Form
            setFormData({
                name: "",
                roll: "",
                email: "",
                contact: "",
                branch: "",
                suggestion: "",
                question: "",
            });

        } catch (error) {
            console.error("Fetch Error:", error);
            alert("An unexpected error occurred. Please check the console.");
        }
    };

    return (
        <div className="min-h-screen bg-[#141819] mt-20 flex items-center justify-center w-full px-4 py-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden border border-gray-700/30">
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-white font-['Red_Hat_Display']">Registration Form</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <input 
                                type="text" 
                                name="roll" 
                                placeholder="Roll No" 
                                value={formData.roll}
                                onChange={handleChange}
                                required 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <input 
                                type="tel" 
                                name="contact" 
                                placeholder="Contact" 
                                value={formData.contact}
                                onChange={handleChange}
                                required 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <select 
                                name="branch" 
                                value={formData.branch}
                                onChange={handleChange} 
                                required
                                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            >
                                <option value="" className="bg-gray-800 text-gray-400">Select Branch</option>
                                <option value="CSE" className="bg-gray-800 text-white">Computer Science</option>
                                <option value="IT" className="bg-gray-800 text-white">Information Technology</option>
                                <option value="ECE" className="bg-gray-800 text-white">Electronics & Communication</option>
                                <option value="ME" className="bg-gray-800 text-white">Mechanical</option>
                                <option value="EE" className="bg-gray-800 text-white">Electrical</option>
                            </select>
                        </div>
                        
                        <div className="space-y-2">
                            <textarea 
                                name="suggestion" 
                                placeholder="Suggestion" 
                                value={formData.suggestion}
                                onChange={handleChange} 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-20 resize-none"
                            ></textarea>
                        </div>
                        
                        <div className="space-y-2">
                            <textarea 
                                name="question" 
                                placeholder="Any Question?" 
                                value={formData.question}
                                onChange={handleChange} 
                                className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-20 resize-none"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                        >
                            Submit
                        </button>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-xs">
                            <span className="ninjaname font-['Gill_Sans'] text-sm font-bold">All fields are required</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

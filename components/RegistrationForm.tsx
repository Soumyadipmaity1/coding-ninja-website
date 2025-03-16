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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/saveToExcel", {
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

            // ✅ Redirect page (Refresh)
            window.location.href = window.location.href;

        } catch (error) {
            console.error("Fetch Error:", error);
            alert("An unexpected error occurred. Please check the console.");
        }
    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="text" name="roll" placeholder="Roll No" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="contact" placeholder="Contact" onChange={handleChange} required />
                <select name="branch" onChange={handleChange} required>
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="ME">Mechanical</option>
                    <option value="EE">Electrical</option>
                </select>
                <textarea 
    name="suggestion" 
    placeholder="Suggestion" 
    onChange={handleChange} 
    style={{ height: "60px", resize: "none" }}
    ></textarea>

    <textarea 
    name="question" 
    placeholder="Any Question?" 
    onChange={handleChange} 
    style={{ height: "60px", resize: "none" }}
    ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

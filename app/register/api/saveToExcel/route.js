import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server"; // Only for App Router

export async function POST(req) {
    console.log("✅ API Route Hit!");
    
    try {
        const body = await req.json();
        console.log("📥 Received Data:", body);

        // ✅ Ensure directory exists
        const dirPath = path.join(process.cwd(), "data");
        const filePath = path.join(dirPath, "data.json");

        await fs.mkdir(dirPath, { recursive: true }); // Async directory creation

        let data = [];
        try {
            const fileContent = await fs.readFile(filePath, "utf-8");
            data = JSON.parse(fileContent);
        } catch (err) {
            console.log("ℹ️ No existing JSON file, creating a new one.");
        }

        // 🛠 Add new data
        data.push(body);

        // ✅ Write updated data to file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        console.log("✅ Data stored in JSON file!");
        return NextResponse.json({ message: "Data stored successfully in JSON!" });

    } catch (error) {
        console.error("❌ Error saving data:", error.message);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}

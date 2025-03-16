import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("✅ API Route Hit!");
    try {
        const body = await req.json();
        console.log("📥 Received Data:", body);

        // ✅ Ensure directory exists
        const dirPath = path.join(process.cwd(), "data");
        const filePath = path.join(dirPath, "data.json");

        if (!fs.existsSync(dirPath)) {
            console.log("📂 Directory not found, creating...");
            fs.mkdirSync(dirPath, { recursive: true });
        }

        let data: any[] = [];
        if (fs.existsSync(filePath)) {
            console.log("📄 Reading existing JSON file...");
            const fileContent = fs.readFileSync(filePath, "utf-8");
            data = JSON.parse(fileContent);
        }

        // 🛠 Add new data
        data.push(body);

        // ✅ Write updated data to file
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        console.log("✅ Data stored in JSON file!");
        return NextResponse.json({ message: "Data stored successfully in JSON!" });

    } catch (error) {
        console.error("❌ Error saving data:", (error as Error).message);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}

import "./styles/globals.css"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Registration Form</title>
            </head>
            <body className="bg-gray-100 text-gray-900"> {/* Optional Tailwind Classes */}
                {children}
            </body>
        </html>
    );
}

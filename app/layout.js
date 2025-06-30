import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Next Quizz",
  description: "Quizz with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Toaster
          toastOptions={{
            style: {
              background: "#171717",
              color: "#fff",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              fontWeight: "500",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
            },
            error: {
              style: {
                background: "#dc2626",
                color: "#fff",
              },
            },
            duration: 2000,
          }}
        />
        {children}
      </body>
    </html>
  );
}

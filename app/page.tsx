"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function syncFigma() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/figma/sync", { method: "POST" });
      const data = await response.json();

      if (data.success) {
        setMessage(`Success! Extracted ${data.colorsExtracted} colors from Figma.`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Figma to React</h1>
        <p className="text-lg text-gray-600">
          Sync your Figma design tokens to Tailwind CSS
        </p>

        <button
          onClick={syncFigma}
          disabled={loading}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Syncing..." : "Sync Figma"}
        </button>

        {message && (
          <p className={`mt-4 p-4 rounded ${message.startsWith("Success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {message}
          </p>
        )}
      </main>
    </div>
  );
}

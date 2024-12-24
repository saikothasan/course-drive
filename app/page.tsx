"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResults(data.items || []);
      }
    } catch (err) {
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center mt-6">Loading...</p>}
        {error && <p className="text-center text-red-600 mt-6">{error}</p>}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <ResultCard key={index} result={result} />
          ))}
        </div>
      </main>
    </div>
  );
}

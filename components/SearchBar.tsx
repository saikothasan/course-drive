import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <input
        type="text"
        placeholder="Search for courses (e.g., Python, JavaScript)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-3/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

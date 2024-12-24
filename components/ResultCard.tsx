export default function ResultCard({ result }: { result: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <a href={result.link} target="_blank" rel="noopener noreferrer">
        <h3 className="text-xl font-semibold text-blue-600 hover:underline">{result.title}</h3>
      </a>
      <p className="text-gray-700 mt-2">{result.snippet}</p>
    </div>
  );
}

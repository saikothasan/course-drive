import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <AcademicCapIcon className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold">CourseFinder</h1>
      </div>
    </nav>
  );
}

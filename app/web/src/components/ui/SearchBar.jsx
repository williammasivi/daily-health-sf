export default function SearchBar() {
  return (
    <div class="flex border-2 border-blue-500 overflow-hidden max-w-md mx-auto">
      <input type="email" placeholder="Search for doctors..."
        class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
      <button type='button' class="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white">
        Search
      </button>
    </div>
  );
}
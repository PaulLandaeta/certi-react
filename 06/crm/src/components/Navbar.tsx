const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <button
          className="text-white text-xl mr-4"
          onClick={() => {
            // Handle sidebar toggle
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <span className="text-white text-xl">Logo</span>
      </div>
      <div className="flex items-center">
        <button
          className="text-white text-xl"
          onClick={() => {
            // Handle user icon click
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 22v-2c0-3.97 3.134-7.182 7-7.182s7 3.212 7 7.182v2M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/App Name - Bolder and more visually prominent */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-indigo-800 tracking-tight transition duration-150 cursor-pointer"
          >
            TaskApp
          </Link>

          {/* Navigation Links and Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {isAuthenticated ? (
              <>
                {/* Dashboard Link */}
                <Link
                  to="/dashboard"
                  // Clean hover effect, slightly larger text
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg font-medium transition duration-150 text-base cursor-pointer"
                >
                  Dashboard
                </Link>

                {/* Profile Link */}
                <Link
                  to="/profile"
                  // Hidden on tiny screens to save space
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg font-medium transition duration-150 text-base hidden sm:block cursor-pointer"
                >
                  Profile
                </Link>

                {/* NOTE: User Greeting removed as requested. */}

                {/* Logout Button - Prominent action button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white font-semibold hover:bg-red-700 px-4 py-2 rounded-xl transition duration-150 text-base shadow-lg cursor-pointer transform hover:scale-[1.01]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Link - Text link for secondary action */}
                <Link
                  to="/login"
                  className="text-indigo-600 hover:text-indigo-800 px-3 sm:px-4 py-2 rounded-lg font-medium transition duration-150 text-base cursor-pointer"
                >
                  Login
                </Link>

                {/* Register Button/Link - Primary CTA with deep shadow for 'smooth' look */}
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white font-semibold hover:bg-indigo-700 px-4 py-2 rounded-xl transition duration-150 text-base shadow-2xl hover:shadow-xl cursor-pointer transform hover:scale-[1.02]"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

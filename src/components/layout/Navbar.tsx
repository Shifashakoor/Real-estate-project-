import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-[70px] items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/home/heroSection/Left Nav.png"
            alt="Logo"
            className="w-28 h-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-8">
          {token && (
            <>
              <Link
                to="/buy"
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                Buy
              </Link>

              <Link
                to="/sell"
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                Sell
              </Link>

              <Link
                to="/about"
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                About Us
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:flex gap-4 items-center">
          {token ? (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-5 py-2 text-white font-bold hover:bg-red-700 transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="font-bold text-slate-800 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-5 py-2 text-white font-bold hover:bg-blue-700 transition-all"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-5 flex flex-col gap-4">
          {token && (
            <>
              <Link
                to="/buy"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-medium"
              >
                Buy
              </Link>

              <Link
                to="/sell"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-medium"
              >
                Sell
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-medium"
              >
                About Us
              </Link>

              <hr />
            </>
          )}

          {token ? (
            <button
              type="button"
              onClick={handleLogout}
              className="block py-2 font-bold text-left text-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-bold"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-bold text-blue-600"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
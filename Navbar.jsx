import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        Emergency App
      </h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/bloodbank">Blood Bank</Link>
        <Link to="/accident">Accident</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}

export default Navbar;
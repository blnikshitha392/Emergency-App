import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center">

      <h1 className="text-10x2 font-bold text-white italic drop-shadow-lg">
        emergenC
      </h1>

      <p className="text-white mt-2 text-lg">
        An Emergency Hotline App
      </p>

      <img
        src="https://png.pngtree.com/png-clipart/20250202/original/pngtree-ambulance-ambulance-png-image_20148587.png"
        alt="ambulance"
        className="w-72 my-12"
      />

      <button
        onClick={() => navigate("/login")}
        className="bg-white text-red-400 font-bold px-10 py-3 rounded-lg shadow-lg hover:scale-105 transition"
      >
        GET STARTED
      </button>

    </div>
  );
}

export default Home;
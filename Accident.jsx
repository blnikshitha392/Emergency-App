import { useState } from "react";

function Accident() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hospitals = [
    "Apollo Hospital",
    "Yashoda Hospital",
    "KIMS Hospital"
  ];

  const policeStations = [
    "Madhapur Police Station",
    "Gachibowli Police Station",
    "Cyberabad Police Station"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !location) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Accident Assistance
      </h1>

      {/* Hospitals */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4 text-pink-200">
          Nearby Hospitals
        </h2>

        <ul className="list-disc pl-6">
          {hospitals.map((hospital, index) => (
            <li key={index}>{hospital}</li>
          ))}
        </ul>

      </div>

      {/* Police Stations */}
      <div className="bg-pink-200 shadow rounded-lg p-6 mb-6">

        <h2 className="text-2xl font-semibold mb-4 text-pink-500">
          Nearby Police Stations
        </h2>

        <ul className="list-disc pl-6">
          {policeStations.map((station, index) => (
            <li key={index}>{station}</li>
          ))}
        </ul>

      </div>

      {/* Accident Form */}
      <div className="bg-pink-200 shadow rounded-lg p-6">

        <h2 className="text-2xl font-semibold mb-4">
          Report Accident
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Victim Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          >
            <option value="">
              Select Accident Type
            </option>

            <option value="Major">
              Major
            </option>

            <option value="Minor">
              Minor
            </option>
          </select>

          <input
            type="text"
            placeholder="Accident Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded"
          >
            Book Ambulance
          </button>

        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 rounded">

            <h3 className="text-green-700 font-bold text-xl">
              Ambulance Booked Successfully!
            </h3>

            <p className="mt-2">
              Nearest ambulance has been dispatched.
            </p>

            <p>
              Estimated Arrival Time: 10 Minutes
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Accident;
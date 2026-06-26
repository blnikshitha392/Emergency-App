import { useState } from "react";

function BloodRequest() {

  const [receiverName, setReceiverName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [purpose, setPurpose] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const donor = {
    name: "Ramesh Kumar",
    bloodGroup: "O+",
    phone: "9876543210"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !receiverName ||
      !bloodGroup ||
      !purpose
    ) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Blood Request Form
      </h1>

      <div className="max-w-xl bg-white shadow-lg rounded-lg p-6">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Receiver Name"
            value={receiverName}
            onChange={(e) =>
              setReceiverName(e.target.value)
            }
            className="w-full border p-2 rounded mb-4"
          />

          <select
            value={bloodGroup}
            onChange={(e) =>
              setBloodGroup(e.target.value)
            }
            className="w-full border p-2 rounded mb-4"
          >
            <option value="">
              Select Blood Group
            </option>

            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input
            type="text"
            placeholder="Purpose"
            value={purpose}
            onChange={(e) =>
              setPurpose(e.target.value)
            }
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Submit Request
          </button>

        </form>

        {submitted && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">

            <h2 className="text-2xl font-bold text-green-700">
              Blood Request Accepted
            </h2>

            <p className="mt-3">
              Your request has been successfully registered.
            </p>

            <div className="mt-4">

              <h3 className="font-bold">
                Donor Details
              </h3>

              <p>
                Name: {donor.name}
              </p>

              <p>
                Blood Group: {donor.bloodGroup}
              </p>

              <p>
                Phone: {donor.phone}
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default BloodRequest;
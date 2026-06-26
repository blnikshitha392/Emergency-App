import { useState } from "react";

function WomenSafety() {

  const [sos, setSos] = useState(false);

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-5">
        Women & Child Safety
      </h1>

      <button
        className="bg-red-600 text-white px-6 py-3 rounded"
        onClick={() => setSos(true)}
      >
        SOS
      </button>

      {sos && (
        <p className="mt-4 text-green-600 font-bold">
          SOS Alert Sent Successfully
        </p>
      )}

      <div className="mt-8">

        <h2 className="text-xl font-bold">
          Trusted Contacts
        </h2>

        <ul className="list-disc pl-5 mt-2">
          <li>Mother</li>
          <li>Father</li>
          <li>Friend</li>
        </ul>

      </div>

    </div>
  );
}

export default WomenSafety;
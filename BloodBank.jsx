import { memo } from "react";
import { Link } from "react-router-dom";

function BloodBank() {
  const banks = [
    {
      id: 1,
      name: "Red Cross Blood Bank",
      groups: ["A+", "A-", "B+", "O+", "AB+"]
    },
    {
      id: 2,
      name: "City Blood Bank",
      groups: ["A+", "B+", "B-", "O+", "AB+"]
    },
    {
      id: 3,
      name: "Life Care Blood Bank",
      groups: [
        "A+",
        "A-",
        "B+",
        "B-",
        "O+",
        "O-",
        "AB+",
        "AB-"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Nearby Blood Banks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {banks.map((bank) => (
          <div
            key={bank.id}
            className="bg-pink-200 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              {bank.name}
            </h2>

            <h3 className="font-semibold mb-2">
              Available Blood Groups
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {bank.groups.map((group, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

            <Link
              to="/bloodrequest"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Request Blood
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}

export default memo(BloodBank);
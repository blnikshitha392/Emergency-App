function Dashboard() {
  return (
    <div className="bg-pink-300 min-h-screen p-8">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-pink-500 text-2xl font-bold">
            Emergency Contacts
          </h2>
          <p>Quick access to emergency services.</p>
        </div>

        <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-pink-500 text-2xl font-bold">
            Blood Bank
          </h2>
          <p>Find nearby blood banks.</p>
        </div>

        <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-pink-500 text-2xl font-bold">
            Accident Help
          </h2>
          <p>Request ambulance support.</p>
        </div>

        <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-pink-500 text-2xl font-bold">
            Women & Child Safety
          </h2>
          <p>SOS and trusted contacts.</p>
        </div>

      </div>

      <div className="bg-pink-200 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-pink-500">
          Safety Measures
        </h2>

        <ul className="list-disc pl-8 space-y-2">
          <li>Stay calm during emergencies</li>
          <li>Call nearest emergency service</li>
          <li>Enable live location sharing</li>
          <li>Keep emergency contacts updated</li>
          <li>Keep medical records ready</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;
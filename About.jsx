function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">

        <h1 className="text-4xl font-bold text-red-600 mb-6">
          About Emergency Assistance App
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          The Emergency Assistance App is designed to provide quick
          access to emergency services and support during critical
          situations.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Users can view emergency contact numbers, search nearby
          blood banks, request blood donations, find hospitals and
          police stations during accidents, and access women and
          child safety features.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Features
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Emergency Contact Directory</li>
          <li>Blood Bank Information & Blood Requests</li>
          <li>Accident Assistance Services</li>
          <li>Women & Child Safety SOS Features</li>
          <li>Protected User Access</li>
          <li>Responsive User Interface</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Technologies Used
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>React JS</li>
          <li>React Router DOM</li>
          <li>Tailwind CSS</li>
          <li>Axios (API Service Layer)</li>
          <li>React Hooks (useState)</li>
        </ul>

      </div>

    </div>
  );
}

export default About;
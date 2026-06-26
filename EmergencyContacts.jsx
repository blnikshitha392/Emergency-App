function EmergencyContacts() {

  const contacts = [
    ["Police", "100"],
    ["Fire", "101"],
    ["Ambulance", "108"],
    ["Women Helpline", "1091"],
    ["Child Helpline", "1098"],
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Emergency Contacts
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {contacts.map((c, i) => (
          <div
            key={i}
            className="border p-4 rounded shadow"
          >
            <h2 className="font-bold">
              {c[0]}
            </h2>

            <p>{c[1]}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default EmergencyContacts;
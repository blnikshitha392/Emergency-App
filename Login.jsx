import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.gender
    ) {
      alert("Fill all fields");
      return;
    }

    setUser(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-96"
      >

        <h2 className="text-2xl font-bold text-center mb-5">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-2 mb-4 rounded"
          value={form.gender}
          onChange={(e) =>
            setForm({
              ...form,
              gender: e.target.value,
            })
          }
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-red-600 text-white w-full p-2 rounded hover:bg-red-700"
        >
          Submit
        </button>

      </form>

    </div>
  );
}

export default Login;
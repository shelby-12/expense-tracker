import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signup() {
    let item = [name, email, password];
    console.log(item);
    let result = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  }

  return (
    <div className="flex flex-co p-3">
      <h1 className="text-2xl font-bold text-center">Signup</h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 "
            placeholder="Enter Your email"
            required=""
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 "
            placeholder="Enter Your name"
            required=""
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 -blue-500"
            required=""
          />
        </div>
        <div className="flex items-start"></div>
        <button type="submit" className="btn btn-primary" onClick={signup}>
          Signup
        </button>
      </form>
    </div>
  );
}
export default Register;

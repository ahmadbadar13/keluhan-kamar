import { useState } from "react";

export default function FormKeluhan() {
  const [form, setForm] = useState({
    nama: "",
    kamar: "",
    wa: "",
    keluhan: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/keluhan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Keluhan berhasil dikirim");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Form Keluhan Kamar</h1>

        <input className="input" placeholder="Nama"
          onChange={e => setForm({...form, nama: e.target.value})} />

        <input className="input mt-2" placeholder="No Kamar"
          onChange={e => setForm({...form, kamar: e.target.value})} />

        <input className="input mt-2" placeholder="No WhatsApp"
          onChange={e => setForm({...form, wa: e.target.value})} />

        <textarea className="input mt-2" placeholder="Isi Keluhan"
          onChange={e => setForm({...form, keluhan: e.target.value})} />

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">
          Kirim Keluhan
        </button>
      </form>
    </div>
  );
}
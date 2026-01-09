"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-[380px]">
        <h1 className="text-2xl font-bold mb-4 text-primary-foreground">CoachKickr Login</h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Send Login Link
        </button>
      </div>
    </div>
  );
}

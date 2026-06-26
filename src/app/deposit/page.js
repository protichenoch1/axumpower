export default function Deposit() {
  return (
    <main className="min-h-screen bg-[#EAF4F4] p-5">
      <h1 className="text-3xl font-bold text-[#00796B] mb-6">
        Deposit Funds
      </h1>

      {/* Amount */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <label className="block text-gray-700 mb-2">
          Deposit Amount (USD)
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border rounded-xl p-3 outline-none"
        />
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold text-lg mb-4">
          Select Payment Method
        </h2>

        <button className="w-full bg-[#00796B] text-white py-3 rounded-xl mb-3">
          PayPal
        </button>

        <button className="w-full bg-[#C9A227] text-white py-3 rounded-xl">
          Cryptocurrency
        </button>
      </div>

      {/* Manual Payment */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold text

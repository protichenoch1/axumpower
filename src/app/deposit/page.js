export default function Deposit() {
  return (
    <main className="min-h-screen bg-[#EAF4F4] p-5">
      <h1 className="text-3xl font-bold text-[#00796B] mb-6">
        Deposit Funds
      </h1>

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

      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold text-lg mb-3">
          Manual Payment
        </h2>

        <p className="text-gray-600 mb-3">
          After sending your payment, enter your transaction ID below.
        </p>

        <input
          type="text"
          placeholder="Transaction ID"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <button className="w-full bg-[#00796B] text-white py-3 rounded-xl">
          Submit Deposit
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-semibold text-lg mb-3">
          Deposit Status
        </h2>

        <p className="text-gray-500">
          No pending deposits.
        </p>
      </div>
    </main>
  );
}

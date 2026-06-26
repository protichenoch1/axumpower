export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#EAF4F4] p-5">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#00796B]">
          Axum Power
        </h1>
        <p className="text-gray-600">
          Welcome back
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-[#00796B] text-white rounded-2xl p-6 shadow-lg">
        <p className="text-sm opacity-80">Available Balance</p>
        <h2 className="text-4xl font-bold mt-2">$0.00</h2>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-white text-[#00796B] py-3 rounded-xl font-semibold">
            Deposit
          </button>

          <button className="flex-1 bg-[#C9A227] text-white py-3 rounded-xl font-semibold">
            Withdraw
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500 text-sm">Deposits</p>
          <h3 className="text-2xl font-bold">$0.00</h3>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500 text-sm">Withdrawals</p>
          <h3 className="text-2xl font-bold">$0.00</h3>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500 text-sm">Referral Earnings</p>
          <h3 className="text-2xl font-bold">$0.00</h3>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500 text-sm">Transactions</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl p-5 shadow mt-6">
        <h2 className="text-xl font-semibold mb-3">
          Recent Transactions
        </h2>

        <p className="text-gray-500">
          No transactions yet.
        </p>
      </div>
    </main>
  );
    }

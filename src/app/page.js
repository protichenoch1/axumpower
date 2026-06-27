export default function Home() {
  const vipPlans = [
    {
      vip: "VIP 1",
      unlock: "$10",
      daily: "$1",
      period: "60 Days",
      total: "$60",
    },
    {
      vip: "VIP 2",
      unlock: "$25",
      daily: "$1.75",
      period: "60 Days",
      total: "$105",
    },
    {
      vip: "VIP 3",
      unlock: "$35",
      daily: "$2.50",
      period: "60 Days",
      total: "$150",
    },
    {
      vip: "VIP 4",
      unlock: "$45",
      daily: "$3.50",
      period: "60 Days",
      total: "$210",
    },
    {
      vip: "VIP 5",
      unlock: "$60",
      daily: "$5",
      period: "60 Days",
      total: "$300",
    },
  ];

  return (
    <main className="min-h-screen bg-[#EAF4F4] pb-24">

      {/* Header */}
      <div className="bg-[#00796B] text-white p-5 shadow-lg">
        <h1 className="text-3xl font-bold">Axum Power</h1>
        <p className="text-sm opacity-80">
          Welcome to Axum Power
        </p>
      </div>

      {/* Balance */}
      <div className="m-4 bg-[#00796B] rounded-3xl text-white p-6 shadow-xl">
        <p className="text-sm">Available Balance</p>

        <h2 className="text-4xl font-bold mt-2">
          $0.00
        </h2>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="bg-white text-[#00796B] py-3 rounded-xl font-bold">
            Deposit
          </button>

          <button className="bg-[#C9A227] py-3 rounded-xl font-bold">
            Withdraw
          </button>
        </div>
      </div>

      {/* VIP Plans */}
      <div className="px-4">
        <h2 className="text-2xl font-bold text-[#00796B] mb-4">
          VIP Plans
        </h2>

        {vipPlans.map((plan) => (
          <div
            key={plan.vip}
            className="bg-white rounded-2xl shadow-lg p-4 mb-5"
          >
            <div className="flex gap-4">

              <div className="w-24 h-24 rounded-xl bg-[#00796B] flex items-center justify-center text-white font-bold text-xl">
                🚀
              </div>

              <div className="flex-1">

                <h3 className="text-xl font-bold text-[#00796B]">
                  {plan.vip}
                </h3>

                <p>Daily Return: <b>{plan.daily}</b></p>

                <p>Period: <b>{plan.period}</b></p>

                <p>Total Return: <b>{plan.total}</b></p>

                <p>
                  Unlock Price:
                  <span className="font-bold text-[#C9A227]">
                    {" "}{plan.unlock}
                  </span>
                </p>

                <button className="mt-3 w-full bg-[#00796B] text-white py-2 rounded-xl font-bold">
                  Unlock Now
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </main>
  );
    }

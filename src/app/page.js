export default function Home() {
  const vipPlans = [
    { vip: "VIP 1", unlock: "$10", daily: "$1", period: "60 Days", total: "$60" },
    { vip: "VIP 2", unlock: "$25", daily: "$1.75", period: "60 Days", total: "$105" },
    { vip: "VIP 3", unlock: "$35", daily: "$2.50", period: "60 Days", total: "$150" },
    { vip: "VIP 4", unlock: "$45", daily: "$3.50", period: "60 Days", total: "$210" },
    { vip: "VIP 5", unlock: "$60", daily: "$5.00", period: "60 Days", total: "$300" },
  ];

  return (
    <div
      style={{
        background: "#EAF4F4",
        minHeight: "100vh",
        paddingBottom: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#00796B",
          color: "white",
          padding: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Axum Power</h1>
        <p style={{ marginTop: "8px" }}>
          Powering Your Financial Future
        </p>
      </div>

      {/* Balance Card */}
      <div
        style={{
          background: "white",
          margin: "15px",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h3>Available Balance</h3>

        <h1
          style={{
            color: "#00796B",
            marginTop: "10px",
          }}
        >
          $0.00
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              flex: 1,
              background: "#00796B",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            Deposit
          </button>

          <button
            style={{
              flex: 1,
              background: "#C9A227",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* VIP Plans */}
      <div style={{ padding: "15px" }}>
        <h2
          style={{
            color: "#00796B",
            marginBottom: "15px",
          }}
        >
          VIP Plans
        </h2>

        {vipPlans.map((plan) => (
          <div
            key={plan.vip}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "15px",
              marginBottom: "20px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  background: "#00796B",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                }}
              >
                🚀
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "#00796B",
                    marginTop: 0,
                  }}
                >
                  {plan.vip}
                </h3>

                <p><b>Daily Return:</b> {plan.daily}</p>

                <p><b>Period:</b> {plan.period}</p>

                <p><b>Total Return:</b> {plan.total}</p>

                <p>
                  <b>Unlock Price:</b>{" "}
                  <span style={{ color: "#C9A227" }}>
                    {plan.unlock}
                  </span>
                </p>

                <button
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    background: "#00796B",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Unlock Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
          }

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#EAF4F4",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#00796B",
          marginBottom: "20px",
        }}
      >
        Axum Power
      </h1>

      {/* Balance Card */}
      <div
        style={{
          background: "#00796B",
          color: "#fff",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <p>Available Balance</p>
        <h2>$0.00</h2>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#00796B",
            color: "#fff",
          }}
        >
          Deposit
        </button>

        <button
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#C9A227",
            color: "#fff",
          }}
        >
          Withdraw
        </button>
      </div>

      {/* Referral Card */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h3>Referral Earnings</h3>
        <p>$0.00</p>
      </div>

      {/* Transactions */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Recent Transactions</h3>
        <p>No transactions yet.</p>
      </div>
    </main>
  );
}

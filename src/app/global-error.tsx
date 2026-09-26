"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: "Tahoma, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 24,
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 700 }}>مشکلی پیش آمد</h1>
          <p style={{ marginTop: 12, color: "#666" }}>
            متأسفانه خطایی غیرمنتظره رخ داد. لطفاً صفحه را دوباره بارگذاری کنید.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: 24,
              padding: "10px 24px",
              borderRadius: 999,
              background: "#6D4FEA",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            تلاش مجدد
          </button>
        </div>
      </body>
    </html>
  );
}

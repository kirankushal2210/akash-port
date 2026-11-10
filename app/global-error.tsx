"use client";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en-GB">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#f3ba16",
          color: "#172554",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            maxWidth: "34rem",
            padding: "2.5rem",
            background: "#fffbeb",
            border: "2px solid #172554",
            borderRadius: "1rem",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#166534",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Unexpected Error
          </p>
          <h1 style={{ marginTop: "0.75rem", fontSize: "2rem", lineHeight: 1.15 }}>
            Something went wrong while loading this page.
          </h1>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "1.5rem",
              padding: "0.8rem 1.5rem",
              borderRadius: "999px",
              border: 0,
              background: "#1e3a8a",
              color: "#fffbeb",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}


export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          background: "#fcfafc",
          borderRadius: "30px",
          padding: "55px 35px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          border: "1px solid #f1ebf3",
        }}
      >
        <p style={{
          color: "#875F89",
          letterSpacing: "4px",
          fontSize: "12px",
          marginBottom: "12px",
          fontWeight: "bold",
        }}>
          SO BRIGHT PROFESSIONAL
        </p>

        <p style={{
          color: "#9a8a9d",
          letterSpacing: "4px",
          fontSize: "12px",
          marginBottom: "18px",
          fontWeight: "bold",
        }}>
          CUIDADO PREMIUM PARA MASCOTAS
        </p>

        <h1 style={{
          fontSize: "52px",
          color: "#1f1f1f",
          marginBottom: "20px",
          lineHeight: "1.1",
        }}>
          Brillo profesional
          <br />
          en casa.
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#666666",
          lineHeight: "1.8",
          marginBottom: "35px",
        }}>
          Fórmulas profesionales diseñadas para aportar brillo,
          suavidad y una apariencia impecable al pelaje.
        </p>

        <button style={{
          background: "#875F89",
          color: "#ffffff",
          border: "none",
          padding: "16px 38px",
          borderRadius: "999px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(135,95,137,0.18)",
        }}>
          Ver colección
        </button>
      </div>
    </main>
  );
}

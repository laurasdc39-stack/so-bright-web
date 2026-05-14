export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FAF8F5",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "55px 35px",
          boxShadow: "0 12px 45px rgba(0,0,0,0.06)",
          border: "1px solid #EFE7E2",
        }}
      >
        <p
          style={{
            color: "#875F89",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "12px",
            fontWeight: "bold",
          }}
        >
          SO BRIGHT PROFESSIONAL
        </p>

        <p
          style={{
            color: "#9A8A9D",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "18px",
            fontWeight: "bold",
          }}
        >
          CUIDADO PREMIUM PARA MASCOTAS
        </p>

        <h1
          style={{
            fontSize: "52px",
            color: "#1F1F1F",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Brillo profesional
          <br />
          en casa.
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666666",
            lineHeight: "1.8",
            marginBottom: "35px",
          }}
        >
          Fórmulas profesionales diseñadas para aportar brillo,
          suavidad y una apariencia impecable al pelaje.
        </p>

        <button
          style={{
            background: "#875F89",
            color: "#FFFFFF",
            border: "none",
            padding: "16px 38px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 16px rgba(135,95,137,0.18)",
          }}
        >
          Ver colección
        </button>
      </div>
    </main>
  );
}

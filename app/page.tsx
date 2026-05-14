export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f8f6f9 0%, #ece4ef 45%, #9b84a3 100%)",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "30px",
          padding: "55px 35px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            color: "#875F89",
            letterSpacing: "4px",
            fontSize: "13px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          CUIDADO PREMIUM PARA MASCOTAS
        </p>

        <h1
          style={{
            fontSize: "52px",
            color: "#1f1f1f",
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
            color: "#555",
            fontSize: "20px",
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
            color: "#ffffff",
            border: "none",
            padding: "16px 38px",
            borderRadius: "999px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(135,95,137,0.25)",
          }}
        >
          Ver colección
        </button>
      </div>
    </main>
  );
}

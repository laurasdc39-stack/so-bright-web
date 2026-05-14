export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #faf7fb 0%, #f2ebf3 45%, #cdbfd1 100%)",
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
          SO BRIGHT PROFESSIONAL
        </p>

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
            fontSize: "19px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "35px",
          }}
        >
          Fórmulas profesionales diseñadas para aportar brillo,
          suavidad y una apariencia impecable al pelaje.
        </p>

        <button
          style={{
            background: "#8E7394",
            color: "#ffffff",
            border: "none",
            padding: "16px 38px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(142,115,148,0.28)",
          }}
        >
          Ver colección
        </button>
      </div>
    </main>
  );
}

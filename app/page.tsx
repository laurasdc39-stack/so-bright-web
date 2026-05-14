export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background:
          "linear-gradient(135deg, #faf7fb 0%, #eadfeb 45%, #7A5C7D 100%)",

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
        <img
          src="https://i.imgur.com/7Vw6C8B.png"
          alt="SO BRIGHT"
          style={{
            width: "170px",
            marginBottom: "25px",
          }}
        />

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
            background: "#875F89",
            color: "#fff",
            border: "none",
            padding: "16px 38px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(135,95,137,0.35)",
          }}
        >
          Ver colección
        </button>

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src="https://i.imgur.com/7Vw6C8B.png"
              style={{
                width: "70px",
                borderRadius: "18px",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              Silky Touch
            </p>
          </div>

          <div>
            <img
              src="https://i.imgur.com/7Vw6C8B.png"
              style={{
                width: "70px",
                borderRadius: "18px",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              Deep Clean
            </p>
          </div>

          <div>
            <img
              src="https://i.imgur.com/7Vw6C8B.png"
              style={{
                width: "70px",
                borderRadius: "18px",
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              Smooth Coat
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

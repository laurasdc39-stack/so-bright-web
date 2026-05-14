export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alinear elementos:"flex-start",
direccionFlex:"column",
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
      <section
  style={{
    width: "100%",
    marginTop: "90px",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "50px",
    }}
  >
    <p
      style={{
        color: "#875F89",
        letterSpacing: "3px",
        fontSize: "12px",
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      NUESTRA COLECCIÓN
    </p>

    <h2
      style={{
        fontSize: "48px",
        color: "#1F1F1F",
      }}
    >
      Fórmulas profesionales
      <br />
      para cada necesidad
    </h2>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
      gap: "30px",
      width: "100%",
    }}
  >
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "28px",
        padding: "25px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src="/silky.png"
        style={{
          width: "100%",
          borderRadius: "18px",
        }}
      />

      <h3
        style={{
          marginTop: "20px",
          fontSize: "24px",
        }}
      >
        Silky Touch
      </h3>

      <p
        style={{
          color: "#666",
          lineHeight: "1.7",
          marginTop: "10px",
        }}
      >
        Shampoo premium para brillo intenso y suavidad extrema
      </p>
    </div>
  </div>
</section>
    </main>
  );
}

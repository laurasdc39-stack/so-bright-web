
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #875F89, #ffffff)",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          color: "#ffffff",
          marginBottom: "20px",
        }}
      >
        So Bright Professional
      </h1>

      <p
        style={{
          fontSize: "28px",
          color: "#ffffff",
          maxWidth: "700px",
          lineHeight: "1.5",
          marginBottom: "40px",
        }}
      >
        Línea profesional de shampoo, suavidad, brillo y desenredo premium para mascotas.
      </p>

      <button
        style={{
          backgroundColor: "#ffffff",
          color: "#875F89",
          border: "none",
          padding: "18px 35px",
          borderRadius: "14px",
          fontSize: "22px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Comprar por WhatsApp
      </button>
    </main>
  );
}

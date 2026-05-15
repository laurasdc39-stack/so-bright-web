export default function Home() {
  return (
    <main
      style={{
        width: "100%",
        background: "#F8F4F6",
        fontFamily: "Arial",
        color: "#111",
      }}
    >
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.PNG"
          alt="logo"
          style={{
            width: "220px",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          SO BRIGHT
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            lineHeight: "1.6",
          }}
        >
          Cuidado premium para mascotas.
          Fórmulas profesionales para brillo,
          suavidad y bienestar del pelaje.
        </p>

        <img
          src="/maqueta-de-hero.png"
          alt="hero"
          style={{
            width: "90%",
            maxWidth: "1100px",
            marginTop: "50px",
            borderRadius: "30px",
          }}
        />
      </section>
    </main>
  );
}

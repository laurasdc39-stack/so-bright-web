export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff",
        flexDirection: "column",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src="https://i.imgur.com/1lYQxFf.png"
        alt="SO BRIGHT"
        style={{
          width: "180px",
          marginBottom: "30px",
        }}
      />

      <h1
        style={{
          color: "#875F89",
          fontSize: "42px",
          marginBottom: "12px",
        }}
      >
        ✨ Cuidado premium para mascotas.
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#333",
        }}
      >
        Brillo profesional en casa.
      </p>
    </main>
  );
}

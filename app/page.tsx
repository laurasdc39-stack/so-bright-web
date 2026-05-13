export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #f7f4f8 0%, #ffffff 100%)",
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
          src="https://i.imgur.com/1lYQxFf.png"
          alt="SO BRIGHT"
          style={{
            width: "180px",
            marginBottom: "30px",
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
          SO BRIGHT
          <br />
          PROFESSIONAL
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "35px",
          }}
        >
          Shampoo, acondicionador y cuidado boutique
          para un pelaje brillante, suave y elegante.
        </p>

        <button
          style={{
            background: "#875F89",
            color: "#fff",
            border: "none",
            padding: "16px 34px",
            borderRadius: "999px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ver colección
        </button>
      </div>
    </main>
  );
}

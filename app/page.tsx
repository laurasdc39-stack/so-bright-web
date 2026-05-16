export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, fontFamily: "Arial", background: "#fff" }}>
      <section>
        <img
          src="/maqueta-de-heroe.png"
          alt="SO BRIGHT"
          style={{ width: "100%", display: "block" }}
        />
      </section>

      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fbf5fb" }}>
        <h1 style={{ fontSize: 46, fontFamily: "serif" }}>SO BRIGHT PROFESSIONAL</h1>
        <p style={{ fontSize: 18 }}>Cuidado premium para mascotas con fórmulas profesionales.</p>

        <a href="#coleccion" style={boton}>Ver colección</a>
        <a href="https://wa.me/525512345678" style={{ ...boton, marginLeft: 15 }}>Contactar</a>
      </section>

      <section id="coleccion" style={{ padding: "70px 30px", textAlign: "center" }}>
        <p style={{ color: "#875F89", fontWeight: 800 }}>NUESTRA COLECCIÓN</p>
        <h2 style={{ fontSize: 42, fontFamily: "serif" }}>
          Fórmulas profesionales para cada necesidad
        </h2>

        <div style={grid}>
          <Producto img="/sedoso-acondicionador.png" nombre="SILKY TOUCH ACONDICIONADOR" />
          <Producto img="/tacto sedoso.png" nombre="SILKY TOUCH DOG SHAMPOO" />
          <Producto img="/limpieza profunda.png" nombre="DEEP CLEAN DOG SHAMPOO" />
          <Producto img="/potenciador rojo.png" nombre="RED BOOSTER DOG SHAMPOO" />
          <Producto img="/capa lisa.png" nombre="SMOOTH COAT SPRAY DESENREDANTE" />
        </div>
      </section>

      <section style={{ padding: "70px 30px", textAlign: "center", background: "#fbf5fb" }}>
        <p style={{ color: "#875F89", fontWeight: 800 }}>BENEFICIOS</p>
        <h2 style={{ fontSize: 42, fontFamily: "serif" }}>Cuidado que se nota</h2>

        <div style={grid}>
          <Caja texto="Sin sulfatos agresivos" />
          <Caja texto="Sin parabenos" />
          <Caja texto="Fórmulas profesionales" />
          <Caja texto="Para todas las razas" />
          <Caja texto="Brillo y suavidad" />
        </div>
      </section>

      <section style={{ padding: "70px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: 42, fontFamily: "serif" }}>
          ¿Lista para transformar su pelaje?
        </h2>
        <a href="https://wa.me/525512345678" style={boton}>Pedir por WhatsApp</a>
      </section>

      <footer style={{ background: "#875F89", color: "white", textAlign: "center", padding: 40 }}>
        <h3>SO BRIGHT PROFESSIONAL</h3>
        <p>Cuidado premium para mascotas</p>
      </footer>
    </main>
  );
}

const boton = {
  display: "inline-block",
  background: "#875F89",
  color: "white",
  padding: "14px 30px",
  borderRadius: 30,
  textDecoration: "none",
  fontWeight: 700,
  marginTop: 25,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 25,
  maxWidth: 1200,
  margin: "35px auto 0",
};

function Producto({ img, nombre }: any) {
  return (
    <div style={{ background: "white", borderRadius: 22, padding: 25, boxShadow: "0 8px 25px rgba(0,0,0,.08)" }}>
      <img src={img} alt={nombre} style={{ width: "100%", height: 220, objectFit: "contain" }} />
      <h3>{nombre}</h3>
      <a href="https://wa.me/525512345678" style={{ color: "#875F89", fontWeight: 700 }}>
        Pedir información →
      </a>
    </div>
  );
}

function Caja({ texto }: any) {
  return (
    <div style={{ background: "white", borderRadius: 20, padding: 30 }}>
      <h3>{texto}</h3>
    </div>
  );
}

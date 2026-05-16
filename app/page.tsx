export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#111", background: "#fff" }}>
      <header style={header}>
        <img src="/logo.png" alt="SO BRIGHT" style={{ width: 160 }} />

        <nav style={nav}>
          <a href="#inicio" style={link}>Inicio</a>
          <a href="#coleccion" style={link}>Colección</a>
          <a href="#beneficios" style={link}>Beneficios</a>
          <a href="#guia" style={link}>Guía</a>
          <a href="#nosotros" style={link}>Nosotros</a>
          <a href="https://wa.me/525512345678" style={button}>Contactar</a>
        </nav>
      </header>

      <section id="inicio">
        <img
          src="/maqueta-de-heroe.png"
          alt="SO BRIGHT Professional"
          style={{ width: "100%", display: "block" }}
        />
      </section>

      <section id="coleccion" style={section}>
        <p style={smallTitle}>NUESTRA COLECCIÓN</p>
        <h2 style={title}>Fórmulas profesionales para<br />cada necesidad</h2>

        <div style={productsGrid}>
          <Product img="/sedoso-acondicionador.png" title="SILKY TOUCH ACONDICIONADOR" />
          <Product img="/tacto sedoso.png" title="SILKY TOUCH DOG SHAMPOO" />
          <Product img="/limpieza profunda.png" title="DEEP CLEAN DOG SHAMPOO" />
          <Product img="/potenciador rojo.png" title="RED BOOSTER DOG SHAMPOO" />
          <Product img="/capa lisa.png" title="SMOOTH COAT SPRAY DESENREDANTE" />
        </div>
      </section>

      <section id="beneficios" style={{ ...section, background: "#fbf4fb" }}>
        <p style={smallTitle}>BENEFICIOS</p>
        <h2 style={title}>Cuidado que se nota</h2>

        <div style={benefitGrid}>
          <Benefit title="Sin sulfatos agresivos" text="Fórmulas suaves que cuidan la piel y el pelaje." />
          <Benefit title="Sin parabenos" text="Ingredientes pensados para uso frecuente." />
          <Benefit title="Fórmulas profesionales" text="Resultados tipo grooming boutique." />
          <Benefit title="Para todas las razas" text="Ideal para perros de todos los tamaños." />
          <Benefit title="Brillo y suavidad" text="Pelaje limpio, suave y con apariencia saludable." />
        </div>
      </section>

      <section id="guia" style={section}>
        <p style={smallTitle}>¿CUÁL ELEGIR?</p>
        <h2 style={title}>Encuentra el ideal para tu peludo</h2>

        <div style={guideGrid}>
          <Guide title="Pelo seco y sin brillo" text="Silky Touch Shampoo + Acondicionador" />
          <Guide title="Malos olores o suciedad" text="Deep Clean Shampoo" />
          <Guide title="Tonos rojizos o cobrizos" text="Red Booster Shampoo" />
          <Guide title="Nudos y enredos" text="Smooth Coat Spray" />
        </div>
      </section>

      <section style={{ ...section, background: "#fbf4fb" }}>
        <h2 style={title}>¿Lista para transformar su pelaje?</h2>
        <p style={{ fontSize: 18, marginBottom: 25 }}>Descubre toda nuestra colección profesional.</p>
        <a href="https://wa.me/525512345678" style={button}>Pedir por WhatsApp</a>
      </section>

      <footer id="nosotros" style={footer}>
        <div>
          <h2 style={{ margin: 0 }}>SO BRIGHT PROFESSIONAL</h2>
          <p>Cuidado premium para mascotas.</p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p>WhatsApp: 55 1234 5678</p>
          <p>hola@sobright.com</p>
        </div>
      </footer>
    </main>
  );
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "25px 60px",
};

const nav = {
  display: "flex",
  gap: 30,
  alignItems: "center",
};

const link = {
  color: "#111",
  textDecoration: "none",
  fontWeight: 600,
};

const button = {
  display: "inline-block",
  background: "#875F89",
  color: "white",
  padding: "14px 30px",
  borderRadius: 30,
  textDecoration: "none",
  fontWeight: 700,
};

const section = {
  padding: "70px 50px",
  textAlign: "center" as const,
};

const smallTitle = {
  color: "#875F89",
  fontWeight: 800,
  letterSpacing: 1,
};

const title = {
  fontSize: 42,
  fontFamily: "serif",
  marginBottom: 40,
};

const productsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: 25,
  maxWidth: 1200,
  margin: "0 auto",
};

const benefitGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: 22,
  maxWidth: 1150,
  margin: "0 auto",
};

const guideGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 25,
  maxWidth: 1100,
  margin: "0 auto",
};

const footer = {
  background: "#875F89",
  color: "white",
  padding: "45px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function Product({ img, title }: any) {
  return (
    <div style={{ background: "white", borderRadius: 22, padding: 25, boxShadow: "0 8px 25px rgba(0,0,0,.08)" }}>
      <img src={img} alt={title} style={{ width: "100%", height: 230, objectFit: "contain" }} />
      <h3 style={{ fontSize: 15 }}>{title}</h3>
      <a href="https://wa.me/525512345678" style={{ color: "#875F89", fontWeight: 700, textDecoration: "none" }}>
        Pedir información →
      </a>
    </div>
  );
}

function Benefit({ title, text }: any) {
  return (
    <div style={{ background: "white", padding: 25, borderRadius: 20 }}>
      <h3>{title}</h3>
      <p style={{ color: "#555" }}>{text}</p>
    </div>
  );
}

function Guide({ title, text }: any) {
  return (
    <div style={{ background: "#fbf4fb", padding: 25, borderRadius: 20 }}>
      <h3>{title}</h3>
      <p style={{ color: "#875F89", fontWeight: 700 }}>{text}</p>
    </div>
  );
}

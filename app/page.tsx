export default function Home() {
  return (
    <main style={{ margin: 0, fontFamily: "Arial", background: "#fff" }}>

      {/* HERO */}
      <section style={{ width: "100%" }}>
        <img
          src="/público/maqueta-de-heroe.png"
          alt="SO BRIGHT"
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </section>

      {/* BOTONES */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#fbf5fb",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: 10,
            fontFamily: "serif",
          }}
        >
          SO BRIGHT PROFESSIONAL
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "#444",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Cuidado premium para mascotas con fórmulas profesionales.
        </p>

        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#coleccion" style={boton}>
            Ver colección
          </a>

          <a
            href="https://wa.me/525512345678"
            style={boton}
          >
            Contactar
          </a>
        </div>
      </section>

      {/* COLECCIÓN */}
      <section
        id="coleccion"
        style={{
          padding: "70px 30px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#875F89",
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          NUESTRA COLECCIÓN
        </p>

        <h2
          style={{
            fontSize: "48px",
            fontFamily: "serif",
            marginBottom: 50,
          }}
        >
          Fórmulas profesionales para cada necesidad
        </h2>

        <div style={grid}>
          <Producto
            img="/público/sedoso-acondicionador.png"
            nombre="SILKY TOUCH ACONDICIONADOR"
          />

          <Producto
            img="/público/tacto sedoso.png"
            nombre="SILKY TOUCH DOG SHAMPOO"
          />

          <Producto
            img="/público/limpieza profunda.png"
            nombre="DEEP CLEAN DOG SHAMPOO"
          />

          <Producto
            img="/público/potenciador rojo.png"
            nombre="RED BOOSTER DOG SHAMPOO"
          />

          <Producto
            img="/público/capa lisa.png"
            nombre="SMOOTH COAT SPRAY DESENREDANTE"
          />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        style={{
          padding: "70px 20px",
          background: "#fbf5fb",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#875F89",
            fontWeight: 800,
          }}
        >
          BENEFICIOS
        </p>

        <h2
          style={{
            fontSize: "44px",
            fontFamily: "serif",
            marginBottom: 40,
          }}
        >
          Cuidado que se nota
        </h2>

        <div style={grid}>
          <Caja texto="Sin sulfatos agresivos" />
          <Caja texto="Sin parabenos" />
          <Caja texto="Fórmulas profesionales" />
          <Caja texto="Para todas las razas" />
          <Caja texto="Brillo y suavidad" />
        </div>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontFamily: "serif",
            marginBottom: 20,
          }}
        >
          ¿Lista para transformar su pelaje?
        </h2>

        <a
          href="https://wa.me/525512345678"
          style={boton}
        >
          Pedir por WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#875F89",
          color: "white",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h3>SO BRIGHT PROFESSIONAL</h3>

        <p>Cuidado premium para mascotas</p>
      </footer>
    </main>
  );
}

const boton = {
  background: "#875F89",
  color: "white",
  padding: "14px 32px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 25,
  maxWidth: 1200,
  margin: "0 auto",
};

function Producto({ img, nombre }: any) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 24,
        padding: 25,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <img
        src={img}
        alt={nombre}
        style={{
          width: "100%",
          height: 230,
          objectFit: "contain",
        }}
      />

      <h3
        style={{
          marginTop: 15,
          fontSize: 16,
        }}
      >
        {nombre}
      </h3>

      <a
        href="https://wa.me/525512345678"
        style={{
          color: "#875F89",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Pedir información →
      </a>
    </div>
  );
}

function Caja({ texto }: any) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 22,
        padding: 30,
      }}
    >
      <h3>{texto}</h3>
    </div>
  );
}

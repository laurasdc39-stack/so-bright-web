xport default function Home() {
  return (
    <main
      style={{
        width: "100%",
        background: "#FBF4F6",
        fontFamily: "Arial",
        color: "#111",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          width: "100%",
          padding: "22px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#FBF4F6",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "170px",
            objectFit: "contain",
          }}
        />

        <nav
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          <a href="#inicio" style={{ textDecoration: "none", color: "#111" }}>
            Inicio
          </a>

          <a
            href="#coleccion"
            style={{ textDecoration: "none", color: "#111" }}
          >
            Colección
          </a>

          <a
            href="#beneficios"
            style={{ textDecoration: "none", color: "#111" }}
          >
            Beneficios
          </a>

          <a href="#guia" style={{ textDecoration: "none", color: "#111" }}>
            Guía
          </a>

          <a
            href="#nosotros"
            style={{ textDecoration: "none", color: "#111" }}
          >
            Nosotros
          </a>

          <button
            style={{
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "40px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Contactar
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          width: "100%",
          padding: "70px 5%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#875F89",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            CUIDADO PREMIUM PARA MASCOTAS
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1,
              marginTop: "20px",
              marginBottom: "24px",
            }}
          >
            Brillo profesional
            <br />
            en casa.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#555",
              maxWidth: "520px",
            }}
          >
            Fórmulas profesionales diseñadas para aportar brillo,
            suavidad y una apariencia impecable al pelaje.
          </p>

          <button
            style={{
              marginTop: "35px",
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "16px 32px",
              borderRadius: "40px",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Ver colección
          </button>
        </div>

        <img
          src="/hero-mockup.png"
          alt="Hero"
          style={{
            width: "100%",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </section>

      {/* COLECCIÓN */}
      <section
        id="coleccion"
        style={{
          width: "100%",
          padding: "80px 5%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#875F89",
            letterSpacing: "2px",
            fontWeight: 700,
            marginBottom: "14px",
          }}
        >
          NUESTRA COLECCIÓN
        </p>

        <h2
          style={{
            fontSize: "52px",
            marginBottom: "60px",
          }}
        >
          Fórmulas profesionales para
          <br />
          cada necesidad
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "24px",
          }}
        >
          {[
            {
              img: "/silky-touch.png",
              title: "Silky Touch Shampoo",
            },
            {
              img: "/silky-acondicionador.png",
              title: "Silky Touch Acondicionador",
            },
            {
              img: "/deep-clean.png",
              title: "Deep Clean Shampoo",
            },
            {
              img: "/red-booster.png",
              title: "Red Booster Shampoo",
            },
            {
              img: "/smooth-coat.png",
              title: "Smooth Coat Spray",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "28px",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "contain",
                }}
              />

              <h3
                style={{
                  marginTop: "20px",
                  fontSize: "20px",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="beneficios"
        style={{
          width: "100%",
          padding: "90px 5%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#875F89",
            letterSpacing: "2px",
            fontWeight: 700,
          }}
        >
          BENEFICIOS
        </p>

        <h2
          style={{
            fontSize: "56px",
            marginTop: "16px",
            marginBottom: "60px",
          }}
        >
          Cuidado que se nota
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px",
          }}
        >
          {[
            "Sin sulfatos agresivos",
            "Sin parabenos",
            "Fórmulas profesionales",
            "Para todas las razas",
            "Brillo y suavidad",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "34px 20px",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SPA */}
      <section
        id="nosotros"
        style={{
          width: "100%",
          padding: "80px 5%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <img
          src="/spa-dog.jpg"
          alt="Spa"
          style={{
            width: "100%",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />

        <div>
          <p
            style={{
              color: "#875F89",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            EXPERIENCIA SO BRIGHT
          </p>

          <h2
            style={{
              fontSize: "54px",
              lineHeight: 1.1,
              marginTop: "20px",
              marginBottom: "24px",
            }}
          >
            Más que un baño,
            <br />
            un ritual de cuidado
            <br />
            para su pelaje.
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Cada fórmula está diseñada para transformar el momento
            del baño en una experiencia premium de bienestar.
          </p>

          <button
            style={{
              marginTop: "30px",
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "16px 30px",
              borderRadius: "40px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Conoce más
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          background: "#875F89",
          color: "white",
          padding: "70px 5%",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "42px",
              }}
            >
              ¿Lista para transformar su pelaje?
            </h2>

            <p
              style={{
                marginTop: "10px",
                opacity: 0.9,
              }}
            >
              Descubre toda nuestra colección profesional.
            </p>
          </div>

          <button
            style={{
              background: "white",
              color: "#875F89",
              border: "none",
              padding: "16px 30px",
              borderRadius: "40px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Ver colección
          </button>
        </div>
      </footer>
    </main>
  );
}

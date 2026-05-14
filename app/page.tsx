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

      {/* NAVBAR */}
      <header
        style={{
          width: "100%",
          padding: "24px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#F8F4F6",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "38px",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            SO BRIGHT
          </h1>

          <p
            style={{
              margin: 0,
              letterSpacing: "4px",
              fontSize: "12px",
              color: "#875F89",
            }}
          >
            PROFESSIONAL
          </p>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
            fontWeight: 600,
          }}
        >
          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Inicio
          </a>

          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Colección
          </a>

          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Beneficios
          </a>

          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Guía
          </a>

          <a href="#" style={{ color: "#111", textDecoration: "none" }}>
            Nosotros
          </a>

          <button
            style={{
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: "40px",
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
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "80px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div>
          <p
            style={{
              color: "#875F89",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            CUIDADO PREMIUM PARA MASCOTAS
          </p>

          <h2
            style={{
              fontSize: "72px",
              lineHeight: 1,
              marginBottom: "28px",
            }}
          >
            Brillo profesional
            <br />
            en casa.
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.6,
              color: "#555",
              marginBottom: "36px",
            }}
          >
            Fórmulas profesionales diseñadas para aportar brillo,
            suavidad y una apariencia impecable al pelaje.
          </p>

          <button
            style={{
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "18px 40px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Ver colección
          </button>
        </div>

        <div>
          <img
            src="/hero-mockup.png"
            alt="Hero"
            style={{
              width: "100%",
              borderRadius: "30px",
            }}
          />
        </div>
      </section>

      {/* PRODUCTOS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "40px 60px 100px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#875F89",
            letterSpacing: "2px",
            fontWeight: 700,
          }}
        >
          NUESTRA COLECCIÓN
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "56px",
            marginBottom: "70px",
          }}
        >
          Fórmulas profesionales
          <br />
          para cada necesidad
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "26px",
          }}
        >

          {/* CARD */}
          {[
            {
              img: "/silky-touch.png",
              title: "Silky Touch Shampoo",
              desc: "Aporta brillo y suavidad intensa.",
            },

            {
              img: "/silky-acondicionador.png",
              title: "Silky Touch Acondicionador",
              desc: "Desenreda, hidrata y deja el pelaje sedoso.",
            },

            {
              img: "/deep-clean.png",
              title: "Deep Clean Shampoo",
              desc: "Limpieza profunda que elimina residuos.",
            },

            {
              img: "/red-booster.png",
              title: "Red Booster Shampoo",
              desc: "Potencia tonos rojizos y cobrizos.",
            },

            {
              img: "/smooth-coat.png",
              title: "Smooth Coat Spray",
              desc: "Desenreda al instante y controla frizz.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "28px",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "14px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.5,
                  minHeight: "60px",
                }}
              >
                {item.desc}
              </p>

              <a
                href="#"
                style={{
                  color: "#875F89",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Ver más →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        style={{
          background: "#F3EDF2",
          padding: "100px 60px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#875F89",
            letterSpacing: "2px",
            fontWeight: 700,
          }}
        >
          BENEFICIOS
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "56px",
            marginBottom: "60px",
          }}
        >
          Cuidado que se nota
        </h2>

        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "24px",
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
                padding: "34px",
                borderRadius: "24px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.5,
                }}
              >
                Calidad premium para grooming profesional en casa.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "auto",
          padding: "100px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <img
          src="/spa-dog.jpg"
          alt="Spa"
          style={{
            width: "100%",
            borderRadius: "30px",
          }}
        />

        <div>
          <p
            style={{
              color: "#875F89",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
          >
            EXPERIENCIA SO BRIGHT
          </p>

          <h2
            style={{
              fontSize: "58px",
              lineHeight: 1.1,
              marginBottom: "30px",
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
              color: "#666",
              lineHeight: 1.7,
              fontSize: "20px",
              marginBottom: "34px",
            }}
          >
            Cada fórmula está diseñada para transformar el momento
            del baño en una experiencia premium de bienestar.
          </p>

          <button
            style={{
              background: "#875F89",
              color: "white",
              border: "none",
              padding: "18px 40px",
              borderRadius: "40px",
              fontSize: "18px",
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
          background: "#875F89",
          color: "white",
          padding: "70px 60px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "12px",
              }}
            >
              ¿Lista para transformar su pelaje?
            </h2>

            <p
              style={{
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
              padding: "18px 40px",
              borderRadius: "40px",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Ver colección
          </button>
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "60px auto 0",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3>SO BRIGHT PROFESSIONAL</h3>
            <p>Cuidado premium para mascotas.</p>
          </div>

          <div>
            <p>@so_bright.professional</p>
            <p>Hecho en México</p>
          </div>

          <div>
            <p>+52 1234 5678</p>
            <p>hola@sobright.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}





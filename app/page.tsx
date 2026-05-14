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
      {/* HERO */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          <p
            style={{
              color: "#875F89",
              letterSpacing: "3px",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            CUIDADO PREMIUM PARA MASCOTAS
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1",
              marginBottom: "25px",
            }}
          >
            Brillo profesional
            <br />
            en casa.
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#666",
              lineHeight: "1.8",
              maxWidth: "560px",
              marginBottom: "35px",
            }}
          >
            Fórmulas profesionales diseñadas para aportar brillo,
            suavidad y una apariencia impecable al pelaje.
          </p>

          <button
            style={{
              background: "#875F89",
              color: "#FFF",
              border: "none",
              padding: "18px 42px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Ver colección
          </button>
        </div>

        {/* IMAGEN HERO */}
        <div>
          <img
            src="/hero.png"
            style={{
              width: "100%",
              borderRadius: "40px",
            }}
          />
        </div>
      </section>

      {/* COLECCIÓN */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "90px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#875F89",
            letterSpacing: "3px",
            fontSize: "13px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          NUESTRA COLECCIÓN
        </p>

        <h2
          style={{
            fontSize: "58px",
            lineHeight: "1.1",
            marginBottom: "60px",
          }}
        >
          Fórmulas profesionales
          <br />
          para cada necesidad
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
            gap: "30px",
          }}
        >
          {/* PRODUCTO */}
          <div
            style={{
              background: "#FFF",
              borderRadius: "30px",
              padding: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/silky.png"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />

            <h3
              style={{
                marginTop: "20px",
                fontSize: "26px",
              }}
            >
              Silky Touch Shampoo
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                marginTop: "10px",
              }}
            >
              Aporta brillo y suavidad intensa.
            </p>
          </div>

          {/* PRODUCTO */}
          <div
            style={{
              background: "#FFF",
              borderRadius: "30px",
              padding: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/acondicionador.png"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />

            <h3
              style={{
                marginTop: "20px",
                fontSize: "26px",
              }}
            >
              Silky Touch Acondicionador
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                marginTop: "10px",
              }}
            >
              Desenreda e hidrata profundamente.
            </p>
          </div>

          {/* PRODUCTO */}
          <div
            style={{
              background: "#FFF",
              borderRadius: "30px",
              padding: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/deepclean.png"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />

            <h3
              style={{
                marginTop: "20px",
                fontSize: "26px",
              }}
            >
              Deep Clean Shampoo
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                marginTop: "10px",
              }}
            >
              Limpieza profunda sin resecar.
            </p>
          </div>

          {/* PRODUCTO */}
          <div
            style={{
              background: "#FFF",
              borderRadius: "30px",
              padding: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/redbooster.png"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />

            <h3
              style={{
                marginTop: "20px",
                fontSize: "26px",
              }}
            >
              Red Booster
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                marginTop: "10px",
              }}
            >
              Potencia tonos rojizos y cobrizos.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        style={{
          background: "#F3EDF1",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#875F89",
              letterSpacing: "3px",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "18px",
            }}
          >
            BENEFICIOS
          </p>

          <h2
            style={{
              fontSize: "58px",
              marginBottom: "70px",
            }}
          >
            Cuidado que se nota
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#FFF",
                borderRadius: "26px",
                padding: "35px",
              }}
            >
              <h3>Sin sulfatos agresivos</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                Fórmulas suaves que cuidan la piel y el pelaje.
              </p>
            </div>

            <div
              style={{
                background: "#FFF",
                borderRadius: "26px",
                padding: "35px",
              }}
            >
              <h3>Sin parabenos</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                Ingredientes premium seguros para mascotas.
              </p>
            </div>

            <div
              style={{
                background: "#FFF",
                borderRadius: "26px",
                padding: "35px",
              }}
            >
              <h3>Fórmulas profesionales</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                Calidad de grooming profesional en casa.
              </p>
            </div>

            <div
              style={{
                background: "#FFF",
                borderRadius: "26px",
                padding: "35px",
              }}
            >
              <h3>Brillo y suavidad</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                Pelaje sano, sedoso y fácil de peinar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/spa.png"
            style={{
              width: "100%",
              borderRadius: "40px",
            }}
          />
        </div>

        <div>
          <p
            style={{
              color: "#875F89",
              letterSpacing: "3px",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            EXPERIENCIA SO BRIGHT
          </p>

          <h2
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Más que un baño,
            <br />
            un ritual de cuidado.
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Cada fórmula está diseñada para transformar el momento
            del baño en una experiencia premium.
          </p>

          <button
            style={{
              background: "#875F89",
              color: "#FFF",
              border: "none",
              padding: "18px 42px",
              borderRadius: "999px",
              fontWeight: "bold",
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
          color: "#FFF",
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          ¿Lista para transformar su pelaje?
        </h2>

        <p
          style={{
            marginBottom: "35px",
            opacity: "0.9",
          }}
        >
          Descubre toda nuestra colección profesional.
        </p>

        <button
          style={{
            background: "#FFF",
            color: "#875F89",
            border: "none",
            padding: "18px 42px",
            borderRadius: "999px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Ver colección
        </button>

        <p
          style={{
            marginTop: "50px",
            opacity: "0.7",
            fontSize: "14px",
          }}
        >
          © 2026 SO BRIGHT Professional
        </p>
      </footer>
    </main>
  );
}

import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, Bug, Sprout, Clock, CheckCircle2, Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const BRAND = {
  primary: "#7A001F",
  beige: "#F4EDE5",
  dark: "#1C1C1C",
};

const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Plagas", href: "#plagas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICIOS = [
  { name: "Administrativo", desc: "Oficinas, locales, restaurantes y comercios.", icon: ShieldCheck },
  { name: "Residencial", desc: "Casas, departamentos, jardines y terrazas.", icon: Sprout },
  { name: "Industrial", desc: "Fábricas, hospitales, escuelas y bodegas.", icon: Bug },
];

export default function MortenLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen text-neutral-900" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Top bar */}
      <div className="w-full text-white text-sm" style={{ backgroundColor: BRAND.primary }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="hidden md:block">MORTEN · Manejo integral y ecológico de plagas</p>
          <div className="flex items-center gap-4">
            <a href="tel:+523313113610" className="flex items-center gap-2 hover:opacity-90">
              <Phone size={16} /> <span>(33) 1311 3610</span>
            </a>
            <a href="mailto:mortenfumigaciones@gmail.com" className="flex items-center gap-2 hover:opacity-90">
              <Mail size={16} /> <span>mortenfumigaciones@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/LogoMorten.jpg" alt="MORTEN logo" width={120} height={40} />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((it) => (
              <a key={it.href} href={it.href} className="text-sm hover:text-neutral-700">
                {it.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl text-white"
              style={{ backgroundColor: BRAND.primary }}
            >
              Cotizar ahora
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Menú</span>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                  <X />
                </button>
              </div>
              <div className="grid gap-2">
                {NAV.map((it) => (
                  <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="py-2">
                    {it.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-xl text-white inline-block"
                  style={{ backgroundColor: BRAND.primary }}
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
{/* ¿Quiénes somos? */}
<section id="nosotros" className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <div>
      <h2 className="text-3xl font-bold mb-3">¿Quiénes somos?</h2>
      <p className="text-neutral-700">
        <strong>Morten Fumigaciones</strong> es una empresa dedicada al control integral de plagas,
        enfocada en soluciones eficaces, seguras y personalizadas para hogares, comercios e industrias.
        Nuestro compromiso es proteger la salud de las personas, cuidar los espacios y preservar el
        medio ambiente, mediante productos certificados y técnicas modernas de aplicación.
      </p>
      <p className="text-neutral-700 mt-3">
        Priorizamos un servicio responsable, transparente y de calidad, construyendo relaciones de confianza
        con cada cliente.
      </p>
    </div>

    {/* Valores en tarjetas cortas */}
    <div className="rounded-2xl border p-6 bg-neutral-50">
      <h3 className="text-xl font-semibold">Nuestros valores</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <div className="rounded-xl bg-white border p-4">
          <p className="font-medium">Atención personalizada</p>
          <p className="text-sm text-neutral-700 mt-1">Escuchamos y analizamos cada caso para soluciones a medida.</p>
        </div>
        <div className="rounded-xl bg-white border p-4">
          <p className="font-medium">Puntualidad y responsabilidad</p>
          <p className="text-sm text-neutral-700 mt-1">Cumplimos en tiempo y forma, respetando tus espacios.</p>
        </div>
        <div className="rounded-xl bg-white border p-4">
          <p className="font-medium">Tecnología actualizada</p>
          <p className="text-sm text-neutral-700 mt-1">Métodos y técnicas modernas para mejores resultados.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Misión y Visión */}
<section id="mision-vision" className="py-16" style={{ backgroundColor: "#F4EDE5" }}>
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
    <div className="rounded-2xl bg-white border p-6">
      <h3 className="text-2xl font-bold">Misión</h3>
      <p className="text-neutral-700 mt-2">
        Brindar servicios de control de plagas con altos estándares de calidad, utilizando productos
        seguros y métodos eficientes para proteger la salud, los espacios y el bienestar de nuestros clientes.
      </p>
    </div>
    <div className="rounded-2xl bg-white border p-6">
      <h3 className="text-2xl font-bold">Visión</h3>
      <p className="text-neutral-700 mt-2">
        Ser una empresa líder en fumigaciones, reconocida por su efectividad, profesionalismo y compromiso
        con el medio ambiente, posicionándonos como una solución confiable y sostenible a nivel regional.
      </p>
    </div>
  </div>
</section>
{/* Proceso */}
<section id="proceso" className="py-16" style={{ backgroundColor: "#F4EDE5" }}>
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold">Nuestro proceso</h2>
    <p className="text-neutral-700 mt-1">Así operamos cada servicio:</p>

    <div className="grid md:grid-cols-4 gap-6 mt-8">
      {[
        { n: 1, t: "Contacto", d: "Escríbenos por WhatsApp, teléfono o formulario." },
        { n: 2, t: "Inspección", d: "Visita técnica y diagnóstico del inmueble." },
        { n: 3, t: "Tratamiento", d: "Aplicamos el método más efectivo y seguro." },
        { n: 4, t: "Mantenimiento", d: "Plan anual/preventivo o servicio por evento." },
      ].map((s) => (
        <div key={s.n} className="rounded-2xl bg-white border p-6">
          <div className="w-9 h-9 rounded-lg grid place-items-center text-white font-semibold" style={{ backgroundColor: "#7A001F" }}>
            {s.n}
          </div>
          <h3 className="mt-3 font-semibold">{s.t}</h3>
          <p className="text-sm text-neutral-700">{s.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Servicios */}
<section id="servicios" className="py-16" style={{ backgroundColor: "#F4EDE5" }}>
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-2">Servicios</h2>
    <p className="text-neutral-700 mb-8">
      Control integral de plagas con soluciones eficaces, seguras y personalizadas para hogares, comercios e industria.
    </p>

    {/* Tarjetas de servicios principales */}
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-2xl bg-white border p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">Administrativo</h3>
        <p className="mt-1 text-neutral-700">Oficinas, locales, restaurantes y comercios.</p>
      </div>
      <div className="rounded-2xl bg-white border p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">Residencial</h3>
        <p className="mt-1 text-neutral-700">Casas, departamentos, jardines y terrazas.</p>
      </div>
      <div className="rounded-2xl bg-white border p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">Industrial</h3>
        <p className="mt-1 text-neutral-700">Fábricas, hospitales, escuelas y bodegas.</p>
      </div>
    </div>

    {/* Lista de plagas controladas */}
    <div className="mt-10">
      <h3 className="text-2xl font-semibold">Plagas que controlamos</h3>
      <ul className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-neutral-800">
        {[
          "Cucarachas",
          "Ratas y ratones",
          "Mosquitos",
          "Hormigas",
          "Arañas",
          "Alacranes",
          "Termitas y xilófagos",
        ].map((p) => (
          <li key={p} className="border rounded-xl px-3 py-2 bg-white">{p}</li>
        ))}
      </ul>
    </div>

    {/* Plan Anual */}
    <div className="mt-12 rounded-2xl border bg-white p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">Plan Anual</h3>
          <p className="text-neutral-700 mt-1">
            Servicios programados según tu plan, cobertura preventiva continua y atención prioritaria.
          </p>
        </div>
        <a
          href="#contacto"
          className="inline-block px-5 py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: "#7A001F" }}
        >
          Solicitar cotización
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6 text-neutral-800">
        <div className="rounded-xl border p-4 bg-neutral-50">
          <ul className="list-disc pl-5 space-y-1">
            <li>Servicios programados (según plan personalizado).</li>
            <li>Cobertura preventiva continua.</li>
            <li>Atención prioritaria ante incidencias.</li>
          </ul>
        </div>
        <div className="rounded-xl border p-4 bg-neutral-50">
          <ul className="list-disc pl-5 space-y-1">
            <li>Productos certificados, seguros para personas y mascotas.</li>
            <li>Asesoría técnica y recomendaciones preventivas.</li>
            <li><strong>Ventaja:</strong> protección total durante todo el año con un solo pago.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


  

      {/* Contacto */}
      <section id="contacto" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">¿Dudas o comentarios? Escríbenos</h2>
        <p className="text-neutral-700">Responderemos lo antes posible.</p>

        {/* IMPORTANTE: para embeber Google Forms usa el enlace de "Enviar -> <>" y pega aquí el src con 'embedded=true'.
           El link corto forms.gle puede no mostrarse dentro de un iframe. */}
        <div className="mt-6 grid gap-4">
          <a
            className="inline-block px-6 py-3 rounded-xl text-white font-semibold w-full md:w-auto text-center"
            style={{ backgroundColor: BRAND.primary }}
            href="https://forms.gle/DCxMdZe2tvpsxb6q6"
            target="_blank"
            rel="noreferrer"
          >
            Abrir formulario de solicitud
          </a>

          {/* Ejemplo de embed (reemplaza el src con el que te da Google Forms):
          <iframe
            src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
            width="100%"
            height="700"
            className="border rounded-2xl"
            title="Formulario de contacto"
          ></iframe>
          */}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/LogoMorten.jpg" alt="MORTEN logo" width={120} height={40} />
            <p className="mt-3 text-sm text-neutral-700">
              Creamos ambientes sanos para hogares y negocios, cuidando el medio ambiente.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Servicios</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {SERVICIOS.map((s) => (
                <li key={s.name}><a href="#servicios" className="hover:underline">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex items-center gap-2"><Phone size={16}/> (33) 1311 3610</li>
              <li className="flex items-center gap-2"><Mail size={16}/> mortenfumigaciones@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Guadalajara, Jalisco</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Responsable</h4>
            <p className="text-sm text-neutral-700 mt-2">Rodrigo Villaseñor Ríos</p>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} MORTEN. Todos los derechos reservados.</div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/523313113610?text=Hola%20MORTEN,%20necesito%20una%20cotizaci%C3%B3n"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full p-4 shadow-lg text-white"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

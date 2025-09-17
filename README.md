# MORTEN — Sitio en Next.js (Vercel Ready)

## Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Deploy en Vercel
1. Crea un repo en GitHub y sube estos archivos.
2. En https://vercel.com/new haz clic en **Add New -> Project** y conecta tu repo.
3. Framework: **Next.js**. Presets por default. Deploy.
4. Te dará un dominio `*.vercel.app`.
5. Para dominio propio, agrega tu dominio en **Settings -> Domains** y sigue las instrucciones de DNS.

## Google Forms
- El botón abre tu formulario (forms.gle).
- Si quieres **embeber** el formulario, en Google Forms haz **Enviar -> <>** y pega el `src` que termine en `embedded=true`
  en el `iframe` comentado dentro de `pages/index.js`.
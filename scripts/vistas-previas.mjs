// Genera /t/<tienda>/index.html con la vista previa (nombre, slogan, logo) para WhatsApp/Facebook.
// Lo ejecuta GitHub Actions cada hora. Solo usa datos públicos del catálogo.
import { mkdir, writeFile, readdir, rm, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const PROYECTO = 'kevanix-catalogo';
const KEY = 'AIzaSyBDhRBbuPBd80tQUHxitktMlKbrNgEfVPY';
const SITIO = 'https://catalogo.kevanix.com';
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const val = (f) => f?.stringValue ?? f?.integerValue ?? f?.doubleValue ?? f?.booleanValue ?? null;

async function tiendas() {
  const out = []; let token = '';
  do {
    const r = await fetch(`https://firestore.googleapis.com/v1/projects/${PROYECTO}/databases/(default)/documents/tiendas?pageSize=200&key=${KEY}${token ? '&pageToken=' + token : ''}`);
    if (!r.ok) throw new Error('Firestore ' + r.status + ' ' + await r.text());
    const d = await r.json();
    for (const doc of d.documents || []) {
      const f = doc.fields || {};
      out.push({ id: doc.name.split('/').pop(), nombre: val(f.nombre) || 'Mi Tienda', slogan: val(f.slogan) || '', logo: val(f.logo) || '', direccion: val(f.direccion) || '' });
    }
    token = d.nextPageToken || '';
  } while (token);
  return out;
}

async function escribirSiCambia(ruta, datos) {
  if (existsSync(ruta)) { const prev = await readFile(ruta); if (Buffer.compare(prev, Buffer.from(datos)) === 0) return false; }
  await writeFile(ruta, datos); return true;
}

const lista = await tiendas();
await mkdir('t', { recursive: true });
let cambios = 0;
for (const t of lista) {
  if (!/^[A-Za-z0-9_-]{1,60}$/.test(t.id)) continue;
  const dir = `t/${t.id}`;
  await mkdir(dir, { recursive: true });
  let img = `${SITIO}/og.png`;
  const m = /^data:image\/(png|jpe?g|webp);base64,(.+)$/.exec(t.logo);
  if (m) {
    const ext = m[1] === 'png' ? 'png' : m[1] === 'webp' ? 'webp' : 'jpg';
    if (await escribirSiCambia(`${dir}/logo.${ext}`, Buffer.from(m[2], 'base64'))) cambios++;
    img = `${SITIO}/${dir}/logo.${ext}`;
  } else if (/^https:\/\//.test(t.logo)) img = t.logo;
  const titulo = `${t.nombre} · Catálogo online`;
  const desc = t.slogan || `Mirá el catálogo de ${t.nombre} y hacé tu pedido por WhatsApp.`;
  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mi Tienda Digital">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:url" content="${SITIO}/t/${t.id}/">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#059669">
<script>location.replace('/?t=${encodeURIComponent(t.id)}' + location.search.replace(/^\\?/, '&') + location.hash);</script>
</head><body style="font-family:system-ui;text-align:center;padding:40px">
<p><a href="/?t=${encodeURIComponent(t.id)}">Abrir el catálogo de ${esc(t.nombre)}</a></p>
</body></html>
`;
  if (await escribirSiCambia(`${dir}/index.html`, html)) cambios++;
}
// quitar páginas de tiendas que ya no existen
const ids = new Set(lista.map(t => t.id));
for (const d of await readdir('t')) if (!ids.has(d)) { await rm(`t/${d}`, { recursive: true, force: true }); cambios++; }
console.log(`${lista.length} tiendas · ${cambios} archivos cambiados`);

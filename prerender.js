
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = [
  '/',
  '/services',
  '/qui-sommes-nous',
  '/zone-intervention',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
  '/depannage-froid',
  '/depannage-climatisation-paris',
  '/installation-climatisation-paris',
  '/installation-chambre-froide-paris',
  '/installation-cuisine-professionnelle-paris',
  '/frigoriste-en-yvelines-78',
  '/sitemap.xml',
  '/robots.txt'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()

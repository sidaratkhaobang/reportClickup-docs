import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const files = [
  ['/', 'index.html', 'text/html; charset=utf-8'],
  ['/screenshots/overview.jpg', 'screenshots/overview.jpg', 'image/jpeg'],
  ['/screenshots/weekly.jpg', 'screenshots/weekly.jpg', 'image/jpeg'],
  ['/screenshots/tasks.jpg', 'screenshots/tasks.jpg', 'image/jpeg'],
]
const assets = new Map(await Promise.all(files.map(async ([path, file, type]) => [
  path, { type, body: await readFile(new URL(`./public/${file}`, import.meta.url)) },
])))
const port = Number(process.env.PORT ?? 3000)

createServer((request, response) => {
  const asset = assets.get(request.url?.split('?')[0])
  if (!asset) {
    response.writeHead(404).end('Not found')
    return
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }
  response.writeHead(200, { 'Content-Type': asset.type })
  response.end(request.method === 'HEAD' ? undefined : asset.body)
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`))

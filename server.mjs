import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const page = await readFile(new URL('./public/index.html', import.meta.url))
const port = Number(process.env.PORT ?? 3000)

createServer((request, response) => {
  if (request.url?.split('?')[0] !== '/') {
    response.writeHead(404).end('Not found')
    return
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  response.end(request.method === 'HEAD' ? undefined : page)
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`))

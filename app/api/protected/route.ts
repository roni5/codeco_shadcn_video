import { auth } from '@/lib/auth'

export async function GET(request: Request) {
  const session = await auth()
  if (!session) {
    return Response.json({ message: 'unauthenticated' }, { status: 401 })
  }
  const name = session?.user.name ?? 'unknown'
  const css = `
    body {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      font-size: 3em;
      background: #f8f8f8;
      color: #333;
    }
  `
  const html = `
    <style>${css}</style>
    <h1>Hello ${name}</h1>
  `
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}

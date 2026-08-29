interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });

const noStoreJson = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/api/visits') {
      try {
        const row = await env.DB.prepare(
          'SELECT total FROM visit_counter WHERE id = 1'
        ).first<{ total: number }>();
        return json({ total: row?.total ?? 0 });
      } catch {
        return json({ total: 0, error: 'unavailable' }, 500);
      }
    }

    if (request.method === 'POST' && url.pathname === '/api/visit') {
      try {
        const row = await env.DB.prepare(
          'INSERT INTO visit_counter (id, total) VALUES (1, 1) ON CONFLICT(id) DO UPDATE SET total = total + 1 RETURNING total'
        ).first<{ total: number }>();
        return noStoreJson({ total: row?.total ?? 1 });
      } catch {
        return noStoreJson({ total: 0, error: 'unavailable' }, 500);
      }
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect('https://soulcreator.cn/zh/', 301);
    }

    const notFound = await env.ASSETS.fetch(new Request('https://assets.local/404.html', request));
    return new Response(notFound.body, {
      status: 404,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  },
};

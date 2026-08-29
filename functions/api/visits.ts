export interface Env {
  DB: D1Database;
}

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  try {
    const row = await env.DB.prepare(
      "SELECT total FROM visit_counter WHERE id = 1"
    ).first<{ total: number }>();
    return json({ total: row?.total ?? 0 });
  } catch (err) {
    return json({ total: 0, error: 'unavailable' }, 500);
  }
};

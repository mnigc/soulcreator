export interface Env {
  DB: D1Database;
}

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  try {
    const row = await env.DB.prepare(
      "INSERT INTO visit_counter (id, total) VALUES (1, 1) ON CONFLICT(id) DO UPDATE SET total = total + 1 RETURNING total"
    ).first<{ total: number }>();
    return json({ total: row?.total ?? 1 });
  } catch (err) {
    return json({ total: 0, error: 'unavailable' }, 500);
  }
};

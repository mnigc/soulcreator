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
    await env.DB.prepare(
      "INSERT OR IGNORE INTO visit_counter (id, total) VALUES (1, 0)"
    ).run();
    const row = await env.DB.prepare(
      "UPDATE visit_counter SET total = total + 1 WHERE id = 1 RETURNING total"
    ).first<{ total: number }>();
    return json({ total: row?.total ?? 1 });
  } catch (err) {
    return json({ total: 0, error: 'unavailable' }, 500);
  }
};

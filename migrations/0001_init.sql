-- Visit counter table (single row, id = 1)
CREATE TABLE IF NOT EXISTS visit_counter (
  id    INTEGER PRIMARY KEY,
  total INTEGER NOT NULL DEFAULT 0
);

INSERT OR IGNORE INTO visit_counter (id, total) VALUES (1, 0);

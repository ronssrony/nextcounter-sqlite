import { getDatabase } from '../utils/db';

export default defineEventHandler(() => {
  const db = getDatabase();
  db.prepare('UPDATE counter SET count = count + 1 WHERE id = 1').run();
  const row = db.prepare('SELECT count FROM counter WHERE id = 1').get() as { count: number };
  return { count: row.count };
});

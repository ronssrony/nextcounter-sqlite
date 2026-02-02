import { getDatabase } from '../utils/db';

export default defineEventHandler(() => {
  const db = getDatabase();
  const row = db.prepare('SELECT count FROM counter WHERE id = 1').get() as { count: number };
  return { count: row.count };
});

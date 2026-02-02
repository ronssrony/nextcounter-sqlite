import Database from 'better-sqlite3';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { dirname } from 'path';

let db: Database.Database | null = null;

export function getDatabase() {
  if (!db) {
    const dbPath = join(process.cwd(), 'data', 'counter.db');
    
    // Create data directory if it doesn't exist
    try {
      mkdirSync(dirname(dbPath), { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
    
    db = new Database(dbPath);
    
    // Create table if not exists
    db.exec(`
      CREATE TABLE IF NOT EXISTS counter (
        id INTEGER PRIMARY KEY,
        count INTEGER NOT NULL DEFAULT 0
      )
    `);
    
    // Initialize counter if not exists
    const row = db.prepare('SELECT count FROM counter WHERE id = 1').get() as { count: number } | undefined;
    if (!row) {
      db.prepare('INSERT INTO counter (id, count) VALUES (1, 0)').run();
    }
  }
  
  return db;
}

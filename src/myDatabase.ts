import JSONdb from 'simple-json-db';

const db = new JSONdb('./src/database.json');

export { db };

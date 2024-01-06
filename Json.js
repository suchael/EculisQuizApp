import { SQLite } from 'expo-sqlite';

const createTableFromJson = (json) => {
  return new Promise((resolve, reject) => {
    const db = SQLite.openDatabase('demoq.db');

    // Assuming 'your_table_name' as the table name
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY,
            question_id TEXT,
            subject TEXT,
            year TEXT,
            number INTEGER,
            question_type TEXT,
            exam_type TEXT,
            class TEXT,
            topic TEXT,
            difficulty TEXT,
            question TEXT,
            option_A TEXT,
            option_B TEXT,
            option_C TEXT,
            option_D TEXT,
            answer TEXT,
            explanation TEXT,
            sub_topic TEXT
          );`,
          [],
          () => {
            // Table creation success, now insert data
            tx.executeSql(
              `INSERT INTO your_table_name (${Object.keys(json.id5).join(', ')}) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
              Object.values(json.id5),
              (_, result) => {
                resolve('Table and data created successfully.');
              },
              (_, error) => {
                reject(`Error inserting data: ${error.message}`);
              }
            );
          },
          (_, error) => {
            reject(`Error creating table: ${error.message}`);
          }
        );
      },
      (error) => {
        reject(`Transaction error: ${error.message}`);
      },
      () => {
        // Transaction success
      }
    );
  });
};

export default createTableFromJson;

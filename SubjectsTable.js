// SubjectsTable.js
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';


const CreateSubjectsQuery = `
CREATE TABLE IF NOT EXISTS subject (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    totalQuestions INT NOT NULL
  );

  INSERT INTO subject (id, name, year, totalQuestions) VALUES
    (1, 'English Language', 2022, 40),
    (2, 'Mathematics', 2022, 40),
    (3, 'Chemistry', 2022, 40),
    (30, 'Graphic Design', 2022, 40),
    (31, 'Nutrition', 2022, 40),
    (32, 'Civil Engineering', 2022, 40),
    (33, 'Christian Religious Studies', 2022, 40),
    (34, 'Islamic Religious Studies Engineering', 2022, 40);
`;

// ... (rest of the code)


// ... (rest of the code)


const SubjectsTable = () => {
  useEffect(() => {
    const createSubjectsTable = async () => {
      try {
        const db = SQLite.openDatabase('myDatabase.db');

        // Execute the CREATE TABLE and INSERT queries for subjects
        db.transaction(
          (tx) => {
            tx.executeSql(CreateSubjectsQuery, [], (_, result) => {
              console.log('Subjects table created and data inserted successfully');
            });
          },
          (error) => {
            console.error('Transaction error:', error);
            console.error('Transaction SQL:', error.sql);
            console.error('Transaction error message:', error.message);
            Alert.alert('SQL Execution Error', 'Failed to execute CREATE TABLE and INSERT statements for subjects.');
          }
        );
        
      } catch (error) {
        console.error('Error creating subjects table:', error);
        Alert.alert('SQL Execution Error', 'Failed to create subjects table.');
      }
    };

    createSubjectsTable();
  }, []);

  return null; // This component doesn't render anything in the UI
};

export default SubjectsTable;

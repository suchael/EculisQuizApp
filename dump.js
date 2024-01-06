import React, { useEffect, useState } from 'react';
import { Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

const CreateTableQuery = `
  CREATE TABLE IF NOT EXISTS questions (
    id INT PRIMARY KEY,
    subject VARCHAR(255),
    year VARCHAR(4),
    number INT,
    question_type VARCHAR(50),
    exam_type VARCHAR(50),
    class VARCHAR(50),
    topic TEXT,
    difficulty VARCHAR(50),
    question TEXT,
    option_A TEXT,
    option_B TEXT,
    option_C TEXT,
    option_D TEXT,
    answer VARCHAR(1),
    explanation TEXT,
    SubTopic TEXT
  );
`;

const SqlDown = () => {
  const [downloadedFilePath, setDownloadedFilePath] = useState(null);
  const [loading, setLoading] = useState(false);


    

    
      useEffect(() => {
        const useDownloadedFile = async () => {
          if (downloadedFilePath) {
            try {
              const db = SQLite.openDatabase('myDatabase.db');
      
              // Execute the CREATE TABLE query
              db.transaction(
                (tx) => {
                  tx.executeSql(CreateTableQuery, [], (_, result) => {
                    console.log('Table created successfully');
                  });
                },
                (error) => {
                  console.error('Transaction error:', error);
                  Alert.alert('SQL Execution Error', 'Failed to execute CREATE TABLE statement.');
                }
              );
      
              // Execute a SELECT query to retrieve the first 5 rows
              db.transaction(
                (tx) => {
                  tx.executeSql(
                    'SELECT * FROM questions LIMIT 5;',
                    [],
                    (_, { rows }) => {
                      // Extract the rows from the result set
                      const data = rows._array;
      
                      // Log the data to the console (you can customize this part)
                      console.log('Query result:', data);
      
                      // Update your component state or perform any other actions with the data
                      // For example, set a state variable to hold the data and render it in the UI
                      // setQueryResult(data);
                    },
                    (error) => {
                      console.error('Transaction error:', error);
                      Alert.alert('SQL Execution Error', 'Failed to execute SELECT statement.');
                    }
                  );
                },
                (error) => {
                  console.error('Transaction error:', error);
                  Alert.alert('SQL Execution Error', 'Failed to execute transaction.');
                }
              );
            } catch (error) {
              console.error('Error using downloaded file:', error);
              Alert.alert('File Read Error', 'Failed to read the downloaded file.');
            }
          }
        };
      
        useDownloadedFile();
      }, [downloadedFilePath]);
      

  return (
    <View>
      <Text>Download and Use SQL File</Text>
      <Button title="Download File" onPress={downloadFile} />
      <Button title="Execute SQL Queries" onPress={executeSqlQueries} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default SqlDown;


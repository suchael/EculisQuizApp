import React, { useEffect, useState } from 'react';
import { Text, View, Button, ActivityIndicator, Alert, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';



const CreateSubjectsQuery= `CREATE TABLE subjects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    totalQuestions INT NOT NULL
);

INSERT INTO subjects (name, year, totalQuestions) VALUES
    ('English Language'),
    ('Mathematics'),
    ('Chemistry', 2022, 40),
    ('Physics', 2022, 40),
    ('Biology', 2022, 40),
    ('Literature In English', 2022, 40),
    ('Government', 2022, 40),
    ('Economics', 2022, 40),
    ('Commerce', 2022, 40),
    ('Financial Accounting', 2022, 40),
    ('Computer Science', 2022, 40),
    ('Physical Education', 2022, 40),
    ('Sociology', 2022, 40),
    ('Political Science', 2022, 40),
    ('Anthropology', 2022, 40),
    ('Philosophy', 2022, 40),
    ('Engineering', 2022, 40),
    ('Medicine', 2022, 40),
    ('Law', 2022, 40),
    ('Languages', 2022, 40),
    ('Drama', 2022, 40),
    ('Environmental Science', 2022, 40),
    ('Culinary Arts', 2022, 40),
    ('Business', 2022, 40),
    ('Marketing', 2022, 40),
    ('Architecture', 2022, 40),
    ('Fashion Design', 2022, 40),
    ('Art History', 2022, 40),
    ('Psychology', 2022, 40),
    ('Music Theory', 2022, 40),
    ('Geology', 2022, 40),
    ('Film Studies', 2022, 40),
    ('Astronomy', 2022, 40),
    ('Physical Therapy', 2022, 40),
    ('Fashion Merchandising', 2022, 40),
    ('Graphic Design', 2022, 40),
    ('Nutrition', 2022, 40),
    ('Civil Engineering', 2022, 40),
    ('Christian Religious Studies', 2022, 40),
    ('Islamic Religious Studies Engineering', 2022, 40);
`;
const CreateTableQuery = `
  CREATE TABLE IF NOT EXISTS questions (
    id INT,
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
  const [top5Data, setTop5Data] = useState([]);

  const downloadFile = async () => {
    try {
      setLoading(true);

      const serverUrl = 'http://192.168.0.167/wrld.sql';
      const response = await fetch(serverUrl);
      const fileContent = await response.text();

      const fileName = 'data.sql';
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.writeAsStringAsync(fileUri, fileContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      setDownloadedFilePath(fileUri);
      setLoading(false);

      console.log('File downloaded successfully:', fileUri);
    } catch (error) {

      setLoading(false);
      console.error('Error downloading file:', error);
      Alert.alert('Download Error', 'Failed to download the file. Please try again.');
    }
  };

  const executeSqlQueries = async () => {
    try {
      const db = SQLite.openDatabase('myDatabase.db');
      const fileContent = await FileSystem.readAsStringAsync(downloadedFilePath);

      db.transaction(
        (tx) => {
          const queries = fileContent.split(';').filter((query) => query.trim() !== '');
          queries.forEach((query) => {
            // Replace single quotes in the query with double single quotes
            const sanitizedQuery = query.replace(/'/g, "''");
            
            tx.executeSql(sanitizedQuery, [], (_, result) => {
              console.log('Query executed successfully');
            });
          });
        },
        (error) => {
          console.error('Transaction error:', error);
          Alert.alert('SQL Execution Error', 'Failed to execute SQL queries.');
        }
      );
    } catch (error) {
      console.error('Error executing SQL queries:', error);
      Alert.alert('SQL Execution Error', 'Failed to execute SQL queries.');
    }
  };


  useEffect(() => {
    const useDownloadedFile = async () => {
      if (downloadedFilePath) {
        try {
          const db = SQLite.openDatabase('myDatabase.db');

          // Execute the CREATE TABLE query
          db.transaction(
            (tx) => {
                tx.executeSql(CreateSubjectsQuery, [], (_, result) => {
                    console.log('CreateSubjectsQuery executed successfully');
                  });

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
                'SELECT * FROM subjects LIMIT 5;',
                [],
                (_, { rows }) => {
                  // Extract the rows from the result set
                  const data = rows._array;
               //   console.log('Query result:', data);
                  // Update your component state to hold the data
                  setTop5Data(data);
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

      {/* Display the top 5 data in the UI */}
      <Text>Top 5 Data:</Text>
      <ScrollView>
        {top5Data.map((item) => (
          <Text key={item.id}>{item.question}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default SqlDown;

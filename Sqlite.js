import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as SQLite from 'expo-sqlite';

const UploadSQLFileFromServer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.167:5000/questions/free-questions/6594757f0cbae26599e2acba');

        if (!response.ok) {
          console.log(await response.text());
          throw new Error(`Failed to fetch SQL file. Status: ${response.status}`);
        }

        const fileContent = await response.text();

        // Ensure that fileContent is not null or undefined
        if (!fileContent) {
          throw new Error('File content is null or undefined');
        }

        // Extract SQL statements from the JSON object
        const { sqlStatements } = JSON.parse(fileContent);

        if (!sqlStatements) {
          throw new Error('SQL statements are null or undefined');
        }

        const db = SQLite.openDatabase('your_database_name.db');

        db.transaction(
          (tx) => {
            try {
              tx.executeSql(sqlStatements, [], (_, result) => {
                console.log('SQL file uploaded successfully');
                setLoading(false);
              });
            } catch (sqlError) {
              console.error('Error executing SQL queries:', sqlError);
              setError('Error executing SQL queries');
              setLoading(false);
            }
          },
          (error) => {
            console.error('Transaction error:', error);
            setError('Transaction error');
            setLoading(false);
          }
        );
      } catch (error) {
        console.error('Error uploading SQL file:', error.message);
        setError(`Error uploading SQL file: ${error.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <Text>SQL File uploaded successfully</Text>
      )}
    </View>
  );
};

export default UploadSQLFileFromServer;

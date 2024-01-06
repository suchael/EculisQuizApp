import React, { useEffect } from "react";
import { View, Button } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("myDatabase.db");

const Database = ({ table }) => {
  useEffect(() => {
    fetchDataFromTable(table);
  }, [table]);

  const fetchDataFromTable = (tableName) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName}`,
        [],
        (_, { rows }) => {
          const data = rows._array;
          console.log(`Data from ${tableName}:`, data);
        },
        (error) => {
          console.error(`Error executing SQL query for ${tableName}: `, error);
        }
      );
    });
  };

  return (
    <View>
      {/* Trigger the data fetch by pressing a button */}
      <Button
        title={`Fetch Data from ${table}`}
        onPress={() => fetchDataFromTable(table)}
      />
    </View>
  );
};

export default Database;

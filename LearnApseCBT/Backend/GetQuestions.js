import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  snapshot,
  doc,
} from "firebase/firestore";

// **** Firebase
import { Firestore } from "../Firebase/Firestore.js";

// **** SQLITE
import * as SQLite from "expo-sqlite";

//my import
import { examSubjectsArr } from "./subjectList.js";

import { JAMBcollectionID } from "./examCollectionID.js";
import { WAECcollectionID } from "./examCollectionID.js";
import { NECOcollectionID } from "./examCollectionID.js";

export default async function GetQuestions() {
  console.log("\n\t#####.....My Questions....", examSubjectsArr.length);
  try {
    console.log();
  } catch (error) {
    console.log("error: ", error);
  }
}

async function getFirestoreData() {
  try {
    const questionsCollectionRef = collection(Firestore,"ExamQuestion","JAMB","JAMbCHEMISTRY" );
    const querySnapshot = await getDocs(questionsCollectionRef);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        console.log(`Doc: ${JSON.stringify(doc.id)}, ${JSON.stringify(doc.data())}`);
      });
    } else {
      console.log("No doc found in the subcollection");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}
//getFirestoreData();

async function getSpecificDoc() {
  try {
    const questionsCollectionRef = doc(Firestore,"ExamQuestion","JAMB","JAMbCHEMISTRY","jambCHEMISTRY1-1982");
    const docSnapshot = await getDoc(questionsCollectionRef);

    if (docSnapshot.exists()) {
      console.log(`Doc: ${JSON.stringify(docSnapshot.id)}, ${JSON.stringify(docSnapshot.data())}`
      );
    } else {
      console.log("No doc found in the subcollection");
    }
  } catch (error) {
    console.log("error: ", error);
  }
}
//getSpecificDoc()

function displayMatchingSubjectsBetweenSubjArrays(primaryExamSubjects, secondaryExamSubjects) {
  // this will compare the id of two array
  // check if they match and display them
  primaryExamSubjects.forEach((primarySubject) => {
    const foundInSecondary = secondaryExamSubjects.some(
      (secondarySubject) => secondarySubject.id === primarySubject.id
    );

    if (foundInSecondary) {
      console.log(
        `Match subjs: ${primarySubject.subject}, ID: ${primarySubject.id}`
      );
    } else {
      console.log(
        `***No match: ${primarySubject.subject}, ID: ${primarySubject.id}`
      );
    }
  });
}
//displayMatchingSubjectsBetweenSubjArrays(JAMBcollectionID, examSubjectsArr);

const JAMBdb = SQLite.openDatabase("JAMBdatabase.db");
//console.log("examSubjectsArr", examSubjectsArr.length)

function createJAMBsubjectTable() {
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "JAMBsubjects (" +
        "SubjectID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "SubjectName TEXT NOT NULL, " +
        "SubjectAlias TEXT NOT NULL" +
        ")",
      [],
      () => {
        console.log("JAMBsubjects creation successful");

        // currentNumbOfSubjects in the table is 19
        // let's say 2 subjects are added to get 19 + 2 = 21 Subha
        // then call the addSubjectsToJAMBsubjectsTable
        // to add the new subjects
        const currentNumbOfSubjects = 19;
        examSubjectsArr.length != currentNumbOfSubjects &&
          addSubjectsToJAMBsubjectsTable();
      },
      (_, error) => {
        console.log("JAMBsubjects creation error: ", error);
      }
    );
  });

  // Show JAMBsubjectTable
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM JAMBsubjects;",
      [],
      (_, { rows }) => {
        const len = rows.length;

        console.log("\n");
        console.log(`\tJAMBsubjects table contains ${len} rows`);
        console.log("\n");

        for (let i = 0; i < len; i++) {
          const { SubjectID, SubjectName, SubjectAlias } = rows.item(i);
          console.log(`Row ${i + 1}: SubjectID=${SubjectID}, SubjectName=${SubjectName}, SubjectAlias=${SubjectAlias}\n`);
          console.log("\n");
        }
        //console.log("Subject in obj format: ", subjectListAndSubjectIDinObjectFormat)
      },
      (_, error) => {
        console.log("Error fetching JAMBsubjects table data: ", error);
      }
    );
  });
}
//createJAMBsubjectTable()

function addSubjectsToJAMBsubjectsTable() {
  JAMBdb.transaction((tx) => {
    examSubjectsArr.forEach((subj) => {
      tx.executeSql(
        "INSERT INTO " +
          "JAMBsubjects (SubjectName, SubjectAlias) " +
          "VALUES (?, ?)",
        [subj.subject, subj.alias],
        (_, { rowsAffected }) => {
          console.log(
            "Insertion to JAMBsubjects successful. Rows affected:",
            rowsAffected
          );
        },
        (_, error) => {
          console.log("Insertion to JAMBsubjects error: ", error);
        }
      );
    });
  });
}

function createJAMBtopicTable() {
  // Create Topic table
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "JAMBtopics (" +
        "TopicID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "SubjectID INTEGER, " +
        "Class TEXT NOT NULL, " +
        "TopicName TEXT NOT NULL, " +
        "SubTopic TEXT NOT NULL, " +
        "FOREIGN KEY (SubjectID) REFERENCES JAMBsubjects(SubjectID)" +
        ")",
      [],
      () => {
        console.log("JAMBtopics creation successful");

        // currentNumbOfSubjects in the table is 19
        // let's say 2 subjects are added to get 19 + 2 = 21 Subj
        // then call the addTopicToJAMBTopicTable
        // to add the new subjects/Topics
        const currentNumbOfSubjects = 19;
        examSubjectsArr.length != currentNumbOfSubjects &&
          addTopicToJAMBTopicTable();
      },
      (_, error) => {
        console.log("JAMBtopics creation error: ", error);
      }
    );
  });

  // Show JAMBtopics
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM JAMBtopics;",
      [],
      (_, { rows }) => {
        const len = rows.length;
        console.log("\n");
        console.log(`JAMBtopics table contains ${len} rows`);
        console.log("\n");

        for (let i = 0; i < len; i++) {
          const { TopicID, SubjectID, Class, TopicName, SubTopic } =
            rows.item(i);
          console.log(
            `Row ${
              i + 1
            }: TopicID=${TopicID}, SubjectID=${SubjectID}, Class=${Class}, TopicName=${TopicName}, SubTopic=${SubTopic}\n`
          );
          console.log("\n");
        }
      },
      (_, error) => {
        console.log("Error fetching JAMBtopics table data: ", error);
      }
    );
  });
}
//createJAMBtopicTable();

function addTopicToJAMBTopicTable() {
  JAMBdb.transaction((tx) => {
    examSubjectsArr.forEach((data) => {
      const stdntClassArr = data.classes;
      const subjectName = data.subject;
      const SubjectID = data.id;

      for (const Class in stdntClassArr) {
        stdntClassArr[Class].map((TopicName) => {
          tx.executeSql(
            "INSERT INTO " +
              "JAMBtopics (SubjectID, Class, TopicName, SubTopic) " +
              "VALUES (?, ?, ?, ?)",
              [SubjectID, Class, TopicName.topic, JSON.stringify(TopicName.subTopics)],
            (_, { rowsAffected }) => {
              console.log(
                "Insertion to JAMBtopics successful. Rows affected:",
                rowsAffected
              );
            },
            (_, error) => {
              console.log("Insertion to JAMBtopics error: ", error);
            }
          );
        });
      }
    }); // Closing bracket for forEach loop
  });
}

function displayJAMBtopicsWithForeignKeys() {
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "SELECT JAMBtopics.TopicID, JAMBtopics.Class, JAMBtopics.TopicName, JAMBsubjects.SubjectName " +
        "FROM JAMBtopics " +
        "JOIN JAMBsubjects ON JAMBtopics.SubjectID = JAMBsubjects.SubjectID;",
      [],
      (_, { rows }) => {
        const len = rows.length;
        console.log("\n");
        console.log(
          `JAMBtopics table with foreign key data contains ${len} rows`
        );
        console.log("\n");

        for (let i = 0; i < len; i++) {
          const { TopicID, SubjectName, Class, TopicName } = rows.item(i);
          console.log(
            `Row ${
              i + 1
            }: TopicID=${TopicID}, SubjectName=${SubjectName}, Class=${Class}, TopicName=${TopicName}`
          );
          console.log("\n");
        }
      },
      (_, error) => {
        console.log(
          "Error fetching JAMBtopics table data with foreign keys: ",
          error
        );
      }
    );
  });
}
//displayJAMBtopicsWithForeignKeys();

function createJAMBquestionTable() {
  // Create Question table
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "JAMBquestions (" +
        "QuestionTableID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "Year INTEGER NOT NULL, " +
        "SubjectID INTEGER NOT NULL, " +
        "TopicID INTEGER, " +
        "Difficulty TEXT, " +
        "QuestionID TEXT NOT NULL, " +
        "Question TEXT NOT NULL, " +
        "Options TEXT NOT NULL, " +
        "Answer TEXT NOT NULL, " +
        "Explanation TEXT, " +
        "FOREIGN KEY (SubjectID) REFERENCES JAMBsubjects(SubjectID), " +
        "FOREIGN KEY (TopicID) REFERENCES JAMBtopics(TopicID)" +
        ")",
      [],
      () => {
        console.log("JAMBquestions creation successful");
      },
      (_, error) => {
        console.log("JAMBquestions creation error: ", error);
      }
    );
  });

  // Show JAMBquestions
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM JAMBquestions;",
      [],
      (_, { rows }) => {
        const len = rows.length;
        console.log("\n");
        console.log(`\JAMBquestions table contains ${len} rows`);
        console.log("\n");

        for (let i = 0; i < 5; i++) {
          const {
            QuestionTableID,
            Year,
            SubjectID,
            TopicID,
            Difficulty,
            QuestionID,
            Question,
            Options,
            Answer,
            Explanation,
          } = rows.item(i);
          console.log(`Row ${i + 1}: \nQuestionTableID=${QuestionTableID}, \nYear=${Year}, \nSubjectID=${SubjectID}, \nTopicID=${TopicID}, \nDifficulty=${Difficulty}, \nQuestionID=${QuestionID}, \nQuestion=${Question}, \nOptions=${Options}, \nAnswer=${Answer}, \nExplanation=${Explanation} \n`);
          console.log("\n");
        }
      },
      (_, error) => {
        console.log("Error fetching JAMBquestions table data: ", error);
      }
    );
  });
}
// createJAMBquestionTable();


function addQuestionsToJAMBquestionTable(
  Year,
  subjectID,
  TopicID,
  Difficulty,
  QuestionID,
  Question,
  Options,
  Answer,
  Explanation
  ) {
  JAMBdb.transaction((tx) => {
    try {
      //console.log("SQLITE: ", Year, subjectID, TopicID, Difficulty, QuestionID, Question, Options, Answer, Explanation)
      tx.executeSql(
        "INSERT INTO JAMBquestions (Year, SubjectID, TopicID,  Difficulty, QuestionID, Question, Options, Answer, Explanation) " +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [Year, subjectID, TopicID, Difficulty, QuestionID, Question, Options, Answer, Explanation],
        (_, { rowsAffected }) => {
          //console.log("Insertion to JAMBquestions successful. Rows affected:",rowsAffected);
        },
        (_, error) => {
          console.log("Insertion to JAMBquestions error: ", error);
          throw error; // Throw an error to be caught in the catch block
        }
      );

      //console.log("Done adding YearID: ", subjectID)
    } catch (error) {
      console.error("Error in addQuestionsToJAMBquestionTable: ", error);
    }
  });
}

// for (let i = 0; i < 100; i++) {
//   addQuestionsToJAMBquestionTable(
//     2023 + i,                  // Increment the Year for each iteration
//     1,                         // subjectID (assuming it stays the same)
//     1,                         // TopicID (assuming it stays the same)
//     'Medium',                  // Difficulty
//     `Q${i + 1}`,               // Increment the QuestionID for each iteration
//     `What is the capital of Dummyland ${i + 1}?`,  // Increment the Question for each iteration
//     JSON.stringify(['Option A', 'Option B', 'Option C', 'Option D']), // Options
//     'Option A',                // Answer
//     'This is a dummy explanation.'  // Explanation
//   );
// }



async function getSpecificQuestion(examType) {
  try {
    const collectionsToMap =
      examType === "JAMB"
        ? JAMBcollectionID
        : examType === "WAEC"
        ? WAECcollectionID
        : examType === "NECO"
        ? NECOcollectionID
        : [];

    for (const subjectCollection of collectionsToMap) {
      await subjectFunction(subjectCollection.subject, subjectCollection.id);
    }

    async function subjectFunction(subjectName, subjectID) {
      //const questionsCollection = collection(Firestore, "ExamQuestion",      "JAMB",         "JAMbCHEMISTRY");
      const questionsCollection = collection(Firestore, "ExamQuestion", `${examType}`, `JAMbCHEMISTRY`);
      const querySnapshot = await getDocs(questionsCollection);

      const targetSubjectYearID = "jambCHEMISTRY1-2020"; // Replace with the actual ID you're looking for

      if (!querySnapshot.empty) {

        console.log("\tData ready...")
        querySnapshot.forEach((doc, index) => {
          let eachSubjectYearID = doc.id; // This is of the form "jambCHEMISTRY1-2020"

          // if (eachSubjectYearID === targetSubjectYearID) {
          if (eachSubjectYearID === eachSubjectYearID) {
            let questionObject = doc.data();
            // console.log(`${eachSubjectYearID}: ${JSON.stringify(questionObject)}`);

            for (const questionID in questionObject) {
              if (questionObject.hasOwnProperty(questionID)) {
                const questionData = questionObject[questionID];
                //console.log("\n\n ID", questionID);

                const Year = questionData.year;
                const Difficulty = questionData.difficulty;
                let TopicID = 5;
                const Question = questionData.question;
                const Options = questionData.options;
                const Answer = questionData.answer;
                const Explanation = questionData.explanation;
                let ModifiedExplanation = Explanation;

                // Check if explanation contains the phrase
                //explanation video available below
                if (Explanation.includes("There is an explanation video available below")) {
                  // replace the phrase with an empty string
                  ModifiedExplanation = Explanation.replace("There is an explanation video available below.","");
                  // console.log(ModifiedExplanation);
                } else {
                  // console.log(Explanation);
                }

                //console.log(Question);
                // console.log(Options);
                // console.log(Answer);
                //console.log(Year);
                // console.log(Difficulty);


                addQuestionsToJAMBquestionTable(
                  Year,
                  subjectID,
                  TopicID,
                  Difficulty,
                  questionID,
                  Question,
                  Options,
                  Answer,
                  ModifiedExplanation
                );
                
              } else {
                console.log("No data");
              }
            }
          }
        });
      }
      else {
        console.log("No doc found in the subcollection");
      }
      console.log("Done getting...",subjectName);
    }
  } 
  catch (error) {
    console.log("Error: ", error);
  }
}

//getSpecificQuestion("JAMB")
//getSpecificQuestion("WAEC")
//getSpecificQuestion("NECO")

function allJAMBdbTables() {
  JAMBdb.transaction((tx) => {
    tx.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table'",
      [],
      (_, result) => {
        const tableNames = result.rows._array.map((row) => row.name);
        console.log("All Tables in the JAMBdb: ", tableNames);
      },
      (_, error) => {
        console.error("Error retrieving JAMBdb:", error);
      }
    );
  });
}

//allJAMBdbTables();


function DeleteTable() {
  JAMBdb.transaction((tx) => {
    const TABLE = "JAMBquestions";
    tx.executeSql(
      `DROP TABLE IF EXISTS ${TABLE};`,
      [],
      () => {
        console.log(TABLE, " deletion successful");
      },
      (_, error) => {
        console.log(TABLE, " deletion error: ", error);
      }
    );
  });
}
//DeleteTable()
































// function createJAMBquestionTable() {
//   // Create Question table
//   JAMBdb.transaction((tx) => {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXISTS " +
//         "JAMBquestions (" +
//         "QuestionTableID INTEGER PRIMARY KEY AUTOINCREMENT, " +
//         "Year INTEGER NOT NULL, " +
//         "SubjectID INTEGER NOT NULL, " +
//         "TopicID INTEGER, " +
//         "Difficulty TEXT, " +
//         "QuestionID TEXT NOT NULL, " +
//         "Question TEXT NOT NULL, " +
//         "Options TEXT NOT NULL, " +
//         "Answer TEXT NOT NULL, " +
//         "Explanation TEXT, " +
//         "FOREIGN KEY (SubjectID) REFERENCES JAMBsubjects(SubjectID), " +
//         "FOREIGN KEY (TopicID) REFERENCES JAMBtopics(TopicID)" +
//         ")",
//       [],
//       () => {
//         console.log("JAMBquestions creation successful");
//       },
//       (_, error) => {
//         console.log("JAMBquestions creation error: ", error);
//       }
//     );
//   });

//   // Show JAMBquestions
//   JAMBdb.transaction((tx) => {
//     tx.executeSql(
//       "SELECT * FROM JAMBquestions;",
//       [],
//       (_, { rows }) => {
//         const len = rows.length;
//         console.log("\n");
//         console.log(`\JAMBquestions table contains ${len} rows`);
//         console.log("\n");

//         for (let i = 0; i < len/500; i++) {
//           const {
//             QuestionTableID,
//             Year,
//             SubjectID,
//             TopicID,
//             Difficulty,
//             QuestionID,
//             Question,
//             Options,
//             Answer,
//             Explanation,
//           } = rows.item(i);
//           //console.log(`Row ${i + 1}: \nQuestionTableID=${QuestionTableID}, \nYear=${Year}, \nSubjectID=${SubjectID}, \nTopicID=${TopicID}, \nDifficulty=${Difficulty}, \nQuestionID=${QuestionID}, \nQuestion=${Question}, \nOptions=${Options}, \nAnswer=${Answer}, \nExplanation=${Explanation} \n`);
//           console.log("\n");
//         }
//       },
//       (_, error) => {
//         console.log("Error fetching JAMBquestions table data: ", error);
//       }
//     );
//   });
// }
// //createJAMBquestionTable();

// function addQuestionsToJAMBquestionTable(
//   Year,
//   subjectID,
//   TopicID,
//   Difficulty,
//   QuestionID,
//   Question,
//   Options,
//   Answer,
//   Explanation
// ) {
//   JAMBdb.transaction((tx) => {
//     try {
//       //console.log("SQLITE: ", Year, subjectID, TopicID, Difficulty, QuestionID, Question, Options, Answer, Explanation)
//       tx.executeSql(
//         "INSERT INTO JAMBquestions (Year, SubjectID, TopicID,  Difficulty, QuestionID, Question, Options, Answer, Explanation) " +
//           "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
//           [Year, subjectID, TopicID, Difficulty, QuestionID, Question, Options, Answer, Explanation],
//         (_, { rowsAffected }) => {
//           //console.log("Insertion to JAMBquestions successful. Rows affected:",rowsAffected);
//         },
//         (_, error) => {
//           console.log("Insertion to JAMBquestions error: ", error);
//           throw error; // Throw an error to be caught in the catch block
//         }
//       );

//       //console.log("Done adding YearID: ", subjectID)
//     } catch (error) {
//       console.error("Error in addQuestionsToJAMBquestionTable: ", error);
//     }
//   });
// }


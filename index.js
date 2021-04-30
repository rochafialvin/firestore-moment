var admin = require("firebase-admin");

var serviceAccount = require("./firestore-credential.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-test-eba62.firebaseio.com",
});

const db = admin.firestore();

const setDocument = async (collection, doc, data) => {
  try {
    const res = await db.collection(collection).doc(doc).set(data);

    console.log({ res });
    console.log("Set Document, done.");
  } catch (error) {
    console.log({ error });
  }
};

// Document name will be automatic generate
const addDocument = async (collection, data) => {
  try {
    const res = await db.collection(collection).add(data);

    console.log({ res });
    console.log("Add Document, done.");
  } catch (error) {
    console.log({ error });
  }
};

const updateDocument = async (collection, doc, data) => {
  try {
    const res = await db.collection(collection).doc(doc).update(data);

    console.log({ res });
    console.log("Update Document, done.");
  } catch (error) {
    console.log({ error });
  }
};

const deleteDocument = async (collection, doc) => {
  try {
    const res = await db.collection(collection).doc(doc).delete();

    console.log({ res });
    console.log("Delete Document, done.");
  } catch (error) {
    console.log({ error });
  }
};

const getCollection = async (collection) => {
  try {
    const collection = await db.collection(collection).get();

    const data = [];
    // if there is any document found in collection
    if (collection.docs.length > 0) {
      // iterate collection
      for (let document of collection.docs) {
        // get actual document by running a function
        document = document.data();
        // push document into data array
        data.push({
          id: document.id,
          name: document.name,
        });
      }

      console.log({ data });
    } else {
      console.log("No Users");
    }
    console.log("Get Collection, done.");
  } catch (error) {
    console.log({ error });
  }
};

// setDocument("abc", "Pireates", { id: 1, name: "Was Mine :)" });
// addDocument("abc", { id: 2, name: "Was Mine, really" });
// updateDocument("abc", "Pireates", { id: 99, name: "I Won't", class: "second" });
// deleteDocument("abc", "Pireates");
// getCollection("abc");

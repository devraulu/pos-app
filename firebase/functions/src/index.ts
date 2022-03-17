// The Firebase Admin SDK to access Firestore.
import * as admin from "firebase-admin";
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
import * as functions from "firebase-functions";

admin.initializeApp();

interface IUser {
  uid: string;
  email: string;
  password: string;
  displayName: string;
  createdAt?: string;
  createdBy?: string;
}

exports.onCreateUser = functions.auth.user().onCreate(async (user) => {
  const { email } = user || {};
  const querySnapshot = await admin
    .firestore()
    .collection("admins")
    .where("email", "==", email)
    .get();

  const isAdmin = querySnapshot.size > 0;
  try {
    if (isAdmin) {
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      return "User is admin";
    } else {
      return "User is not admin";
    }
  } catch (error) {
    console.log(error);
    return error;
  }
});

exports.setFirstAdmin = functions.https.onCall(async (data) => {
  try {
    console.log("Data", data);
    await admin.auth().setCustomUserClaims(data?.uid, { admin: true });
    return "User set as admin";
  } catch (error) {
    console.log("Error", error);
    return error;
  }
});

exports.createUser = functions.https.onCall(async (data: IUser, context) => {
  try {
    if (context.auth?.token.admin) {
      await admin.auth().createUser({
        ...data,
      });
      return "User created successfully";
    } else return "User is not an admin. Cannot create users.";
  } catch (error) {
    return error;
  }
});

exports.updateUser = functions.https.onCall(async (data: IUser, context) => {
  try {
    if (context.auth?.token.admin) {
      await admin.auth().updateUser(data.uid, {
        ...data,
      });
      return "User updated successfully";
    } else return "User is not an admin. Cannot update users.";
  } catch (error) {
    return error;
  }
});

exports.getUsers = functions.https.onCall(async (data, context) => {
  try {
    if (context.auth?.token.admin) return await admin.auth().listUsers(1000);
    else return "User is not an admin. Cannot get users.";
  } catch (error) {
    return error;
  }
});

exports.getUserById = functions.https.onCall(async (data, context) => {
  try {
    if (context.auth?.token.admin) return await admin.auth().getUser(data.uid);
    else return "User is not an admin. Cannot get users.";
  } catch (error) {
    return error;
  }
});

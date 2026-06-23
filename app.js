import { app } from "./firebase.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

// SIGNUP
window.signup = async function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    balance: 0
  });

  alert("Account created");
};

// LOGIN
window.login = async function () {
  await signInWithEmailAndPassword(
    auth,
    document.getElementById("email").value,
    document.getElementById("password").value
  );
};

// LOGOUT
window.logout = async function () {
  await signOut(auth);
  window.location.href = "login.html";
};

// CHECK USER
onAuthStateChanged(auth, async (user) => {
  if (window.location.pathname.includes("dashboard.html")) {

    if (!user) {
      window.location.href = "login.html";
      return;
    }

    let docSnap = await getDoc(doc(db, "users", user.uid));
    document.getElementById("balance").innerText =
      "$" + docSnap.data().balance;
  }
});

// DEPOSIT PLACEHOLDER
window.deposit = function () {
  alert("Deposit system coming next");
};

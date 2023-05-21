// counter.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, transaction } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdyutD4Kxvk8NZOxzvw2D00GWdBkfjDdQ",
  authDomain: "mjrairaqi-4d215.firebaseapp.com",
  databaseURL: "https://mjrairaqi-4d215-default-rtdb.firebaseio.com",
  projectId: "mjrairaqi-4d215",
  storageBucket: "mjrairaqi-4d215.appspot.com",
  messagingSenderId: "463411067509",
  appId: "1:463411067509:web:b2a206516547635286563c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Increase the visit counter on page load
const incrementPageVisits = () => {
  const pageVisitsRef = ref(database, 'pageVisits');
  transaction(pageVisitsRef, (currentVisits) => {
    if (currentVisits === null) {
      return 1;
    }
    return currentVisits + 1;
  });
};

window.addEventListener('DOMContentLoaded', incrementPageVisits);

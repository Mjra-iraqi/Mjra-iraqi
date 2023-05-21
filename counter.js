import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, transaction } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);

// زيادة عداد الزيارات عند تحميل الصفحة
const incrementPageVisits = () => {
  const pageVisitsRef = ref(database, 'pageVisits');
  transaction(pageVisitsRef, (currentVisits) => {
    if (currentVisits === null) {
      return 1;
    }
    return currentVisits + 1;
  }).then(() => {
    // تسجيل حدث زيارة الصفحة في Firebase Analytics
    logEvent(analytics, 'pageVisits');
  });
};

window.addEventListener('DOMContentLoaded', incrementPageVisits);

const visitCounterElement = document.getElementById("visitCounter");

// تعيين قيمة العداد في العنصر
const setPageVisits = (count) => {
  visitCounterElement.textContent = count;
};

// استرجاع قيمة عدد الزيارات من قاعدة البيانات وعرضها
const getAndDisplayPageVisits = () => {
  const pageVisitsRef = ref(database, 'pageVisits');
  get(pageVisitsRef).then((snapshot) => {
    const count = snapshot.val();
    setPageVisits(count);
  });
};

// استدعاء الدالة لعرض عدد الزيارات عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', getAndDisplayPageVisits);



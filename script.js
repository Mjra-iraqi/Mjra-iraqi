// استيراد مكتبة Firebase
import firebase from 'firebase/app';
import 'firebase/database';

// تكوين اتصال Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCdyutD4Kxvk8NZOxzvw2D00GWdBkfjDdQ",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "mjrairaqi-4d215",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// تهيئة التطبيق Firebase
firebase.initializeApp(firebaseConfig);

// الحصول على مرجع قاعدة البيانات
var database = firebase.database();

// استرجاع عدد الزيارات من قاعدة البيانات وتحديثها
database.ref('/visitCount').once('value', function(snapshot) {
    var visitCount = snapshot.val();
    if (visitCount) {
        visitCount = parseInt(visitCount);
    } else {
        visitCount = 0;
    }

    visitCount++;

    // تحديث قيمة عدد الزيارات في قاعدة البيانات
    database.ref('/visitCount').set(visitCount);

    // تحديث العنصر المعرف بـ visitCount في صفحة HTML
    document.getElementById('visitCount').textContent = visitCount;
});

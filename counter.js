// عدد الزيارات المبدئي

let counter = 0;

// زيادة العداد وحفظه

function increaseCounter() {

  counter++;

  // قم بإرسال العداد إلى الملف في الاستضافة للحفظ

  // قم بتحديث عنصر العرض في الصفحة

  document.getElementById("counter").textContent = counter;

}

// تحميل العداد عند تحميل الصفحة

window.addEventListener("load", function() {

  // قم بتحميل العداد من الملف في الاستضافة

  // قم بتحديث عنصر العرض في الصفحة

  document.getElementById("counter").textContent = counter;

});

 

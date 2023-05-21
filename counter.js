// عدد الزيارات المبدئي
let counter = 0;

// زيادة العداد وحفظه
function increaseCounter() {
  counter++;
  // استدعاء ملف PHP لزيادة العداد
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "counter.php");
  xhr.send();
  
  // قم بتحديث عنصر العرض في الصفحة
  document.getElementById("counter").textContent = counter;
}

// تحميل العداد عند تحميل الصفحة
window.addEventListener("load", function() {
  // استدعاء ملف PHP لتحميل العداد
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        counter = parseInt(xhr.responseText);
        // قم بتحديث عنصر العرض في الصفحة
        document.getElementById("counter").textContent = counter;
      }
    }
  };
  xhr.open("GET", "counter.php");
  xhr.send();
});

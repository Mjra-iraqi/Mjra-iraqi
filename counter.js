// عدد الزيارات المبدئي
let counter = 0;





function updateCounter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var counterValue = parseInt(this.responseText);
      if (!isNaN(counterValue)) {
        document.getElementById("counter").textContent = counterValue;
      }
    }
  };
  xhttp.open("GET", "counter.php", true);
  xhttp.send();
}

// تحديث العداد كل ثانية واحدة (يمكنك تعديل هذه القيمة وفقًا لاحتياجاتك)
setInterval(updateCounter, 1000);








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

document.addEventListener("DOMContentLoaded", function() {
  var visitCounter = document.getElementById("visitCounter");
  var visitors = 0;
  var fileURL = "https://drive.google.com/file/d/1kXOETSU6_G_bv7ZdOZmaOCReCny1bput/view?usp=drivesdk"; // استبدل YOUR_FILE_ID بمعرف الملف الخاص بك

  // استرجاع العدد الحالي من الملف أو استخدام القيمة الافتراضية إذا فشل الوصول إلى الملف
  fetch(fileURL)
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      visitors = parseInt(data) || 0;
      visitCounter.textContent = visitors;
    })
    .catch(function(error) {
      console.log("حدث خطأ في استرجاع البيانات: " + error);
    });

  // زيادة العداد بمقدار واحد عند تحميل الصفحة
  visitors += 1;
  visitCounter.textContent = visitors;

  // تحديث الملف بالعدد الجديد
  fetch(fileURL, {
    method: "PUT",
    body: visitors.toString()
  })
    .then(function() {
      console.log("تم تحديث عدد الزيارات بنجاح");
    })
    .catch(function(error) {
      console.log("حدث خطأ في تحديث عدد الزيارات: " + error);
    });
});

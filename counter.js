document.addEventListener("DOMContentLoaded", function() {
  var visitCounter = document.getElementById("visitCounter");
  var visitors = 0;

  // استرجاع العدد الحالي من الملف أو استخدام القيمة الافتراضية إذا لم يتم العثور على الملف
  fetch("visitors.txt")
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
  fetch("visitors.txt", {
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

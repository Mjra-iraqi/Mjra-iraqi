// استرجاع قيمة عدد الزيارات من التخزين المحلي إذا كانت متاحة
var visitCount = localStorage.getItem('visitCount');

// التحقق من وجود قيمة عدد الزيارات في التخزين المحلي
if (visitCount) {
    visitCount = parseInt(visitCount); // تحويل القيمة إلى رقم صحيح
} else {
    visitCount = 0; // قيمة افتراضية للزيارات إذا لم يتم العثور على قيمة في التخزين المحلي
}

// زيادة قيمة عدد الزيارات بمقدار واحد
visitCount++;

// تحديث العنصر المعرف بـ visitCount في صفحة HTML
document.getElementById('visitCount').textContent = visitCount;

// تخزين قيمة عدد الزيارات المحدثة في التخزين المحلي
localStorage.setItem('visitCount', visitCount.toString());

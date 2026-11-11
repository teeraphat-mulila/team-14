// ===== ไฟล์ของคนที่ 3 (โปรแกรมเมอร์) =====
// ภารกิจ: ทำให้ปุ่มทั้ง 2 ปุ่มทำงาน

// ดึงองค์ประกอบจากหน้าเว็บมาเก็บในตัวแปร
const helloBtn = document.getElementById("hello-btn");
const themeBtn = document.getElementById("theme-btn");
const message = document.getElementById("message");

// งาน 1: เมื่อกดปุ่ม "ทักทาย" ให้แสดงข้อความของทีม
helloBtn.addEventListener("click", function () {
  // แก้ข้อความในเครื่องหมายคำพูดเป็นคำทักทายของทีมตัวเอง
  message.textContent = "สวัสดี!";
});

// งาน 2: เมื่อกดปุ่ม "สลับโหมดมืด" ให้เพิ่มหรือลบ class "dark" ที่ body
themeBtn.addEventListener("click", function () {
  // เขียนโค้ดตรงนี้ 1 บรรทัด
  // คำใบ้: document.body.classList.toggle("ชื่อ class");
});
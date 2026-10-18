# User 1–25 — Learning Platform 360

มีหน้า `/user/1.html` ถึง `/user/25.html` ครบแล้ว

## วิธีเปิดใช้งาน User ใหม่
1. เปิดไฟล์ `/sites-config.js` และค้นหา `USER_PAGES`
2. เลือกหมายเลข User แล้วใส่ `EXEC_URL` ที่เป็น Google Apps Script URL ลงท้าย `/exec`
3. แก้ `SEO_TITLE` และ `SEO_DESCRIPTION` ให้เป็นชื่อและคำอธิบายของ User นั้น
4. บันทึกและ Push ขึ้น GitHub; เปิด `https://<โดเมนของคุณ>/user/4.html` (เปลี่ยนหมายเลขตามต้องการ)

**User 1:** เก็บค่า URL และชื่อเดิมไว้แล้ว

**User 2–25:** เตรียมโครงสร้างไว้ แต่ยังไม่ใส่ EXEC_URL เนื่องจากแต่ละ User ต้องมี URL จริงของตนเอง หากยังไม่ตั้งค่า หน้า User จะแสดงข้อความแจ้งแทน iframe

**ไฟล์เดิม:** `1.html`, `2.html`, `3.html` คงเนื้อหาเดิม

**การแสดงตัวอย่างลิงก์ LINE:** GitHub Action `tools/update-seo.mjs` จัดการ title/description/icon ของทุก User ได้ แม้ยังไม่กรอก EXEC_URL

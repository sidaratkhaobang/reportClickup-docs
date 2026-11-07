# ReportClickup Docs

คู่มือ HTML ภาษาไทยสำหรับผู้ใช้รายงานและนักพัฒนา ครอบคลุมความต้องการ สถาปัตยกรรม เส้นทางข้อมูล Technology Stack โครงสร้างโค้ด วิธีอ่าน Dashboard กฎธุรกิจ API และวิธีรันระบบ

เอกสารอ้างอิง [ReportClickup ที่ commit 0f06bbd](https://github.com/sidaratkhaobang/report-clickup/tree/0f06bbdd85d50337238242a24d5f4142369007a0)

## เปิดคู่มือบน GitHub Pages

[ReportClickup Docs](https://sidaratkhaobang.github.io/reportClickup-docs/) จะเปิดได้หลัง deploy สำเร็จครั้งแรก ตั้ง Source เป็น **GitHub Actions** ใน [Settings → Pages](https://github.com/sidaratkhaobang/reportClickup-docs/settings/pages) แล้วรัน workflow **Deploy documentation to GitHub Pages** จากแท็บ Actions หลังจากนั้นทุกครั้งที่ push เข้า `main` ระบบจะ deploy HTML และภาพจาก `public/`

## เปิดคู่มือบนเครื่อง

ใช้ Node.js 20 ขึ้นไป จากโฟลเดอร์นี้ให้รัน

```sh
npm start
```

เปิด [http://127.0.0.1:3000](http://127.0.0.1:3000) หาก Dashboard หลักใช้พอร์ตนี้อยู่ ให้ใช้ `PORT=3100 npm start` แล้วเปิด [http://127.0.0.1:3100](http://127.0.0.1:3100)

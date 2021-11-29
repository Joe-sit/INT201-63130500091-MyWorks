import { CookieUtil } from "./cookie.js";

// เป็น function ไว้ตรวจสอบ cookie ของ user
function userStatus() {
  // หาก user เป็น null จะ set ค่าให้ user เป็น ชื่อของ user
  // หาก user ไม่เป็น null จะดึงข้อมูลที่อยู่ใน cookie user มาแสดงผลผ่านการ alert
  if (CookieUtil.get("user") == null) {
    let user = window.prompt("Enter Your Name: ");
    CookieUtil.set("user", user, new Date("January 1, 2022"));
  } else {
    alert(`Welcome ${CookieUtil.get("user")} !`);
  }
}

userStatus();

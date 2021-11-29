import { products } from "./products.js";

// เป็น function สำหรับ hide ตัวที่ไม่ต้องการ
export function filter(e) {
  // รายการ product ทั้งหมดที่มีบนหน้าเว็บ
  let filterProduct = document.querySelectorAll(".product");
  
  // สิ่งที่พิมพ์เข้ามาผ่าน search box
  let text = e.target.value.toLowerCase();
  console.log(text);
  for (let i in filterProduct) {
    // ดึง name ออกมาจาก products
    let productName = products[i].product_name.toLowerCase().trim();

    // หาก productName มีตัวอักษรตามที่พิมพ์เข้ามา จะ set display = ""
    // หาก productName ไม่มีตัวอักษรตามที่พิมพ์เข้ามา จะ set display = "none" เพื่อซ่อนสินค้าชิ้นนั้น
    if (productName.includes(text)) {
      filterProduct[i].style.display = "";
    } else {
      filterProduct[i].style.display = "none";
    }
  }
}

// ใส่ event เมื่อปล่อยปุ่มออกจากตัวอักษรนั้น ๆ จะเรียกใช่ function filter เพื่อค้นหาแบบ real-time
document.querySelector("#searchBox").addEventListener("keyup", filter);

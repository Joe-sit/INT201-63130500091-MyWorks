import { CookieUtil } from "./cookie.js";

// เป็น funtion สำหรับ update total amount ตรง navbar
function updateCartAmount() {
  // เข้าถึง node ผ่าน id
  let updateCartAmount = document.querySelector("#allProductInCart");
  
  // update ตัวเลขด้วย textContent
  updateCartAmount.textContent = `Your Cart: ${cart.countProductInCart()}`; 
}

export let cart = {
  
  //กำหนดให้ productInCart มีตะกร้าสินค้าที่ว่างเปล่า
  productInCart: [],

  // เป็น Function ไว้สำหรับเพิ่มสินค้าเข้าตะกร้าสินค้า
  addProductToCart: function (event) {
    // เข้าถึง productId
    let getProductId = event.target.parentNode.parentNode.id;

    // ตรวจสอบสินค้าในตะกร้าสินค้าผ่านด้วย ProductId
    let checkProductId = cart.productInCart.filter(
      (checkId) => checkId.cartProductId == getProductId
    );

    // ถ้าเป็น checkProductId == false เงื่อนไขเป็น true แสดงว่าไม่มีสินค้าอยู่ในตะกร้าสินค้า หลังจากนั้นจะ Push สินค้าเข้าตะกร้าสินค้า
    // ถ้าเป็น checkProductId == true แสดงว่ามีสินค้าอยู่ในตะกร้าสินค้า หลังจากนั้นจะทำการเพิ่ม qty 1 ชิ้นให้สินค้าชิ้นนั้น
    if (checkProductId == false) {
      alert(`Add ${getProductId} to cart !`);
      cart.productInCart.push({
        cartProductId: getProductId,
        qty: 1,
      });
    } else {
      alert(`Add ${getProductId} to cart !`);
      cart.productInCart[
        cart.productInCart.findIndex(
          (findId) => findId.cartProductId == getProductId
        )
      ].qty++;
    }

    // เรียกใช้ function updateCartAmount() เพื่อ update จำนวนสินค้าที่ navbar
    updateCartAmount();

    // เก็บ cart เข้า cookie โดยแปลงจาก object -> string
    CookieUtil.set("cart", JSON.stringify(cart.productInCart));
    console.log(cart.productInCart);
  },

  // เป็น Function ไว้สำหรับนับจำนวนสินค้าทั้งหมดในตะกร้าสินค้า
  countProductInCart: function () {
    
    // จะเป็นการ return จำนวน qty ทั้งหมดที่อยู่ใน productInCart
    // { qty } เป็นการเข้าถึง object value ที่อยู่ใน qty 
    return Object.values(cart.productInCart).reduce((temp, { qty }) => temp + qty,0);
  },

  // เป็น Function ไว้ลบสินค้าทั้งหมดในตะกร้าสินค้า
  deleteAllProductInCart: function () {
    alert(`Delete all produt in cart`);

    // กำหนดให้ productInCart เป็นตะกร้าว่างเปล่า
    cart.productInCart = [];
    updateCartAmount();

    // เป็นการ set ค่าให้ cookie cart เป็น ""
    CookieUtil.unset("cart");
    console.log(cart.productInCart);
  },
};

// เข้าถึง node ผ่าน id
let deleteCartAmount = document.querySelector("#deleteProductInCart");

// set event ให้ delete สินค้าทั้งหมดในตะกร้าโดยเรียกใช้ function deleteAllProductInCart ผ่าน Object cart
deleteCartAmount.addEventListener("click", cart.deleteAllProductInCart);

// เป็นการ check ว่า cookie cart เป็น null หรือไม่
// หาก cart เป็น null จะ set ค่าให้ cart เป็น ข้อมูลสินค้าในตะกร้า โดยแปลงจาก object -> string เพื่อเก็บเข้า cookie
// หาก cart ไม่เป็น null จะดึงข้อมูลที่อยู่ใน cookie cart ทั้งหมดมาใส่ใน productInCart โดยแปลงเป็น String ด้วยคำสั่ง JSON.parse 
if (CookieUtil.get("cart") === null) {
  CookieUtil.set("cart", JSON.stringify(cart.productInCart));
} else {
  cart.productInCart = JSON.parse(CookieUtil.get("cart"));
}

// เรียกใช้ function updateCartAmount() เพื่อ update จำนวนสินค้าที่ navbar
updateCartAmount();

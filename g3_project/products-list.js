import { products } from "./products.js";
import { cart } from "./product-cart.js";
import { filter } from "./product-search.js";

// เป็นการสร้าง node ผ่านการเข้าถึง id ของ header ซึ่งเป็นส่วนในการแสดงชื่อหัวข้อ
export const divHeader = document.querySelector("#header");

// กำหนด attribute ใน class ของ #header
divHeader.setAttribute(
  "class",
  `flex w-full text-gray-900 text-4xl text-bold justify-center pt-10`
);

// update header ด้วย textContent
divHeader.textContent = "iPhone รุ่นไหนที่ใช่สำหรับคุณ";

// เป็นการสร้าง node ผ่านการเข้าถึง id ของ products ซึ่งเป็นส่วนในการแสดงสินค้า
const divProducts = document.querySelector("#products");

// กำหนด attribute ใน class ของ #products
divProducts.setAttribute(
  "class",
  `mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`
);

// กำหนด attribute ใน style ของ #products
divProducts.setAttribute("style", "margin-bottom: 5%;");

// แสดงสินค้าทั้งหมดที่มีใน products
showProducts();

// เป็น function ไว้สำหรับการดึงข้อมูลที่อยู่ใน Products ทั้งหมดและนำมาแสดงผล
function showProducts() {
  for (const pd of products) {
    let divEachProduct = document.createElement("div");
    divEachProduct.setAttribute("id", pd.product_id);
    divEachProduct.setAttribute("class", "product");
    divEachProduct.setAttribute(
      "style",
      "background-color: #fff; border-radius: 25px;"
    );

    let divName = document.createElement("div");
    divName.setAttribute("class", "mt-4 flex justify-center text-3xl");
    divName.textContent = pd.product_name;
    divEachProduct.appendChild(divName);

    let pStock = document.createElement("p");
    pStock.setAttribute("class", "mt-1 flex justify-center");
    pStock.textContent = pd.stock > 0 ? `Stock : ${pd.stock}` : `Out Of Stock`;
    divEachProduct.appendChild(pStock);

    let divImage = document.createElement("div");
    divImage.setAttribute(
      "class",
      "w-full min-h-80 transition duration-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer"
    );
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", pd.product_image);
    imgElem.setAttribute(
      "class",
      "w-full h-full object-center object-cover lg:w-full lg:h-full"
    );
    divImage.appendChild(imgElem);
    divEachProduct.appendChild(divImage);

    let divPriceAdd = document.createElement("div");
    divPriceAdd.setAttribute("class", "mt-4 flex justify-between");

    let divPrice = document.createElement("div");
    divPrice.setAttribute("class", "ml-5 mt-2 text-2xl text-gray-900 pr-10");
    divPrice.textContent = `${pd.product_price}฿`;

    let add = document.createElement("button");

    // เช็ค value ของ stock
    // หากมากกว่า 0 จะแสดงผลเป็น Add to Cart และสามารถกดได้
    // หากน้อยกว่าหรือเท่ากับ 0 จะแสดงผลเป็น Out Of Stock และไม่สามารถกดได้
    if (pd.stock > 0) {
      add.setAttribute("type", "submit");
      add.setAttribute(
        "class",
        "mb-3 mr-3 w-full bg-blue-500 transition duration-200 border border-transparent rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      );
      add.textContent = "Add to Cart";

      // ใส่ event เมื่อปล่อยปุ่มออกจากตัวอักษรนั้น ๆ จะเรียกใช่ function addProductToCart เพื่อเป็นการเพิ่มสินค้าเข้าในตะกร้าสินค้า
      add.addEventListener("click", cart.addProductToCart);
    } else {
      add.setAttribute(
        "class",
        "mb-3 mr-3 w-full bg-gray-300 rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white"
      );
      add.textContent = "Out Of Stock";
    }

    // แทรก element ทั้งหมดลงไปใน element ที่ได้กำหนดไว้
    divPriceAdd.appendChild(divPrice);
    divPriceAdd.appendChild(add);
    divEachProduct.appendChild(divPriceAdd);
    divProducts.appendChild(divEachProduct);
  }
}

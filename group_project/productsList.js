import { products } from "./products.js";
console.log(products);
const divProducts = document.querySelector("#products");

for (const pd of products) {
  let divEachProduct = document.createElement("div");
  divEachProduct.setAttribute("id", pd.product_id);
  divEachProduct.setAttribute("class", "group relative");

  let divName = document.createElement("div");
  divName.setAttribute("class", "mt-4 flex justify-center text-3xl");
  divName.textContent = pd.product_name;
  divEachProduct.appendChild(divName);

  let pStock = document.createElement("p");
  pStock.setAttribute("class", "mt-1 flex justify-center");
  pStock.textContent = `Stock : ${pd.stock}`;
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
  divPrice.setAttribute("class", "mt-2 text-2xl text-gray-900 pr-10");
  divPrice.textContent = `${pd.product_price}฿`;

  let divAdd = document.createElement("button");
  divAdd.setAttribute("type", "submit");
  divAdd.setAttribute(
    "class",
    "mt-0 w-full bg-blue-500 transition duration-200 border border-transparent rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  );
  divAdd.textContent = "Add to bag";

  divPriceAdd.appendChild(divPrice);
  divPriceAdd.appendChild(divAdd);
  divEachProduct.appendChild(divPriceAdd);

  divProducts.appendChild(divEachProduct);
}

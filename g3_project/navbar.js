import { CookieUtil } from "./cookie.js";

const navbar = document.querySelector("#navbar");

let topNav = document.createElement("nav");
topNav.setAttribute("class", "p-4");
topNav.setAttribute("style", "background-color: #ffffff");
topNav.innerHTML = `<div class="max-w-6xl mx-auto px-4"> 
                        <div class="flex justify-center">
                            <div id="userStatus">

                            </div>
                        </div>
                    </div>`;
navbar.appendChild(topNav);

let navElem = document.createElement("nav");

navElem.setAttribute("style", "background-color: #ffffff");
navElem.innerHTML = `<div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div id="container" class="flex space-x-4">
                        <!-- logo -->
                        <div>
                            <a href="#" class="
                                        flex
                                        items-center
                                        py-5
                                        px-2
                                        text-gray-700
                                        hover:text-gray-900
                                    ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </a>
                        </div>

                        <!-- primary nav -->
                        <div class="hidden md:flex items-center space-x-5">
                            <a href="#" class="
                                        py-5
                                        px-3
                                        text-gray-700
                                        hover:text-gray-900 hover:underline
                                    ">Mac</a>
                            <a href="#" class="
                                        py-5
                                        px-3
                                        text-gray-700
                                        hover:text-gray-900 hover:underline
                                    ">iPad</a>
                            <a href="#" class="
                                        py-5
                                        px-3
                                        text-gray-700
                                        hover:text-gray-900 hover:underline
                                    ">iPhone</a>
                            <a href="#" class="
                                        py-5
                                        px-3
                                        text-gray-700
                                        hover:text-gray-900 hover:underline
                                    ">Watch</a>
                            <a href="#" class="
                                        py-5
                                        px-3
                                        text-gray-700
                                        hover:text-gray-900 hover:underline
                                    ">Airpods</a>
                        </div>
                    </div>

                    <!-- secondary nav -->
                    <div id="secondNav">

                    </div>

                    <div id="changebg">

                    </div>
                    
                    <!-- mobile button goes here -->
                    <div class="md:hidden flex items-center">
                        <button class="mobile-menu-button">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- mobile menu -->
            <div class="mobile-menu hidden md:hidden">
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>`;
navbar.appendChild(navElem);

let secondNav = document.querySelector("#secondNav");
secondNav.setAttribute("class", "hidden md:flex items-center space-x-1");

let searchBox = document.createElement("input");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("id", "searchBox");
searchBox.setAttribute("placeholder", "Search for names..");
searchBox.setAttribute(
  "class",
  "transition duration-200 border border-gray-300 rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-black"
);
searchBox.style.visibility = "hidden";
secondNav.appendChild(searchBox);

let btnSearch = document.createElement("button");
btnSearch.setAttribute("style", "margin: 0 10px;");
btnSearch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>`;
secondNav.appendChild(btnSearch);

// add event ให้ btnSearch เป็น toggle เมื่อ click หาก "hidden" อยู่จะเปลี่ยนเป็น "visible", หาก "visible" อยู่จะเปลี่ยนเป็น "hidden"
btnSearch.addEventListener("click", () => {
  let searchBox = document.querySelector("#searchBox");
  if (searchBox.style.visibility === "hidden") {
    searchBox.style.visibility = "visible";
  } else {
    searchBox.style.visibility = "hidden";
  }
});

// icon cart
let btnCart = document.createElement("button");
btnCart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>`;
secondNav.appendChild(btnCart);

// show quantity of product in cart
let amount = document.createElement("span");
amount.setAttribute("id", "allProductInCart");
amount.setAttribute(
  "class",
  "justify-items-center text-center px-2 py3 rounded-2xl text-black"
);

secondNav.appendChild(amount);

// button for delete all product in cart
let btnDeleteProduct = document.createElement("button");
btnDeleteProduct.setAttribute("id", "deleteProductInCart");
btnDeleteProduct.setAttribute("type", "submit");
btnDeleteProduct.textContent = "Delete";
secondNav.appendChild(btnDeleteProduct);

// show login user
let userLogin = document.querySelector("#userStatus");
userLogin.textContent = `Welcome ${CookieUtil.get("user")} !`;

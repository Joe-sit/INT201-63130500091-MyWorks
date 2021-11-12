const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

const navbar = document.querySelector("#navbar");
let navElem = document.createElement("nav");
navElem.setAttribute("style", "background-color: #ffffff");
navElem.innerHTML = `<div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
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
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="" class="py-5 px-3">Bag</a>
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

// add event listeners
// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

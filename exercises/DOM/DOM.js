const navBar = document.querySelector('#navbar');
let navElem = document.createElement('nav');
navElem.setAttribute('style','background-color : #ffffff');
navElem.innerHTML = (`
                <ul class="flex">
                        <li class="mr-6">
                            <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
                         </li>
                        <li class="mr-6">
                            <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                        </li>
                        <li class="mr-6">
                            <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                        </li>
                        
                </ul>`);

navBar.appendChild(navElem);
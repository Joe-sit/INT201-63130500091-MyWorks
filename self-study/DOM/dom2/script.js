const divProductsElement = document.querySelector('#products');

const products = {
    p_id:'P001',
    p_name:'Iphone X',
    p_price:32000
};

const divProductElement = document.createElement('div');
divProductElement.setAttribute('id',products.p_id);

const pProductIdElement = document.createElement('p');
pProductIdElement.textContent = products.p_id;
divProductElement.appendChild(pProductIdElement);

const pProductNameElement = document.createElement('p');
pProductNameElement.textContent = products.p_name;
divProductElement.appendChild(pProductNameElement);

const pProductPriceElement = document.createElement('p');
pProductPriceElement.textContent = products.p_price;
divProductElement.appendChild(pProductPriceElement);

divProductsElement.appendChild(divProductElement);

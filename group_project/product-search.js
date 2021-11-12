function searchProductName(e) {
    let text = e.target.value.toLowerCase();
    console.log(text)
    for (const pd of products) {
        let productName = pd.product_name;
        if (!productName.toLowerCase().includes(text)) {
            document.querySelector(pd.product_id).style.display = 'none';
        }
    }
}

export { searchProductName }
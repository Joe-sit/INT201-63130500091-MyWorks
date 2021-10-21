let VAT = 0.07; // global variable (let)

//priceWithVat - global function
function priceWithVat(price) {
    //price is a local scope
    //header is a local scope

    let header = "SIT, KMUTT";
    
    //staff is a nested(inner) fn
    function staff(name) {
        let staffName = name;
        return header + staffName + price + VAT; // อ้างถึงตัวแปร local ได้
    }
    //console.log(staffName);อ้างถึงตัวแปรใน nested fnไม่ได้
    return price * VAT + price;
}

console.log(`VAT ปัจจุบัน: ${VAT}
ทั้งหมด: ${priceWithVat(100)}`);
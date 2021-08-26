function getBMI(weight, height) {
    let BMI = weight / (height * height);
    if (BMI <= 18.5) {
        console.log(BMI, ": ต่ำกว่าเกณฑ์");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(BMI, ": ปกติ");
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log(BMI, ": อ้วน");
    } else if (BMI >= 30) {
        console.log(BMI, ": เกินพิกัด");
    } else {
        console.log("ผิดพลาด");
    }
}
getBMI(79, 1.75);

// let w = 79;
// let h = 1.75;
// let b = w/(h*h);
// console.log(b);

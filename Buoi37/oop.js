class Car {
    constructor(model, color) { // Hàm khởi tạo
        this.type = "Fiat" // property - thuộc tính
        this.model = model
        this.color = color

        Car.countCar++
    }

    static countCar = 0 // thuộc tính tĩnh

    run() { // method: phương thức
        console.log("Xe dang chay...")
    }
     
}

// const car1 = {type:"Fiat", model:"500", color:"white"};
// const car2 = {type:"Fiat", model:"600", color:"black"};

// Đối tượng con mèo của Khánh: có thật (object - đối tượng)
// Loài mèo: trừu tượng (class - lớp)

const myCar1 = new Car("400", "red")
console.log(myCar1)

const myCar2 = new Car("600", "blue")
console.log(myCar2)

myCar1.color = "pink"

console.log(myCar1.color)
console.log(myCar2.color)
myCar1.run()

console.log(myCar1.countCar)
console.log(Car.countCar)

const myCar3 = new Car("600", "blue")
console.log(Car.countCar)
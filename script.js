// const obj = {
//     name: "Zumrud",
//     surname: "Nusretova",
//     age: 19,
//     group: "AzMF201",
    // callnameandage: function(){
    //     console.log(this.name + " - " + this.age);
    // }
    // callnameandage: ()=> {console.log(this.name + " - " + this.age)}
// }
// obj.callnameandage()

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// const obj1 = {
//     name: "name1 ",
//     surname: "surname1 ",
//     age: 1,
//     callname(a, b, c) {
//         console.log("hello " + this.name + this.surname + a + " " + b + " " + c + " ");
//     }
// }
// obj1.callname(1, 2, 3)

// const obj2 = {
//     name: " name2 ",
//     surname: "surname2 ",
//     age: 2,
// }

// obj1.callname.call(obj2, 4, 5, 6)

// const obj3 = {
//     name: " name3 ",
//     surname: "surname3 ",
//     age: 3,
// }

// obj1.callname.call(obj3, 7, 8, 9)
// obj1.callname.apply(obj3, [7, 8, 9])


// const obj2bind= obj1.callname.bind(obj3)

// obj2bind(11,22,33)


// !------------------------------------------


// const arr = [1,2,3,4,5]

// Array.prototype.zumrud="Salam"
// console.log(arr.zumrud);




// class Animal {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//         this.getInfo = function () {
//             return this.name + " " + this.year;
//         };
//     }
// }


// class Dog extends Animal{
//     constructor(name,year,color){
//         super(name,year)
//         this.color=color
//     }
//     getInfo(){
//         return this.name + " " + this.year + " " + this.color
//     }
// }
// const cat = new Animal("Garfield",4)

// const dog=new Animal("Alfa",2,"black")

// console.log(cat.getInfo());
// console.log(dog.getInfo());


// ? task 1

// class CustomMatch{
//     constructor(number){
//         this.value=number
//     }
//     plus(num){
//         this.value+=num
//         return this;
//     }
//     minus(num){
//         this.value-=num
//         return this;          
//     }
//     multiply(num){
//         this.value*=num
//         return this;         
//     }
//     divide(num){
//         this.value/=num
//         return this;          
//     }    
// }

// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)

// console.log(result);



// ? task 2

// class Endirim{
//     constructor(kitab,yazici,il,qiymet){
//         this.kitab=kitab
//         this.yazici=yazici
//         this.il=il
//         this.qiymet=qiymet

//     }
//     endirim(price){
//         this.price=this.qiymet-(this.qiymet*price)/100;
//         return this;
//     }
    
// }

// const book = new Endirim("Tutunamayanloar","Oguz Atay","1972",50)

// console.log(book.endirim(20));


// ? task 3

const arr=[1,2,3,4,5]

function hesab(arr,cb) {
    const narr =[]
    for (let i = 0; i < arr.length; i++) {
        narr.push(cb(arr[i]))
    }
    return narr
}
const temp = hesab(arr,(x)=>x*2)
console.log(temp);

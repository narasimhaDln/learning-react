// let age:number=25;
// let greeting:string="Hello,World!"
// let isLoggedIn:boolean=true;
// let colors:string[]=["red","green","blue"]
// function displayDetails():void{
//     console.log(`Age:${age}`)
//     console.log(`Greeting:${greeting}`)
//     console.log(`Logged In:${isLoggedIn}`)
//     console.log(`Colors:${colors.join(" ,")}`)
// }
// displayDetails()

//question 2

// type Identifier=number|string

// function getIdentifierInfo(id:Identifier):void{
//    if(typeof id==="string"){
//      console.log("this is our string",id)
//    }
//    else if(typeof id==="number"){
//         console.log("this is number",id)
//    }
   
// }
// getIdentifierInfo("abc123")
// getIdentifierInfo(101)

// 3rd question

// enum Weekday{
//     Monday,
//    Tuesday,
//    Wednesday,
//    Thursday,
//    Friday,
//    Saturday,
//    Sunday
// }
// function isWeekEnd(day:Weekday):boolean{
//    return day===Weekday.Saturday||day===Weekday.Sunday;
// }
// console.log(isWeekEnd(Weekday.Saturday))
// console.log(isWeekEnd(Weekday.Sunday))

// 4th question

// function getThirdElement(arr: any[]) {
//     return arr[2];
//   }
  
//   const numbers = [1, 2, 3, 4];
//   const words = ["apple", "banana", "cherry", "date"];
  
//   console.log(getThirdElement(numbers)); 
//   console.log(getThirdElement(words))   

// 5th question

// class Vehicle{
//     make:string
//     model:string
//     year:number
//     constructor(make:string,model:string,year:number ){
//            this.make=make;
//            this.model=model;
//            this.year=year;

//     }
//     getDetails():string{
//         return `Make:${this.make},Model:${this.model},Year:${this.year}`
//     }
// }
// //using subclass;
// class Car extends Vehicle{
//    fuelType:string
//    constructor(make:string,model:string,year:number,fuleType:string){
//     super(make,model,year)
//     this.fuelType=fuelType
//    }
//    getDetails():string{
//     return `Make:${this.make},Model:${this.model},Year:${this.year},Fuel Type:${this.fuelType}`
//    }
// }
//  const myCar = new Car("Toyota", "Corolla", 2021, "Petrol")
//  console.log(myCar.getDetails())



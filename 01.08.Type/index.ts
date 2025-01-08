// 배열 타입 방법 1 : type[]

  // let nums: number[] = [1,2,3,4,5]
  // let strs: string[] = ["a","b","c"]
  // let bools: boolean[] = [false, false, true]

  // nums.push(6)
  // nums.push(7)

  // bools.push(1)


// 배열 타입 방법 2 : Array<>

  // let nums: Array<number> = [1,2,3,4,5]
  // let strs: Array<string> = ["a","b","c"]

  // nums.push(6)
  // nums.push(7)




// 기본 객체 타입

  // 타입 명시
  // let monitor: { brand: string; price: number }

  // monitor.brand = "LG"
  // monitor.price = 120

  // monitor = {
  //   brand: "LG",
  //   price: 120
  // }

  // 타입 추론

  // let monitor = {
  //   brand: "LG",
  //   price: 120
  // }

  // monitor.price = "123";
  // monitor.displaySize = "12inch";

  // Optional 프로퍼티

  // let user: { id: string; name: string; age?: number };

  // user = {
  //   id: "1234",
  //   name: "John"
  // }

  //Readonly 프로퍼티

  // let user: { readonly id: string; name: string; age?: number };

  // user = {
  //   id: "1234",
  //   name: "John"
  // }

  // user.name = "John Smith";
  // user.id = "5678"

  // let apiConfig: {
  //   readonly clientKey: string;
  //   readonly url: string;
  // }

  // 타입 별칭( Type Alias )

  // type UserType = {
  //   id: string;
  //   name: string;
  //   age: number;
  // }

  // let user1: UserType = {
  //   id: "1",
  //   name: "John",
  //   age: 20
  // }

  // let user2: UserType = {
  //   id: "2",
  //   name: "Sarah",
  //   age: 30
  // }

  // let users: UserType[];

  // users.push(user1)
  // users.push(user2)

  // users.push({})
  // users.push({
  //   id: "1",
  // })

  // Nested 객체 ( 중첩 객체 )

  // type payload = {
  //   timeStamp: number
  //   type: string
  //   user: {
  //     readonly id: string
  //     isActive?: boolean
  //     email: string[]
  //   }
  // }

  // const Payload: payload = {
  //   timeStamp: 12903718,
  //   type: 'event',
  //   user: {
  //     id: "123",
  //     isActive: true,
  //     email: [ "testemail1@gmail.com", "testeamil2@gmail.com" ]
  //   }
  // }


  // 함수 타입

  // Parameter
  // function add(x:number, y:number): number {
  //   return x + y;
  // }

  // const result = add(10, 5);

  // Parameter2
  // function addToCart(name: string, price: number, quantity: number = 1) {
  //   return `${name}, ${price}, ${quantity}`;
  // }

  // addToCart("orange", 100, 5)
  // addToCart("pineapple", 150)
  // addToCart("grape", 110, 10, false)
  // addToCart("apple", 10)

  // optional parameter
  // function addToCart(name: string, price: number, quantity?: number) {
  //     return `${name}, ${price}, ${quantity || 1}`;
  //   }
    
  //   addToCart("orange", 150)
  //   addToCart("grape", 100, 2)

  // Contextual Typing
  // const numbers: number[] = [1,2,3,4,5]
  // const letters: string[] = ["a","b","c","d"]

  // numbers.map(element=>{
  //   element.
  // })

  // letters.forEach(letter=>{
  //   letter.
  // })

  // Return type annotation
  // function addTwoValues(x: number, y:number): string {
  //   return `${x}${y}`;
  // }

  // function addTwoNumbers(x: number, y: number): number {
  //   return x + y;
  // }

  // function isTen(x: number, y: number): boolean {
  //   return x + y === 10;
  // }

  // void, never
  // function logMessage(message:string): void {
  //   console.log(message);
  // }

  // function throwError(message: string): never {
  //   throw new Error(message);
  // }




  
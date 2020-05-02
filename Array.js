
// let arr = ['a', 'b','c','d'];
// arr.push('e','f');
// arr.pop();
// arr.shift()
// arr.unshift('z');
// console.log(arr);


// let fruits = ['Apple', 'Pear', 'Orange'];
// let shoppingCart = fruits;
// shoppingCart.push('Banan');
// console.log(shoppingCart);
// console.log(fruits.length);


// let music = ['Jazz', 'Blues'];
// music.push('Rock and Roll');
// console.log(music);
// music[Math.floor((music.length-1)/2)] = 'Classic';
// console.log(music);
// music.shift();
// console.log(music);
// music.unshift('Rap', 'Reggae');
// console.log(music);


// let arr = ['a','b'];
// arr.push(function() {
//     console.log(this);   
// });
// arr[2] ();



// function sumInput() {

//  let numbers = [];
//  let sum = 0;

//  while(true) {
//      let value = +prompt('Enter a number!', 0);

//      if (value === '' || value === null || !Number.isFinite(value)) {
//      return sum;
//      }
//      sum += value;

//   } 
//  }   

// console.log(sumInput());




// let arr = ['I', 'go', 'home'];
// delete arr[1];
// console,2);
// console.log(.log(arr);

// arr.splice(1arr);

// let arr = ['I', 'learn', 'JavaScript', 'just', 'now'];
// arr.splice(0, 3, `Let's`,'dance');
// console.log(arr);

// let removed = arr.splice(0,2);
// console.log(removed);

// arr.splice(2,0,'a', 'hard', 'language');
// console.log(arr);

// let arr = [1,2,5];
// arr.splice(-1, 0, 3, 4);    
// console.log(arr);

// let arr = [" t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// console.log(arr.slice()); // copy

// console.log(arr.concat(' ', 'is', 'done'));

// arr.forEach((console.log));


// let arr = [8, 3, false];
// console.log( arr.indexOf(8) ); //0
// console.log(    arr.indexOf(false)); // 2
// console.log( arr.indexOf(null) ); // -1



// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Anna"}
//   ];
  
//   let user = users.find(item => item.id === 2); //  find(item => item.id === 2)
  
//   console.log(user.name); 


// const length = ['Ani', 'Anna', 'Vlad'].map(item => item.length);
// console.log(length); //3 ,4, 4


// let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
// });


// function compareNumeric(a, b) {
// if (a > b) return 1;
// if (a === b) return 0;
// if (a < b) return -1;
// }
// let arr = [12, 5, 2, 5];

// arr.sort(compareNumeric);

// console.log(arr);


// let arr = [12, 5, 2, 5];
// arr.sort(function(a, b) {return a - b; });
// console.log(arr);


// arr.sort( (a,b) => a - b);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log( arr ); // 5,4,3,2,1


// const names = 'John, Pete, Anna';
// const arr = names.split(', ');
// console.log(arr);

// for(let name of arr) {
//     console.log(`mail received: ${name}.`);
    
// }

// let arr = 'John, Pete, Anna'.split(', ', 2);
// console.log(arr);

// let str = 'TEST';
// console.log(str.split(''));

// let arr = ['John', 'Pete', 'Anna'];
// let str = arr.join(', ');
// console.log(str);



// let arr = "background-color".   x('-');
// console.log(arr);



// const arr = 'background-color';
// const newArr = arr.split('-');
// console.log(newArr); // ["background", "color"]
// console.log(newArr.splice(1, 0, item.toUppercase));

// function camelize(str) {
//     return str
//       .split('-') //array
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)  //??????????????/
//       )
//       .join(''); //string
//   }

// console.log(camelize('background-color'));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));





// function filterRange (arr, a, b){
//     return arr.filter( item => (a <= item && item <= b));
// }
// const arr = [10, 4, 6, 9, 7];
// const filtered = filterRange (arr, 1, 8); // [4, 6, 7]
// console.log(filtered);









// const arr = [5, 2, 1, -10, 8]; ////// (1)
// arr.sort((a, b) => (a - b));
// arr.reverse();
// console.log(arr.reverse());

// arr.sort((a, b) => (b - a));   ////// (2)
// console.log(arr);


// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   const arr = ["HTML", "JavaScript", "CSS"];
  
//   const sorted = copySorted(arr);
  
//   console.log( sorted );
//   console.log( arr );




// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };

// const users = [ vasya, petya, masha ];

// const names = users.map(item => item.name);

// console.log( names );





// const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// const petya = { name: "Петя", surname: "Иванов", id: 2 };
// const masha = { name: "Маша", surname: "Петрова", id: 3 };

// const users = [ vasya, petya, masha ];

// const usersMapped = users.map( user => ({fullName: `${user.name} ${user.surname}`, id: user.id
// }));

// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);
 






// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];
// sortByAge(arr);

// console.log(arr);


// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
  
//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };
  
//   let arr = [ vasya, petya, masha ];
  
//   alert( getAverageAge(arr) ); // 28




// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];
// const newArr = [...arr, ...arr1];
// console.log(newArr);




// 5.10 Деструктурирующее присваивание----------------------------------------------

// const [name1, name2, ...rest] = ['Ani', 'Anna', 'Vlad', 'Eva'];
// console.log(name1);
// console.log(name2);
// console.log(rest[0]);


// const user = {
//   name: 'John',
//   age: 20
// };

// for (let[key, value] of Object.entries(user) ) {
//   console.log(`${key}: ${value}`);
  
// }



// const options = {
//   title: 'Menu'
// };
// const {width: w = 100, hight: h = 200, title} = options;

// console.log(h);
// console.log(title);




// let user = {
//     name: "John",
//     years: 30
//   };

//  let {name, years: age, isAdmin = false} = user;

//  console.log(name); // John
//  console.log(age); //30
//  console.log(isAdmin); //false




// const salaries = { //?????????????????????
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function topSalary(salaries) {
  
//     let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
//   }
//   console.log(topSalary(salaries) ); // Pete
  
 
 
 

// Object.keys, values, entries-------------------------


// const user = {
//   name: 'John',
//   age: 30  
// };
// for (const value of Object.values(user)) {
//   console.log(value);
// } 

// for (const entries of Object.entries(user)) {
//   console.log(entries);
  
// } 

// for (const keys of Object.keys(user)) {
//   console.log(keys);  
// }


// const prices = {
//   banana: 1,
//   orange: 3,
//   meat: 4,
// };

// const doublePrices = Object.fromEntries (
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices.orange);  //6



// const salaries = {
//   'John': 100,
//   'Mary': 200,
//   'Pete': 600,
// };

// function sumSalaries(salaries) { /// (1)
//   let sum = 0;
//   for (let value of Object.values(salaries)) {
//       sum += value;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));


// function sumSalaries (salaries) {            /// (2)
//   return Object.values(salaries).reduce((a,b) => a + b, 0);
// }
// console.log(sumSalaries(salaries));



let user = {
  name: 'John',
  age: 30,
  gender: 'male'
};
  function count(user){ /// obj
    return Object.keys(user).length  /// obj
  };
  count(user);
  console.log(count(user));
  

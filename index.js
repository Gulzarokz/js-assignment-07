// Chapter No 15 Array
// for multiple value we would have to create multiple variable/conatiners
// const fruit0 = "mangoe"
// const fruit1 = "bannan"
// const fruit2 = "Orange"

// to avoid the above problem we introduced the concept of array , array is container in which we store 
// multiple values

// const fruit = [];
// console.log(fruit);

// const fruit = ["🍌", "🍊", "🥭", "🍎", "🍉", "🍑"];
// console.log(fruit);

// const animals = ["🐮", "🐶", "🐫", "🐔", "🦅", "🦜", "🐄"];
// console.log(animals);


// const fruit = ["Banana", "Orange", "Mango", "Apple"];
// console.log(fruit);


// const animals = ["cow", "dog", "camel", "hen", "Eagle"];
// console.log(animals);

// Another Example of Array to understand of the concept of index and indices;

// const hotelRooms = ["Bilal", "Ali", "choudhry shaib", "Aslam", "Waqas"]
// // console.log(hotelRooms[1]);
// // console.log(hotelRooms[2]);
// console.log(hotelRooms[4]);

// MaxData in array 

// Homogeneous> same data
// Hetrogeous > different data in array

// const maxDate = [1, "hello", true, 3.5, "BYE"];
// console.log(maxDate);


// chapter NO 16 Arrays: Adding and removing elements
 
// const books = ["cs", "urdu", "English"];
// // console.log(books);
// books.push("DIT")
// console.log(books);

// add elements at spcific index of positions

// const books = ["cs", "urdu", "English"];
// books[1]= "Calculus";
// console.log(books);

// adding elements to the empty array

// const array = [];
// array[0] = "gul";
// array[1] = "Ali";
// array[2] = "Qais";
// array[3] = "aslam";
// array[4] = "zia";
// console.log(array);

// pop methods

// const books = ["cs", "urdu", "English"];
// books.pop();
// // console.log(books);

// const poppedBooks = books.pop();
// console.log(books);
// console.log({poppedBooks});

// chapter No 17

// shift

// const animals = ["🐮", "🐶", "🐫", "🐔", "🦅", "🦜", "🐄"];
// animals.shift();
// console.log(animals);

// let shiftedfElement = animals.shift();
// console.log(shiftedfElement);

// unshift
// const animals = ["🐮",  "🐫", "🐔", "🦅", "🦜", "🐄"];
// animals.unshift("🐶");
// console.log(animals);

// splice methods

// // const animals = ["🐮",  "🐫", "🐄"];
// // animals.splice(2, 0, "🐔", "🦅", "🦜");
// // console.log(animals);

// const animals = ["🐮",  "🐫", "🐄"];
// animals.splice(2, 1, "🐔", "🦅", "🦜");
// // let popped = animals.pop();
// console.log(popped);


// const animals = ["🐮",  "🐫", "🐄"];
// animals.splice(2, 1, "🐔", "🦅");
// console.log(animals);

// const months = ["jan", "march", "april","june"];
// months.splice(1, 0, "feb");
// console.log(months);

// const months = ["jan", "march", "april","june"];
// months.splice(1, 0, "feb");
// console.log(4, 1, "may");
// 1
// console.log(months);

// let pet = ["cat", "dog", "fly", "bug", "ox"];
// const spliced = pet.splice(2, 1, "gul");
// const popped = pet.pop();
// console.log(spliced);
// console.log(popped);

// splice

// let pet = ["cat", "dog", "fly", "bug", "ox", "hen", "cock"];
// const slicedArray = pet.slice(2, 6);

// console.log(pet);

// console.log(slicedArray );





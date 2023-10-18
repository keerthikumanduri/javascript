//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// } )

// console.log(values); // when we try to print the values we get an error saying undefined. for each doesn't return anything.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums); // here by using the .filter we are able to print the values in the array which are greater than 4. we need to provide a call back function in the filter method and also provide a condition.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => { // here in this case we have put the condition inside the { } , now we need to explicitly state a return statement so that the values can be printed.
    return num > 4})
console.log(newNums);

// if we want to use the foreach method we can do the following

const newNumArr = []

myNums.forEach((nums)=>{
    if(nums>4)
    newNumArr.push(nums)
})

console.log(newNumArr); // this gives the same output as .filter method.

//-------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // lets assume a user is applying a filter on  a webpage and he wants all the books on history

  let userBooks = books.filter((bk) => bk.genre === "History") // here we accessed the books and genre and history and these values are stored inside the variable called userBooks.
//   console.log(userBooks);

  // now user want to see the books published after 2000
 
  userBooks = books.filter((bk)=> bk.publish>=2000)
  console.log(userBooks);






/* key takeaways
1. .filter( () => condition ) - this returns values unlike foreach.

*/
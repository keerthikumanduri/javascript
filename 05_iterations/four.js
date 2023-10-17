const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
} // in the file three.js we have seen that we cannot iterate an object using for of loop. Now lets try using for in loop.

for (const key in myObject) {
    // console.log(key);  this prints all the keys. if we have keys we can easily find object like follows.
    console.log(`${key} shortcut is ${myObject[key]}`);
}

// all good but does for in work for arrays?

const programming = ['js', 'py', 'rb', 'c++', 'swift']
for (const key in programming) {
   console.log(programming[key]);
}
// arrays also have keys by default they start for 0


// also know that maps are not iterable using for in. watch the higher order video. 
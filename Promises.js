// Promises
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json()).then(data => console.log(data));

/*
Fetch does not wait for the function to complete before moving on.
Promise States:
Pending: Promise{...}.
Rejected: Error Fetching.
Fulfilled: Successful.

Asynchronus Language: Lines execute one by one.
*/

// console.log("Jonas");

// Asynchronus Functions
async function getTodo(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
    console.log("Executed after fetching api ");
    return data;
}

const todo = getTodo();
console.log(todo)
